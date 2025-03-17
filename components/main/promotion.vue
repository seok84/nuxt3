<template>
    <Swiper v-if="promotionData.length > 0" :slidesPerView="1" :loop="false" :centeredSlides="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
    }" :pagination="{
        clickable: true,
        el: '.main-swiper-pagination',
        type: 'fraction'
    }" :navigation="{ enabled: true, prevEl: '.main-visual .swiper-prev', nextEl: '.main-visual .swiper-next' }"
        :watchSlidesProgress="true" :modules="modules" class="main-visual" :class="className" ref="mainSwiper">
        <SwiperSlide v-for="(data, index) in promotionData" :key="index">
            <NuxtLink :to="data.url" class="pc"><img :src="data.image" alt=""></NuxtLink>
        </SwiperSlide>
        <div class="swiper-controls">
            <button class="swiper-prev">이전</button>
            <button class="swiper-next">다음</button>
        </div>

        <div class="main-swiper-pagination-wrap">
            <button @click="MainFlag = false, pauseAutoplay" class="btn-pause" v-if="MainFlag">Pause</button>
            <button @click="MainFlag = true, startAutoplay" class="btn-play" v-else>Play</button>
            <div class="main-swiper-pagination"></div>
        </div>
    </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import "swiper/swiper-bundle.css";

const modules = ref([Navigation, Pagination, Autoplay, Scrollbar]);

const props = defineProps({
    promotionData: {
        type: Array,
        default: () => {
            return []
        }
    },
    className: {
        type: String,
        default: () => {
            return 'pc';
        }
    }
});

const mainSwiper = ref(null);
let MainFlag = ref(true);

const pauseAutoplay = (swiper) => {
    if (mainSwiper.value) {
        mainSwiper.autoplay.stop();
    }
}
const startAutoplay = (swiper) => {
    if (mainSwiper.value) {
        mainSwiper.autoplay.start();
    }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/main/main_promotion";
</style>