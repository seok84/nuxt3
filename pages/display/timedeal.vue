<template>
    <div class="item-list-page display-page display-timedeal">
        <layout-header-inner type="default" />
        <h1 class="title-h1">타임세일</h1>
        <div class="display-ad pc">
            <img src="~/assets/image/item/timesale_banner.png" alt="banner-pc">
        </div>
        <div class="display-ad mobile">
            <img src="~/assets/image/item/timesale_banner_mo.png" alt="banner-mobile">
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
            <div class="item-list-container vertical">
                <div v-for="(item, index) in itemData" :key="index" class="item-list item-list-3">
                    <ItemPartThumbnail :itemData="item" :isSpotList="true" :spotType="item.spotType" />
                    <ItemPartInfo :itemData="item" />
                </div>
            </div>
            <uiPagination />
        </div>
        <div v-else class="no-contents">
            <p>상품이 없습니다.</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const itemData = useSampleData('/_sample/itemList.json');

definePageMeta({
    name: 'display-timedeal',
});

const isVisible = ref(false);
</script>

<style lang="scss">
@use "@/assets/scss/guide.scss";
@use "@/assets/scss/pages/items/item_list.scss";
@use "@/assets/scss/pages/display/display.scss";
</style>