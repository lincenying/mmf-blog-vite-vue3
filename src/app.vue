<template>
    <div :class="backend ? 'backend' : 'frontend'">
        <Navigation :backend="backend"></Navigation>
        <template v-if="!backend">
            <router-view v-slot="{ Component }" class="app-view relative">
                <transition
                    :name="appShell.pageTransitionName"
                    @before-enter="handleBeforeEnter"
                    @after-enter="handleAfterEnter"
                    mode="out-in"
                    :duration="{ enter: 300, leave: 300 }"
                >
                    <keep-alive :include="cacheFronentComponents">
                        <Suspense>
                            <component :is="Component" :key="key" />
                        </Suspense>
                    </keep-alive>
                </transition>
            </router-view>
            <sign-up :show="global.showRegisterModal"></sign-up>
            <sign-in :show="global.showLoginModal"></sign-in>
            <back-top></back-top>
        </template>
        <div v-else class="main wrap">
            <div class="main-left">
                <div class="home-feeds cards-wrap">
                    <router-view v-slot="{ Component }" class="app-view">
                        <transition
                            :name="appShell.pageTransitionName"
                            @before-enter="handleBeforeEnter"
                            @after-enter="handleAfterEnter"
                            mode="out-in"
                        >
                            <keep-alive :include="cacheBackendComponents">
                                <Suspense>
                                    <component :is="Component" :key="key" />
                                </Suspense>
                            </keep-alive>
                        </transition>
                    </router-view>
                </div>
            </div>
            <backend-menu v-if="!isLogin"></backend-menu>
        </div>
        <reload-prompt></reload-prompt>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import reloadPrompt from './components/reload-prompt.vue'
import Navigation from './components/navigation.vue'
import signUp from './components/signup.vue'
import signIn from './components/signin.vue'
import backTop from './components/backtop.vue'
import backendMenu from './components/backend-menu.vue'

export default {
    name: 'app',
    components: {
        reloadPrompt,
        Navigation,
        signUp,
        signIn,
        backTop,
        backendMenu
    },
    setup() {
        const route = useRoute()
        const router = useRouter()
        const store = useStore()

        const cacheFronentComponents = ref('frontend-index,frontend-about')
        const cacheBackendComponents = ref('backend-admin-list,backend-article-list,backend-user-list')

        const global = computed(() => {
            return store.getters['global/get']
        })
        const appShell = computed(() => {
            return store.getters['appShell/get']
        })
        const key = computed(() => {
            return route.path.replace(/\//g, '_')
        })
        const backend = computed(() => {
            return route.path.indexOf('backend') >= 0
        })
        const isLogin = computed(() => {
            return ['/backend', '/backend/'].includes(route.path)
        })
        const handleBeforeEnter = () => {
            store.dispatch('appShell/setPageSwitching', true)
        }
        const handleAfterEnter = () => {
            store.dispatch('appShell/setPageSwitching', false)
        }
        const handleClickHeaderBack = () => {
            router.go(-1)
        }

        return {
            cacheFronentComponents,
            cacheBackendComponents,
            global,
            appShell,
            key,
            backend,
            isLogin,
            handleBeforeEnter,
            handleAfterEnter,
            handleClickHeaderBack
        }
    }
}
</script>
