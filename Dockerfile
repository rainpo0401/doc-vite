# 设置基础镜像
FROM nginx:stable-alpine

# 将Vite打包生成的文件复制到Nginx的默认站点目录
COPY ./.vitepress/dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80