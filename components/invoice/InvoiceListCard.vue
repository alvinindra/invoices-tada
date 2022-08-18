<template>
  <div
    v-if="invoice"
    class="flex flex-row mb-4 items-center py-4 px-5 text-sm rounded-lg justify-between
  bg-white dark:bg-black-primary dark:text-white text-center cursor-pointer transition
    w-full border-2 border-transparent hover:border-2 hover:border-primary-400 hover:dark:border-gray-400"
    @click="goToInvoice(invoice.invoice_number)"
  >
    <div class="px-2 text-left flex-initial font-medium min-w-[100px]">
      <span class="text-primary-300">#</span>{{ invoice.invoice_number }}
    </div>
    <div class="px-2 text-left flex-1 dark:text-gray-300">
      Due {{ formatDate(invoice.due_date) }}
    </div>
    <div class="px-2 text-left whitespace-nowrap flex-1 dark:text-gray-300">
      {{ invoice.name }}
    </div>
    <div class="pl-2 pr-6 text-right flex-1 font-medium text-lg">
      {{ formatAmount(invoice.amount) }}
    </div>
    <InvoiceTagStatus :status="invoice.status" />
    <div class="flex-none text-primary-300 ml-4">
      <fa :icon="['fas','chevron-right']" size="sm" />
    </div>
  </div>
</template>

<script>
import global from '@/mixins/global'

export default {
  mixins: [global],
  props: {
    invoice: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToInvoice (invoiceNumber) {
      this.$router.push(`/invoice/${invoiceNumber}`)
    }
  }
}
</script>
