<template>
  <div
    class="d-inline-block"
    :width="width"
  >
    <label>
      {{ text }}
    </label>
    <v-divider :width="width" :color="color" />
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
