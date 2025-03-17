<template>
    <div class="focus-brand-area">
        <section>
            <div class="main-title-wrap">
                <h2 class="main-title">관심 집중 브랜드ꕤ</h2>
                <p>세일즈온이 골라본 주목해야 할 브랜드</p>
            </div>
            <div class="brand-list">
                <Swiper :slidesPerView="6" :breakpoints="{
                    '320': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '767': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    '960': {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    }
                }" :modules="modules" ref="brandSwiper">
                    <template v-for="(data, index) in brandData">
                        <SwiperSlide :data-index="index" :class="{ on: index === current }">
                            <div class="thum"><img :src="data.image" :alt="data.name"></div>
                            <div class="text">
                                {{ data.name }}
                            </div>
                        </SwiperSlide>
                    </template>
                </Swiper>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref , onMounted, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import "swiper/swiper-bundle.css";

// swiper module
const modules = [Navigation, Pagination, Autoplay, Scrollbar];

const props = defineProps({
    brandData : {
        type: Array,
        default: () => {
            return []
        }
    }
});

const brandSwiper = ref(null);
const current = ref(0);
const totalIdx = ref(0);
let timer = null;
const setTime = () => {
    timer = setInterval(() => {
    
        if (current.value >= totalIdx.value - 1) {
            current.value = 0;
        } else {
            current.value++;
        }
        // Update the active class
        document.querySelectorAll(".brand-list .swiper-slide").forEach((el, index) => {
        el.classList.toggle("on", index === current.value);
        });
    }, 4000);
};

onMounted(() => {
  totalIdx.value = document.querySelectorAll(".brand-list .swiper-slide").length;
  setTime();
});

// Clear timer when the component is unmounted
onBeforeUnmount(() => {
  clearInterval(timer);
});


</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/main/main_brand";
</style>