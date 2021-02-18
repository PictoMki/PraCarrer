<template> 
<div>
  <v-app-bar
    class="px-4"
    color="white"
    height="60"
    elevation="0">
    <v-app-bar-nav-icon>
      <v-img
      class="ma-0 pa-0"
      height="48"
      width="48"
      contain
      src="/icon.png"
      @click="toTop"></v-img>
    </v-app-bar-nav-icon>
    <v-appbar-title
      class="ml-4">
      <h2 class="primary--text font-weight-midium">PraCareer</h2>
    </v-appbar-title>
    <v-spacer />
    <label
      @click="search">面接者を探す</label>
    <v-icon
      large
      @click="notice"
      class="mx-8">mdi-bell-outline</v-icon>
    <v-btn
      height="48"
      width="48"
      color="primary"
      outlined
      elevation="0"
      fab></v-btn>
  </v-app-bar>
</div>
</template>

<script>
export default {
  methods: {
    toTop () {
      this.$router.push('/')
    },
    search () {
      return alert('search')
    },
    notice() {
      return alert('noti')
    }
  }
}
</script>