<template>
  <div
    class="d-inline-block"
    :width="width"
  >
    <v-btn
      tile
      color="surface"
      elevation="0"
      :width="width"
    >
      {{ title }}
    </v-btn>
    <div
      :class="borderColor"
    >
      <div class="pt-1" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: 'primary'
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
