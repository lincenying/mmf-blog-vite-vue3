import { getCurrentInstance, ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useToggle } from '@vueuse/core'
import { useHead } from '@vueuse/head'

export default () => {
    const ins = getCurrentInstance()
    // eslint-disable-next-line no-unused-vars
    const ctx = ins.appContext.config.globalProperties
    // eslint-disable-next-line no-unused-vars
    const options = ins.type
    // eslint-disable-next-line no-unused-vars
    const route = useRoute()
    const router = useRouter()
    // eslint-disable-next-line no-unused-vars
    const store = useStore()

    return {
        ctx,
        options,
        route,
        router,
        store,
        ref,
        reactive,
        useToggle,
        useHead
    }
}
