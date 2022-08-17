<template>
  <div class="min-h-screen min-w-full bg-black-secondary bg-opacity-80 fixed flex md:top-0 top-16 md:left-24 left-0 bottom-0">
    <div class="relative p-5 md:px-9 md:py-10 md:w-md sm:w-[616px] w-full min-h-screen md:rounded-r-2xl bg-gray-100 dark:bg-black-secondary">
      <form class="overflow-y-auto">
        <div class="dark:text-white text-2xl font-bold mb-10 px-4">
          <template v-if="modalType === 'add'">
            Add New Invoice
          </template>
          <template v-else>
            Edit <span class="text-gray-400">#</span>XM9141
          </template>
        </div>
        <div class="form-body">
          <!-- Bill From -->
          <div class="mb-12">
            <label for="bill_from" class="block text-sm text-primary-400 mb-6">Bill From</label>
            <div class="block">
              <div class="mb-6">
                <label for="street_address" class="form-label">Street Address</label>
                <input
                  id="street_address"
                  v-model="formInvoice.bill_from.street_address"
                  type="text"
                  class="form-control"
                  placeholder="Street Address"
                >
              </div>

              <div class="flex gap-7">
                <div>
                  <label for="city" class="form-label">City</label>
                  <input
                    id="city"
                    v-model="formInvoice.bill_from.city"
                    type="text"
                    class="form-control"
                    placeholder="City"
                  >
                </div>
                <div>
                  <label for="post_code" class="form-label">Post Code</label>
                  <input
                    id="post_code"
                    v-model="formInvoice.bill_from.post_code"
                    type="text"
                    class="form-control"
                    placeholder="Post Code"
                  >
                </div>
                <div>
                  <label for="country" class="form-label">Country</label>
                  <input
                    id="country"
                    v-model="formInvoice.bill_from.country"
                    type="text"
                    class="form-control"
                    placeholder="Country"
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Bill To -->
          <div class="mb-12">
            <label for="bill_to" class="block text-sm text-primary-400 mb-6">Bill To</label>
            <div class="mb-6">
              <label for="full_name" class="form-label">Client's Name</label>
              <input
                id="street_address"
                v-model="formInvoice.name"
                type="text"
                class="form-control"
                placeholder="Full Name"
              >
            </div>
            <div class="mb-6">
              <label for="email" class="form-label">Client's Email</label>
              <input
                id="street_address"
                v-model="formInvoice.bill_to.email"
                type="email"
                class="form-control"
                placeholder="Email"
              >
            </div>
            <div class="mb-6">
              <label for="bill_to_street_address" class="form-label">Street Address</label>
              <input
                id="street_address"
                v-model="formInvoice.bill_to.street_address"
                type="text"
                class="form-control"
                placeholder="Street Address"
              >
            </div>
            <div class="flex gap-7">
              <div>
                <label for="bill_to_city" class="form-label">City</label>
                <input
                  id="city"
                  v-model="formInvoice.bill_to.city"
                  type="text"
                  class="form-control"
                  placeholder="City"
                >
              </div>
              <div>
                <label for="bill_to_post_code" class="form-label">Post Code</label>
                <input
                  id="post_code"
                  v-model="formInvoice.bill_to.post_code"
                  type="text"
                  class="form-control"
                  placeholder="Post Code"
                >
              </div>
              <div>
                <label for="bill_to_country" class="form-label">Country</label>
                <input
                  id="country"
                  v-model="formInvoice.bill_to.country"
                  type="text"
                  class="form-control"
                  placeholder="Country"
                >
              </div>
            </div>
          </div>
          <div class="mb-12">
            <div class="flex gap-7">
              <div class="flex-1">
                <label for="bill_to_post_code" class="form-label">Invoice Date</label>
                <input
                  id="due_date"
                  v-model="formInvoice.due_date"
                  type="date"
                  class="form-control"
                  :class="{'form-control--date': dark}"
                  placeholder="Due Date"
                >
              </div>
              <div class="flex-1">
                <label for="bill_to_country" class="form-label">Payment Terms</label>
                <input
                  id="payment_terms"
                  v-model="formInvoice.payment_terms"
                  type="text"
                  class="form-control"
                  placeholder="Payment Terms"
                >
              </div>
            </div>
          </div>
          <!-- Item List -->
        </div>
        <div class="bg-gray-100 dark:bg-black-secondary text-right absolute bottom-16 md:bottom-0 right-0 px-14 py-8 w-full">
          <BaseButton type="button" class="mr-2" color="secondary" wide @click="hideModalAdd">
            Close
          </BaseButton>
          <BaseButton type="submit" color="primary" wide>
            Save Changes
          </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      formInvoice: {
        name: '',
        due_date: '',
        payment_terms: '',
        bill_from: {
          street_address: '',
          city: '',
          post_code: '',
          country: ''
        },
        bill_to: {
          email: '',
          street_address: '',
          city: '',
          post_code: '',
          country: ''
        }
      }
    }
  },
  computed: {
    ...mapState(['modalType']),
    ...mapState('invoice', ['invoices']),
    ...mapGetters(['dark'])
  },
  methods: {
    ...mapMutations(['SET_MODAL']),
    hideModalAdd () {
      this.SET_MODAL(false)
      document.body.classList.remove('modal-open')
    }
  }
}
</script>

<style lang="scss" scoped>
.form-body {
  @apply overflow-auto;
  max-height: calc(100vh - 12rem);
  height: 100%;
  padding: 0 1rem 2rem 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f10d;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
    transition: all 0.3s linear;
  }
}

.form-label {
  @apply block mb-2 text-sm dark:text-gray-300;
}

.form-control {
  @apply bg-white dark:bg-black-primary border dark:border-black-primary
text-gray-700 dark:text-gray-300 text-sm rounded-md focus:border-gray-500
  block w-full p-4;
}

.form-control--date {
  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
}
</style>
