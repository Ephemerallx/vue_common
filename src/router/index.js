import Vue from "vue"
import VueRouter from "vue-router"
import home from "../views/home"
import destinate from "../views/destinate"
import discover from "../views/discover"
import my from "../views/my"

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
import lx_secondary_service_one from '../components/personal/wuyi/lx_secondary_service-one';
import lx_secondary_service_two from '../components/personal/wuyi/lx_secondary_service-two';
import lx_secondary_service_three from '../components/personal/wuyi/lx_secondary_service-three';
import lx_secondary_service_four from '../components/personal/wuyi/lx_secondary_service-four';
import lx_secondary_service_five from '../components/personal/wuyi/lx_secondary_service-five';

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
            component: ()=> import ('../views/registers'),
        },
        {
            path: '/main/forget',
            component: ()=> import('../components/forget/forget'),
        },
        {
            path: '/main/reset',
            component: ()=> import('../components/forget/reset'),
        },
        {
            path: '/main/login',
            component: ()=> import('../views/login'),
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

        // 我的二级页面
        // {
        //     path:'/main/set',
        //     component: lx_secondary_set
        // },
        // {
        //     path:'/main/message',
        //     component: lx_secondary_message,meta:{needLogin: true}
        // },
        // {
        //     path:'/main/pMessage',
        //     component: lx_secondary_pmessage,meta:{needLogin: true}
        // },
        // {
        //     path:'/main/order',
        //     component: lx_secondary_order,meta:{needLogin: true}
        // },
        // {
        //     path:'/main/myWallet',
        //     component: lx_secondary_wallet,meta:{needLogin: true}
        // },
        // {
        //     path:'/main/coupon_dis/:id',
        //     component: lx_secondary_coupon_one,meta:{needLogin: true}
        // },
        // {
        //     path:'/main/coupon_intel',
        //     component: lx_secondary_coupon_two,meta:{needLogin: true}
        // },
        // {
        //     path:'/main/coupon_bon',
        //     component: lx_secondary_coupon_three,meta:{needLogin: true}
        // },
        // {
        //     path:'/main/coupon_cen',
        //     component: lx_secondary_coupon_four,meta:{needLogin: true}
        // },


        // 我的二级页面
        {
            path:'/main/set',
            component: lx_secondary_set
        },
        {
            path:'/main/message',
            component: lx_secondary_message
        },
        {
            path:'/main/pMessage',
            component: lx_secondary_pmessage
        },
        {
            path:'/main/order',
            component: lx_secondary_order
        },
        {
            path:'/main/myWallet',
            component: lx_secondary_wallet
        },
        {
            path:'/main/coupon_dis/:id',
            component: lx_secondary_coupon_one
        },
        {
            path:'/main/coupon_intel',
            component: lx_secondary_coupon_two
        },
        {
            path:'/main/coupon_bon',
            component: lx_secondary_coupon_three
        },
        {
            path:'/main/coupon_cen',
            component: lx_secondary_coupon_four
        },
        // 常用服务
        {
            path:'/main/service_adviser',
            component: lx_secondary_service_one,
        },
        {
            path:'/main/service_discounts',
            component: lx_secondary_service_two,
        },
        {
            path:'/main/service_information',
            component: lx_secondary_service_three,
        },
        {
            path:'/main/service_collect',
            component: lx_secondary_service_four,
        },
        {
            path:'/main/service_history',
            component: lx_secondary_service_five,
        },

        // 会员权益
        {
            path:'/main/memberone',
            component: ()=> import ('../components/personal/member/memberone'),
        },
        {
            path:'/main/membertwo',
            component: ()=> import ('../components/personal/member/membertwo'),
        },
        {
            path:'/main/memberthree',
            component: ()=> import ('../components/personal/member/memberthree'),
        },
        {
            path:'/main/memberfour',
            component: ()=> import ('../components/personal/member/memberfour'),
        },
        // 三级页面
        {
            path:'/main/balance',
            component:() => import('../components/personal/Level3Page/lx_Level3Page_myWallet')
        }
],
})
// 前置守卫,判断哪个需要登录
router.beforeEach((to, from, next) => {
    if (to.meta.needLogin) {
        next()
        window.console.log("请先登录")
//当页面需要登录的时候判断浏览器是否有sessionStorage
        if (window.sessionStorage.data) {
// 注意next()必须加
            next()
        } else {
// alert('session为空，请先登录')
//如果没有，让页面进入登录页
            next('/main/login')
        }
    } else {
        next()
    }
})
export default router
