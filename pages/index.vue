<template>
  <v-container>
    <v-row>
      <v-col>
        <ButtonOutlined 
          :title="msg"
          :clickBtn="clickBtn" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ButtonOutlined from '../components/Atoms/ButtonOutlined.vue'

export default {
  components: { ButtonOutlined },
  data () {
    return {
      msg: 'Hello world!!!',
    }
  },
  methods: {
    clickBtn() {
      alert('click!!')
    }
  }
}
</script>
