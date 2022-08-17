<template>
  <div class="flex flex-row">
    <div class="my-auto">
      <div class="dark:text-white font-medium tracking-wide text-3xl mb-4">
        Invoices
      </div>
      <div class="dark:text-gray-300 text-sm">
        There are {{ invoices.length }} total invoices
      </div>
    </div>
    <div class="my-auto ml-auto flex text-white">
      <div class="flex font-semibold my-auto text-sm">
        <span class="my-auto dark:text-white text-black-primary">Filter by status</span>
        <div class="my-auto text-primary-300 font-extrabold ml-4">
          <fa :icon="['fas','chevron-down']" size="sm" />
        </div>
      </div>
      <div class="ml-8">
        <BaseButton prefix>
          <div class="flex">
            <div class="flex items-center justify-center bg-white rounded-full w-8 h-8 mr-4">
              <fa :icon="[ 'fas', 'plus' ]" class="text-primary-400 my-auto" />
            </div>
            <span class="my-auto">New Invoice</span>
          </div>
        </BaseButton>
      </div>
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
