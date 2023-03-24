import { acceptHMRUpdate } from 'pinia'
import cookies from 'js-cookie'
import type { anyObject, GlobalStore } from '@/types'

const objCookies = {
    user: cookies.get('user'),
    userid: cookies.get('userid'),
    username: cookies.get('username'),
    useremail: cookies.get('useremail')
}

const useStore = defineStore('globalStore', {
    state: (): GlobalStore => ({
        loading: false,
        cookies: objCookies,
        showLoginModal: false,
        showRegisterModal: false,
        ISDEV: import.meta.env.VITE_APP_ENV === 'development',
        ISPRE: import.meta.env.VITE_APP_ENV === 'pre-release',
        ISPROD: import.meta.env.VITE_APP_ENV === 'production'
    }),
    getters: {
        getGlobalStore: state => state
    },
    actions: {
        setLoginModal(payload: boolean) {
            this.showLoginModal = payload
        },
        setRegisterModal(payload: boolean) {
            this.showRegisterModal = payload
        },
        setCookies(cookies: anyObject) {
            this.cookies = cookies
        }
    }
})
export default useStore

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))