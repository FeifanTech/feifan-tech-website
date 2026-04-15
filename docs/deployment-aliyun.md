# 阿里云 ECS 自动部署说明（GitHub Actions）

本项目已提供自动部署工作流：`/home/runner/work/feifan-tech-website/feifan-tech-website/.github/workflows/deploy-aliyun.yml`。

触发方式：
- PR 合并到 `main` 后会产生一次 `push main`，自动触发构建与部署
- 也支持手动触发（`workflow_dispatch`）

---

## 1. GitHub 仓库 Secrets 配置

进入仓库：
`Settings -> Secrets and variables -> Actions -> New repository secret`

新增以下 Secrets：

- `ALIYUN_HOST`：阿里云主机公网 IP 或域名
- `ALIYUN_SSH_PORT`：SSH 端口（默认 22，可选）
- `ALIYUN_SSH_USER`：部署用户（如 `root` 或专用部署用户）
- `ALIYUN_SSH_PRIVATE_KEY`：私钥内容（建议使用专用 deploy key）
- `ALIYUN_DEPLOY_PATH`：服务器部署目录（如 `/var/www/feifan-tech-website`）

---

## 2. 阿里云主机手动准备

### 2.1 安装基础软件

```bash
sudo apt update
sudo apt install -y nginx rsync
```

### 2.2 创建部署目录并赋权（示例）

```bash
sudo mkdir -p /var/www/feifan-tech-website
sudo chown -R <你的部署用户>:<你的部署用户组> /var/www/feifan-tech-website
```

### 2.3 配置 SSH 公钥登录

把与 `ALIYUN_SSH_PRIVATE_KEY` 配套的公钥加入部署用户的 `~/.ssh/authorized_keys`。

---

## 3. Nginx 配置示例（静态站点）

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/feifan-tech-website;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

生效配置：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 4. 部署验证

1. 合并一个 PR 到 `main`
2. 在 GitHub Actions 中查看 `Deploy to Aliyun ECS` 工作流
3. 成功后访问服务器域名/公网 IP 验证页面更新

---

## 5. 常见问题排查

- `Missing required secret`：检查 Secrets 名称是否与工作流完全一致
- `Permission denied (publickey)`：检查私钥、公钥和部署用户是否匹配
- `rsync: command not found`：在 ECS 安装 `rsync`
- `Action 成功但页面未更新`：确认 Nginx `root` 与 `ALIYUN_DEPLOY_PATH` 一致
