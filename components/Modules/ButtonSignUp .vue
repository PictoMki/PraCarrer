<template>
  <v-dialog
    v-model="dialog"
    width="500"
    @close="close"
  >
    <template #activator="{}">
      <div
        @click="signUp"
      >
        <button-under-line
          title="新規登録"
        />
      </div>
    </template>

    <v-card>
      <v-card-title class="headline">
        新規登録
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    signUp () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>
