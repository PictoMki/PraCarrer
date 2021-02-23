<template>
<v-app>
  <Header />
  <v-main>
    <nuxt />
  </v-main>
  <Footer />
</v-app>
</template>

<script>
import Footer from '../components/Organisms/Footer.vue'
import Header from '../components/Organisms/Header.vue'
export default {
  components: { Header, Footer },
}
</script>