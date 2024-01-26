import { LoadingPlugin } from 'vue-loading-overlay'
import VueMarkdownEditor from '@kangc/v-md-editor'
import vuePressTheme from '@kangc/v-md-editor/lib/theme/vuepress'
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'

// Prism
import Prism from 'prismjs'

// highlight code
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-twig'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-less'
import 'prismjs/components/prism-bash'

import { createApp } from './main'

import reloadPrompt from '@/components/reload-prompt.vue'

import 'uno.css'
import './assets/css/github-markdown.css'
import './assets/css/hljs/googlecode.css'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import './assets/css/vuepress.css'
import 'vue-loading-overlay/dist/css/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import './assets/scss/style.scss'

VueMarkdownEditor
    .use(vuePressTheme, {
        Prism,
        codeHighlightExtensionMap: {
            vue: 'html',
        },
    })
    .use(createLineNumbertPlugin())

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
