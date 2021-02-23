<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate></v-progress-linear>
    </template>

    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

    <v-row
      class="ml-4 mt-4">
      <v-avatar
        size=60>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John">
      </v-avatar>
      <v-card-title>{{ name }}</v-card-title>
    </v-row>    

    <v-card-text>
      <v-row
        align="center"
        class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="18"></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>

        <div class="ml-4">
          <button-outlined 
            title="レビューを見る"
            :clickBtn="reserve" />
        </div>

      </v-row>

      <div class="mt-4 mb-1 subtitle-1">
        得意スキル
      </div>

      <div>
        <v-chip
          color="green"
          text-color="white">
          営業
        </v-chip>
        <v-chip
          color="red"
          text-color="white">
          IT
        </v-chip>
        <v-chip
          color="blue"
          text-color="white">
          金融
        </v-chip>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>   

    <v-card-text>
      <div class="mb-1 subtitle-1">
        Mentorスコア
      </div>

      <div class="title">
        15,643
      </div>
    </v-card-text> 

    <v-divider class="mx-4"></v-divider>  

    <v-card-text>
      <div class="mb-1 subtitle-1">
        契約人数
      </div>

      <div class="title">
        88人
      </div>
    </v-card-text> 

  </v-card>
</template>

<script>
import ButtonOutlined from '../Atoms/ButtonOutlined.vue'

export default {
  components: { ButtonOutlined },
  props: {
    name: {},
    clickCard: {
      type: Function
    }
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
      
    },
    click() {
      this.clickCard()
    },
  },
}
</script>