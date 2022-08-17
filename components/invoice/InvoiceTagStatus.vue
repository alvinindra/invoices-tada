<template>
  <div class="flex flex-1 justify-center px-2 py-2 font-medium rounded-md w-full text-center" :class="statusStyle">
    <fa class="my-auto mr-2" :icon="['fas', 'circle']" style="font-size: 8px" />
    <span class="my-auto">{{ status }}</span>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    statusStyle () {
      let style = ''
      switch (this.status) {
        case 'Paid':
          style = 'text-white bg-success-primary dark:text-success-primary dark:bg-success-secondary'
          break
        case 'Pending':
          style = 'text-white bg-warning-primary dark:text-warning-primary dark:bg-warning-secondary'
          break
        case 'Draft':
          style = 'text-white bg-gray-400 dark:bg-black-tertiary'
          break
        default:
          break
      }

      return style
    }
  }
}
</script>
