import { wrapFunctional } from './utils'

export { default as AllReportCard } from '../..\\components\\AllReportCard.vue'
export { default as WelcomeCard } from '../..\\components\\WelcomeCard.vue'
export { default as FormReportForm } from '../..\\components\\Form\\ReportForm.vue'
export { default as ProfileChangePassword } from '../..\\components\\Profile\\ChangePassword.vue'
export { default as ProfileEditProfileInfo } from '../..\\components\\Profile\\EditProfileInfo.vue'
export { default as ProfileUserProfile } from '../..\\components\\Profile\\UserProfile.vue'
export { default as NavbarAvatarMenu } from '../..\\components\\navbar\\AvatarMenu.vue'
export { default as ReportComment } from '../..\\components\\Report\\ReportComment.vue'
export { default as ReportDetail } from '../..\\components\\Report\\ReportDetail.vue'
export { default as ReportList } from '../..\\components\\Report\\ReportList.vue'
export { default as ReportResult } from '../..\\components\\Report\\ReportResult.vue'

export const LazyAllReportCard = import('../..\\components\\AllReportCard.vue' /* webpackChunkName: "components/all-report-card" */).then(c => wrapFunctional(c.default || c))
export const LazyWelcomeCard = import('../..\\components\\WelcomeCard.vue' /* webpackChunkName: "components/welcome-card" */).then(c => wrapFunctional(c.default || c))
export const LazyFormReportForm = import('../..\\components\\Form\\ReportForm.vue' /* webpackChunkName: "components/form-report-form" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileChangePassword = import('../..\\components\\Profile\\ChangePassword.vue' /* webpackChunkName: "components/profile-change-password" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileEditProfileInfo = import('../..\\components\\Profile\\EditProfileInfo.vue' /* webpackChunkName: "components/profile-edit-profile-info" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileUserProfile = import('../..\\components\\Profile\\UserProfile.vue' /* webpackChunkName: "components/profile-user-profile" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbarAvatarMenu = import('../..\\components\\navbar\\AvatarMenu.vue' /* webpackChunkName: "components/navbar-avatar-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyReportComment = import('../..\\components\\Report\\ReportComment.vue' /* webpackChunkName: "components/report-comment" */).then(c => wrapFunctional(c.default || c))
export const LazyReportDetail = import('../..\\components\\Report\\ReportDetail.vue' /* webpackChunkName: "components/report-detail" */).then(c => wrapFunctional(c.default || c))
export const LazyReportList = import('../..\\components\\Report\\ReportList.vue' /* webpackChunkName: "components/report-list" */).then(c => wrapFunctional(c.default || c))
export const LazyReportResult = import('../..\\components\\Report\\ReportResult.vue' /* webpackChunkName: "components/report-result" */).then(c => wrapFunctional(c.default || c))
