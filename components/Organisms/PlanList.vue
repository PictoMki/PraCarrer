<template>
  <div>
    <label
      class="font-weight-bold title"
    >
      {{ plan.planType }}
    </label>
    <v-card
      class="pa-4 mt-4"
      color="primary"
    >
      <v-row
        class="white flex-column py-4 px-10"
      >
        <v-col>
          <label-under-line
            :text="plan.title"
          />
          <label
            class="mx-4"
          >
            {{ plan.price }}
          </label>
          <label
            class="grey py-2 px-4 rounded"
          >
            {{ plan.contractType }}
          </label>
        </v-col>
        <plan-column
          title="プランの内容"
          :detail="plan.content"
        />
        <plan-column
          title="サポートの流れ"
          :detail="plan.flow"
        />
        <plan-column
          title="備考"
          :detail="plan.remarks"
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
  }
}
</script>
