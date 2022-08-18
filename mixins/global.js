export default {
  methods: {
    formatDate (dueDate) {
      const date = new Date(dueDate)
      return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    },
    formatAmount (amount) {
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
      })
        .format(amount)
        .replace(/^(\D+)/, '$1 ')
    }
  }
}
