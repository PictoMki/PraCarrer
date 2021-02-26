<template>
  <div
    class="d-inline-block"
    :width="width"
  >
    <label class="pa-0 mx-4">
      {{ text }}
    </label>
    <v-sparkline
      :color="borderColor"
      class="mt-n12 pa-0"
      line-width="4"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: 'primary'
    },
    width: {
      type: Number,
      default: 120
    }
  },
  data () {
    return {
      value: [0, 0]
    }
  }
}
</script>
