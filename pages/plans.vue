<template>
  <v-container>
    <div
      v-for="(plan, index) in plans"
      :key="index"
      class="mb-12 mx-12"
    >
      <label
        class="font-weight-bold title"
      >
        {{ plan.planType }}
      </label>
      <v-card
        class="pa-4 mt-4"
        color="primary"
      >
        <v-row
          class="white flex-column py-4 px-10"
        >
          <v-col>
            <label-under-line
              :text="plan.title"
            />
            <label
              class="mx-4"
            >
              {{ plan.price }}
            </label>
            <label
              class="grey py-2 px-4 rounded"
            >
              {{ plan.contractType }}
            </label>
          </v-col>
          <plan-column
            title="プランの内容"
            :detail="plan.content"
          />
          <plan-column
            title="サポートの流れ"
            :detail="plan.flow"
          />
          <plan-column
            title="備考"
            :detail="plan.remarks"
          />
          <v-card-actions class="mx-auto">
            <div
              @click="request"
            >
              <button-outlined
                class="mr-8"
                title="リクエストする"
              />
            </div>
            <div
              @click="chat"
            >
              <button-outlined
                class="ml-8"
                title="チャットで相談する"
              />
            </div>
          </v-card-actions>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import ButtonOutlined from '../components/Atoms/ButtonOutlined.vue'
import LabelUnderLine from '../components/Atoms/LabelUnderLine.vue'
import PlanColumn from '../components/Modules/PlanColumn.vue'
export default {
  components: { LabelUnderLine, ButtonOutlined, PlanColumn },
  data () {
    return {
      plans: [
        {
          title: 'お試し面接一回（初回のみ）',
          planType: 'お試しプラン',
          price: '3000円',
          contractType: '単発契約',
          content: '・面接1回(30分以内)を実施します!※面接時間15分 FB10分 質問5分ほどを想定してます。\n・面接前の事前質問に対応します(対応できないものもあるので事前にご相談ください)',
          flow: '1. チャットにご相談ください！\n2. チャット後サポートを希望される場合は希望のプランのリクエストをお願いします。\n3. こちらでリクエストを承認しますので、承認後契約をお願いします\n4. 契約完了後、こちらから日程の候補日をチャットにて送りますので、回答をお願いします。\n5. 面接の日程が決まり次第Google MeetのURLをお送りしますので、当日そちらからお願いします',
          remarks: '・ビデオツールのご希望があれば教えてください！\n・日程の変更は1回まで受け付けます！'
        },
        {
          title: 'お試し面接一回（初回のみ）',
          planType: 'お試しプラン',
          price: '3000円',
          contractType: '単発契約',
          content: '・面接1回(30分以内)を実施します!※面接時間15分 FB10分 質問5分ほどを想定してます。\n・面接前の事前質問に対応します(対応できないものもあるので事前にご相談ください)',
          flow: '1. チャットにご相談ください！\n2. チャット後サポートを希望される場合は希望のプランのリクエストをお願いします。\n3. こちらでリクエストを承認しますので、承認後契約をお願いします\n4. 契約完了後、こちらから日程の候補日をチャットにて送りますので、回答をお願いします。\n5. 面接の日程が決まり次第Google MeetのURLをお送りしますので、当日そちらからお願いします',
          remarks: '・ビデオツールのご希望があれば教えてください！\n・日程の変更は1回まで受け付けます！'
        },
        {
          title: 'お試し面接一回（初回のみ）',
          planType: 'お試しプラン',
          price: '3000円',
          contractType: '単発契約',
          content: '・面接1回(30分以内)を実施します!※面接時間15分 FB10分 質問5分ほどを想定してます。\n・面接前の事前質問に対応します(対応できないものもあるので事前にご相談ください)',
          flow: '1. チャットにご相談ください！\n2. チャット後サポートを希望される場合は希望のプランのリクエストをお願いします。\n3. こちらでリクエストを承認しますので、承認後契約をお願いします\n4. 契約完了後、こちらから日程の候補日をチャットにて送りますので、回答をお願いします。\n5. 面接の日程が決まり次第Google MeetのURLをお送りしますので、当日そちらからお願いします',
          remarks: '・ビデオツールのご希望があれば教えてください！\n・日程の変更は1回まで受け付けます！'
        }
      ]
    }
  },
  methods: {
    request () {
      alert('request')
    },
    chat () {
      alert('chat')
    }
  }
}
</script>
