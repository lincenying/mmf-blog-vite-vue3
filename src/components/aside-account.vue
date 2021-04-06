<template>
    <div class="card card-me">
        <router-link to="/user/account" active-class="active" class="side-entry"
            ><i class="icon icon-arrow-right"></i><i class="icon icon-menu-articles"></i>帐号</router-link
        >
        <router-link to="/user/password" active-class="active" class="side-entry"
            ><i class="icon icon-arrow-right"></i><i class="icon icon-menu-articles"></i>密码</router-link
        >
        <a @click="handleLogout" href="javascript:;" class="side-entry"
            ><i class="icon icon-arrow-right"></i><i class="icon icon-menu-articles"></i>退出</a
        >
    </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
    name: 'aside-account',
    setup() {
        const ins = getCurrentInstance()
        // eslint-disable-next-line no-unused-vars
        const $ctx = ins.appContext.config.globalProperties
        // eslint-disable-next-line no-unused-vars
        const $type = ins.type
        // eslint-disable-next-line no-unused-vars
        const route = useRoute()
        // eslint-disable-next-line no-unused-vars
        const store = useStore()

        const handleLogout = async () => {
            await store.$api.post('frontend/user/logout', {})
            window.location.href = '/'
        }

        return {
            handleLogout
        }
    }
}
</script>
