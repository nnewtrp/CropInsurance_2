import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cff1662e = () => interopDefault(import('..\\pages\\case\\index.vue' /* webpackChunkName: "pages/case/index" */))
const _6924c5c4 = () => interopDefault(import('..\\pages\\password\\index.vue' /* webpackChunkName: "pages/password/index" */))
const _59076812 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _706134ba = () => interopDefault(import('..\\pages\\form\\IncidentForm.vue' /* webpackChunkName: "pages/form/IncidentForm" */))
const _497bb5d4 = () => interopDefault(import('..\\pages\\form\\RequestForm.vue' /* webpackChunkName: "pages/form/RequestForm" */))
const _03bfef1f = () => interopDefault(import('..\\pages\\profile\\editprofile.vue' /* webpackChunkName: "pages/profile/editprofile" */))
const _b53bd272 = () => interopDefault(import('..\\pages\\case\\_detail.vue' /* webpackChunkName: "pages/case/_detail" */))
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
    path: "/case",
    component: _cff1662e,
    name: "case"
  }, {
    path: "/password",
    component: _6924c5c4,
    name: "password"
  }, {
    path: "/profile",
    component: _59076812,
    name: "profile"
  }, {
    path: "/form/IncidentForm",
    component: _706134ba,
    name: "form-IncidentForm"
  }, {
    path: "/form/RequestForm",
    component: _497bb5d4,
    name: "form-RequestForm"
  }, {
    path: "/profile/editprofile",
    component: _03bfef1f,
    name: "profile-editprofile"
  }, {
    path: "/case/:detail",
    component: _b53bd272,
    name: "case-detail"
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
