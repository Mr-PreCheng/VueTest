import Home from '@/views/Home.vue'

const  routes =  [
    {
      path: '/',
      name: 'home',
      alias :'/home_page', //别名 url不会变
      //<router-link> to属性跳转的是name值
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      //动态渲染路由
      path:'/argu/:name', //name 是一个动态加载路由参数
      name:'argu',
      component:() => import (/* webpackChunkName: "about" */ '@/views/argu.vue')

    },
    {
      //嵌套路由
      path: '/parent',
      name: 'parent',
      component:() => import('@/views/parent.vue'),
      children:[
       {
        path: 'child',
        component: () => import('@/views/children.vue')
       }
      ]
    },
    {
      path:'/named-view',
      //components 多个组件  命名视图的使用
      components:
        {
          default:() => import('@/views/children.vue'),
          email :() => import('@/views/email.vue'),
          tel :() => import('@/views/tel.vue'),
        }
        
      
    },
    {
      path:'/main',
     // redirect:'/' //重定向到'/'路径
     redirect: to => { //可以重定向到一个方法
          return {
            name : 'about'
          } // 可以写路由的name名称,也可以写path

          
     }
    }
  ]
  export default routes

// 报routes.forEach is not a function
//   解决：
// 1.查看import {routes} from './routes’这个路径是否正确
// 2.routes必须是一个数组，检查routes是否是一个数组
// 3.是否已经new了一个router，又再次new一遍?




  

