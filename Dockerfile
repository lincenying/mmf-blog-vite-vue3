

# 使用官方的 Node.js 镜像作为基础镜像
FROM node:22-alpine AS build-stage

WORKDIR /app

# 安装 pnpm
RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pnpm

# 复制项目文件
COPY . .

# 使用pnpm安装依赖
RUN pnpm install --frozen-lockfile --ignore-scripts

# 编译项目
RUN pnpm build

# 用于生产环境的镜像
FROM nginx:alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d/vue3.conf /etc/nginx/conf.d/vue3.conf
COPY ./nginx/mime.types /etc/nginx/mime.types

EXPOSE 80

# 第一次执行时, 如果node镜像拉不下来, 可以执行以下命令:
# docker pull swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/nginx:1.28.0-alpine3.21
# docker tag swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/nginx:1.28.0-alpine3.21 nginx:alpine

# docker pull swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/node:22-alpine3.22
# docker tag swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/node:22-alpine3.22 node:22-alpine
# 构建镜像
# docker build -t lincenying/images-mmf-blog-vite-vue3:1.25.1029 -f ./Dockerfile .
# 运行镜像
# docker run -d -p 7200:7200 --add-host=host.docker.internal:host-gateway --name container-mmf-blog-vite-vue3 lincenying/images-mmf-blog-vite-vue3:1.25.1029
# 进入镜像
# docker exec -it container-mmf-blog-vite-vue3 /bin/sh
# 停止容器
# docker stop container-mmf-blog-vite-vue3
# 删除容器
# docker rm container-mmf-blog-vite-vue3
# 删除镜像
# docker rmi images-mmf-blog-vite-vue3
