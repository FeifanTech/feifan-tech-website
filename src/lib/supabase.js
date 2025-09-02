import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database table name
export const TABLES = {
  CONTACT_SUBMISSIONS: 'contact_submissions'
}

// Contact form submission interface (TypeScript-style for documentation)
export const ContactSubmission = {
  name: 'string',
  email: 'string', 
  company: 'string (optional)',
  phone: 'string (optional)',
  service: 'string (optional)',
  message: 'string',
  ip_address: 'string (optional)',
  user_agent: 'string (optional)'
}