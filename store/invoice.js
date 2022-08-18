import invoicesDataJson from '@/data/invoices.json'

export const state = () => ({
  invoices: [],
  invoice: {}
})

export const mutations = {
  SET_INVOICES (state, payload) {
    state.invoices = [...payload]
  },
  SET_DETAIL_INVOICE (state, payload) {
    const detailInvoice = state.invoices.find(
      invoice => invoice.invoice_number === payload
    )

    state.invoice = { ...detailInvoice }
  }
}

export const actions = {
  setInvoices ({ commit }) {
    const invoicesData = JSON.stringify(invoicesDataJson)
    const invoicesLocalStorage =
      JSON.parse(localStorage.getItem('invoices')) || null
    if (invoicesLocalStorage === null) {
      localStorage.setItem('invoices', invoicesData)
      commit('SET_INVOICES', invoicesData)
    } else {
      commit('SET_INVOICES', invoicesLocalStorage)
    }
  }
}
