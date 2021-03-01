<template>
  <v-dialog
    v-model="isDisplayDialog"
    width="600"
    @close="close"
  >
    <template #activator>
      <div
        @click="show"
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
          <button-outlined
            title="新規登録する"
          />
        </v-col>
        <v-col class="text-center">
          <button-outlined
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
import ButtonOutlined from '../../Atoms/button/ButtonOutlined.vue'
export default {
  components: { ButtonOutlined },
  data () {
    return {
      isDisplayDialog: false,
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
    show () {
      this.isDisplayDialog = true
    },
    close () {
      this.isDisplayDialog = false
    }
  }
}
</script>
