<template>
  <v-dialog
    v-model="dialog"
    width="600"
    @close="close"
  >
    <template #activator="">
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
        <v-col class="text-center mb-8">
          <h2>新規登録</h2>
          <label>メールアドレスまたはGoogleアカウントで新規登録する</label>
        </v-col>
        <v-col
          v-for="(item, key) in items"
          :key="key"
          class="pa-0"
        >
          <h4>{{ item.title }}</h4>
          <v-text-field
            outlined
            clearable
          />
        </v-col>
        <v-col class="text-center">
          <button-under-line
            title="新規登録する"
          />
        </v-col>
        <v-col class="text-center">
          <button-under-line
            title="Googleで新規登録"
            color="grey"
            icon="mdi-google"
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
      dialog: false,
      items: [
        {
          title: 'メールアドレス'
        },
        {
          title: 'ユーザー名'
        },
        {
          title: 'パスワード'
        },
        {
          title: 'パスワード確認用'
        }
      ]
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
