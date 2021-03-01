<template>
  <v-col>
    <v-row class="pl-9 yellow lighten-5" style="height: 450px;" justify="center" align-content="center">
      <v-col>
        <p class="text-h3 font-weight-bold yellow--text">自分の将来の<br>キャリアの師匠をみつけよう</p>
        <p class="text-body">就職や転職時の不安を<br>相談して後悔のないキャリアにしよう</p>
        <button-outlined 
        class="ma-4"
        title="新規登録する"
        :color="primary"
        :clickBtn="pushSignUpPage" />
      </v-col>
      <v-col>
        <v-img
          max-width="250"
          max-height="150"
          :src="imageColumns[0].src">
          </v-img>
      </v-col>
    </v-row>
    <v-row class="mt-9" justify="center">
      <p class="text-h4 font-weight-bold">PraCareerでできること</p>
    </v-row>
    <v-row class="mt-9 pa-9" justify="center" align-content="center">
      <v-col
        v-for="(imageColumn, i) in imageColumns"
        :key="i">
          <top-image-column 
          :title="imageColumn.title"
          :content="imageColumn.content"
          :image="imageColumn.src" />
      </v-col>
    </v-row>
    <v-row class="yellow lighten-5 pt-9 pl-6">
      <p class="text-h6 font-weight-bold text-center">現在登録中のメンター</p>
    </v-row>
    <v-row class="yellow lighten-5 mt-0 pt-0">
      <v-col
        v-for="(item, i) in mentors"
        :key="i">
        <MentorCard 
        :name="item" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import MentorCard from '../components/Organisms/TopMentorCard.vue'
import ButtonOutlined from '../components/Atoms/ButtonOutlined.vue'
import TopImageColumn from '../components/Atoms/TopImageColumn.vue'

export default {
  components: { MentorCard, ButtonOutlined, TopImageColumn },
  data () {
    return {
      mentors: [
        'First',
        'Second',
        'Third',
        'Fourth',
      ],
      imageColumns: [
        {
          title: 'キャリアのメンターを探そう！',
          content: 'まずは自分の目指すキャリアのメンターを探そう！',
          src: require('@/assets/images/top/top2.png'),
        },
        {
          title: 'キャリアのメンターを探そう！',
          content: 'まずは自分の目指すキャリアのメンターを探そう！',
          src: require('@/assets/images/top/top2.png'),
        },
        {
          title: 'キャリアのメンターを探そう！',
          content: 'まずは自分の目指すキャリアのメンターを探そう！',
          src: require('@/assets/images/top/top2.png'),
        },
      ],
      items: [
        {
          src: require('@/assets/images/top/top1.png'),
        },
        {
          src: require('@/assets/images/top/top1.png'),
        },
        {
          src: require('@/assets/images/top/top1.png'),
        },
        {
          src: require('@/assets/images/top/top1.png'),
        },
      ],
    }
  },
  methods: {
    pushSignUpPage() {
      alert('push')
    }
  },
}
</script>
