<template> 
<div>
  <v-footer
    class="py-8"
    color="primary">
    <v-row
      justify="center" align-content="center">
        <v-col
          class="mb-12"
          cols="8">
            <h1 class="font-weight-light my-8">PraCareer</h1>
            <v-row>
                <v-col><p>お問い合わせ</p></v-col>
                <v-col><p>お問い合わせ</p></v-col>
                <v-col><p>お問い合わせ</p></v-col>
                <v-col><p>お問い合わせ</p></v-col>
            </v-row>
        </v-col>
    </v-row>
  </v-footer>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
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