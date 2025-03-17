<template>
    <div class="m-category-menu">
        <NuxtLink class="m-category-menu-item" to="/" @click.native="categoryMenu = true">메뉴</NuxtLink>
        <NuxtLink class="m-category-menu-item" to="/mypage/favorite">즐겨찾기</NuxtLink>
        <NuxtLink class="m-category-menu-item" to="/">홈</NuxtLink>
        <NuxtLink class="m-category-menu-item" to="/mypage">마이페이지</NuxtLink>
        <NuxtLink class="m-category-menu-item" to="/">검색</NuxtLink>
    </div>

    <div class="m-gnb-wrap" :class="{ on: categoryMenu == true }">
        <header>
            <button type="button" class="m-gnb-close" @click="categoryMenu = false">닫기</button>
            <div class="my-menu">
                <NuxtLink to="/user/login" v-if="!isLogin()">
                    로그인
                </NuxtLink>
                <NuxtLink to="/" v-if="isLogin()" @click.prevent="logout">
                    로그아웃
                </NuxtLink>
                <NuxtLink to="/mypage" v-if="isLogin()">
                    마이페이지
                </NuxtLink>
            </div>
        </header>

        <div class="m-gnb">
            <div class="depth1">
                <button class="menu-item" v-for="(gnbMenu, index) in linkState.GnbMenuList" :key="index"
                    @click="itemActive(index)" :class="{ on: categoryIndex === index }">
                    {{ gnbMenu.menu }}
                </button>
            </div>

            <div class="depth2">
                <ul v-for="(gnbMenu, index) in linkState.GnbMenuList" :key="index"
                    :class="{ on: index === categoryIndex }">
                    <li v-for="(subGnbItem, subIndex) in gnbMenu.subGnbItems" :key="subIndex">
                        <button class="submenu-item" @click="subItemActive(subIndex)"
                            :class="{ on: subIndex === subMenuIndex }">{{ subGnbItem.submenu }}</button>

                        <div class="depth3" v-if="subGnbItem.thirdCategorys" :class="{ on: subIndex === subMenuIndex }">
                            <NuxtLink class="thirdmenu-item" :to="thirdCategory.link"
                                v-for="(thirdCategory, thirdIndex) in subGnbItem.thirdCategorys" :key="thirdIndex">
                                {{ thirdCategory.thirdMenu }}
                            </NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="service-area">
            <h3 class="service-title">서비스</h3>
            <div class="flex">
                <NuxtLink class="service-link" to="/">NEW</NuxtLink>
                <NuxtLink class="service-link" to="/">BEST</NuxtLink>
                <NuxtLink class="service-link" to="/">TIME SAEL</NuxtLink>
                <NuxtLink class="service-link" to="/">MD PICK</NuxtLink>
                <NuxtLink class="service-link" to="/">EVENT</NuxtLink>
                <NuxtLink class="service-link" to="/">REVIEW</NuxtLink>
            </div>
        </div>

        <div class="footer">
            <h3 class="footer-title">고객 서비스 센터</h3>
            <a href="tel: 1599-7751" class="cs-tel">1599-7751</a>
            <ul class="cs-time">
                <li>상담시간. 평일 오전 8시 30분 ~ 오후 4시 30분 (주말, 공휴일 휴무)</li>
                <li>점심시간. 오후 12시 ~ 오후 1시</li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { reactive, ref  } from 'vue';
const GnbMenu = useSampleData('/_sample/gnb.json');

const categoryMenu = ref(false); // Create a reactive boolean variable

const gnbMenu = ref(false);
const categoryIndex = ref(0);
const subMenuIndex = ref(null);
const linkAreaSwiper = ref(null);


const props = defineProps({
    gnbMenus : {
        type: Array,
        default: () => {
            return []
        }
    }
});

const linkState = reactive({
    GnbMenuList: GnbMenu,
})


const itemActive = (index) => {
    categoryIndex.value = index;
};
const subItemActive = (index) => {
    subMenuIndex.value = index;
};


import {useAuth} from "~/composables/useAuth.js";
const {logout, isLogin}= useAuth();


/*
export default {
    setup() {
        const categoryMenu = ref(false); // Create a reactive boolean variable

        // Computed property to update the value of 'showMessage'
        return {
            categoryMenu,
        };
    },
    data() {
        return {
            gnbMenu: false,
            categoryIndex: 0,
            subMenuIndex: '',
            gnbMenus: [
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
                        {submenu: "데코/포장", link: "/"},
                        {submenu: "필기구", link: "/"},
                        {submenu: "필통/펜파우치", link: "/"},
                        {submenu: "데스크용품", link: "/"},
                        {submenu: "앨범/사진", link: "/"},
                        {submenu: "독서용품", link: "/"},
                        {submenu: "사무용품", link: "/"},
                        {submenu: "파일/바인더", link: "/"},
                        {submenu: "명함/사원증", link: "/"},
                        {submenu: "카드/편지", link: "/"},
                        {submenu: "미술용품", link: "/"},
                        {submenu: "캐쉬용품", link: "/"},
                         
                    ]
                },
                { 
                    menu: "가전/생활", link: "/", // 임시 메뉴
                    subGnbItems: [
                        {submenu: "2차 카테고리2", link: "/"},
                        {submenu: "menu2", link: "/"},
                        {submenu: "menu3", link: "/"}
                    ]
                },
                { 
                    menu: "디자인문구", link: "/", // 임시 메뉴
                    subGnbItems: [
                        {submenu: "2차 카테고리3", link: "/"},
                        {
                            submenu: "menu2", link: "/",

                        },
                        {submenu: "menu3", link: "/"}
                    ]
                },
                { 
                    menu: "디지털", link: "/", // 임시 메뉴
                    subGnbItems: [
                        {submenu: "2차 카테고리4", link: "/"},
                        {submenu: "menu2", link: "/"},
                        {submenu: "menu3", link: "/"}
                    ]
                },
                { 
                    menu: "뷰티/헬스", link: "/", // 임시 메뉴
                    subGnbItems: [
                        {submenu: "2차 카테고리5", link: "/"},
                        {submenu: "menu2", link: "/"},
                        {submenu: "menu3", link: "/"}
                    ]
                },
                { 
                    menu: "여행/레포츠", link: "/", // 임시 메뉴
                    subGnbItems: [
                        {submenu: "2차 카테고리6", link: "/"},
                        {submenu: "menu2", link: "/"},
                        {submenu: "menu3", link: "/"}
                    ]
                },
                { 
                    menu: "유아동", link: "/", // 임시 메뉴
                    subGnbItems: [
                        {submenu: "2차 카테고리7", link: "/"},
                        {submenu: "menu2", link: "/"},
                        {submenu: "menu3", link: "/"}
                    ]
                },
                { 
                    menu: "인테리어", link: "/", // 임시 메뉴
                    subGnbItems: [
                        {submenu: "2차 카테고리8", link: "/"},
                        {submenu: "menu2", link: "/"},
                        {submenu: "menu3", link: "/"}
                    ]
                },
                { 
                    menu: "주방/푸드", link: "/", // 임시 메뉴
                    subGnbItems: [
                        {submenu: "2차 카테고리9", link: "/"},
                        {submenu: "menu2", link: "/"},
                        {submenu: "menu3", link: "/"}
                    ]
                },
                { 
                    menu: "펫샵", link: "/", // 임시 메뉴
                    subGnbItems: [
                        {submenu: "2차 카테고리10", link: "/"},
                        {submenu: "menu2", link: "/"},
                        {submenu: "menu3", link: "/"}
                    ]
                },

            ],
            linkAreaSwiper: '',
            linkAreas: [
                { linkMenu: '신상품', link: '/'},
                { linkMenu: '베스트', link: '/'},
                { linkMenu: '타임세일', link: '/'},
                { linkMenu: '이벤트', link: '/'},
                { linkMenu: '리뷰', link: '/'},
                { linkMenu: '🗲자주구매', link: '/'},
                { linkMenu: '전용몰', link: '/'},
            ],
        }
    },
    methods: {
        itemActive(index) {
            this.categoryIndex = index;
        },
        subItemActive(index) {
            this.subMenuIndex = index;
        },
    }
}
*/
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/layout/mobile_gnb.scss";
</style>