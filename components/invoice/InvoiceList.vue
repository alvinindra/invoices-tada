<template>
  <div class="mx-auto md:ml-32 lg:mx-auto md:max-w-screen-sm lg:max-w-screen-md px-6 sm:px-12 md:px-6 lg:px-0 container pt-24 pb-24">
    <InvoiceListHeader class="mb-6 sm:mb-12 md:mb-16" />
    <div v-if="filteredInvoices.length" class="flex flex-col">
      <InvoiceListCard v-for="invoice in filteredInvoices" :key="invoice.invoice_number" :invoice="invoice" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      selectedFilter: this.$route.query.status || ''
    }
  },
  computed: {
    ...mapState('invoice', ['invoices']),
    filteredInvoices () {
      if (this.selectedFilter === '') {
        return this.invoices
      } else {
        return this.invoices.filter(invoice => invoice.status === this.selectedFilter)
      }
    }
  },
  watch: {
    '$route.query.status' (value) {
      this.selectedFilter = value || ''
    }
  }
}
</script>
