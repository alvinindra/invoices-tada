import invoicesDataJson from '@/data/invoices.json'

export const state = () => ({
  invoices: []
})

export const mutations = {
  SET_INVOICES (state, payload) {
    state.invoices = [...payload]
  }
}

export const actions = {
  setInvoices ({ commit }) {
    const invoicesData = JSON.stringify(invoicesDataJson)
    const invoicesLocalStorage =
      JSON.parse(localStorage.getItem('invoices')) || null
    console.log(invoicesLocalStorage)
    if (invoicesLocalStorage === null) {
      localStorage.setItem('invoices', invoicesData)
      commit('SET_INVOICES', invoicesData)
    } else {
      commit('SET_INVOICES', invoicesLocalStorage)
    }
  }
}
