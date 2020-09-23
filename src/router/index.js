import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
//1.注入插件
Vue.use(Router)
//2.定义路由
const routes = [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/about',
    component:About
  }
]
//3.创建router实例
const router = new Router({
  routes
})
//4.导出router实例
export default router


//2,3,4的合并
// export default new Router({
//   routes: [

//   ]
// })
