<template>
    <div
      @click="click">
      <v-btn
        :color="color"
        outlined
        shaped>
        {{ title }}
    </v-btn>
    </div>
</template>

<script>
export default {
  props: {
    title: {},
    color: {},
    clickBtn: {
      type: Function
    }
  },
  methods: {
    click() {
      this.clickBtn()
    },
  }
}
</script>