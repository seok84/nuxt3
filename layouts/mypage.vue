<template>
    <LayoutHeader :headerMobileStyle="headerMobileStyle" :propsPageTItle="pageMetaTitle" />
    <div class="content-inner">
        <div class="mypage" :class="currentPage">
            <a href="/mypage" class="title-h1">마이페이지</a>
            <MypageUserInfo />
            <MypageLnb />
            <div class="mypage-inner">
                <slot />
            </div>
        </div>
    </div>
    <LayoutFooter />
    <LayoutAside />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, watchEffect } from 'vue';

const route = useRoute();
const currentPage = ref(route.name);
const pageMetaTitle = ref(route.meta.title); // 모바일 노출 타이틀

watchEffect(() => {
    currentPage.value = route.name;
    pageMetaTitle.value = route.meta.title;
});

// 페이지별 헤더 노출 조정
const type02Header = 'pageback page-title basket';

const headerMobileStyle = computed(() => {
    return type02Header;
});

</script>

<style lang="scss">
@use "~/assets/scss/common.scss";
@use "~/assets/scss/pages/mypage/mypage_main.scss";
</style>