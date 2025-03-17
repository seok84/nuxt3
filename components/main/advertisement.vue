<template>
    <section class="ad-area">
        <template v-for="(data, index) in advertisementData">
            <NuxtLink :to="data.url">
                <img :src="data.image" :alt="data.content">
            </NuxtLink>
        </template>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    advertisementData : {
        type: Array,
        default: () => {
            return [{
                url: '',
                image: '',
                content: ''
            }]
        }
    }
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/main/main_advertisement";
</style>