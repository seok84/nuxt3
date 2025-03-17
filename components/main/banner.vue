<template>
    <section class="main-ad-banner-area">
        <div class="flex">
            <template v-for="(data, index) in bannerData">
                <NuxtLink :to="data.url" class="img-banner">
                    <img :src="data.image" :alt="data.content" class="pc">
                </NuxtLink>
            </template>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    bannerData : {
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
@use "~/assets/scss/pages/main/main_banner";
</style>