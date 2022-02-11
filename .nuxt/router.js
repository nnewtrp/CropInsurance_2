import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13576eb5 = () => interopDefault(import('..\\pages\\Form\\index.vue' /* webpackChunkName: "pages/Form/index" */))
const _7269b79c = () => interopDefault(import('..\\pages\\Profile\\index.vue' /* webpackChunkName: "pages/Profile/index" */))
const _32860ef6 = () => interopDefault(import('..\\pages\\Report\\index.vue' /* webpackChunkName: "pages/Report/index" */))
const _6f076766 = () => interopDefault(import('..\\pages\\test1.vue' /* webpackChunkName: "pages/test1" */))
const _1d768a68 = () => interopDefault(import('..\\pages\\Auth\\login.vue' /* webpackChunkName: "pages/Auth/login" */))
const _4496a0ae = () => interopDefault(import('..\\pages\\Auth\\signup.vue' /* webpackChunkName: "pages/Auth/signup" */))
const _321089c2 = () => interopDefault(import('..\\pages\\Profile\\editProfile.vue' /* webpackChunkName: "pages/Profile/editProfile" */))
const _3a661e2a = () => interopDefault(import('..\\pages\\Profile\\password.vue' /* webpackChunkName: "pages/Profile/password" */))
const _2f769470 = () => interopDefault(import('..\\pages\\Staff\\Profile\\index.vue' /* webpackChunkName: "pages/Staff/Profile/index" */))
const _02e38887 = () => interopDefault(import('..\\pages\\Staff\\Report\\index.vue' /* webpackChunkName: "pages/Staff/Report/index" */))
const _6d1184dd = () => interopDefault(import('..\\pages\\Staff\\Profile\\editProfile.vue' /* webpackChunkName: "pages/Staff/Profile/editProfile" */))
const _6947afed = () => interopDefault(import('..\\pages\\Staff\\Profile\\password.vue' /* webpackChunkName: "pages/Staff/Profile/password" */))
const _3f6927e9 = () => interopDefault(import('..\\pages\\Staff\\Report\\History.vue' /* webpackChunkName: "pages/Staff/Report/History" */))
const _2c3c8b09 = () => interopDefault(import('..\\pages\\Staff\\Report\\NewReport.vue' /* webpackChunkName: "pages/Staff/Report/NewReport" */))
const _6bc43a36 = () => interopDefault(import('..\\pages\\Staff\\Report\\_detail.vue' /* webpackChunkName: "pages/Staff/Report/_detail" */))
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
    path: "/test1",
    component: _6f076766,
    name: "test1"
  }, {
    path: "/Auth/login",
    component: _1d768a68,
    name: "Auth-login"
  }, {
    path: "/Auth/signup",
    component: _4496a0ae,
    name: "Auth-signup"
  }, {
    path: "/Profile/editProfile",
    component: _321089c2,
    name: "Profile-editProfile"
  }, {
    path: "/Profile/password",
    component: _3a661e2a,
    name: "Profile-password"
  }, {
    path: "/Staff/Profile",
    component: _2f769470,
    name: "Staff-Profile"
  }, {
    path: "/Staff/Report",
    component: _02e38887,
    name: "Staff-Report"
  }, {
    path: "/Staff/Profile/editProfile",
    component: _6d1184dd,
    name: "Staff-Profile-editProfile"
  }, {
    path: "/Staff/Profile/password",
    component: _6947afed,
    name: "Staff-Profile-password"
  }, {
    path: "/Staff/Report/History",
    component: _3f6927e9,
    name: "Staff-Report-History"
  }, {
    path: "/Staff/Report/NewReport",
    component: _2c3c8b09,
    name: "Staff-Report-NewReport"
  }, {
    path: "/Staff/Report/:detail",
    component: _6bc43a36,
    name: "Staff-Report-detail"
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
