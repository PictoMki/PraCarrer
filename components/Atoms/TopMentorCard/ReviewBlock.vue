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
        <button-outlined 
          title="レビューを見る"
          :clickBtn="reserve" />
      </div>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  props: {
    review: {},
  }
}
</script>