import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

//路由的配置数组
//path: 路由路径 必须以/开头
//component:对应的路由组件
//name:路由的名字
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    //按需引入
    //如果没有访问/about就不会加载这个组件 节约性能
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/dttall',
    name: 'Dttall',
    component: () => import('../views/dttall.vue')
  }
]
//创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
