export const state = () => ({
  dark: true,
  openModal: false
})

export const mutations = {
  SET_DARK (state, bool) {
    state.dark = bool
  },
  SET_MODAL (state, bool) {
    state.openModal = bool
  }
}

export const getters = {
  dark: state => state.dark
}
