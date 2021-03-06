<template>
  <v-container class="mb-12">
    <v-row>
      <sub-title-label
        text="マイページ"
      />
    </v-row>
    <v-row>
      <v-col
        v-for="(mypageItem, i) in mypageItems"
        :key="i"
        cols="12"
      >
        <title-and-button-block
          :title="mypageItem.title"
          :button-infos="mypageItem.buttonInfos"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SubTitleLabel from '../components/Atoms/label/SubTitleLabel.vue'
import TitleAndButtonBlock from '../components/Modules/mypage/TitleAndButtonBlock.vue'

export default {
  components: { SubTitleLabel, TitleAndButtonBlock },
  data () {
    return {
      mypageItems: [
        {
          title: '基本情報',
          buttonInfos: [
            {
              text: 'プロフィール設定',
              icon: 'mdi-account-cog-outline'
            },
            {
              text: '面談者設定',
              icon: 'mdi-pencil'
            },
            {
              text: '各種設定',
              icon: 'mdi-cog-outline'
            }
          ]
        },
        {
          title: '契約関連',
          buttonInfos: [
            {
              text: 'メッセージ',
              icon: 'mdi-message-text-outline'
            },
            {
              text: '契約リクエスト',
              icon: 'mdi-download-circle-outline'
            },
            {
              text: '契約',
              icon: 'mdi-file-document-edit-outline'
            }
          ]
        },
        {
          title: '売上関連',
          buttonInfos: [
            {
              text: '売上',
              icon: 'mdi-circle-slice-2'
            },
            {
              text: '出金',
              icon: 'mdi-download-outline'
            }
          ]
        }
      ]
    }
  },
  methods: {
    clickBtn () {
      alert('click!!')
    }
  }
}
</script>
