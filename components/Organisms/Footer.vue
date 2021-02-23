<template> 
  <div>
  <v-footer
    class="py-8"
    color="primary">
    <v-row
      class="mx-auto"
      justify="center"
      align-content="center">
        <v-col
          class="mb-12"
          cols="8">
            <h1 class="font-weight-light my-8">PraCareer</h1>
            <v-row
              class="mt-12">
                <div
                  v-for="item in fotters" 
                  :key="item">
                      <label
                        class="mx-12"
                        @click="transition(item)">{{ item.title }}
                      </label>
                      <v-divider
                        :color="item.borderColor"
                        vertical/>
                </div>
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
      fotters: [
        {
          title: 'お問い合わせ',
          url: '/',
          borderColor: 'black'
        },
        {
          title: '利用規約',
          url: '/',
          borderColor: 'black'
        },
        {
          title: 'プライバシーポリシー',
          url: '/',
          borderColor: 'black'
        },
        {
          title: '運営者',
          url: '/',
          borderColor: 'white'
        }
      ]
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
    },
    transition (data) {
      return this.$router.push(data.url)
    }
  }
}
</script>