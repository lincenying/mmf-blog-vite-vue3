import VueMarkdownEditor from '@kangc/v-md-editor'
import vuePressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'

import { createApp } from './main'

import reloadPrompt from './components/reload-prompt.vue'

VueMarkdownEditor.use(vuePressTheme)

const { app, router, store } = createApp(true)

router.isReady().then(() => {
    app.component('reload-prompt', reloadPrompt)
    app.use(VueMarkdownEditor).mount('#app')
    console.log('client router ready')
})

if (window.__INITIAL_STATE__) {
    store.state.value = window.__INITIAL_STATE__
}
