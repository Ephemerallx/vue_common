import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router"
import ElementUI from "element-ui"
import Axios from 'axios'

Vue.prototype.$axios  = Axios

Vue.use(ElementUI)
Vue.use(VueRouter)
//事件总线: 用来注册公共的事件监听的对象叫做事件总线
//创建一个vue实例，只用来监听事件，
let eventBus = new Vue();
//扩展vue类的实例对象
Vue.prototype.$eventBus = eventBus;

Vue.config.productionTip = false
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
