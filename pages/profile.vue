<template>
  <div>
    <v-row
      class="flex-column"
    >
      <v-col
        v-for="(section, index) in profileSections"
        :key="index"
      >
        <mentor-profile-section
          :title="section.title"
        >
          <template>
            <p>test</p>
          </template>
        </mentor-profile-section>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MentorProfileSection from '../components/Modules/Profile/MentorProfileSection.vue'
export default {
  components: { MentorProfileSection },
  data () {
    return {
      profileSections: [
        {
          title: '基本情報'
        },
        {
          title: '経歴'
        },
        {
          title: 'プロフィール'
        },
        {
          title: 'レビュー'
        }
      ]
    }
  },
  mounted () { }
}
</script>
