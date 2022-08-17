<template>
  <InvoiceList />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HomePage',
  mounted () {
    this.setInvoices()
  },
  methods: {
    ...mapActions('invoice', ['setInvoices'])
  }
}
</script>
