<template>
  <div>
    <InvoiceList />
    <transition name="slide-left-right" appear>
      <InvoiceModal v-if="openModal" />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomePage',
  computed: {
    ...mapState(['openModal'])
  }
}
</script>
