<template>
  <v-dialog
    v-model="isDisplayDialog"
    width="600"
    @close="close"
  >
    <template #activator="{ on }">
      <div
        v-on="on"
        @click="show"
      >
        <under-line-button
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
          <outlined-button
            title="新規登録する"
            @click="$emit => resist"
          />
        </v-col>
        <v-col class="text-center">
          <outlined-button
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
import OutlinedButton from '../../Atoms/button/OutlinedButton.vue'
import UnderLineButton from '../../Atoms/button/UnderLineButton.vue'
export default {
  components: { OutlinedButton, UnderLineButton },
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
    },
    resist () {
      alert('resist')
    }
  }
}
</script>
