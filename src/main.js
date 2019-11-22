import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router"
import ElementUI from "element-ui"
// import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css'
// import gg from'../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
