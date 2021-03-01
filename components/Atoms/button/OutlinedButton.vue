<template>
  <div
    :color="color"
  >
    <v-btn
      class="font-weight-bold"
      :color="color"
      :width="width"
      outlined
      shaped
    >
      <v-icon
        v-if="icon != ''"
        left
        small
      >
        {{ icon }}
      </v-icon>
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
      default: 240
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
