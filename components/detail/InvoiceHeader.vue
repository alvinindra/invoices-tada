<template>
  <div class="flex bg-white dark:bg-black-primary rounded-lg py-5 px-8 mb-6">
    <div class="dark:text-white my-auto">
      <div class="flex dark:text-gray-300 text-sm">
        <div class="my-auto mr-2">
          Status:
        </div>
        <InvoiceTagStatus class="!px-4" :status="invoice?.status" />
      </div>
    </div>
    <div v-if="invoice" class="grid grid-flow-col gap-2 ml-auto">
      <BaseButton color="secondary" wide @click="showModalEdit">
        Edit
      </BaseButton>
      <BaseButton color="danger" wide @click="handleDeleteInvoice">
        Delete
      </BaseButton>
      <BaseButton v-if="invoice.status !== 'Paid'" color="primary" wide @click="handleUpdateStatus">
        Mark as {{ invoice.status === 'Pending' ? 'Paid' : 'Pending' }}
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('invoice', ['invoice'])
  },
  methods: {
    ...mapMutations(['SET_MODAL', 'SET_MODAL_TYPE']),
    ...mapMutations('invoice', ['UPDATE_INVOICE_STATUS', 'DELETE_INVOICE']),
    showModalEdit () {
      this.SET_MODAL(true)
      this.SET_MODAL_TYPE('edit')
      document.body.classList.add('modal-open')
    },
    handleDeleteInvoice () {
      this.DELETE_INVOICE(this.invoice.invoice_number)
      this.$router.push('/')
    },
    handleUpdateStatus () {
      this.UPDATE_INVOICE_STATUS(this.invoice)
    }
  }
}
</script>
