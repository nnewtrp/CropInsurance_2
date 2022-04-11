import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AllReportCard: () => import('../..\\components\\AllReportCard.vue' /* webpackChunkName: "components/all-report-card" */).then(c => wrapFunctional(c.default || c)),
  WelcomeCard: () => import('../..\\components\\WelcomeCard.vue' /* webpackChunkName: "components/welcome-card" */).then(c => wrapFunctional(c.default || c)),
  AuthPicture: () => import('../..\\components\\Auth\\AuthPicture.vue' /* webpackChunkName: "components/auth-picture" */).then(c => wrapFunctional(c.default || c)),
  AuthLoginForm: () => import('../..\\components\\Auth\\LoginForm.vue' /* webpackChunkName: "components/auth-login-form" */).then(c => wrapFunctional(c.default || c)),
  AuthSignUpForm: () => import('../..\\components\\Auth\\SignUpForm.vue' /* webpackChunkName: "components/auth-sign-up-form" */).then(c => wrapFunctional(c.default || c)),
  NavbarAvatarMenu: () => import('../..\\components\\navbar\\AvatarMenu.vue' /* webpackChunkName: "components/navbar-avatar-menu" */).then(c => wrapFunctional(c.default || c)),
  NavbarStaffAvatarMenu: () => import('../..\\components\\navbar\\StaffAvatarMenu.vue' /* webpackChunkName: "components/navbar-staff-avatar-menu" */).then(c => wrapFunctional(c.default || c)),
  FormReportForm: () => import('../..\\components\\Form\\ReportForm.vue' /* webpackChunkName: "components/form-report-form" */).then(c => wrapFunctional(c.default || c)),
  ProfileChangePassword: () => import('../..\\components\\Profile\\ChangePassword.vue' /* webpackChunkName: "components/profile-change-password" */).then(c => wrapFunctional(c.default || c)),
  ProfileEditProfileInfo: () => import('../..\\components\\Profile\\EditProfileInfo.vue' /* webpackChunkName: "components/profile-edit-profile-info" */).then(c => wrapFunctional(c.default || c)),
  ProfileUserProfile: () => import('../..\\components\\Profile\\UserProfile.vue' /* webpackChunkName: "components/profile-user-profile" */).then(c => wrapFunctional(c.default || c)),
  ReportComment: () => import('../..\\components\\Report\\ReportComment.vue' /* webpackChunkName: "components/report-comment" */).then(c => wrapFunctional(c.default || c)),
  ReportDetail: () => import('../..\\components\\Report\\ReportDetail.vue' /* webpackChunkName: "components/report-detail" */).then(c => wrapFunctional(c.default || c)),
  ReportList: () => import('../..\\components\\Report\\ReportList.vue' /* webpackChunkName: "components/report-list" */).then(c => wrapFunctional(c.default || c)),
  ReportResult: () => import('../..\\components\\Report\\ReportResult.vue' /* webpackChunkName: "components/report-result" */).then(c => wrapFunctional(c.default || c)),
  ReportStaffReportResult: () => import('../..\\components\\Report\\StaffReportResult.vue' /* webpackChunkName: "components/report-staff-report-result" */).then(c => wrapFunctional(c.default || c)),
  StaffEditProfile: () => import('../..\\components\\Staff\\Profile\\StaffEditProfile.vue' /* webpackChunkName: "components/staff-edit-profile" */).then(c => wrapFunctional(c.default || c)),
  StaffProfile: () => import('../..\\components\\Staff\\Profile\\StaffProfile.vue' /* webpackChunkName: "components/staff-profile" */).then(c => wrapFunctional(c.default || c)),
  StaffReportHistoryList: () => import('../..\\components\\Staff\\Report\\HistoryList.vue' /* webpackChunkName: "components/staff-report-history-list" */).then(c => wrapFunctional(c.default || c)),
  StaffReportInProgressList: () => import('../..\\components\\Staff\\Report\\InProgressList.vue' /* webpackChunkName: "components/staff-report-in-progress-list" */).then(c => wrapFunctional(c.default || c)),
  StaffReportListMenu: () => import('../..\\components\\Staff\\Report\\ListMenu.vue' /* webpackChunkName: "components/staff-report-list-menu" */).then(c => wrapFunctional(c.default || c)),
  StaffReportNewReportList: () => import('../..\\components\\Staff\\Report\\NewReportList.vue' /* webpackChunkName: "components/staff-report-new-report-list" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
