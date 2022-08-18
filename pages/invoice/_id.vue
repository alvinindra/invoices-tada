<template>
  <div class="mx-auto md:max-w-screen-sm lg:max-w-screen-md px-12 sm:px-0 container pt-24 pb-24">
    <DetailInvoiceHeader />
    <DetailInvoiceBody />
    <transition name="slide-left-right" appear>
      <InvoiceModal v-if="openModal" />
    </transition>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      invoiceNumber: this.$route.params.id || ''
    }
  },
  computed: {
    ...mapState(['openModal'])
  },
  mounted () {
    this.setInvoices()
    this.SET_DETAIL_INVOICE(this.invoiceNumber)
  },
  methods: {
    ...mapActions('invoice', ['setInvoices']),
    ...mapMutations('invoice', ['SET_DETAIL_INVOICE'])
  }
}
</script>
