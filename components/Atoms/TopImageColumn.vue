<template>
  <div>
    <p class="text-h6 font-weight-bold text-center pb-3">{{ title }}</p>
    <v-layout justify-center>
      <v-img
        max-width="250"
        max-height="150"
        :src="image">
        </v-img>
    </v-layout>
    <p class="text-body pt-3 text-center">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {},
    content: {},
    image: {},
  }
}
</script>