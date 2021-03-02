<template>
  <v-card-text>
    <div class="mb-1 subtitle-1">
      {{ title }}
    </div>
    <div class="title">
      {{ content }}
    </div>
  </v-card-text>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
