<template>
  <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :class="[
      'p-3 rounded-[50px] text-sm sm:text-base font-medium outline-none focus:outline-none',
      { 'bg-primary-400 text-white hover:bg-primary-300': primary },
      { 'bg-black-tertiary text-white hover:bg-black-tertiary/80 dark:hover:bg-black-tertiary/60': secondary },
      { 'bg-danger-primary hover:bg-red-600 text-white': danger },
      { 'px-3 md:!px-6': wide },
      { '!pr-2 md:!pr-4': prefix },
      { '!pr-2 md:!pl-4': suffix },
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
    wide: {
      type: Boolean,
      default: false
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
    secondary () {
      return this.color === 'secondary'
    },
    danger () {
      return this.color === 'danger'
    }
  }
}
</script>
