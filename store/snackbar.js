export const state = () => ({
  SendSB: false,
  ValidateSB: false,
  SubmitSB: false,
  CancelSB: false,
  UpdateProfileSB: false,
  ResetPassSB: false,
})

export const mutations = {
  set_SendSB(state, NewState) {
    state.SendSB = NewState
  },
  set_ValidateSB(state, NewState) {
    state.ValidateSB = NewState
  },
  set_SubmitSB(state, NewState) {
    state.SubmitSB = NewState
  },
  set_CancelSB(state, NewState) {
    state.CancelSB = NewState
  },
  set_UpdateProfileSB(state, NewState) {
    state.UpdateProfileSB = NewState
  },
  set_ResetPassSB(state, NewState) {
    state.ResetPassSB = NewState
  },
}

export const actions = {
  setSendSB({ commit }, NewState) {
    commit('set_SendSB', NewState)
    setTimeout(() => {
      commit('set_SendSB', false)
    }, 5000)
  },
  setValidateSB({ commit }, NewState) {
    commit('set_ValidateSB', NewState)
    setTimeout(() => {
      commit('set_ValidateSB', false)
    }, 5000)
  },
  setSubmitSB({ commit }, NewState) {
    commit('set_SubmitSB', NewState)
    setTimeout(() => {
      commit('set_SubmitSB', false)
    }, 5000)
  },
  setCancelSB({ commit }, NewState) {
    commit('set_CancelSB', NewState)
    setTimeout(() => {
      commit('set_CancelSB', false)
    }, 5000)
  },
  setUpdateProfileSB({ commit }, NewState) {
    commit('set_UpdateProfileSB', NewState)
    setTimeout(() => {
      commit('set_UpdateProfileSB', false)
    }, 5000)
  },
  setResetPassSB({ commit }, NewState) {
    commit('set_ResetPassSB', NewState)
    setTimeout(() => {
      commit('set_ResetPassSB', false)
    }, 5000)
  },
}
