import { createHead } from '@unhead/vue/client'
import { LoadingPlugin } from 'vue-loading-overlay'

import reloadPrompt from '@/components/reload-prompt.vue'
import { createApp } from './main'
import VueMarkdownEditor from './plugin/v-md-editor'

import 'uno.css'
import './assets/css/github-markdown.css'
import './assets/css/hljs/googlecode.css'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import './assets/css/vuepress.css'
import 'vue-loading-overlay/dist/css/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import './assets/scss/style.scss'

const { app, router, store } = createApp()
const head = createHead()

router.isReady().then(() => {
    app.component('ReloadPrompt', reloadPrompt)
    app.use(head)
    app.use(LoadingPlugin, {
        canCancel: false,
        loader: 'dots',
        color: '#54d9e0',
    })
        .use(VueMarkdownEditor)
        .mount('#app')
    console.log('client router ready')
})

if (window.__INITIAL_STATE__) {
    store.state.value = window.__INITIAL_STATE__
}
