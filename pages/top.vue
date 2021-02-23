<template>
  <v-container>
    <v-row>
      <v-carousel
        cycle
        width="100%"
        height="600"
        hide-delimiters
        :show-arrows="false">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src">
        </v-carousel-item>
      </v-carousel>
      <v-col 
        v-for="(item, i) in slides"
        :key="i">
        <MentorCard 
        :name="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MentorCard from '../components/Organisms/TopMentorCard.vue'

export default {
  components: { MentorCard },
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
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
}
</script>
