<template>
  <v-container
    class="ma-12"
  >
    <v-row>
      <v-col />
    </v-row>
  </v-container>
</template>

<script>

export default {
  layout: 'home',
  data () {
    return {
      msg: 'Hello world!!!'
    }
  },
  methods: {
    clickBtn () {
      alert('click!!')
    }
  }
}
</script>
