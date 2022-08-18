<template>
  <div>
    <InvoiceList />
    <transition name="slide-left-right" appear>
      <InvoiceModal v-if="openModal" />
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomePage',
  computed: {
    ...mapState(['openModal'])
  },
  mounted () {
    this.setInvoices()
  },
  methods: {
    ...mapActions('invoice', ['setInvoices'])
  }
}
</script>
