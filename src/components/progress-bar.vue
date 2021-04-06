<template>
    <div
        class="progress"
        :style="{
            width: percent + '%',
            height: height,
            'background-color': canSuccess ? color : failedColor,
            opacity: show ? 1 : 0
        }"
    ></div>
</template>

<script>
import { nextTick, reactive, getCurrentInstance } from 'vue'

export default {
    name: 'progress-bar',
    setup() {
        const ins = getCurrentInstance()
        // eslint-disable-next-line no-unused-vars
        const $ctx = ins.appContext.config.globalProperties
        // eslint-disable-next-line no-unused-vars
        const $type = ins.type

        const data = reactive({
            percent: 0,
            show: false,
            canSuccess: true,
            duration: 3000,
            height: '2px',
            color: '#ffca2b',
            failedColor: '#ff0000',
            _timer: null,
            _cut: null
        })

        const finish = () => {
            data.percent = 100
            data.hide()
        }
        const start = () => {
            data.show = true
            data.canSuccess = true
            if (data._timer) {
                clearInterval(data._timer)
                data.percent = 0
            }
            data._cut = 10000 / Math.floor(data.duration)
            data._timer = setInterval(() => {
                data.increase(data._cut * Math.random())
                if (data.percent > 95) {
                    finish()
                }
            }, 100)
        }
        const set = num => {
            data.show = true
            data.canSuccess = true
            data.percent = Math.floor(num)
        }
        const get = () => {
            return Math.floor(data.percent)
        }
        const increase = num => {
            data.percent += Math.floor(num)
        }
        const decrease = num => {
            data.percent -= Math.floor(num)
        }
        const pause = () => {
            clearInterval(data._timer)
        }
        const hide = () => {
            clearInterval(data._timer)
            data._timer = null
            setTimeout(() => {
                data.show = false
                nextTick(() => {
                    setTimeout(() => {
                        data.percent = 0
                    }, 200)
                })
            }, 500)
        }
        const fail = () => {
            data.canSuccess = false
        }

        return {
            finish,
            start,
            set,
            get,
            increase,
            decrease,
            pause,
            hide,
            fail
        }
    }
}
</script>

<style scoped>
.progress {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    width: 0;
    /* transition width .2s, opacity .4s; */
    opacity: 1;
    background-color: #efc14e;
    z-index: 999999;
}
</style>
