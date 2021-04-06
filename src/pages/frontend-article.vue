<template>
    <div class="main wrap">
        <div class="main-left">
            <div v-if="!article.isLoad" class="card card-content-loader">
                <content-loader :height="160" :width="660" :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb">
                    <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" /> <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
                    <rect x="0" y="80" rx="3" ry="3" width="550" height="6.4" /> <rect x="0" y="100" rx="3" ry="3" width="620" height="6.4" />
                    <rect x="0" y="120" rx="3" ry="3" width="401" height="6.4" /> <rect x="0" y="140" rx="3" ry="3" width="501" height="6.4" />
                    <circle cx="30" cy="30" r="30" />
                </content-loader>
            </div>
            <template v-else-if="article.data._id">
                <div class="card card-question-head">
                    <div class="question-content">
                        <router-link
                            :to="'/category/' + article.data.category"
                            v-text="article.data.category_name"
                            class="topic-link-item"
                        ></router-link>
                        <h2 class="question-title">
                            <router-link :to="'/article/' + article.data._id" v-text="article.data.title" class="question-title-link"></router-link>
                        </h2>
                    </div>
                </div>
                <div class="card card-answer">
                    <div class="answer-content"><div class="article-content markdown-body" v-html="addTarget(article.data.html)"></div></div>
                    <actions :item="article.data"></actions>
                </div>
                <comment :comments="comments"></comment>
            </template>
            <template v-else>
                <div class="card card-answer"><div class="answer-content">该文章不存在, 或者该文章已经被删除</div></div>
            </template>
        </div>
        <div class="main-right">
            <category :category="category"></category>
            <trending :trending="trending"></trending>
            <other></other>
        </div>
    </div>
</template>

<script>
import { onMounted, computed, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

import { ContentLoader } from 'vue-content-loader'

import saveScroll from '@/mixins/save-scroll'

import actions from '../components/item-actions.vue'
import category from '../components/aside-category.vue'
import trending from '../components/aside-trending.vue'
import other from '../components/aside-other.vue'
import comment from '../components/frontend-comment.vue'

export default {
    name: 'frontend-article',
    components: {
        ContentLoader,
        actions,
        comment,
        category,
        trending,
        other
    },
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被验证前调用
        // 不能获取组件实例 `this` ！
        // 因为当守卫执行时，组件实例还没被创建！
        console.log('beforeRouteEnter')
        next()
    },
    async asyncData({ store, route }) {
        const {
            path,
            params: { id }
        } = route
        await Promise.all([
            store.dispatch('global/category/getCategoryList'),
            store.dispatch('frontend/article/getTrending'),
            store.dispatch(`global/comment/getCommentList`, { id, path, page: 1, limit: 10 }),
            store.dispatch(`frontend/article/getArticleItem`, { id, path })
        ])
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

        saveScroll()

        const article = computed(() => {
            return store.getters['frontend/article/getArticleItem']
        })
        const comments = computed(() => {
            return store.getters['global/comment/getCommentList']
        })
        const category = computed(() => {
            return store.getters['global/category/getCategoryList']
        })
        const trending = computed(() => {
            return store.getters['frontend/article/getTrending']
        })
        const addTarget = content => {
            if (!content) return ''
            return content.replace(/<a(.*?)href="http/g, '<a$1target="_blank" href="http')
        }

        const headTitle = computed(() => {
            let title = 'M.M.F 小屋'
            title = article.value.data.title ? article.value.data.title + ' - M.M.F 小屋' : 'M.M.F 小屋'
            return title
        })

        onMounted(() => {
            $type.asyncData({ route, store })
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
            article,
            comments,
            category,
            trending,
            addTarget
        }
    }
}
</script>
