import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _382bffe6 = () => interopDefault(import('..\\pages\\AllReport\\index.vue' /* webpackChunkName: "pages/AllReport/index" */))
const _13576eb5 = () => interopDefault(import('..\\pages\\Form\\index.vue' /* webpackChunkName: "pages/Form/index" */))
const _7269b79c = () => interopDefault(import('..\\pages\\Profile\\index.vue' /* webpackChunkName: "pages/Profile/index" */))
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
    path: "/AllReport",
    component: _382bffe6,
    name: "AllReport"
  }, {
    path: "/Form",
    component: _13576eb5,
    name: "Form"
  }, {
    path: "/Profile",
    component: _7269b79c,
    name: "Profile"
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
