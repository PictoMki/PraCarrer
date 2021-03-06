<template>
  <v-img
    class="ml-16"
    height="54"
    width="250"
    contain
    :src="iconImage"
  />
</template>

<script>
export default {
  data () {
    return {
      iconImage: require('@/assets/images/top/image1.png')
    }
  }
}
</script>
