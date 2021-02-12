<template>
    <v-btn :style="styles"
        outlined
    >{{ title }}</v-btn>
</template>

<script>
export default {
    props: {
        title: {},
        color: {},
    },
    computed: {
    // バインドするスタイルを生成
        styles () {
            return {
                '--color': this.color ?? "orange",
                }
            }
        }
    }
</script>

<style scoped>

    .v-btn {
        color: var(--color);
    }
    .v-btn--outlined {
        border: thin var(--color) solid;
    }

</style>