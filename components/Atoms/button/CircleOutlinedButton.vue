<template>
  <v-btn
    width="200"
    height="200"
    outlined
    x-large
    fab
    color="primary"
  >
    <div>
      <div class="mb-6">
        <v-icon color="black" size="80">
          {{ icon }}
        </v-icon>
      </div>
      <label class="black--text text-h6">
        {{ text }}
      </label>
    </div>
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'mdi-account'
    },
    text: {
      type: String,
      default: 'プロフィール<br>設定'
    }
  }
}
</script>
