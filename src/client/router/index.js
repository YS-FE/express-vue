import Vue from 'vue'
import Router from 'vue-router'

const Top = () => import('../views/Top.vue');
const Theater = () => import('../views/Theater.vue');
const Search = () => import('../views/Search.vue');

Vue.use(Router)

// route-level code splitting

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/top', component: Top },
      { path: '/theater', component: Theater},
      { path: '/search', component: Search},
      { path: '/', redirect: '/top' }
    ]
  })
}
