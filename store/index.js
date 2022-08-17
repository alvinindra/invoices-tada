export const state = () => ({
  dark: true,
  openModal: false,
  modalType: 'add'
})

export const mutations = {
  SET_DARK (state, bool) {
    state.dark = bool
  },
  SET_MODAL (state, bool) {
    state.openModal = bool
  },
  SET_MODAL_TYPE (state, type) {
    state.modalType = type
  }
}

export const getters = {
  dark: state => state.dark
}
