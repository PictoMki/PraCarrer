<template>
  <label
    class="py-2 px-4 rounded"
  >
    <div
      :class="color"
    >
      {{ text }}
    </div>
  </label>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'grey'
    }
  },
  data () {
    return {
    }
  }
}
</script>
