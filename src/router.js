import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () =>
        import ('./views/Front/Home/Home.vue'),
      meta: {
        title: '币势得云算力'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import ('./views/Front/About/About.vue'),
      meta: {
        title: '关于-币势得'
      }
    },
    {
      path: '/guide',
      name: 'guide',
      component: () =>
        import ('./views/Front/Guide/Guide.vue'),
      meta: {
        title: '指南-币势得'
      }
    },
    {
      path: '/help',
      name: 'help',
      component: () =>
        import ('./views/Front/Help/Help.vue'),
      meta: {
        title: '帮助-币势得'
      }
    },
    {
      path: '/notice',
      name: 'notice',
      component: () =>
        import ('./views/Front/Notice/Notice.vue'),
      meta: {
        title: '公共-币势得'
      }
    },
  ]
})

router.beforeEach((to, from, next) => { /* 全局前置钩子 */
  document.title = to.meta.title || '币势得云算力'
  next()
})
router.beforeResolve((to, from, next) => { /* 全局解析守卫 */
  next()
})
router.afterEach((to, from) => { /* 全局后置钩子 */ })

export default router
