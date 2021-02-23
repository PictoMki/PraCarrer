<template>
  <v-dialog
    v-model="dialog"
    width="500"
    @close="close"
  >
    <template #activator="{}">
      <div
        @click="signIn"
      >
        <button-under-line
          title="ログイン"
        />
      </div>
    </template>

    <v-card>
      <v-card-title class="headline">
        ログイン
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
    signIn () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>
