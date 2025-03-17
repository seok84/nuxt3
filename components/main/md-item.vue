<template>
    <div class="recommend-area">
        <section class="main-tabs">
            <div class="swiper-wrap">
                <Swiper :slidesPerView="7" :loop="false" :spaceBetween="30" :breakpoints="{
                    '320': {
                        slidesPerView: 'auto',
                        spaceBetween: 10,
                    },
                    '767': {
                        slidesPerView: 'auto',
                        spaceBetween: 10,
                    },
                }" :modules="modules" class="main-tab-swiper">
                    <template v-for="(data, index) in mdTag">
                        <SwiperSlide :class="[activeIndex === index ? 'on' : '']" @click.prevent="active(index)">
                            <span class="main-tabitem">#{{ data.tag }}</span>
                        </SwiperSlide>
                    </template>
                </Swiper>
            </div>
        </section>
        <div class="main-tabcontent">
            <ItemList :itemData="itemData" :itemListRatio="5" :displayRank="false" />
        </div>

        <!-- 개발소스
        <section class="main-tabs">
            <div class="main-tab-swiper">
                <div class="swiper-wrapper">
                <template v-for="(data, index) in tag">
                    <div class="swiper-slide">
                    <a href="javascript:;" class="main-tabitem" @click.prevent="active(data)">
                        #{{ data }}
                    </a>
                    </div>
                </template>
                </div>
            </div>
        </section>
        <div class="main-tabcontent">
            <item-list :list-container-class="'vertical'" :list-class="'item-list-5'" :content="result.content"/>
        </div>-->
    </div>
</template>

<script setup>
import { ref  } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import "swiper/swiper-bundle.css";

// swiper module
const modules = [Navigation, Pagination, Autoplay, Scrollbar];

const props = defineProps({
    mdTag: {
        type: Array,
        default: () => {
            return []
        }
    },
    itemData: {
        type: Object,
        required: true,
        default: () => ({
            isSoldOut: true,
            soldOutImage: "/_nuxt/assets/image/sample/sold-out.png",
            floatingImages: {
                topLeft: "",
                topRight: "",
                bottomLeft: "",
                bottomRight: "",
                centerCenter: ""
            },
            thumbnail: "/_nuxt/assets/image/sample/thum.png",
            title: '',
            subtitle: '',
            originalPrice: 0,
            discountedPrice: 0,
            discountRate: 0,
            tags: [],
        }),
    },
});

const activeIndex = ref(0);

const active = (index) => {
    activeIndex.value = index;
};


</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/main/main_md";
</style>