<template>
  <div class="flex bg-white dark:bg-black-primary rounded-lg py-5 px-8 mb-6">
    <div class="dark:text-white my-auto">
      <div class="flex dark:text-gray-300 text-sm">
        <div class="my-auto mr-2">
          Status:
        </div>
        <InvoiceTagStatus class="!px-4" status="Pending" />
      </div>
    </div>
    <div class="grid grid-flow-col gap-2 ml-auto">
      <BaseButton color="secondary" wide @click="showModalEdit">
        Edit
      </BaseButton>
      <BaseButton color="danger" wide>
        Delete
      </BaseButton>
      <BaseButton color="primary" wide>
        Mark as Paid
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('invoice', ['invoices'])
  },
  methods: {
    ...mapMutations(['SET_MODAL', 'SET_MODAL_TYPE']),
    showModalEdit () {
      this.SET_MODAL(true)
      this.SET_MODAL_TYPE('edit')
      document.body.classList.add('modal-open')
    }
  }
}
</script>
