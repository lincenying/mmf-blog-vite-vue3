<template>
    <div class="modal-wrap modal-signup-wrap" :class="show ? 'active' : ''">
        <span class="center-helper"></span>
        <div class="modal modal-signup">
            <h2 class="modal-title">注册</h2>
            <a @click="close" href="javascript:;" class="modal-close"><i class="icon icon-close-black"></i></a>
            <div class="modal-content">
                <div class="signup-form">
                    <div class="input-wrap">
                        <input v-model="form.username" type="text" placeholder="昵称" class="base-input" />
                        <p class="error-info input-info hidden">长度至少 6 位</p>
                    </div>
                    <div class="input-wrap">
                        <input v-model="form.email" type="text" placeholder="邮箱" class="base-input" />
                        <p class="error-info input-info hidden">长度至少 6 位</p>
                    </div>
                    <div class="input-wrap">
                        <input v-model="form.password" type="password" placeholder="密码" class="base-input" />
                        <p class="error-info input-info hidden">长度至少 6 位</p>
                    </div>
                    <div class="input-wrap">
                        <input v-model="form.re_password" type="password" placeholder="重复密码" class="base-input" />
                        <p class="error-info input-info hidden">长度至少 6 位</p>
                    </div>
                    <a @click="register" href="javascript:;" class="btn signup-btn btn-yellow">确认注册</a>
                    <a @click="login" href="javascript:;" class="btn signup-btn btn-blue block">直接登录</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useGlobal from '@/mixins/global'
import { strlen, showMsg } from '@/utils'

export default {
    name: 'sign-up',
    props: ['show'],
    setup() {
        // eslint-disable-next-line no-unused-vars
        const { ctx, options, route, router, store, useToggle, useHead, ref, reactive } = useGlobal()

        const form = reactive({
            username: '',
            email: '',
            password: '',
            re_password: ''
        })

        const close = () => {
            store.commit('global/showRegisterModal', false)
        }
        const login = () => {
            store.commit('global/showLoginModal', true)
            store.commit('global/showRegisterModal', false)
        }
        const register = async () => {
            const reg = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)$/i
            if (!form.username || !form.password || !form.email) {
                showMsg('请将表单填写完整!')
                return
            } else if (strlen(form.username) < 4) {
                showMsg('用户长度至少 2 个中文或 4 个英文!')
                return
            } else if (!reg.test(form.email)) {
                showMsg('邮箱格式错误!')
                return
            } else if (strlen(form.password) < 8) {
                showMsg('密码长度至少 8 位!')
                return
            } else if (form.password !== form.re_password) {
                showMsg('两次输入的密码不一致!')
                return
            }
            const { code, message } = await store.$api.post('frontend/user/insert', form)
            if (code === 200) {
                showMsg({
                    type: 'success',
                    content: message
                })
                this.login()
            }
        }

        return {
            form,
            close,
            login,
            register
        }
    }
}
</script>
