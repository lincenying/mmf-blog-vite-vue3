<template>
    <div class="settings-main card">
        <div class="settings-main-content">
            <a-input title="分类名称">
                <input type="text" v-model="form.cate_name" placeholder="分类名称" class="base-input" name="cate_name" />
                <span class="input-info error">请输入分类名称</span>
            </a-input>
            <a-input title="分类排序">
                <input type="text" v-model="form.cate_order" placeholder="分类排序" class="base-input" name="cate_order" />
                <span class="input-info error">请输入分类排序</span>
            </a-input>
        </div>
        <div class="settings-footer">
            <a @click="handleModify" href="javascript:;" class="btn btn-yellow">编辑分类</a>
            <router-link to="/backend/category/list" class="btn btn-blue">返回</router-link>
        </div>
    </div>
</template>

<script>
import { computed, getCurrentInstance, onMounted, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useToggle } from '@vueuse/core'

import { showMsg } from '@/utils'

import aInput from '../components/_input.vue'

export default {
    name: 'backend-category-modify',
    components: {
        aInput
    },
    async asyncData({ store, route }) {
        await store.dispatch('global/category/getCategoryItem', {
            path: route.path,
            id: route.params.id
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
        const router = useRouter()
        // eslint-disable-next-line no-unused-vars
        const store = useStore()

        const item = computed(() => {
            return store.getters['global/category/getCategoryItem']
        })

        const [loading, toggleLoading] = useToggle(false)

        const form = reactive({
            id: route.params.id,
            cate_name: '',
            cate_order: ''
        })

        watch(item, val => {
            console.log(val)
            form.cate_name = val.data.cate_name
            form.cate_order = val.data.cate_order
        })

        onMounted(async () => {
            await $type.asyncData({ route, store })
            if (item && item.data) {
                form.cate_name = item.data.cate_name
                form.cate_order = item.data.cate_order
            }
        })

        const handleModify = async () => {
            if (!form.cate_name || !form.cate_order) {
                showMsg('请将表单填写完整!')
                return
            }
            if (loading.value) return
            toggleLoading(true)
            const { code, data, message } = await store.$api.post('backend/category/modify', form)
            toggleLoading(false)
            if (code === 200) {
                showMsg({
                    type: 'success',
                    content: message
                })
                store.commit('global/category/updateCategoryItem', data)
                router.push('/backend/category/list')
            }
        }

        const headTitle = computed(() => {
            return '编辑分类 - M.M.F 小屋'
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
            form,
            handleModify
        }
    }
}
</script>
