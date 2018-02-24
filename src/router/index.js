import Vue from 'vue'
import Router from 'vue-router'
// 使用Webpack代码分割功能实现按需加载或者懒加载和代码分割
// const Home = r => require.ensure([], () => r(require('@/pages/index.vue')), 'home')
// const Index = r => require.ensure([], () => r(require('@/pages/home/home.vue')), 'home')
// const SignIn = r => require.ensure([], () => r(require('@/pages/sign/signIn.vue')), 'sign')
// const SignUp = r => require.ensure([], () => r(require('@/pages/sign/signUp.vue')), 'sign')
// const Article = r => require.ensure([], () => r(require('@/pages/articles/article.vue')), 'articles')
// const NewArticle = r => require.ensure([], () => r(require('@/pages/articles/writeArticle.vue')), 'articles')
// const Hot = r => require.ensure([], () => r(require('@/pages/hot/hot.vue')), 'hot')
// const Show = r => require.ensure([], () => r(require('@/pages/show/show.vue')), 'show')
// const About = r => require.ensure([], () => r(require('@/pages/about/about.vue')), 'about')
// 使用vue的路由懒加载--结合Vue的异步组件以及Webpack的代码分割功能，可以更加直观以及方便的实现组件的懒加载  需要webpack2 + ES6 +  syntax-dynamic-import 插件
// 总的来说 使用动态import实现懒加载以及代码分割之后，除了编译时间变短之外，其他好像也没有多大的变化
// 实测编译时间大概缩短了1/3 仅针对本项目讨论 使用前为45392ms  使用后为38660ms 减少 6732ms 缩短了14%的编译时间16s
const Home = () => import(/* webpackChunkName: "home" */ '@/pages/index.vue')
const Index = () => import(/* webpackChunkName: "home" */ '@/pages/home/home.vue')
const SignIn = () => import(/* webpackChunkName: "sign" */ '@/pages/sign/signIn.vue')
const SignUp = () => import(/* webpackChunkName: "sign" */ '@/pages/sign/signUp.vue')
const Article = () => import(/* webpackChunkName: "articles" */ '@/pages/articles/article.vue')
const NewArticle = () => import(/* webpackChunkName: "articles" */ '@/pages/articles/writeArticle.vue')
const Hot = () => import(/* webpackChunkName: "hot" */ '@/pages/hot/hot.vue')
const Show = () => import(/* webpackChunkName: "show" */ '@/pages/show/show.vue')
const About = () => import(/* webpackChunkName: "about" */ '@/pages/about/about.vue')
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
    { path: '/', redirect: '/home' },
    { path: '/sign_in', component: SignIn, name: 'signIn' },
    { path: '/sign_up', component: SignUp, name: 'signUp' },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '', redirect: 'index' },
        { path: 'index', component: Index, alias: '/a', name: 'index' },
        { path: 'article/:arcticlId', component: Article, name: 'articlePage' },
        { path: 'newArcticle', component: NewArticle, name: 'newArticle' },
        { path: 'hot', component: Hot, name: 'hot' },
        { path: 'show', component: Show, name: 'show' },
        { path: 'about', component: About, name: 'about' }
      ]
    }
  ]
})
