import Vue from "vue"
import VueRouter from "vue-router"
import home from "../views/home"
import destinate from "../views/destinate"
import discover from "../views/discover"
import my from "../views/my"
import register from "../views/register"
import login from "../views/login"
import main from "../views/main"
import lx_secondary_set from "../components/personal/secondaryPage/lx_secondary_set";
import lx_secondary_order from "../components/personal/secondaryPage/lx_secondary_order";
import lx_secondary_wallet from "../components/personal/secondaryPage/lx_secondary_wallet";
import lx_secondary_coupon_one from "../components/personal/secondaryPage/lx_secondary_coupon_one";
import lx_secondary_coupon_two from "../components/personal/secondaryPage/lx_secondary_coupon_two";
import lx_secondary_coupon_three from "../components/personal/secondaryPage/lx_secondary_coupon_three";
import lx_secondary_coupon_four from "../components/personal/secondaryPage/lx_secondary_coupon_four";
import lx_secondary_message from "../components/personal/secondaryPage/lx_secondary_message";
import lx_secondary_pmessage from "../components/personal/secondaryPage/lx_secondary_pmessage";

Vue.use(VueRouter)
let router = new VueRouter({
    //路由map集合 path : views component
    routes:[
		// 映射路由
      {
          path:'/main',
          component:main,
      },
      {
          path: '/',
          redirect: '/main/home'
      },

      {
        path: '/main/register',
        component:register,
      },
      {
        path: '/main/login',
        component:login,
      },
      {
          path: '/main',
          component: main,
          children: [
              {
                  path: 'home',
                  component: home
              },
              {
                path:'destinate',
                component:destinate,
              },
              {
                  path: 'discover',
                  component: discover
              },
              {
                  path: 'personal',
                  component: my,
                  meta: {
                      keepAlive: true
                  }
               }
            ]
        },
        {
            path:'/main/set',
            component: lx_secondary_set,
        },
        {
            path:'/main/message',
            component: lx_secondary_message,
        },
        {
            path:'/main/pMessage',
            component: lx_secondary_pmessage,
        },
        {
            path:'/main/order',
            component: lx_secondary_order,
        },
        {
            path:'/main/myWallet',
            component: lx_secondary_wallet,
        },
        {
            path:'/main/coupon_dis',
            component: lx_secondary_coupon_one,
        },
        {
            path:'/main/coupon_intel',
            component: lx_secondary_coupon_two,
        },
        {
            path:'/main/coupon_bon',
            component: lx_secondary_coupon_three,
        },
        {
            path:'/main/coupon_cen',
            component: lx_secondary_coupon_four,
        }
],
})
// 前置守卫,判断哪个需要登录
router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
	next()
	window.console.log("请先登录")
    //当页面需要登录的时候判断浏览器是否有sessionStorage
    if(window.sessionStorage.data){
		// 注意next()必须加
      next()
    }else{
    // alert('session为空，请先登录')
    //如果没有，让页面进入登录页
      next('/login')
    }
  }
  else{
    next()
  }
})
export default router
