const path = require('path')
import styleImport from 'vite-plugin-style-import'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default () => {
    const config = {
        server: {
            port: 7776,
            host: '0.0.0.0',
            hot: true,
            disableHostCheck: true,
            proxy: {
                '/api': {
                    target: 'http://localhost:4000',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': '/api'
                    }
                }
            }
        },
        build: {
            target: 'es2015'
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true
                }
            }
        },
        plugins: [
            legacy({
                targets: ['defaults', 'not IE 11']
            }),
            vue(),
            styleImport({
                libs: [
                    {
                        libraryName: 'ant-design-vue',
                        esModule: true,
                        resolveStyle: name => {
                            return `ant-design-vue/es/${name}/style/index`
                        }
                    },
                    {
                        libraryName: 'antd',
                        esModule: true,
                        resolveStyle: name => {
                            return `antd/es/${name}/style/index`
                        }
                    },
                    {
                        libraryName: 'vant',
                        esModule: true,
                        resolveStyle: name => {
                            return `vant/es/${name}/style/index`
                        }
                    },
                    {
                        libraryName: 'element-plus',
                        resolveStyle: name => {
                            return `element-plus/lib/theme-chalk/${name}.css`
                        },
                        resolveComponent: name => {
                            return `element-plus/lib/${name}`
                        }
                    }
                ]
            }),
            WindiCSS({
                safelist: 'prose prose-sm m-auto text-left'
            }),
            VitePWA({
                mode: 'development',
                base: '/',
                manifest: {
                    name: 'M.M.F小屋',
                    themeColor: '#54d9e0',
                    msTileColor: '#000000',
                    appleMobileWebAppCapable: 'yes',
                    appleMobileWebAppStatusBarStyle: 'black',
                    manifestPath: '/static/manifest.json',
                    manifestOptions: {
                        start_url: '/'
                    },
                    iconPaths: {
                        favicon32: '/static/img/icons/favicon-32x32.png',
                        favicon16: '/static/img/icons/favicon-16x16.png',
                        appleTouchIcon: '/static/img/icons/apple-touch-icon-152x152.png',
                        maskIcon: '/static/img/icons/safari-pinned-tab.svg',
                        msTileImage: '/static/img/icons/msapplication-icon-144x144.png'
                    }
                },
                workbox: {
                    // workbox options for generateSW
                }
            })
        ],
        resolve: {
            alias: {
                '@': path.join(__dirname, './src')
            }
        }
    }
    return config
}
