<template>
  <v-card-text>
    <v-row
      align="center"
      class="mx-0">
      <v-rating
        :value="review.value"
        color="amber"
        dense
        half-increments
        readonly
        size="18"></v-rating>

      <div class="grey--text ml-4">
        {{ review.value }}
      </div>

      <div class="ml-4">
        <outlined-button 
          title="レビューを見る"
          :clickBtn="tapReviewBtn" />
      </div>
    </v-row>
  </v-card-text>
</template>

<script>
import OutlinedButton from '../button/OutlinedButton.vue'

export default {
  components: { OutlinedButton },
  props: {
    review: {},
  },
  methods: {
    tapReviewBtn() {
      alert('review')
    }
  },
}
</script>