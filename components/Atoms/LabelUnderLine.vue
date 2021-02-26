<template>
  <div
    class="d-inline-block"
    :width="width"
  >
    <label>
      {{ text }}
    </label>
  </div>
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
      default: 'primary'
    },
    width: {
      type: Number,
      default: 200
    }
  }
}
</script>
