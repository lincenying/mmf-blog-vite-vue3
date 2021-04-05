import { watch, getCurrentInstance } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default () => {
    const { ctx } = getCurrentInstance()
    const route = useRoute()
    const store = useStore()

    watch(
        () => route.fullPath,
        async currPath => {
            const scrollTop = ctx.$store.state.appShell.historyPageScrollTop[currPath] || 0
            setTimeout(() => {
                window.scrollTo(0, scrollTop)
            }, 350)
        }
    )

    onBeforeRouteUpdate(async (to, from, next) => {
        console.log(to, from)
        await ctx.$options.asyncData({ route: to, store })
        next()
    })

    onBeforeRouteLeave((to, from, next) => {
        console.log('onBeforeRouteLeave', from.fullPath)
        ctx.$store.dispatch('appShell/saveScrollTop', {
            path: from.fullPath,
            scrollTop: Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        })
        next()
    })
}
