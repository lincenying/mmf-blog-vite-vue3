<template>
    <div class="settings-main card">
        <div class="settings-main-content">
            <div class="list-section list-header">
                <div class="list-username">用户名</div>
                <div class="list-email">邮箱</div>
                <div class="list-date">时间</div>
                <div class="list-action">操作</div>
            </div>
            <div v-for="item in user.data" :key="item._id" class="list-section">
                <div class="list-username">{{ item.username }}</div>
                <div class="list-email">{{ item.email }}</div>
                <div class="list-date">{{ $filters.timeYmd(item.update_date) }}</div>
                <div class="list-action">
                    <router-link :to="'/backend/user/modify/' + item._id" class="badge badge-success">编辑</router-link>
                    <a v-if="item.is_delete" @click="handleRecover(item._id)" href="javascript:;">恢复</a>
                    <a v-else @click="handleDelete(item._id)" href="javascript:;">删除</a>
                </div>
            </div>
        </div>
        <div v-if="user.hasNext" class="settings-footer">
            <a v-if="!loading" @click="loadMore()" class="admin-load-more" href="javascript:;">加载更多</a>
            <a v-else class="admin-load-more" href="javascript:;">加载中...</a>
        </div>
    </div>
</template>

<script>
import { computed, getCurrentInstance, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useToggle } from '@vueuse/core'

import { showMsg } from '@/utils'

export default {
    name: 'backend-user-list',
    async asyncData({ store, route }, config = { page: 1 }) {
        await store.dispatch('backend/user/getUserList', {
            ...config,
            path: route.path
        })
    },
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

        const user = computed(() => {
            return store.getters['backend/user/getUserList']
        })

        const [loading, toggleLoading] = useToggle(false)

        const loadMore = async (page = user.value.page + 1) => {
            if (loading.value) return
            toggleLoading(true)
            await $type.asyncData({ store, route }, { page })
            toggleLoading(false)
        }
        const handleRecover = async id => {
            const { code, message } = await store.$api.get('backend/user/recover', { id })
            if (code === 200) {
                showMsg({
                    type: 'success',
                    content: message
                })
                store.commit('backend/user/recoverUser', id)
            }
        }
        const handleDelete = async id => {
            const { code, message } = await store.$api.get('backend/user/delete', { id })
            if (code === 200) {
                showMsg({
                    type: 'success',
                    content: message
                })
                store.commit('backend/user/deleteUser', id)
            }
        }

        onMounted(() => {
            loadMore(1)
        })

        const headTitle = computed(() => {
            return '用户列表 - M.M.F 小屋'
        })
        useHead({
            // Can be static or computed
            title: headTitle,
            meta: [
                {
                    name: `description`,
                    content: headTitle
                }
            ]
        })

        return {
            user,
            loading,
            loadMore,
            handleRecover,
            handleDelete
        }
    }
}
</script>
