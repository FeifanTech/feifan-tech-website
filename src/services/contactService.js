import { supabase, TABLES } from '../lib/supabase.js'

/**
 * Submit contact form data to Supabase
 * @param {Object} formData - Contact form data
 * @param {string} formData.name - User's name
 * @param {string} formData.email - User's email
 * @param {string} formData.company - User's company (optional)
 * @param {string} formData.phone - User's phone (optional)
 * @param {string} formData.service - Selected service (optional)
 * @param {string} formData.message - User's message
 * @returns {Promise<Object>} Submission result
 */
export const submitContactForm = async (formData) => {
  try {
    // Debug: Log Supabase connection
    console.log('Supabase URL configured:', !!import.meta.env.VITE_SUPABASE_URL)
    console.log('Supabase Key configured:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Name, email, and message are required fields')
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address')
    }

    // Prepare submission data
    const submissionData = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      company: formData.company?.trim() || null,
      phone: formData.phone?.trim() || null,
      service: formData.service?.trim() || null,
      message: formData.message.trim(),
      ip_address: await getUserIP(),
      user_agent: navigator.userAgent
    }

    // Submit to Supabase
    const { data, error } = await supabase
      .from(TABLES.CONTACT_SUBMISSIONS)
      .insert([submissionData])
      .select()

    if (error) {
      console.error('Supabase submission error:', error)
      
      // Handle specific error cases
      if (error.code === '42501') {
        throw new Error('Database permission error. Please contact support.')
      } else if (error.code === 'PGRST116') {
        throw new Error('Database connection error. Please try again later.')
      } else {
        throw new Error(`Submission failed: ${error.message}`)
      }
    }

    return {
      success: true,
      data: data[0],
      message: 'Contact form submitted successfully!'
    }

  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      error: error.message,
      message: error.message || 'An unexpected error occurred. Please try again.'
    }
  }
}

/**
 * Get user's IP address (optional, for analytics)
 * @returns {Promise<string|null>} User's IP address
 */
const getUserIP = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return data.ip
  } catch (error) {
    console.warn('Could not fetch IP address:', error)
    return null
  }
}

/**
 * Test Supabase connection
 * @returns {Promise<Object>} Connection test result
 */
export const testSupabaseConnection = async () => {
  try {
    // Simple query to test connection
    const { data, error } = await supabase
      .from(TABLES.CONTACT_SUBMISSIONS)
      .select('count')
      .limit(1)

    if (error) {
      return {
        success: false,
        error: error.message,
        message: 'Supabase connection failed'
      }
    }

    return {
      success: true,
      message: 'Supabase connection successful'
    }

  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: 'Connection test failed'
    }
  }
}
 * @param {Object} options - Query options
 * @param {number} options.limit - Number of submissions to fetch
 * @param {number} options.offset - Offset for pagination
 * @param {string} options.status - Filter by status
 * @returns {Promise<Object>} Query result
 */
export const getContactSubmissions = async (options = {}) => {
  try {
    const { limit = 50, offset = 0, status } = options

    let query = supabase
      .from(TABLES.CONTACT_SUBMISSIONS)
      .select('*')
      .order('submitted_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (status) {
      query = query.eq('status', status)
    }

    const { data, error, count } = await query

    if (error) {
      throw error
    }

    return {
      success: true,
      data,
      count,
      message: 'Submissions retrieved successfully'
    }

  } catch (error) {
    console.error('Error fetching submissions:', error)
    return {
      success: false,
      error: error.message,
      message: 'Failed to fetch submissions'
    }
  }
}