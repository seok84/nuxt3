<template>
    <div class="item-list-page display-page display-best">
        <layout-header-inner type="default" />
        <h1 class="title-h1">베스트</h1>
        <div class="display-ad pc">
            <img src="~/assets/image/item/best_bg_banner.png" alt="banner-pc">
        </div>
        <div class="display-ad mobile">
            <img src="~/assets/image/item/best_bg_banner_mo.png" alt="banner-mobile">
        </div>
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
        <div v-if="itemData && itemData.length > 0">
            <ItemList :itemData="itemData" :itemListRatio="4" :displayRank="true" />
            <uiPagination />
        </div>
        <div v-else class="no-contents">
            <p>상품이 없습니다.</p>
        </div>
    </div>
</template>

<script setup>
const itemData = useSampleData('/_sample/itemList.json');

definePageMeta({
    name: 'display-best',
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
});


const selectTapMenu = (tapMenuUrl) => {
    state.selectedTapMenu = tapMenuUrl;
};

const toggleShowMore = () => {
    state.showMoreFlag = !state.showMoreFlag;
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/pages/display/display.scss";
</style>