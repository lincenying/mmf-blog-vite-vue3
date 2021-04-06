import { watch, getCurrentInstance } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default () => {
    const ins = getCurrentInstance()
    // eslint-disable-next-line no-unused-vars
    const $ctx = ins.appContext.config.globalProperties
    // eslint-disable-next-line no-unused-vars
    const $type = ins.type
    // eslint-disable-next-line no-unused-vars
    const route = useRoute()
    // eslint-disable-next-line no-unused-vars
    const store = useStore()

    watch(
        () => route.fullPath,
        async currPath => {
            const scrollTop = store.state.appShell.historyPageScrollTop[currPath] || 0
            setTimeout(() => {
                window.scrollTo(0, scrollTop)
            }, 350)
        }
    )

    onBeforeRouteUpdate(async (to, from, next) => {
        await $type.asyncData({ route: to, store })
        next()
    })

    onBeforeRouteLeave((to, from, next) => {
        store.dispatch('appShell/saveScrollTop', {
            path: from.fullPath,
            scrollTop: Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        })
        next()
    })
}
