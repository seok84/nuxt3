<template>
    <div class="item-list-page display-page display-review">
        <layout-header-inner type="default" />
        <h1 class="title-h1">리뷰</h1>

        <!-- 카테고리 -->
        <ul class="category-tabs-next" :class="{ active: state.showMoreFlag }">
            <li v-for="(tapMenu, index) in state.displayTapMenu" :key="index"
                :class="{ on: state.selectedTapMenu === index }" @click="selectTapMenu(index)">
                <NuxtLink :to="tapMenu.link">{{ tapMenu.name }}</NuxtLink>
            </li>
        </ul>
        <!-- 카테고리 더보기 -->
        <div class="btn-more-category" @click="toggleShowMore" v-if="state.displayTapMenu.length > 6">
            <i></i>
        </div>

        <div class="filter-wrap">
            <p>총 <b>123</b>개 상품</p>
        </div>

        <!-- 리뷰 컨텐츠 -->
        <template v-if="state.content && state.content.length > 0">
            <section class="review-container">
                <div class="review-box" v-for="(data, index) in state.content" :key="index">
                    <div class="thumbnail">
                        <img :src="data.image" :alt="data.itemName">
                    </div>
                    <div class="content">
                        <img src="~/assets/image/ico/ico_review_quotes.svg" class="ico-quotes">
                        <p class="review-text">
                            {{ data.content }}
                        </p>
                        <div class="score-wrap">
                            <span v-for="score in state.starScores" :key="score"
                                :class="['star', data.score >= score ? 'active' : '']"></span>
                        </div>
                        <p class="item-title">{{ data.itemName }}</p>
                    </div>
                </div>
            </section>
            <uiPagination />
        </template>
        <div v-else class="no-contents">
            <p>상품이 없습니다.</p>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
definePageMeta({
    name: 'display-review',
});

const state = reactive({
    displayTapMenu: [
        { name: "아이카사", url: "ikasa" },
        { name: "플라워마켓", url: "flowermarket" },
        { name: "키친마스터", url: "kitchenmaster" },
        { name: "스마트홈", url: "smarthome" },
        { name: "뷰티샵", url: "beautyshop" },
        { name: "전자랜드", url: "electron" },
        { name: "패션몰", url: "fashion" },
        { name: "푸드마켓", url: "foodmarket" },
        { name: "라이프스타일", url: "lifestyle" },
        { name: "홈인테리어", url: "homeinterior" }
    ],
    selectedTapMenu: "",
    showMoreFlag: false,
    content: [
        {
            image: "/_nuxt/assets/image/sample/sample_01.png",
            content: "쓰던 제품 추가로 구매했는데 배송이 빨라 너무 맘에 들어요!",
            score: 4,
            itemName: "[아이카사] 카페 세트_얼그레이 밀크티 세트",
        },
        {
            image: "/_nuxt/assets/image/sample/no_content_720480.png",
            content: "이 상품은 내 기대를 충족시켰습니다. 디자인이 멋지고, 기능이 매우 효과적입니다. 품질도 매우 훌륭합니다.",
            score: 2,
            itemName: "[플라워마켓] 로즈 가든_화이트 로즈 부케 10송이",
        },
        {
            image: "/_nuxt/assets/image/sample/item_sample_01.png",
            content: "정말 훌륭해요! 강추합니다!",
            score: 4,
            itemName: "[키친마스터] 프리미엄 새우_냉동 생선가게 직송 5kg",
        },
        {
            image: "/_nuxt/assets/image/sample/thum.png",
            content: "쓰던 제품 추가로 구매했는데 배송이 빨라 너무 맘에 들어요!",
            score: 4,
            itemName: "[스마트홈] 보안 카메라_1080p WiFi 야외 모션 감지",
        }
    ],
    starScores: [1, 2, 3, 4, 5],
});

const selectTapMenu = (tapMenuUrl) => {
    state.selectedTapMenu = tapMenuUrl;
};

const toggleShowMore = () => {
    state.showMoreFlag = !state.showMoreFlag;
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";
@use "@/assets/scss/pages/items/item_list.scss";
@use "@/assets/scss/pages/display/display.scss";
</style>
