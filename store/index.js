export const state = () => ({
  dark: true
})

export const getters = {
  dark: state => state.dark
}

export const mutations = {
  SET_DARK: (state, bool) => {
    state.dark = bool
  }
}
