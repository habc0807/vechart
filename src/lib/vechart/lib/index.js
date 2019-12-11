import echarts from 'echarts'

const vechart = {
    install: Vue => {
        Vue.component('vechart', {
            name: 'echart',
            props: {
                options: {
                    type: Object,
                    required: true,
                    default: () => null
                },
                styles: {
                    type: Object,
                    required: false,
                    default: () => ({
                        width: '200px',
                        height: '200px'
                    })
                }
            },
            render(createElement) {
                return createElement(
                    'div', {
                        style: this.styles,
                    }
                )
            },
            watch: {
                options(v) {
                    if(v) {
                        this.initOption()
                    }
                }
            },
            mounted() {
                this.initOption()
            },
            methods: {
                initOption() {
                    const echartsHandle = echarts.init(this.$el);
                    echartsHandle.setOption(this.options);
                }
            },
        })

        Vue.directive('echart', {
            inserted(el, binding, vnode) {
                // 需要先设置大小，在初始化echarts
                if (vnode.data.style) {
                    for (let item in vnode.data.style) {
                        el.style[item] = vnode.data.style[item];
                    }
                }
                echarts.init(el).setOption(binding.value);
            }
        })
    }
}

export default vechart