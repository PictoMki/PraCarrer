<template>
  <div>
    <v-app-bar
      class="px-4"
      color="white"
      height="80"
      elevation="0"
    >
      <v-app-bar-nav-icon>
        <div
          class="ml-12"
          @click="pushToTopPage"
        >
          <app-icon />
        </div>
      </v-app-bar-nav-icon>
      <v-spacer />
      <label
        class="font-weight-medium"
        @click="search"
      >面接者を探す</label>
      <v-icon
        large
        class="mx-8"
        @click="notice"
      >
        mdi-bell-outline
      </v-icon>
      <v-btn
        height="48"
        width="48"
        color="primary"
        outlined
        elevation="1"
        fab
      />
    </v-app-bar>
  </div>
</template>

<script>
import AppIcon from '../Atoms/header/AppIcon.vue'
export default {
  components: { AppIcon },
  methods: {
    pushToTopPage () {
      this.$router.push('/')
    },
    search () {
      return alert('search')
    },
    notice () {
      return alert('noti')
    }
  }
}
</script>
