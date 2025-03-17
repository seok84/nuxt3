<template>
    <div class="item-list-page item-index-page">
        <!-- 카테고리 리스트 -->
        <div class="category-tab-all">
            <div class="deps1">
                <NuxtLink to="/">홈</NuxtLink>
            </div>
            <div v-for="(category, index) in state.categories" :key="index" class="deps1"
                :class="{ on: activeCategory === index }" @click="toggleCategory(index)">
                {{ category.name }}<i></i>
                <div class="select-wrap" v-show="activeCategory === index">
                    <ul class="select-option">
                        <li v-for="(sub, subIndex) in category.subcategories" :key="subIndex">
                            <NuxtLink :to="sub.link">{{ sub.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 현재 선택된 카테고리 표시 -->
        <div class="category-tabs-current" :class="{ on: isCategoryDropdownOpen }">
            <h2>
                {{ state.categories[selectedCategoryDepth]?.name }}
                <i v-if="getCategories(selectedCategoryDepth).length" @click="toggleCategoryDropdown"></i>
            </h2>

            <!-- PC 디자인 -->
            <template v-if="!isMobile">
                <div class="select-wrap" v-show="isCategoryDropdownOpen">
                    <div class="triangle"></div>
                    <ul class="select-option">
                        <li v-for="(category, index) in getCategories(selectedCategoryDepth)" :key="index">
                            <NuxtLink :to="category.link">{{ category.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </template>

            <!-- Mobile 디자인 -->
            <template v-if="isMobile">
                <div class="dimmed-bg" @click="isCategoryDropdownOpen = false"></div>
                <div class="select-wrap-mobile" v-show="isCategoryDropdownOpen">
                    <div class="select-header">
                        <p>{{ state.categories[selectedCategoryDepth]?.name }}</p>
                        <div class="btn-close" @click="isCategoryDropdownOpen = false"></div>
                    </div>
                    <ul class="select-option">
                        <li v-for="(category, index) in getCategories(selectedCategoryDepth)" :key="index">
                            <NuxtLink :to="category.link">{{ category.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </template>
        </div>

        <!-- PC용 Swiper 카테고리 -->
        <!-- <Swiper class="category-tabs-next-swiper swiper-visible" :modules="[Navigation]" :slides-per-view="'auto'"
            :space-between="30" :navigation="{
                prevEl: '.swiper-prev',
                nextEl: '.swiper-next',
            }" @swiper="setSwiperInstance" @slide-change="onSlide">
            <SwiperSlide v-for="(sub, index) in getCategories(selectedCategoryDepth + 1)" :key="index"
                :class="{ on: state.swiperActiveIndex === index }" @click="setActiveSlide(index)">
                <NuxtLink :to="sub.link">{{ sub.name }}</NuxtLink>
            </SwiperSlide>
            <div class="swiper-controls" v-if="getCategories(selectedCategoryDepth + 1).length > 0">
                <div class="swiper-prev">이전</div>
                <div class="swiper-next">다음</div>
            </div>
        </Swiper> -->

        <!-- Mobile용 카테고리 -->
        <ul class="category-tabs-next" :class="{ active: isMobileCategoryExpanded }">
            <li v-for="(sub, index) in getCategories(selectedCategoryDepth + 1)" :key="index"
                :class="{ on: state.swiperActiveIndex === index }" @click="setActiveSlide(index)">
                <NuxtLink :to="sub.link">{{ sub.name }}</NuxtLink>
            </li>
        </ul>
        <div class="btn-more-category" @click="toggleMobileCategory"
            v-if="getCategories(selectedCategoryDepth + 1).length > 6">
            <i></i>
        </div>

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
import { reactive, ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const itemData = useSampleData('/_sample/itemList.json');

definePageMeta({
    name: 'item-index'
});

const state = reactive({
    swiperInstance: null,
    categories: [
        {
            name: "1차 카테고리",
            subcategories: [
                { name: "1차 카테고리1", link: "/category/1-1" },
                { name: "1차 카테고리2", link: "/category/1-2" },
                { name: "1차 카테고리3", link: "/category/1-3" },
            ]
        },
        {
            name: "2차 카테고리",
            subcategories: [
                { name: "2차 카테고리1", link: "/category/2-1" },
                { name: "2차 카테고리2", link: "/category/2-2" },
                { name: "2차 카테고리3", link: "/category/2-3" },
                { name: "2차 카테고리4", link: "/category/2-4" },
                { name: "2차 카테고리5", link: "/category/2-5" },
                { name: "2차 카테고리6", link: "/category/2-6" },
                { name: "2차 카테고리7", link: "/category/2-7" },
                { name: "2차 카테고리8", link: "/category/2-8" },
                { name: "2차 카테고리9", link: "/category/2-9" },
            ]
        },
        {
            name: "3차 카테고리",
            subcategories: [
                { name: "3차 카테고리1", link: "/category/3-1" },
                { name: "3차 카테고리2", link: "/category/3-2" },
                { name: "3차 카테고리3", link: "/category/3-3" },
            ]
        }
    ],
    swiperActiveIndex: 0,
});

// 카테고리 상태
const activeCategory = ref(null);
const selectedCategoryDepth = ref(0);
const isCategoryDropdownOpen = ref(false);
const isMobile = ref(false);
const isMobileCategoryExpanded = ref(false);

// 함수 정의
const toggleCategory = (index) => {
    activeCategory.value = activeCategory.value === index ? null : index;
};

const getCategories = (depth) => {
    return state.categories[depth]?.subcategories || [];
};

const toggleCategoryDropdown = () => {
    isCategoryDropdownOpen.value = !isCategoryDropdownOpen.value;
};

const toggleMobileCategory = () => {
    isMobileCategoryExpanded.value = !isMobileCategoryExpanded.value;
};

// Swiper 설정
const setSwiperInstance = (swiper) => {
    state.swiperInstance = swiper;
};

const onSlide = () => {
    if (state.swiperInstance) {
        const currentSlideIdx = state.swiperInstance.activeIndex;
        console.log('Current Slide Index:', currentSlideIdx);
    }
};

const setActiveSlide = (index) => {
    state.swiperActiveIndex = index;
};

</script>

<style lang="scss" scoped>
@use "~/assets/scss/guide.scss";
@use "~/assets/scss/pages/items/item_list.scss";
</style>
