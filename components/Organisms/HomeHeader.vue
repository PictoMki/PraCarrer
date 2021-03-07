<template>
  <div>
    <v-app-bar
      class="px-4"
      color="white"
      height="60"
      elevation="0"
    >
      <v-app-bar-nav-icon>
        <div
          @click="pushToTopPage"
        >
          <app-icon />
        </div>
      </v-app-bar-nav-icon>
      <v-appbar-title
        class="ml-4"
      >
        <div
          @click="pushToTopPage"
        >
          <app-header-title />
        </div>
      </v-appbar-title>
      <v-spacer />
      <sign-up-dialog />
      <div class="mx-2" />
      <login-dialog />
    </v-app-bar>
  </div>
</template>

<script>
import AppHeaderTitle from '../Atoms/header/AppHeaderTitle.vue'
import AppIcon from '../Atoms/header/AppIcon.vue'
import LoginDialog from '../Modules/auth/LoginDialog.vue'
import SignUpDialog from '../Modules/auth/SignUpDialog.vue'

export default {
  components: { AppIcon, AppHeaderTitle, SignUpDialog, LoginDialog },
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
