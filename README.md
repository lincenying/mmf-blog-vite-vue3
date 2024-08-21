# mmf-blog vuejs 3.0 v3 [中文说明](https://github.com/lincenying/mmf-blog-vite-vue3/blob/main/doc/README_CN.md)

demo: [http://www.mmxiaowu.com](http://www.mmxiaowu.com)

The main technical stack: vue 3, vue-router 4, pinia, vitejs 5, unocss, eslint, pwa, ssr

---

#### Other versions

react(spa): [https://github.com/lincenying/mmf-blog-react-v2](https://github.com/lincenying/mmf-blog-react-v2)

react(hooks spa): [https://github.com/lincenying/mmf-blog-vite-react](https://github.com/lincenying/mmf-blog-vite-react)

vue2(spa): [https://github.com/lincenying/mmf-blog-vue2](https://github.com/lincenying/mmf-blog-vue2)

vue2(pwa ssr): [https://github.com/lincenying/mmf-blog-vue2-pwa-ssr](https://github.com/lincenying/mmf-blog-vue2-pwa-ssr)

vue3(spa): [https://github.com/lincenying/mmf-blog-vite-vue3](https://github.com/lincenying/mmf-blog-vite-vue3)

vue3(pwa ssr): [https://github.com/lincenying/mmf-blog-vite-vue3-ssr](https://github.com/lincenying/mmf-blog-vite-vue3-ssr)

nuxt3: [https://github.com/lincenying/mmf-blog-vite-nuxt](https://github.com/lincenying/mmf-blog-vite-nuxt)

---

First installation `api server`:

express-ts: https://github.com/lincenying/mmf-blog-api-ts

## Project setup

```bash
$ pnpm install
```

### Compiles and hot-reloads for development

```bash
$ pnpm serve
```

### Compiles and minifies for production

```bash
$ pnpm build
```

### Preview for production

```bash
$ pnpm start
```

### Lints and fixes files

```bash
$ pnpm lint
```

## docker-compose

使用`docker-compose`, 将会从`docker hub`拉取`api-server`镜像, 并且启动容器

```yaml
api:
  container_name: api-server
  image: lincenying/api-server:1.0.1
```

修改`docker-compose.yml`中的`mongo.volumes`配置, 将宿主机数据库路径映射到容器中

```yaml
volumes:
  - /Users/lincenying/web/mongodb/data:/data/db
```

```bash
# 生成镜像及启动容器
# 后端服务器一起启动
docker-compose build
docker-compose up -d

# 后端服务器在宿主机或者其他容器上
docker-compose build -f docker-compose.api.yml
docker-compose up -d -f docker-compose.api.yml
```

Home Site
http://localhost:7779

Login
http://localhost:7779/backend/login

# LICENSE

MIT
