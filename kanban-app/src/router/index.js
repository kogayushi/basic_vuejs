import Vue from 'vue'
import Router from 'vue-router'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: KbnLoginView
    }
  ]
})
