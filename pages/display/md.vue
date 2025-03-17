<template>
    <div class="item-list-page display-page">
        <layout-header-inner type="default" />
        <h1 class="title-h1">MD추천</h1>
        <!-- categorySwiper -->
        <Swiper class="category-bubble-swiper swiper-visible" :modules="[Navigation]" :slides-per-view="'auto'"
            :space-between="10" :navigation="{
                prevEl: '.swiper-prev',
                nextEl: '.swiper-next',
            }" @swiper="setSwiperInstance" @slide-change="onSlide">
            <SwiperSlide v-for="(tag, index) in state.swiperTags" :key="index"
                :class="{ on: state.swiperActiveIndex === index }" @click="setActiveSlide(index)">
                {{ tag }}
            </SwiperSlide>
            <div class="swiper-controls">
                <div class="swiper-prev">이전</div>
                <div class="swiper-next">다음</div>
            </div>
        </Swiper>
        <div class="filter-wrap">
            <p>총 <b>123</b>개 상품</p>
            <div class="select-wrap">
                <select class="input-select">
                    <option value="">인기순</option>
                    <option value="">추천순</option>
                    <option value="">최신순</option>
                    <option value="">높은가격순</option>
                    <option value="">낮은가격순</option>
                    <option value="">옵션</option>
                </select>
            </div>
        </div>
        <div v-if="itemData && itemData.length > 0">
            <ItemList :itemData="itemData" :itemListRatio="4" />
            <uiPagination />
        </div>
        <div v-else class="no-contents">
            <p>상품이 없습니다.</p>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const itemData = useSampleData('/_sample/itemList.json');

definePageMeta({
    name: 'display-md',
});

const state = reactive({
    swiperTags: [
        "#클리어런스", "#스누지", "#디저트", "#리프레시",
        "#피크닉세트", "#스마트톡", "#귀욤파우치", "#클리어런스", "#스누지", "#디저트", "#리프레시",
        "#피크닉세트", "#스마트톡", "#귀욤파우치"
    ],
    swiperActiveIndex: 0,
});

const setSwiperInstance = (swiper) => {
    state.swiperInstance = swiper;
};

const onSlide = () => {
    if (state.swiperInstance) {
        const currentSlideIdx = state.swiperInstance.activeIndex;
        console.log("### currentSlideIdx", currentSlideIdx)
        console.log("### state.swiperInstance", state.swiperInstance)
    }
};

const setActiveSlide = (index) => {
    state.swiperActiveIndex = index;
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";
@use "@/assets/scss/pages/items/item_list.scss";
@use "@/assets/scss/pages/display/display.scss";
</style>