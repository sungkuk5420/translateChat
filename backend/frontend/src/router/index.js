import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import MainPage from 'components/MainPage.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: MainPage
    }
  ]
})
