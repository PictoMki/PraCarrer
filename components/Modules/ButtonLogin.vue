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

    <v-card
      class="pa-4"
      color="primary"
    >
      <v-row
        class="white flex-column pa-8"
      >
        <v-col class="text-center">
          <h2>ログイン</h2>
          <label>メールアドレスまたはGoogleアカウントでログインする</label>
        </v-col>
        <v-col class="mt-4">
          <h4>メールアドレス</h4>
          <v-text-field
            outlined
            clearable
          />
        </v-col>
        <v-col>
          <h4>パスワード</h4>
          <v-text-field
            outlined
            clearable
          />
        </v-col>
        <v-col class="text-center">
          <ButtonOutlined
            title="ログイン"
          />
        </v-col>
        <v-col class="text-center">
          <ButtonOutlined
            title="Googleでログイン"
            color="grey"
          />
        </v-col>
      </v-row>
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
