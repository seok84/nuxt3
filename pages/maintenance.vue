<template>
    <div class="check-site">
        <div class="check-wrap">
            <img src="~/assets/image/common/brand.svg" alt="세일즈온 스토어" class="check-img">
            <h1 class="check-title">세일즈온 쇼핑몰 개편으로 인한<br />
                서비스 일시 중단 안내</h1>
            <div class="pc">
                <p class="check-info-title">서비스 이용 불가 시간 (서버 전환작업)</p>
                <p class="check-info-content">2023년 NN월 NN일(요일) ~ 2023년 NN월 NN일(요일)<br />19:30 ~06:00</p>
                <p class="check-info-content">개편 홈페이지 오픈 : <em>2023년 NN월 NN일(요일) 06:00 이후</em></p>
                <p class="check-list-title">주요 개편사항</p>
                <ol class="check-list-content">
                    <li>1. 쉽고 간편한 정기배송 서비스 이용가능</li>
                    <li>2. 상품 선물하기 기능 이용 가능</li>
                    <li>3. 카카오채널 상담톡을 통한 빠른 상담 가능</li>
                </ol>
            </div>
            <div class="mobile">
                <p class="check-info-title">서비스 이용 불가 시간 (서버 전환작업)</p>
                <p class="check-info-content">2023년 NN월 NN일(요일)<br />~ 2023년 NN월 NN일(요일)19:30 ~06:00</p>
                <p class="check-info-title">개편 홈페이지 오픈</p>
                <p class="check-info-content">2023년 NN월 NN일(요일) 06:00 이후</p>
                <div class="check-list-wrap">
                    <p class="check-list-title">주요 개편사항</p>
                    <ol class="check-list-content">
                        <li>- 쉽고 간편한 정기배송 서비스 이용가능</li>
                        <li>- 상품 선물하기 기능 이용 가능</li>
                        <li>- 카카오채널 상담톡을 통한 빠른 상담 가능</li>
                    </ol>
                </div>
            </div>
            <p class="check-info-sub">
                새로운 모습의 세일즈온 쇼핑몰을 기대해 주세요.<br />감사합니다.
            </p>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

definePageMeta({
    layout: 'sub',
    name: 'check-site',
});

onMounted(()=>{
    document.querySelector('body').classList.add('checking-site');
})

</script>
<style lang="scss">
@use '~/assets/scss/checked';
</style>