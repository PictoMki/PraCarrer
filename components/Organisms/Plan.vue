<template>
  <div>
    <label
      class="font-weight-bold title"
    >
      {{ title }}
    </label>
    <v-card
      v-for="(content, index) in contents"
      :key="index"
      class="pa-4 mt-4"
      color="primary"
    >
      <v-row
        class="white flex-column py-4 px-10"
      >
        <v-col>
          <label-under-line
            :text="content.title"
          />
          <label
            class="mx-4"
          >
            {{ content.price }}
          </label>
          <label
            class="grey py-2 px-4 rounded"
          >
            {{ content.contractType }}
          </label>
        </v-col>
        <plan-column
          title="プランの内容"
          :detail="content.content"
        />
        <plan-column
          title="サポートの流れ"
          :detail="content.flow"
        />
        <plan-column
          title="備考"
          :detail="content.remarks"
        />
        <v-card-actions class="mx-auto">
          <div
            @click="request"
          >
            <button-outlined
              class="mr-8"
              title="リクエストする"
            />
          </div>
          <div
            @click="chat"
          >
            <button-outlined
              class="ml-8"
              title="チャットで相談する"
            />
          </div>
        </v-card-actions>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    plan: {
      type: Object,
      require: true,
      default: () => ({ plan: {} })
    }
  },
  data () {
    return {
      title: this.plan.planTitle,
      contents: this.plan.planContent
    }
  },
  methods: {
    request () {
      alert('request')
    },
    chat () {
      alert('chat')
    }
  }
}
</script>
