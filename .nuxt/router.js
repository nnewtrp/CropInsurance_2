import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13576eb5 = () => interopDefault(import('..\\pages\\Form\\index.vue' /* webpackChunkName: "pages/Form/index" */))
const _7269b79c = () => interopDefault(import('..\\pages\\Profile\\index.vue' /* webpackChunkName: "pages/Profile/index" */))
const _32860ef6 = () => interopDefault(import('..\\pages\\Report\\index.vue' /* webpackChunkName: "pages/Report/index" */))
const _3a661e2a = () => interopDefault(import('..\\pages\\Profile\\password.vue' /* webpackChunkName: "pages/Profile/password" */))
const _1d5b4b63 = () => interopDefault(import('..\\pages\\Report\\_detail.vue' /* webpackChunkName: "pages/Report/_detail" */))
const _f058de4e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Form",
    component: _13576eb5,
    name: "Form"
  }, {
    path: "/Profile",
    component: _7269b79c,
    name: "Profile"
  }, {
    path: "/Report",
    component: _32860ef6,
    name: "Report"
  }, {
    path: "/Profile/password",
    component: _3a661e2a,
    name: "Profile-password"
  }, {
    path: "/Report/:detail",
    component: _1d5b4b63,
    name: "Report-detail"
  }, {
    path: "/",
    component: _f058de4e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
