<template>
  <div>
    <v-app-bar
      class="px-4"
      color="white"
      height="60"
      elevation="0"
    >
      <v-app-bar-nav-icon>
        <app-icon
          @click="toTop"
        />
      </v-app-bar-nav-icon>
      <v-appbar-title
        class="ml-4"
      />
      <app-header-title
        @click="toTop"
      />
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
import AppHeaderTitle from '../Atoms/AppHeaderTitle.vue'
import AppIcon from '../Atoms/AppIcon.vue'
export default {
  components: { AppIcon, AppHeaderTitle },
  methods: {
    toTop () {
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
