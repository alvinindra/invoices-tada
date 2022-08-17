<template>
  <div class="mx-auto md:max-w-screen-sm lg:max-w-screen-md px-12 sm:px-0 container pt-24 pb-24">
    <InvoiceListHeader class="mb-16" />
    <div class="flex flex-col">
      <InvoiceListCard v-for="invoice in invoices" :key="invoice.invoice_number" :invoice="invoice" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('invoice', ['invoices'])
  }
}
</script>
