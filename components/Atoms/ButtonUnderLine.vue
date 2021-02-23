<template>
  <v-container>
    <v-btn
      color="white"
      elevation="0"
    >
      {{ title }}
    </v-btn>
    <v-divider
      :color="color"
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
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
