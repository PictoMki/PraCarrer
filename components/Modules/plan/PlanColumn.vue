<template>
  <v-col>
    <v-row class="flex-column mx-4 my-1">
      <label class="mb-2 subtitle-1 font-weight-bold grey--text">
        {{ title }}
      </label>
      <p
        class="text-pre-wrap body-2"
        v-text="detail"
      />
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    detail: {
      type: String,
      default: ''
    }
  }
}
</script>
