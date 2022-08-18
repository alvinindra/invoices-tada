<template>
  <div class="flex flex-row">
    <div class="my-auto">
      <div class="dark:text-white font-medium tracking-wide text-xl md:text-3xl mb-0 sm:mb-2 md:mb-4">
        Invoices
      </div>
      <div class="flex dark:text-gray-300 text-sm">
        <span class="hidden md:block">There are</span>&nbsp;{{ invoices.length }}
        <span class="hidden md:block">&nbsp;total&nbsp;</span> invoices
      </div>
    </div>
    <div class="my-auto ml-auto flex">
      <div class="flex font-semibold my-auto text-sm">
        <client-only>
          <select
            v-model="selectedFilter"
            class="py-2 my-auto cursor-pointer bg-gray-100 dark:bg-black-secondary
          text-black-primary dark:text-white text-sm pr-4
          hover:outline rounded"
            @change="handleFilter"
          >
            <option class="text-sm" value="" selected>
              <span v-if="windowWidth < 768">Filter</span>
              <span v-else>Filter by Status</span>
            </option>
            <option v-for="(option, index) in filterByStatusData" :key="index" class="text-sm" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </client-only>
      </div>
      <div class="ml-4 md:ml-8">
        <BaseButton prefix @click="showModalAdd">
          <div class="flex">
            <div class="flex items-center justify-center bg-white rounded-full w-8 h-8 mr-2 sm:mr-4">
              <fa :icon="[ 'fas', 'plus' ]" class="text-primary-400 my-auto" />
            </div>
            <span class="my-auto flex">New&nbsp;<span class="hidden md:block">Invoice</span></span>
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
      windowWidth: process.browser ? window.innerWidth : 0,
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
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    ...mapMutations(['SET_MODAL', 'SET_MODAL_TYPE']),
    onResize () {
      this.windowWidth = window.innerWidth
    },
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
