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
    <div class="my-auto ml-auto flex">
      <div class="flex font-semibold my-auto text-sm">
        <select
          v-model="selectedFilter"
          class="py-2 my-auto cursor-pointer bg-gray-100 dark:bg-black-secondary
          text-black-primary dark:text-white text-sm pr-4
          hover:outline rounded"
          @change="handleFilter"
        >
          <option value="" selected>
            Filter by status
          </option>
          <option v-for="(option, index) in filterByStatusData" :key="index" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
      <div class="ml-8">
        <BaseButton prefix @click="showModalAdd">
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
import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      selectedFilter: this.$route.query.status || '',
      filterByStatusData: [
        {
          value: 'Paid',
          label: 'Paid'
        },
        {
          value: 'Pending',
          label: 'Pending'
        },
        {
          value: 'Draft',
          label: 'Draft'
        }
      ]
    }
  },
  computed: {
    ...mapState('invoice', ['invoices'])
  },
  methods: {
    ...mapMutations(['SET_MODAL', 'SET_MODAL_TYPE']),
    showModalAdd () {
      this.SET_MODAL(true)
      this.SET_MODAL_TYPE('add')
      document.body.classList.add('modal-open')
    },
    handleFilter () {
      this.$router.push({
        query: {
          status: this.selectedFilter
        }
      })
    }
  }
}
</script>
