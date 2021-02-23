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

    <v-card
      class="pa-4"
      color="primary"
    >
      <v-row
        class="white flex-column pa-8"
      >
        <v-col class="text-center">
          <h2>新規登録</h2>
          <label>メールアドレスまたはGoogleアカウントで新規登録する</label>
        </v-col>
        <v-col class="mt-4">
          <h4>メールアドレス</h4>
          <v-text-field
            outlined
            clearable
          />
        </v-col>
        <v-col>
          <h4>ユーザー名</h4>
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
        <v-col>
          <h4>パスワード（確認用）</h4>
          <v-text-field
            outlined
            clearable
          />
        </v-col>
        <v-col class="text-center">
          <ButtonOutlined
            title="新規登録する"
          />
        </v-col>
        <v-col class="text-center">
          <ButtonOutlined
            title="Googleで新規登録"
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
    signUp () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>
