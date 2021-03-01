<template>
  <v-app>
    <HomeHeader />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../components/Organisms/Footer.vue'
import HomeHeader from '../components/Organisms/HomeHeader.vue'
export default {
  components: { Footer, HomeHeader }
}
</script>
