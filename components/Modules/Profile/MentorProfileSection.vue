<template>
  <v-container>
    <v-card-title>
      {{ sectionTitle }}
    </v-card-title>
    <div
      class="primary pa-1"
    >
      <v-card
        elevation="0"
        color="surface"
      >
        <v-card-text>
          <slot />
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      sectionTitle: this.title
    }
  }
}
</script>
