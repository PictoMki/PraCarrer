<template>
  <div
    @click="click"
  >
    <v-btn
      :color="color"
      :width="width"
      outlined
      shaped
    >
      {{ title }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    title: {
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
