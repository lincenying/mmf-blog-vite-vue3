import { LoadingPlugin } from 'vue-loading-overlay'
import VueMarkdownEditor from '@kangc/v-md-editor'
import vuePressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'

// Prism
import Prism from 'prismjs'

// highlight code
import 'prismjs/components/prism-json'

import { createApp } from './main'

import reloadPrompt from '@/components/reload-prompt.vue'

import 'uno.css'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import 'vue-loading-overlay/dist/css/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import './assets/css/github-markdown.css'
import './assets/css/hljs/googlecode.css'
import './assets/scss/style.scss'

VueMarkdownEditor.use(vuePressTheme, {
    Prism,
})

const { app, router, store } = createApp()

router.isReady().then(() => {
    app.component('ReloadPrompt', reloadPrompt)
    app.use(LoadingPlugin, {
        'can-cancel': false,
        'loader': 'dots',
        'color': '#54d9e0',
    })
        .use(VueMarkdownEditor)
        .mount('#app')
    console.log('client router ready')
})

if (window.__INITIAL_STATE__)
    store.state.value = window.__INITIAL_STATE__
