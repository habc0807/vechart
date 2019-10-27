import Vue from 'vue'
import App from './App.vue'
import vechart from './lib/vechart'

Vue.use(vechart)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
