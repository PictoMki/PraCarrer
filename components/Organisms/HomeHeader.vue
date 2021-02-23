<template>
  <div>
    <v-app-bar
      class="px-4"
      color="white"
      height="60"
      elevation="0"
    >
      <v-app-bar-nav-icon>
        <v-img
          class="ma-0 pa-0"
          height="48"
          width="48"
          contain
          src="/icon.png"
          @click="toTop"
        />
      </v-app-bar-nav-icon>
      <v-appbar-title
        class="ml-4"
      >
        <h2 class="primary--text font-weight-regular">
          PraCareer
        </h2>
      </v-appbar-title>
      <v-spacer />
      <button-sign-up />
      <button-login />
    </v-app-bar>
  </div>
</template>

<script>
import ButtonLogin from '../Modules/ButtonLogin.vue'
import ButtonSignUp from '../Modules/ButtonSignUp .vue'
export default {
  components: { ButtonLogin, ButtonSignUp },
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
