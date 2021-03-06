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
      <sign-up-dialog />
      <div class="mx-2" />
      <login-dialog />
    </v-app-bar>
  </div>
</template>

<script>
import AppIcon from '../Atoms/header/AppIcon.vue'
import LoginDialog from '../Modules/auth/LoginDialog.vue'
import SignUpDialog from '../Modules/auth/SignUpDialog.vue'

export default {
  components: { AppIcon, SignUpDialog, LoginDialog },
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
