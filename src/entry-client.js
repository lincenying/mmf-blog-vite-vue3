import cookies from 'js-cookie'

import { createApp } from './main'
import api from './api/index-client'

import 'toastr/build/toastr.css'
import './assets/css/hljs/googlecode.css'
import './assets/css/github-markdown.css'
import './assets/scss/style.scss'

const { app, router, store } = createApp()

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
    app.mount('#app')
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
