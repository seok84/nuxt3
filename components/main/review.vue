<template>
    <section class="main-review-area">
        <Swiper :slidesPerView="2" :loop="false" :spaceBetween="30" :breakpoints="{
            '320': {
                slidesPerView: 'auto',
                spaceBetween: 10,
            },
            '767': {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }" :modules="modules" class="main-review-swiper">
            <SwiperSlide v-for="(data, index) in reviewData" :key="index">
                <div class="thum">
                    <img :src="data.image" :alt="data.itemName">
                </div>
                <div class="review">
                    <p>{{ data.content }}</p>
                    <div class="star-wrap">
                        <div class="star">
                            <i :class="'star' + data.score"></i>
                        </div>
                    </div>
                    <p class="text-ellipsis">
                        {{ data.itemName }}
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";

const modules = ref([Navigation, Pagination, Autoplay, Scrollbar]);

const props = defineProps({
    reviewData: {
        type: Array,
        default: () => [],
    },
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/main/main_review";
</style>
