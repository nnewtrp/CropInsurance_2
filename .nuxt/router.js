import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6f4eb74b = () => interopDefault(import('..\\pages\\case\\index.vue' /* webpackChunkName: "pages/case/index" */))
const _fb55f300 = () => interopDefault(import('..\\pages\\password\\index.vue' /* webpackChunkName: "pages/password/index" */))
const _ce876b20 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _f9202dfe = () => interopDefault(import('..\\pages\\form\\IncidentForm.vue' /* webpackChunkName: "pages/form/IncidentForm" */))
const _75f4bdf8 = () => interopDefault(import('..\\pages\\form\\RequestForm.vue' /* webpackChunkName: "pages/form/RequestForm" */))
const _594d12fd = () => interopDefault(import('..\\pages\\profile\\editprofile.vue' /* webpackChunkName: "pages/profile/editprofile" */))
const _6f0f1eae = () => interopDefault(import('..\\pages\\case\\_detail.vue' /* webpackChunkName: "pages/case/_detail" */))
const _cbea268a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/case",
    component: _6f4eb74b,
    name: "case"
  }, {
    path: "/password",
    component: _fb55f300,
    name: "password"
  }, {
    path: "/profile",
    component: _ce876b20,
    name: "profile"
  }, {
    path: "/form/IncidentForm",
    component: _f9202dfe,
    name: "form-IncidentForm"
  }, {
    path: "/form/RequestForm",
    component: _75f4bdf8,
    name: "form-RequestForm"
  }, {
    path: "/profile/editprofile",
    component: _594d12fd,
    name: "profile-editprofile"
  }, {
    path: "/case/:detail",
    component: _6f0f1eae,
    name: "case-detail"
  }, {
    path: "/",
    component: _cbea268a,
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
