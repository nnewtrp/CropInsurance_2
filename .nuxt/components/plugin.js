import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  CaseList: () => import('../..\\components\\case\\CaseList.vue' /* webpackChunkName: "components/case-list" */).then(c => wrapFunctional(c.default || c)),
  HomeRecentCase: () => import('../..\\components\\home\\RecentCase.vue' /* webpackChunkName: "components/home-recent-case" */).then(c => wrapFunctional(c.default || c)),
  HomeSendButton: () => import('../..\\components\\home\\SendButton.vue' /* webpackChunkName: "components/home-send-button" */).then(c => wrapFunctional(c.default || c)),
  NavbarAvatarButton: () => import('../..\\components\\navbar\\AvatarButton.vue' /* webpackChunkName: "components/navbar-avatar-button" */).then(c => wrapFunctional(c.default || c)),
  NavbarCaseMenuButton: () => import('../..\\components\\navbar\\CaseMenuButton.vue' /* webpackChunkName: "components/navbar-case-menu-button" */).then(c => wrapFunctional(c.default || c)),
  FormIForm: () => import('../..\\components\\form\\IForm.vue' /* webpackChunkName: "components/form-i-form" */).then(c => wrapFunctional(c.default || c)),
  FormRForm: () => import('../..\\components\\form\\RForm.vue' /* webpackChunkName: "components/form-r-form" */).then(c => wrapFunctional(c.default || c)),
  PasswordChangePassword: () => import('../..\\components\\password\\ChangePassword.vue' /* webpackChunkName: "components/password-change-password" */).then(c => wrapFunctional(c.default || c)),
  ProfileEditProfile: () => import('../..\\components\\profile\\EditProfile.vue' /* webpackChunkName: "components/profile-edit-profile" */).then(c => wrapFunctional(c.default || c)),
  ProfileUserImage: () => import('../..\\components\\profile\\UserImage.vue' /* webpackChunkName: "components/profile-user-image" */).then(c => wrapFunctional(c.default || c)),
  ProfileUserInfo: () => import('../..\\components\\profile\\UserInfo.vue' /* webpackChunkName: "components/profile-user-info" */).then(c => wrapFunctional(c.default || c)),
  ProfileWorkplace: () => import('../..\\components\\profile\\Workplace.vue' /* webpackChunkName: "components/profile-workplace" */).then(c => wrapFunctional(c.default || c)),
  SnackbarCancelSB: () => import('../..\\components\\Snackbar\\CancelSB.vue' /* webpackChunkName: "components/snackbar-cancel-s-b" */).then(c => wrapFunctional(c.default || c)),
  SnackbarResetPassSB: () => import('../..\\components\\Snackbar\\ResetPassSB.vue' /* webpackChunkName: "components/snackbar-reset-pass-s-b" */).then(c => wrapFunctional(c.default || c)),
  SnackbarSendSB: () => import('../..\\components\\Snackbar\\SendSB.vue' /* webpackChunkName: "components/snackbar-send-s-b" */).then(c => wrapFunctional(c.default || c)),
  SnackbarSubmitSB: () => import('../..\\components\\Snackbar\\SubmitSB.vue' /* webpackChunkName: "components/snackbar-submit-s-b" */).then(c => wrapFunctional(c.default || c)),
  SnackbarUpdateProfileSB: () => import('../..\\components\\Snackbar\\UpdateProfileSB.vue' /* webpackChunkName: "components/snackbar-update-profile-s-b" */).then(c => wrapFunctional(c.default || c)),
  SnackbarValidateSB: () => import('../..\\components\\Snackbar\\ValidateSB.vue' /* webpackChunkName: "components/snackbar-validate-s-b" */).then(c => wrapFunctional(c.default || c)),
  CaseComment: () => import('../..\\components\\case\\detail\\CaseComment.vue' /* webpackChunkName: "components/case-comment" */).then(c => wrapFunctional(c.default || c)),
  CaseInfo: () => import('../..\\components\\case\\detail\\CaseInfo.vue' /* webpackChunkName: "components/case-info" */).then(c => wrapFunctional(c.default || c)),
  CaseDetailCommentLog: () => import('../..\\components\\case\\detail\\CommentLog.vue' /* webpackChunkName: "components/case-detail-comment-log" */).then(c => wrapFunctional(c.default || c)),
  CaseDetailIncidentDetail: () => import('../..\\components\\case\\detail\\IncidentDetail.vue' /* webpackChunkName: "components/case-detail-incident-detail" */).then(c => wrapFunctional(c.default || c)),
  CaseDetailReceiverInfo: () => import('../..\\components\\case\\detail\\ReceiverInfo.vue' /* webpackChunkName: "components/case-detail-receiver-info" */).then(c => wrapFunctional(c.default || c)),
  CaseDetailRequestDetail: () => import('../..\\components\\case\\detail\\RequestDetail.vue' /* webpackChunkName: "components/case-detail-request-detail" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
