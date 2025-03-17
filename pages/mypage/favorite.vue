<template>
    <section class="mypage-favorite">
        <div class="title-container">
            <h2 class="title-h2">관심상품</h2>
        </div>
        <!-- // 상품 영역 -->
        <div class="check-wrap m-line-divider">
            <label class="circle-input-checkbox"><input type="checkbox"><i></i>전체선택(N개)</label>
            <div class="btn btn-default btn-action">선택삭제</div>
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

    definePageMeta({
        layout: 'mypage',
        name: 'mypage-favorite',
        title: '관심상품'
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