import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('./views/front/home/home.vue')), 'home')
const about = r => require.ensure([], () => r(require('./views/front/about/about.vue')), 'about')
const guide = r => require.ensure([], () => r(require('./views/front/guide/guide.vue')), 'guide')
const help = r => require.ensure([], () => r(require('./views/front/help/help.vue')), 'help')
const notice = r => require.ensure([], () => r(require('./views/front/notice/notice.vue')), 'notice')
const user = r => require.ensure([], () => r(require('./views/front/user/user.vue')), 'user')

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '币势得云算力'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: '关于-币势得'
      }
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide,
      meta: {
        title: '指南-币势得'
      }
    },
    {
      path: '/help',
      name: 'help',
      component: help,
      meta: {
        title: '帮助-币势得'
      }
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice,
      meta: {
        title: '公告-币势得'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        title: '登录/注册-币势得'
      }
    },
    {
      path: '*',
      name: 'home',
      component: home,
      meta: {
        title: '币势得云算力'
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
