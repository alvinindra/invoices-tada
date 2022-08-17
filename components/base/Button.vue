<template>
  <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :class="[
      'p-3 rounded-[50px] font-medium outline-none focus:outline-none',
      { 'bg-primary-400 text-white hover:bg-primary-300': primary },
      { 'bg-green-500 text-white hover:bg-green-600': success },
      { 'bg-red-600 text-white': error },
      { '!pr-4': prefix },
      { '!pl-4': suffix },
    ]"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'primary'
    },
    prefix: {
      type: Boolean,
      default: false
    },
    suffix: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    primary () {
      return this.color === 'primary'
    },
    success () {
      return this.color === 'success'
    },
    error () {
      return this.color === 'error'
    }
  }
}
</script>
