<template>
  <v-container>
    <v-row class="mt-12 pl-3">
      <label class="text-h5">
        {{ title }}
      </label>
    </v-row>
    <v-row class="pl-3">
      <v-divider class="mt-2 pt-1 primary" />
    </v-row>
    <v-row class="mt-8">
      <v-col
        v-for="(buttonInfo, i) in buttonInfos"
        :key="i"
        cols="3"
      >
        <circle-outlined-button
          :text="buttonInfo.text"
          :icon="buttonInfo.icon"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CircleOutlinedButton from '../../Atoms/button/CircleOutlinedButton.vue'

export default {
  components: { CircleOutlinedButton },
  props: {
    buttonInfos: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: 'title'
    }
  }
}
</script>
