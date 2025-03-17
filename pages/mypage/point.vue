<template>
    <section class="mypage-point">
        <div class="title-container">
            <h2 class="title-h2">포인트</h2>
        </div>
        <div class="m-line-divider">
            <div class="useable-point-box">
                <p>사용가능 포인트<em>{{ $formatNumber(pointData.usableAllPoint) }}P</em></p>
            </div>
        </div>
        <!-- // 활성화 -->
        <div class="tabs">
            <button type="button" :class="['tab-item', { 'active': tabActive == false }]" @click="changeTab()">사용
                가능</button>
            <button type="button" :class="['tab-item', { 'active': tabActive == true }]" @click="changeTab()">사용
                완료</button>
        </div>
        <div class="tabs-content" v-show="tabActive == 0">
            <form-period-search-no-qeury />
            <p class="all-items">총 <strong>{{ $formatNumber(pointData.param.length) }}</strong>개</p>
            <ul class="point-list">
                <li v-for="(item, index) in pointData.param" :key="index" class="list">
                    <p class="title">
                        <strong>{{ item.title }}</strong>
                        <span class="point">{{ $formatNumber(item.point) }}P</span>
                    </p>
                    <p class="info">
                        <span class="sub">잔여포인트</span>
                        <span>{{ $formatNumber(item.remaining) }}P</span>
                    </p>
                    <p class="info">
                        <span class="sub">적립일</span>
                        <span>{{ item.earnedDate }}</span>
                    </p>
                    <p class="info">
                        <span class="sub">소멸예정일</span>
                        <span>{{ item.expiryDate }}</span>
                    </p>
                </li>
            </ul>
            <!-- 포인트 발행 내역 -->
            <!-- 페이징 -->
            <uiPagination :currentPage="pageSet.currentPage" :totalPages="pageSet.totalPages" />
        </div>
        <div class="tabs-content" v-show="tabActive == 1">
            <form-period-search-no-qeury />
            <p class="all-items">총 <strong>{{ $formatNumber(pointData.param.length) }}</strong>개</p>
            <ul class="point-list">
                <li v-for="(item, index) in pointData.param" :key="index" class="list">
                    <p class="title">
                        <strong>{{ item.title }}</strong>
                        <span class="point used">{{ $formatNumber(item.point) }}P</span>
                    </p>
                    <p class="info">
                        <span class="sub">잔여포인트</span>
                        <span>{{ $formatNumber(item.remaining) }}P</span>
                    </p>
                    <p class="info">
                        <span class="sub">적립일</span>
                        <span>{{ item.earnedDate }}</span>
                    </p>
                    <p class="info">
                        <span class="sub">소멸예정일</span>
                        <span>{{ item.expiryDate }}</span>
                    </p>
                </li>
            </ul>
            <!-- 포인트 발행 내역 -->
            <!-- 페이징 -->
            <uiPagination :currentPage="pageSet.currentPage" :totalPages="pageSet.totalPages" />
        </div>
        <ul class="dot-list large-dot">
            <li>조회기간 설정 시, 최근 1년까지의 적립 내역이 제공됩니다.</li>
            <li>한번에 조회 가능한 최대 기간은 6개월 입니다.</li>
        </ul>
    </section>
</template>
<script setup>
    import { reactive, ref } from 'vue';
    const { $formatNumber } = useNuxtApp();
    
    const pointSample = useSampleData('/_sample/pointList.json');

    definePageMeta({
        layout: 'mypage',
        name: 'mypage-point',
        title:'포인트'
    });

    const pointData = reactive({
        usableAllPoint: 9999999,
        param : pointSample,
    })

    const pageSet = reactive({
        currentPage: 1,
        totalPages:1,
    })

    const tabActive = ref(false)

    const changeTab = () =>{
        tabActive.value = !tabActive.value;
    }

    
</script>
<style lang="scss">
@use "~/assets/scss/pages/mypage/mypage_point.scss";
</style>