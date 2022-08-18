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
  },
  ADD_INVOICE (state, payload) {
    state.invoices.push(payload)
    localStorage.setItem('invoices', JSON.stringify(state.invoices))
  },
  EDIT_INVOICE (state, payload) {
    const indexInvoice = state.invoices.findIndex(
      invoice => invoice.invoice_number === payload.invoice_number
    )

    state.invoices[indexInvoice] = { ...payload }
    localStorage.setItem('invoices', JSON.stringify(state.invoices))
  },
  UPDATE_INVOICE_STATUS (state, payload) {
    const indexInvoice = state.invoices.findIndex(
      invoice => invoice.invoice_number === payload.invoice_number
    )

    if (payload.status === 'Pending') {
      state.invoices[indexInvoice].status = 'Paid'
      state.invoice.status = 'Paid'
    } else if (payload.status === 'Draft') {
      state.invoices[indexInvoice].status = 'Pending'
      state.invoice.status = 'Pending'
    }

    localStorage.setItem('invoices', JSON.stringify(state.invoices))
  },
  DELETE_INVOICE (state, payload) {
    const indexInvoice = state.invoices.findIndex(
      invoice => invoice.invoice_number === payload
    )

    state.invoices.splice(indexInvoice, 1)
    localStorage.setItem('invoices', JSON.stringify(state.invoices))
  }
}

export const actions = {
  setInvoices ({ commit }) {
    const invoicesData = JSON.stringify(invoicesDataJson)
    if (localStorage.getItem('invoices') === null) {
      localStorage.setItem('invoices', invoicesData)
      commit('SET_INVOICES', JSON.parse(invoicesData))
    } else {
      commit('SET_INVOICES', JSON.parse(localStorage.getItem('invoices')))
    }
  }
}
