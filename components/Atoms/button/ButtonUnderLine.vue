<template>
  <v-container>
    <v-btn
      tile
      color="white"
      elevation="0"
      :width="width"
    >
      {{ title }}
    </v-btn>
    <v-sparkline
      :color="borderColor"
      class="mt-n6"
      line-width="8"
      :value="value"
    />
  </v-container>
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
      value: [0, 0]
    }
  }
}
</script>
