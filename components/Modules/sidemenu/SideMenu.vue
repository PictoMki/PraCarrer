<template>
  <v-btn-toggle group class="btn-toggle container-border">
    <v-col
      v-for="(menu, i) in menus"
      :key="i"
      class="ma-0 pa-0"
    >
      <v-btn
        nuxt
        :to="menu.pushRoute"
        width="220"
        height="50"
        class="ma-0"
        text
        color="primary"
      >
        <label class="black--text">
          {{ menu.name }}
        </label>
      </v-btn>
    </v-col>
  </v-btn-toggle>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.btn-toggle {
  flex-direction: column;
}

.container-border {
  border: solid 3px #E1E5A7;
  border-radius: 10px;
}
</style>
