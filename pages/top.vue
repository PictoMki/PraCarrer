<template>
  <v-col>
    <v-row class="pl-9 yellow lighten-5 pt-16 pb-16" justify="center" align-content="center">
      <v-col>
        <p class="text-h3 font-weight-bold yellow--text">
          自分の将来の<br>キャリアの師匠をみつけよう
        </p>
        <p class="text-body">
          就職や転職時の不安を<br>相談して後悔のないキャリアにしよう
        </p>
        <outlined-button
          class="ma-4"
          title="新規登録する"
          color="primary"
          :click-btn="pushSignUpPage"
        />
      </v-col>
      <v-col>
        <v-img
          max-width="400"
          max-height="400"
          :src="titleImage"
        />
      </v-col>
    </v-row>
    <v-row class="mt-9" justify="center">
      <p class="text-h4 font-weight-bold">
        PraCareerでできること
      </p>
    </v-row>
    <v-row class="mt-9 pa-9" justify="center" align-content="center">
      <v-col
        v-for="(imageColumn, i) in imageColumns"
        :key="i"
      >
        <top-image-column
          :title="imageColumn.title"
          :content="imageColumn.content"
          :image="imageColumn.src"
        />
      </v-col>
    </v-row>
    <v-row class="yellow lighten-5 pt-9 pl-6">
      <p class="text-h6 font-weight-bold text-center">
        現在登録中のメンター
      </p>
    </v-row>
    <v-row class="yellow lighten-5 mt-0 pt-0">
      <v-col
        v-for="(item, i) in mentors"
        :key="i"
      >
        <MentorCard
          :name="item"
        />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import MentorCard from '../components/Organisms/TopMentorCard.vue'
import OutlinedButton from '../components/Atoms/button/OutlinedButton.vue'
import TopImageColumn from '../components/Atoms/TopImageColumn.vue'

export default {
  components: { MentorCard, OutlinedButton, TopImageColumn },
  data () {
    return {
      mentors: [
        'First',
        'Second',
        'Third',
        'Fourth'
      ],
      titleImage: require('@/assets/images/top/image0.png'),
      imageColumns: [
        {
          title: 'キャリアのメンターを探そう！',
          content: 'まずは自分の目指すキャリアのメンターを探そう！',
          src: require('@/assets/images/top/top2.png')
        },
        {
          title: 'キャリアのメンターを探そう！',
          content: 'まずは自分の目指すキャリアのメンターを探そう！',
          src: require('@/assets/images/top/top2.png')
        },
        {
          title: 'キャリアのメンターを探そう！',
          content: 'まずは自分の目指すキャリアのメンターを探そう！',
          src: require('@/assets/images/top/top2.png')
        }
      ],
      items: [
        {
          src: require('@/assets/images/top/image0.png')
        },
        {
          src: require('@/assets/images/top/top1.png')
        },
        {
          src: require('@/assets/images/top/top1.png')
        },
        {
          src: require('@/assets/images/top/top1.png')
        }
      ]
    }
  },
  methods: {
    pushSignUpPage () {
      alert('push')
    }
  }
}
</script>
