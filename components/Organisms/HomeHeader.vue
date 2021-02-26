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
          @click="toTop"
        >
          <app-icon />
        </div>
      </v-app-bar-nav-icon>
      <v-appbar-title
        class="ml-4"
      >
        <div
          @click="toTop"
        >
          <app-header-title />
        </div>
      </v-appbar-title>
      <v-spacer />
      <button-sign-up />
      <button-login />
    </v-app-bar>
  </div>
</template>

<script>
import AppHeaderTitle from '../Atoms/header/AppHeaderTitle.vue'
import AppIcon from '../Atoms/header/AppIcon.vue'
import ButtonLogin from '../Modules/auth/ButtonLogin.vue'
import ButtonSignUp from '../Modules/auth/ButtonSignUp .vue'
export default {
  components: { ButtonLogin, ButtonSignUp, AppIcon, AppHeaderTitle },
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
