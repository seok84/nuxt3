<template>
    <section class="mypage-recent">
        <div class="title-container">
            <h2 class="title-h2">최근 본 상품</h2>
        </div>
        <!-- // 상품 영역 -->
        <div class="all-items">
            <span>총 <strong>{{ $formatNumber(itemDataList.content.length) }}</strong>개</span>
        </div>
        <item-list :containerDirection="'vertical'" :itemListRatio="3" :itemCheckFlag="true"
            :itemData="itemDataList.content" />

        <!-- // 페이징 -->
        <uiPagination :currentPage="pageSet.currentPage" :totalPages="pageSet.totalPages" />
    </section>
</template>
<script setup>
import { reactive } from 'vue';
const itemData = useSampleData('/_sample/itemList.json');
const { $formatNumber } = useNuxtApp();

definePageMeta({
    layout: 'mypage',
    name: 'mypage-recent',
    title:'최근 본 상품'
});

    const itemDataList = reactive({
        content: itemData,
    })
    
    const pageSet = reactive({
        currentPage: 1,
        totalPages:1,
    })

</script>
<style lang="scss">
@use "~/assets/scss/pages/mypage/mypage_main.scss";
</style>