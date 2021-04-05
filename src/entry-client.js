import cookies from 'js-cookie'
import mavonEditor from 'mavon-editor'

import { createApp } from './main'
import api from './api/index-client'

import '@/assets/scss/style.scss'

const { app, router, store } = createApp()

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
    app.use(mavonEditor).mount('#app')
    console.log('client router ready')
})

store.$api = store.state.$api = api
store.commit('global/setCookies', {
    user: cookies.get('user'),
    userid: cookies.get('userid'),
    username: cookies.get('username'),
    useremail: cookies.get('useremail')
})
window.$$store = store
