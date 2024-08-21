# 使用官方的 Node.js 镜像作为基础镜像
FROM node:18-alpine AS build-stage

WORKDIR /app

# 安装 pnpm
RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pnpm

# 复制项目文件
COPY . .

# 使用pnpm安装依赖
RUN pnpm install --frozen-lockfile

# 编译项目
RUN pnpm build

# 用于生产环境的镜像
FROM nginx:alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d/vue3-api.conf /etc/nginx/conf.d/vue3-api.conf
COPY ./nginx/mime.types /etc/nginx/mime.types

EXPOSE 80
