<template>
    <div class="item-list-page display-page">
       <layout-header-inner type="default" />
        <h1 class="title-h1">신상품</h1>
        <div class="display-ad pc">
            <img src="~/assets/image/item/new_banner_top.png" alt="banner-pc">
        </div>
        <div class="display-ad mobile">
            <img src="~/assets/image/item/new_banner_top_mo.png" alt="banner-mobile">
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
const itemData = useSampleData('/_sample/itemList.json');

definePageMeta({
    name: 'display-new',
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";
@use "@/assets/scss/pages/items/item_list.scss";
@use "@/assets/scss/pages/display/display.scss";
</style>