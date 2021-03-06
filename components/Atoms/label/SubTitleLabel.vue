<template>
  <label
    class="mt-8 text-h4 primary--text font-weight-bold"
  >
    {{ text }}
  </label>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>
