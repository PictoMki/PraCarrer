<template>
  <div
    class="d-inline-block"
    :width="width"
  >
    <label class="pa-0 mx-4 text-h5">
      {{ text }}
    </label>
    <div
      class="primary"
    >
      <div class="pt-1" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 120
    }
  },
  data () {
    return {
    }
  }
}
</script>
