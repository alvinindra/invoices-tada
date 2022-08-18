<template>
  <div class="flex flex-col md:flex-row bg-white dark:bg-black-primary rounded-lg py-5 px-4 sm:px-8 mb-6">
    <div class="dark:text-white my-auto mb-6 md:mb-0">
      <div class="flex dark:text-gray-300 text-sm">
        <div class="my-auto mr-2">
          Status:
        </div>
        <InvoiceTagStatus class="!px-4 ml-auto md:ml-0 max-w-fit md:w-auto" :status="invoice?.status" />
      </div>
    </div>
    <div v-if="invoice" class="grid grid-flow-col grid-cols-2 md:grid-cols-none gap-2 justify-between md:ml-auto">
      <BaseButton class="px-4 md:px-3" color="secondary" wide @click="showModalEdit">
        Edit
      </BaseButton>
      <BaseButton class="px-4 md:px-3" color="danger" wide @click="handleDeleteInvoice">
        Delete
      </BaseButton>
      <BaseButton v-if="invoice.status !== 'Paid'" class="px-4 md:px-3" color="primary" wide @click="handleUpdateStatus">
        Mark as {{ invoice.status === 'Pending' ? 'Paid' : 'Pending' }}
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['dark']),
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
      this.$Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        color: this.dark ? '#fff' : '#1f2937',
        background: this.dark ? '#1F2937' : '#fff',
        confirmButtonColor: '#DD4446',
        cancelButtonColor: '#9fa0a8',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.DELETE_INVOICE(this.invoice.invoice_number)
          this.$Swal.fire({
            title: 'Deleted!',
            text: 'Invoice has been deleted successfully.',
            icon: 'success',
            color: this.dark ? '#fff' : '#1f2937',
            background: this.dark ? '#1F2937' : '#fff',
            confirmButtonColor: '#DD4446',
            cancelButtonColor: '#9fa0a8'
          })
          this.$router.push('/')
        }
      })
    },
    handleUpdateStatus () {
      this.UPDATE_INVOICE_STATUS(this.invoice)
      this.$Swal.fire({
        title: 'Updated!',
        text: 'Invoice has been updated successfully.',
        icon: 'success',
        color: this.dark ? '#fff' : '#1f2937',
        background: this.dark ? '#1F2937' : '#fff',
        confirmButtonColor: '#DD4446',
        cancelButtonColor: '#9fa0a8'
      })
    }
  }
}
</script>
