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
        <v-col class="text-center pa-0">
          <h2>ログイン</h2>
          <label>メールアドレスまたはGoogleアカウントでログインする</label>
        </v-col>
        <v-col class="pa-0 mt-8">
          <h4>メールアドレス</h4>
          <v-text-field
            outlined
            clearable
          />
        </v-col>
        <v-col class="pa-0">
          <h4>パスワード</h4>
          <v-text-field
            outlined
            clearable
          />
        </v-col>
        <v-col
          class="text-center"
          @click="signIn"
        >
          <outlined-button
            title="ログイン"
          />
        </v-col>
        <v-col class="text-center">
          <outlined-button
            title="Googleでログイン"
            color="grey"
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
      isDisplayDialog: false
    }
  },
  methods: {
    show () {
      this.isDisplayDialog = true
    },
    signIn () {
      this.isDisplayDialog = false
      this.$router.push('/plans')
    },
    close () {
      this.isDisplayDialog = false
    }
  }
}
</script>
