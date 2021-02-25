<template>
  <div>
    <v-footer
      class="py-8"
      color="primary"
    >
      <v-row
        justify="center"
        align-content="center"
      >
        <v-col
          class="mb-12"
          cols="8"
        >
          <h1 class="font-weight-light my-8">
            PraCareer
          </h1>
          <v-row
            class="mt-12"
          >
            <div
              v-for="(item, index) in fotters"
              :key="index"
            >
              <label
                class="mx-12"
                @click="transition(item)"
              >{{ item.title }}
              </label>
              <v-divider
                v-if="item.visible"
                color="black"
                vertical
              />
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
          visible: true
        },
        {
          title: '利用規約',
          url: '/',
          visible: true
        },
        {
          title: 'プライバシーポリシー',
          url: '/',
          visible: true
        },
        {
          title: '運営者',
          url: '/',
          visible: false
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
    notice () {
      return alert('noti')
    },
    transition (data) {
      return this.$router.push(data.url)
    }
  }
}
</script>
