import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AllReportCard: () => import('../..\\components\\AllReportCard.vue' /* webpackChunkName: "components/all-report-card" */).then(c => wrapFunctional(c.default || c)),
  WelcomeCard: () => import('../..\\components\\WelcomeCard.vue' /* webpackChunkName: "components/welcome-card" */).then(c => wrapFunctional(c.default || c)),
  FormReportForm: () => import('../..\\components\\Form\\ReportForm.vue' /* webpackChunkName: "components/form-report-form" */).then(c => wrapFunctional(c.default || c)),
  NavbarAvatarMenu: () => import('../..\\components\\navbar\\AvatarMenu.vue' /* webpackChunkName: "components/navbar-avatar-menu" */).then(c => wrapFunctional(c.default || c)),
  ProfileUserProfile: () => import('../..\\components\\Profile\\UserProfile.vue' /* webpackChunkName: "components/profile-user-profile" */).then(c => wrapFunctional(c.default || c)),
  ReportList: () => import('../..\\components\\Report\\ReportList.vue' /* webpackChunkName: "components/report-list" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
