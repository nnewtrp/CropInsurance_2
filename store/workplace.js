export const state = () => ({
  storeWPname: '',
  storeCountry: '',
  storeBranch: '',
  storeDepartment: '',
})

export const mutations = {
  set_storeWPname(state, Value) {
    state.storeWPname = Value
  },
  set_storeCountry(state, Value) {
    state.storeCountry = Value
  },
  set_storeBranch(state, Value) {
    state.storeBranch = Value
  },
  set_storeDepartment(state, Value) {
    state.storeDepartment = Value
  },
}
