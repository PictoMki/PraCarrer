<template>
  <v-container>
    <div
      v-for="(plan, index) in plans"
      :key="index"
      class="mb-12 mx-12"
    >
      <plan
        :plan="plan"
      />
    </div>
  </v-container>
</template>

<script>
import Plan from '../components/Organisms/Plan.vue'
export default {
  components: { Plan },
  data () {
    return {
      plans: [
        {
          planTitle: 'お試しプラン',
          planContent: [
            {
              title: 'お試し面接一回（初回のみ）',
              price: '3000円',
              contractType: '単発契約',
              content: '・面接1回(30分以内)を実施します!※面接時間15分 FB10分 質問5分ほどを想定してます。\n・面接前の事前質問に対応します(対応できないものもあるので事前にご相談ください)',
              flow: '1. チャットにご相談ください！\n2. チャット後サポートを希望される場合は希望のプランのリクエストをお願いします。\n3. こちらでリクエストを承認しますので、承認後契約をお願いします\n4. 契約完了後、こちらから日程の候補日をチャットにて送りますので、回答をお願いします。\n5. 面接の日程が決まり次第Google MeetのURLをお送りしますので、当日そちらからお願いします',
              remarks: '・ビデオツールのご希望があれば教えてください！\n・日程の変更は1回まで受け付けます！'
            },
            {
              title: 'お試し面接一回（初回のみ）',
              price: '3000円',
              contractType: '単発契約',
              content: '・面接1回(30分以内)を実施します!※面接時間15分 FB10分 質問5分ほどを想定してます。\n・面接前の事前質問に対応します(対応できないものもあるので事前にご相談ください)',
              flow: '1. チャットにご相談ください！\n2. チャット後サポートを希望される場合は希望のプランのリクエストをお願いします。\n3. こちらでリクエストを承認しますので、承認後契約をお願いします\n4. 契約完了後、こちらから日程の候補日をチャットにて送りますので、回答をお願いします。\n5. 面接の日程が決まり次第Google MeetのURLをお送りしますので、当日そちらからお願いします',
              remarks: '・ビデオツールのご希望があれば教えてください！\n・日程の変更は1回まで受け付けます！'
            }
          ]
        },
        {
          planTitle: '本プラン',
          planContent: [
            {
              title: '面接一回（2回目以降）',
              price: '3000円',
              contractType: '単発契約',
              content: '・面接1回(30分以内)を実施します!※面接時間15分 FB10分 質問5分ほどを想定してます。\n・面接前の事前質問に対応します(対応できないものもあるので事前にご相談ください)',
              flow: '1. チャットにご相談ください！\n2. チャット後サポートを希望される場合は希望のプランのリクエストをお願いします。\n3. こちらでリクエストを承認しますので、承認後契約をお願いします\n4. 契約完了後、こちらから日程の候補日をチャットにて送りますので、回答をお願いします。\n5. 面接の日程が決まり次第Google MeetのURLをお送りしますので、当日そちらからお願いします',
              remarks: '・ビデオツールのご希望があれば教えてください！\n・日程の変更は1回まで受け付けます！'
            },
            {
              title: '月4回面接プラン(チャット付き)',
              price: '3000円',
              contractType: '単発契約',
              content: '・面接1回(30分以内)を実施します!※面接時間15分 FB10分 質問5分ほどを想定してます。\n・面接前の事前質問に対応します(対応できないものもあるので事前にご相談ください)',
              flow: '1. チャットにご相談ください！\n2. チャット後サポートを希望される場合は希望のプランのリクエストをお願いします。\n3. こちらでリクエストを承認しますので、承認後契約をお願いします\n4. 契約完了後、こちらから日程の候補日をチャットにて送りますので、回答をお願いします。\n5. 面接の日程が決まり次第Google MeetのURLをお送りしますので、当日そちらからお願いします',
              remarks: '・ビデオツールのご希望があれば教えてください！\n・日程の変更は1回まで受け付けます！'
            }
          ]
        }
      ]
    }
  }
}
</script>
