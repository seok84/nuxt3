<template>
    <div :class="{ 'fixed-header': isHeaderFixed == true, 'hide-banner': showTopBanner == false }" ref="topBanner">
        <div>
            <!-- 탑배너영역 -->
            <div id="top-banner" ref="topBanner" v-show="showTopBanner">
                <section>
                    <!-- 이미지형 -->
                    <div class="flex type1">
                        <div class="bg-left" style="background: #28B279;"></div>
                        <div class="bg-right" style="background: #f9da70;"></div>
                        <button type="button" class="top-banner-close white" @click="showTopBanner = false">닫기</button>
                        <a href="javascript:;" class="pc"><img src="~/assets/image/_temp/top_banner_left.png"
                                alt=""></a>

                        <!--
                        <a href="javascript:;" class="pc"><img src="~/assets/image/_temp/top_banner_right.png"
                                alt=""></a>
                        <a href="javascript:;" class="mobile"><img src="~/assets/image/_temp/top_banner_left.png"
                                alt=""></a>
                        <a href="javascript:;" class="mobile"><img src="~/assets/image/_temp/top_banner_right.png"
                                alt=""></a>
                                -->
                    </div>
                    <!-- 텍스트형 -->
                    <div class="flex hidden type-text">
                        <button type="button" class="top-banner-close" @click="showTopBanner = false">닫기</button>
                        탑배너 영역입니다.
                    </div>
                </section>
            </div>
            <header id="header" :class="headerMobileStyle" ref="headerTop">
                <!-- 
                    pageback :: page back button show
                    brand :: brand(logo) show
                    page-title :: page title show
                    searching :: searching-area show
                    basket :: basket ico show
                    quicklink :: quick-link show
                 -->
                <section class="flex space-between">
                    <div class="col-left">
                        <button type="button" class="btn-gnb" @click="gnbToggle()">메뉴 열기</button>
                        <button type="button" class="btn-back btn-history">
                            <img src="~/assets/image/ico/ico_arr_back.svg" alt="뒤로가기">
                        </button>
                        <NuxtLink to="/" class="brand"><img src="~/assets/image/common/brand.svg" alt="세일즈온"></NuxtLink>

                        <h1 class="title-h1-mobile">{{ propsPageTItle }}</h1>
                    </div>

                    <div class="col-right">
                        <div class="searching-area">
                            <form>
                                <button type="button" class="btn-close" @click="showMobileSearch()"><img
                                        src="~/assets/image/ico/ico_arr_back.svg" alt="뒤로가기"></button>
                                <input type="search" placeholder="내 몸이 좋아하는 프레쉬한 한끼" @focus="showSearchList = true">
                                <button type="button" class="btn-search mobile-search-open"
                                    @click="showMobileSearch()">모바일 검색창 열기</button>
                                <button type="button" class="btn-search">검색</button>
                            </form>
                        </div>
                        <ul class="util-menu">
                            <li class="favorite">
                                <NuxtLink to="/mypage/favorite">찜 상품</NuxtLink>
                            </li>
                            <li class="mypage">
                                <NuxtLink to="/mypage">마이페이지</NuxtLink>
                            </li>
                            <li class="mycart">
                                <NuxtLink to="/cart">장바구니 <span class="count">99</span></NuxtLink>
                            </li>
                        </ul>
                        <div class="searching-list" v-show="showSearchList" ref="searList">
                            <button type="button" class="delete-all">전체삭제</button>
                            <div class="list list-popular">
                                <p>인기검색어</p>
                                <ol>
                                    <li><em class="number">1</em><a href="/" class="text">순위01</a></li>
                                    <li><em class="number">2</em><a href="/" class="text">순위02</a></li>
                                    <li><em class="number">3</em><a href="/" class="text">순위03</a></li>
                                    <li><em class="number">4</em><a href="/" class="text">순위04</a></li>
                                    <li><em class="number">5</em><a href="/" class="text">순위05</a></li>
                                    <li><em class="number">6</em><a href="/" class="text">순위06</a></li>
                                    <li><em class="number">7</em><a href="/" class="text">순위07</a></li>
                                    <li><em class="number">8</em><a href="/" class="text">순위08</a></li>
                                    <li><em class="number">9</em><a href="/" class="text">순위09</a></li>
                                    <li><em class="number">10</em><a href="/" class="text">순위10</a></li>
                                </ol>
                            </div>
                            <div class="list list-recent">
                                <p>최근 검색어</p>
                                <ul>
                                    <li><a href="/" class="text">검색어01</a><button class="delete"></button></li>
                                    <li><a href="/" class="text">검색어02</a><button class="delete"></button></li>
                                    <li><a href="/" class="text">검색어03</a><button class="delete"></button></li>
                                    <li><a href="/" class="text">검색어04</a><button class="delete"></button></li>
                                </ul>
                            </div>
                            <div class="list-footer"><button type="button" @click="showSearchList = false">닫기</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="quick-link">
                    <div class="link-area" ref="linkAreaSwiper">
                        <div class="swiper-wrapper">
                            <NuxtLink :to="linkArea.link" v-for="(linkArea, index) in linkAreas" :key="index"
                                :class="{ 'swiper-slide': true, 'router-link-active': isActive(linkArea.link) }">
                                {{ linkArea.linkMenu }}
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="my-menu">
                        <NuxtLink to="/mypage/order">
                            주문배송
                        </NuxtLink>
                        <NuxtLink to="/customer/notice">
                            고객센터
                        </NuxtLink>
                        <NuxtLink to="/user/login" v-if="!auth.isLogin()">
                            로그인
                        </NuxtLink>
                        <NuxtLink to="/" v-if="auth.isLogin()">
                            로그아웃
                        </NuxtLink>
                    </div>
                </section>
                <nav class="gnb" @mouseleave="itemActive(null)">
                    <section class="depth1">
                        <div class="menu-item" v-for="(gnbMenu, index) in gnbMenus" :key="index"
                            :class="{ on: index === categoryIndex }">
                            <NuxtLink :to="gnbMenu.link" @mouseenter="itemActive(index)">
                                {{ gnbMenu.menu }}
                            </NuxtLink>
                            <div class="depth2" :class="{ on: index == categoryIndex }">
                                <ul>
                                    <li v-for="(subGnbItem, subIndex) in gnbMenu.subGnbItems" :key="subIndex"
                                        :class="{ on: subIndex === subMenuIndex }">
                                        <NuxtLink :to="subGnbItem.link" @mouseenter="subItemActive(subIndex)">
                                            {{ subGnbItem.submenu }}
                                        </NuxtLink>
                                        <div class="depth3" v-if="subGnbItem.thirdCategorys">
                                            <div class="depth3-menu"
                                                v-for="(thirdCategory, thirdIndex) in subGnbItem.thirdCategorys"
                                                :key="thirdIndex" :class="{ on: thirdIndex === thirdMenuIndex }">
                                                <NuxtLink :to="thirdCategory.link"
                                                    @mouseenter="thirdItemActive(thirdIndex)">
                                                    {{ thirdCategory.thirdMenu }}
                                                </NuxtLink>
                                                <div class="depth4" v-if="thirdCategory.fourthCategorys">
                                                    <div class="depth4-menu"
                                                        v-for="(fourthCategory, fourthIndex) in thirdCategory.fourthCategorys"
                                                        :key="fourthIndex">
                                                        <NuxtLink :to="fourthCategory.link">
                                                            {{ fourthCategory.fourthMenu }}
                                                        </NuxtLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </nav>
            </header>
        </div>

    </div>
</template>

<script setup>
//import { ref } from "vue";
import { ref, reactive, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Swiper from 'swiper';
import "swiper/swiper-bundle.css";

import {useAuth} from "~/composables/useAuth.js";
const auth = useAuth();
console.log('###########auth: ', auth.getUser())

const isVisible = ref(true); // Create a reactive boolean variable
const isHeaderFixed = ref(true);
const isHeaderGnbOn = ref(true);

const props = defineProps({
    headerMobileStyle: {
        type: String,
        default: ''
    },
    propsPageTItle: {
        type: String,
        default: ''
    }
})

const showTopBanner = ref(true);
const gnbMenu = ref(false);
const categoryIndex = ref('');
const subMenuIndex = ref('');
const thirdMenuIndex = ref('');
const showSearchList = ref(false);
const linkAreaSwiper = ref(null);
const route = useRoute();
const topBanner = ref(null);
const headerTop = ref(null);
const gnbMenus = reactive([
    { 
        menu: "가구/수납", link: "/guide", // 임시 메뉴
        subGnbItems: [
            {submenu: "2차 카테고리1", link: "/"},
            {submenu: "노트/메모", link: "/"},
            {
                submenu: "플래너/컨셉북", link: "/",
                thirdCategorys: [
                    {thirdMenu: "3차 카테고리", link: "/",
                        fourthCategorys: [
                            {fourthMenu: "4차 카테고리", link: "/"},
                            {fourthMenu: "캐쉬북", link: "/"},
                            {fourthMenu: "티켓북", link: "/"},
                            {fourthMenu: "테마북", link: "/"},
                            {fourthMenu: "다이어트 플래너", link: "/"},
                            {fourthMenu: "트래블노트", link: "/"},
                            {fourthMenu: "단어장/오답노트", link: "/"},
                            {fourthMenu: "스티커북", link: "/"},
                        ]
                    },
                    {thirdMenu: "캐쉬북", link: "/"},
                    {thirdMenu: "티켓북", link: "/"},
                    {thirdMenu: "테마북", link: "/"},
                    {thirdMenu: "다이어트 플래너", link: "/"},
                    {thirdMenu: "트래블노트", link: "/"},
                    {thirdMenu: "단어장/오답노트", link: "/"},
                    {thirdMenu: "스티커북", link: "/"},
                ]
            },
        ]
    }
]);

const linkAreas = reactive([
    { linkMenu: '신상품', link: '/display/new'},
    { linkMenu: '베스트', link: '/display/best'},
    { linkMenu: '타임세일', link: '/display/timedeal'},
    { linkMenu: '이벤트', link: '/featured'},
    { linkMenu: 'MD추천', link: '/display/md'},
    { linkMenu: '리뷰', link: '/customer/faq'},
]);

const isActive = (routePath) => route.path === routePath;

const itemActive = (index) => categoryIndex.value = index;
const subItemActive = (index) => subMenuIndex.value = index;
const thirdItemActive = (index) => thirdMenuIndex.value = index;

const showMobileSearch = () => {
    showSearchList.value = !showSearchList.value;
    if (showSearchList.value) {
        showTopBanner.value = false;
        document.body.classList.add('scroll-fixed');
        headerTop.value?.classList.add('mobile-search-active');
    } else {
        showTopBanner.value = true;
        document.body.classList.remove('scroll-fixed');
        headerTop.value?.classList.remove('mobile-search-active');
    }
};

const gnbToggle = () => {
    document.querySelector('.fixed-header').classList.toggle('on');
};

onMounted(() => {
    const windowWidth = window.innerWidth;
    const linkAreaSwiperOption = {
        slidesPerView: 'auto',
        spaceBetween: 18,
        loop: false,
    };

    if (windowWidth < 767) {
        linkAreaSwiper.value = new Swiper('#header .link-area', linkAreaSwiperOption);
    }

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        if (scrollY > 0) {
            topBanner.value?.classList.add('scroll');
        } else {
            topBanner.value?.classList.remove('scroll');
        }
    });
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/layout/header.scss";
</style>