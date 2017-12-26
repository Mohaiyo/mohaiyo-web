import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/pages/index.vue')), 'home')
const Index = r => require.ensure([], () => r(require('@/pages/home/home.vue')), 'home')
const SignIn = r => require.ensure([], () => r(require('@/pages/sign/signIn.vue')), 'sign')
const SignUp = r => require.ensure([], () => r(require('@/pages/sign/signUp.vue')), 'sign')
const Article = r => require.ensure([], () => r(require('@/pages/articles/article.vue')), 'articles')
const NewArticle = r => require.ensure([], () => r(require('@/pages/articles/writeArticle.vue')), 'articles')
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
    { path: '/sign_in', component: SignIn, name: 'signIn' },
    { path: '/sign_up', component: SignUp, name: 'signUp' },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '', redirect: 'index' },
        { path: 'index', component: Index, alias: '/a', name: 'index' },
        { path: 'article/:arcticlId', component: Article, name: 'articlePage' },
        { path: 'newArcticle', component: NewArticle, name: 'newArticle' }
      ]
    }
  ]
})
