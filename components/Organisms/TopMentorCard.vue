<template>
  <v-card
    class="mx-auto mb-12"
    max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate></v-progress-linear>
    </template>

    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

    <v-row
      class="ml-4 mt-4">
      <v-avatar
        size=60>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John">
      </v-avatar>
      <v-card-title>{{ name }}</v-card-title>
    </v-row>    

    <review-block 
      :review="review" />

    <card-skill-block 
      title="得意スキル"
      :skills="skills" />

    <v-divider class="mx-4"></v-divider>   

    <card-text-block 
      title="Mentorスコア"
      content="15,643" />

    <v-divider class="mx-4"></v-divider>  

    <card-text-block 
      title="契約人数"
      content="88人" />
  </v-card>
</template>

<script>
import CardTextBlock from '../Atoms/TopMentorCard/CardTextBlock.vue'
import CardSkillBlock from '../Atoms/TopMentorCard/CardSkillBlock.vue'
import ReviewBlock from '../Atoms/TopMentorCard/ReviewBlock.vue'

export default {
  components: { CardTextBlock, CardSkillBlock, ReviewBlock },
  props: {
    name: {},
  },
  data: () => ({
    skills: [
      {
        name: 'First',
        color: 'green'
      },
      {
        name: 'Second',
        color: 'red'
      },
      {
        name: 'Third',
        color: 'orange'
      },
      {
        name: 'Fourth',
        color: 'blue'
      },
      {
        name: 'Fifth',
        color: 'black'
      }
    ],
    review: {
      value: 4.5
    }
  })
}
</script>