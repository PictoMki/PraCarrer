<template>
<v-app>
  <Header />
  <div>
    <nuxt />
  </div>
</v-app>
</template>

<script>
import Header from '../components/Organisms/Header.vue'
export default {
  components: { Header },
}
</script>