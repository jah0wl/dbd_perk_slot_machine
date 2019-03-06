import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Survivor from './views/Survivor.vue'
import Killer from './views/Killer.vue'

Vue.use(Router)

const confParams = (route) => ({
  col: route.query.color === '1',
  sids: route.query.sids ? route.query.sids.split(',') : [],
  kids: route.query.kids ? route.query.kids.split(',') : []
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: confParams
    },
    {
      path: '/survivor',
      name: 'survivor',
      component: Survivor,
      props: confParams
    },
    {
      path: '/killer',
      name: 'killer',
      component: Killer,
      props: confParams
    }
  ]
})
