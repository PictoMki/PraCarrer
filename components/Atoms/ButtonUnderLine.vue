<template>
  <v-container
    :style="backgroundColor"
  >
    <v-btn
      class="mb-1"
      tile
      color="white"
      elevation="0"
      :width="width"
    >
      {{ title }}
    </v-btn>
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
      default: ''
    },
    width: {
      type: Number,
      default: 120
    }
  },
  data () {
    return {
      backgroundColor: {
        background: this.borderColor,
        padding: 0
      }
    }
  }
}
</script>
