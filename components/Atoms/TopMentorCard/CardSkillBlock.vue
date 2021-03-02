<template>
  <v-card-text>
    <div class="mt-1 mb-1 subtitle-1">
      {{ title }}
    </div>
    <v-row
      v-for="(skill, i) in skills"
      :key="i"
      class="ma-1 d-inline"
    >
      <v-chip
        :color="skill.color"
        text-color="white"
      >
        {{ skill.name }}
      </v-chip>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    skills: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
