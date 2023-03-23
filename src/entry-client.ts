import { LoadingPlugin } from 'vue-loading-overlay'
import VueMarkdownEditor from '@kangc/v-md-editor'
import vuePressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'

import { createApp } from './main'

import 'uno.css'
import 'vue-loading-overlay/dist/css/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import './assets/css/hljs/googlecode.css'
import './assets/css/github-markdown.css'
import './assets/scss/style.scss'

VueMarkdownEditor.use(vuePressTheme)

const { app, router } = createApp()

router.isReady().then(() => {
    app.use(LoadingPlugin, {
        'can-cancel': false,
        loader: 'dots',
        color: '#54d9e0'
    })
        .use(VueMarkdownEditor)
        .mount('#app')
    console.log('client router ready')
})
