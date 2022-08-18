<template>
  <div v-if="invoice" class="bg-white dark:bg-black-primary rounded-lg py-8 px-12">
    <div class="flex mb-4">
      <div class="my-auto">
        <div class="mb-2">
          <div class="dark:text-gray-300 text-sm mb-2">
            Invoice Number
          </div>
          <div class="font-medium text-xl dark:text-white">
            <span class="text-primary-300">#</span>{{ invoice.invoice_number }}
          </div>
        </div>
        <div class="dark:text-gray-300 text-sm mb-2">
          Due Date
        </div>
        <div class="text-sm dark:text-white">
          {{ formatDate(invoice.due_date) }}
        </div>
      </div>
      <div class="my-auto ml-auto text-right text-sm dark:text-gray-300">
        <div>{{ invoice.bill_from?.street_address }}</div>
        <div>{{ invoice.bill_from?.city }}</div>
        <div>{{ invoice.bill_from?.post_code }}</div>
        <div>{{ invoice.bill_from?.country }}</div>
      </div>
    </div>
    <div class="flex text-sm justify-between items-center mb-4">
      <div class="flex-1 pr-8">
        <div class="dark:text-gray-300 mb-3">
          Full Name
        </div>
        <div class="dark:text-white text-base font-medium">
          {{ invoice.name }}
        </div>
      </div>
      <div class="flex-1 pr-8">
        <div class="dark:text-gray-300 mb-3">
          Amount
        </div>
        <div class="dark:text-white text-base font-medium">
          {{ formatAmount(invoice.amount) }}
        </div>
      </div>
      <div class="flex-1 pr-8">
        <div class="dark:text-gray-300 mb-3">
          Sent to
        </div>
        <div class="dark:text-white text-base font-medium">
          {{ invoice.bill_to?.email }}
        </div>
      </div>
    </div>
    <div class="flex text-sm justify-between items-center mb-4">
      <div class="flex-1">
        <div class="dark:text-gray-300 mb-3">
          Address
        </div>
        <div class="dark:text-white text-base font-medium">
          {{ invoice.bill_to?.street_address }}, {{ invoice.bill_to?.city }},
          {{ invoice.bill_to?.post_code }}, {{ invoice.bill_to?.country }}
        </div>
      </div>
    </div>
    <div v-if="invoice.list_items?.length" class="flex flex-col">
      <div class="text-xl font-medium dark:text-gray-300 mb-4">
        Item List
      </div>
      <div class="bg-gray-400 dark:bg-black-tertiary rounded-t-lg p-8">
        <div class="flex dark:text-gray-300 justify-between text-sm mb-4">
          <div class="flex-[1_1_30%]">
            Item Name
          </div>
          <div class="flex-1  text-center">
            QTY.
          </div>
          <div class="flex-1 px-4 text-right">
            Price
          </div>
          <div class="flex-1 text-right">
            Total
          </div>
        </div>
        <div v-for="(item, indexItem) in invoice.list_items" :key="indexItem" class="flex dark:text-white justify-between text-sm my-4 last:mb-0">
          <div class="flex-[1_1_30%]">
            {{ item.name }}
          </div>
          <div class="flex-1  text-center">
            {{ item.qty }}
          </div>
          <div class="flex-1 px-4 text-right">
            {{ formatAmount(item.price) }}
          </div>
          <div class="flex-1 text-right">
            {{ formatAmount(item.total) }}
          </div>
        </div>
      </div>
      <div class="flex bg-gray-600 dark:bg-black-secondary rounded-b-lg py-7 px-8">
        <div class="my-auto dark:text-white font-medium text-xl">
          Total
        </div>
        <div class="my-auto ml-auto dark:text-white text-xl">
          {{ formatAmount(invoice.amount) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import global from '@/mixins/global'

export default {
  mixins: [global],
  computed: {
    ...mapState('invoice', ['invoice'])
  }
}
</script>
