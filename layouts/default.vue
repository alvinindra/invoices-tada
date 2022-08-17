<template>
  <div
    id="app"
    :class="dark ? 'dark' : 'light'"
    class="min-h-screen min-w-full bg-white dark:bg-black-secondary"
  >
    <LayoutNavigation />
    <main class="bg-gray-100 dark:bg-black-secondary min-h-screen">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>
