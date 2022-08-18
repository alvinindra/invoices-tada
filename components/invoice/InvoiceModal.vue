<template>
  <div class="min-h-screen min-w-full bg-black-secondary bg-opacity-80 fixed flex md:top-0 top-16 md:left-24 left-0 bottom-0">
    <div class="relative p-5 md:px-9 md:py-10 md:w-md sm:w-[616px] w-full min-h-screen md:rounded-r-2xl bg-gray-100 dark:bg-black-secondary">
      <form class="overflow-y-auto" @submit="handleSubmit">
        <div class="dark:text-white text-2xl font-bold mb-10 px-4">
          <template v-if="modalType === 'add'">
            Add New Invoice
          </template>
          <template v-else>
            Edit <span class="text-gray-400">#</span>{{ invoice.invoice_number }}
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
                  required
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
                    required
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
                    required
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
                    required
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
                required
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
                required
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
                required
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
                  required
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
                  required
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
                  required
                >
              </div>
            </div>
          </div>
          <div class="mb-12">
            <div class="flex gap-7 mb-6">
              <div class="flex-1">
                <label for="bill_to_post_code" class="form-label">Invoice Date</label>
                <input
                  id="due_date"
                  v-model="formInvoice.due_date"
                  type="date"
                  class="form-control"
                  :class="[
                    {'form-control--date': dark},
                    {'cursor-not-allowed opacity-50': modalType === 'edit'}
                  ]"
                  placeholder="Due Date"
                  :disabled="modalType === 'edit'"
                  required
                >
              </div>
              <div class="flex-1">
                <label for="bill_to_country" class="form-label">Payment Terms</label>
                <select
                  v-model="formInvoice.payment_terms"
                  placeholder="Choose Terms"
                  class="form-control"
                >
                  <option value="">
                    Choose Terms
                  </option>
                  <option value="30">
                    Net 30 Days
                  </option>
                  <option value="60">
                    Net 60 Days
                  </option>
                  <option value="90">
                    Net 90 Days
                  </option>
                </select>
              </div>
            </div>
            <div class="mb-6">
              <label for="project_description" class="form-label">Project Description</label>
              <input
                id="street_address"
                v-model="formInvoice.project_description"
                type="text"
                class="form-control"
                placeholder="Project Description"
                required
              >
            </div>
          </div>
          <div class="mb-12">
            <div class="mb-6 dark:text-gray-400">
              Item List
            </div>
            <div class="flex">
              <div class="flex-[1_1_36%]">
                <label for="bill_to_city" class="form-label">Item Name</label>
              </div>
              <div class="flex-[1_1_4%]">
                <label for="bill_to_post_code" class="form-label">Qty.</label>
              </div>
              <div class="flex-[1_1_10%]">
                <label for="bill_to_country" class="form-label">Price</label>
              </div>
              <div class="flex-[1_1_10%]">
                <label for="bill_to_country" class="form-label">Total</label>
              </div>
              <div class="flex-auto" />
            </div>
            <div v-for="(list_items, itemsIndex) in formInvoice.list_items" :key="itemsIndex" class="flex gap-[14px] mb-4">
              <div class="flex-[1_1_36%]">
                <input
                  id="item_name"
                  v-model="list_items.name"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  required
                >
              </div>
              <div class="flex-[1_1_4%]">
                <input
                  id="item_qty"
                  v-model.number="list_items.qty"
                  type="text"
                  class="form-control"
                  placeholder="0"
                  required
                >
              </div>
              <div class="flex-[1_1_10%]">
                <input
                  id="item_price"
                  v-model="list_items.price"
                  type="text"
                  class="form-control"
                  placeholder="Price"
                  required
                >
              </div>
              <div class="flex flex-[1_1_10%]">
                <div class="my-auto dark:text-white">
                  {{ list_items.price * list_items.qty }}
                </div>
              </div>
              <div class="flex flex-auto dark:text-[#8381A9]">
                <fa class="my-auto cursor-pointer" :icon="['fas', 'trash']" style="font-size: 14px" @click="handleDeleteItem(itemsIndex)" />
              </div>
            </div>
            <BaseButton
              class="flex w-full text-center mt-2 justify-center"
              color="secondary"
              type="button"
              @click="addListItem"
            >
              <fa :icon="[ 'fas', 'plus' ]" class="my-auto mr-1" style="font-size: 10px" />
              <div class="my-auto">
                Add Item
              </div>
            </BaseButton>
          </div>
          <!-- Item List -->
        </div>
        <div class="bg-gray-100 dark:bg-black-secondary text-right absolute bottom-16 md:bottom-0 right-0 px-14 py-8 w-full">
          <BaseButton type="button" class="mr-2" color="secondary" wide @click="handleCloseModal">
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
        invoice_number: '',
        due_date: '',
        name: '',
        amount: '',
        payment_terms: '',
        project_description: '',
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
        },
        list_items: [
          {
            name: '',
            qty: '',
            price: ''
          }
        ]
      }
    }
  },
  computed: {
    ...mapState(['modalType']),
    ...mapState('invoice', ['invoices', 'invoice']),
    ...mapGetters(['dark'])
  },
  created () {
    if (this.modalType === 'edit') {
      this.formInvoice = Object.assign({}, JSON.parse(JSON.stringify(this.invoice)))
    }
  },
  methods: {
    ...mapMutations(['SET_MODAL']),
    ...mapMutations('invoice', ['ADD_INVOICE', 'EDIT_INVOICE']),
    handleCloseModal () {
      this.SET_MODAL(false)
      document.body.classList.remove('modal-open')
    },
    addListItem () {
      this.formInvoice.list_items.push({
        name: '',
        qty: '',
        price: ''
      })
    },
    generateInvoiceNumber (length) {
      let result = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const charactersLength = characters.length
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
        charactersLength))
      }
      return result.toLocaleUpperCase()
    },
    handleDeleteItem (itemIndex) {
      this.formInvoice.list_items.splice(itemIndex, 1)
    },
    handleSubmit () {
      if (this.modalType === 'add') {
        this.formInvoice.invoice_number = this.generateInvoiceNumber(6)
        this.formInvoice.status = 'Draft'
        this.formInvoice.amount = this.formInvoice.list_items.reduce((acc, item) => {
          return acc + (item.qty * item.price)
        }, 0)
        this.ADD_INVOICE(this.formInvoice)
      } else {
        this.formInvoice.amount = this.formInvoice.list_items.reduce((acc, item) => {
          return acc + (item.qty * item.price)
        }, 0)
        this.EDIT_INVOICE(this.formInvoice)
      }
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
  block w-full p-4 font-semibold;
}

.form-control--date {
  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
}
</style>
