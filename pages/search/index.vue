<template>
    <section class="result-container">
        <layout-header-inner type="default" />
        <div v-if="state.result && itemData && itemData.length > 0">
            <h1 class="title-h1">'<em>인테리어</em>' 검색결과</h1>
            <div class="sort-wrap">
                <div class="all-items">총 <strong>123</strong>개 상품</div>
                <div class="sort-list">
                    <div class="select-wrap">
                        <select class="input-select">
                            <option value="">인기순</option>
                            <option value="">저렴한 순</option>
                        </select>
                    </div>
                </div>
            </div>
            <ItemList :itemData="itemData" :itemListRatio="4" :displayRank="true" />
            <uiPagination />
        </div>
        <!-- v-else -->
        <div class="no-result-content no-contents" v-else>
            <h1 class="title-h1">'<em>인테리어</em>' 검색결과</h1>
            <img src="~/assets/image/common/img_noResult.png" alt="검색 결과가 없습니다." class="result-img">
            <p class="result-text">검색 결과가 없습니다.</p>
            <span class="result-info">단어의 철자가 정확한지 확인해 보세요.<br />
                띄어쓰기 또는 넓은 의미의 단어를 사용해 보세요:D
            </span>
            <NuxtLink to="/" class="btn btn-round btn-primary-line confirm-btn">메인으로</NuxtLink>
        </div>
    </section>
</template>
<script setup>
const itemData = useSampleData('/_sample/itemList.json');
definePageMeta({
    name: 'search-index',
});
const state = reactive ({
    result: true
})
</script>
<style lang="scss">
@use '~/assets/scss/pages/search/search.scss';
</style>