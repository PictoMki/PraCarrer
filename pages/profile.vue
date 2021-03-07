<template>
  <div>
    <v-row
      class="flex-column"
    >
      <mentor-profile-section
        :title="section.title"
      >
        <template slot="">
          <p>test</p>
        </template>
      </mentor-profile-section>
    </v-row>
  </div>
</template>

<script>
import MentorProfileSection from '../components/Modules/Profile/MentorProfileSection'
export default {
  components: { MentorProfileSection },
  data () {
    return {

    }
  }
}
</script>
