import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/pages/index.vue')), 'home')
const Index = r => require.ensure([], () => r(require('@/pages/home/home.vue')), 'home')

Vue.use(Router)

export default new Router({
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [
    { path: '', redirect: '/home' },
    { path: '/home',
      component: Home,
      children: [
        { path: '', redirect: 'index' },
        { path: 'index', component: Index, alias: '/a', name: 'index' }
      ]
    }
  ]
})
