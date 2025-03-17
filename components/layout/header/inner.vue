<template>
    <div :class="{ 'fixed-header': isHeaderFixed == true, 'hide-banner': showTopBanner == false }" ref="fixedHeader">
        <!-- 탑배너영역 -->
        <div id="top-banner" ref="topBanner" v-show="showTopBanner">
            <section>
                <!-- 이미지형 -->
                <div class="flex type1">
                    <div class="bg-left" style="background: #28B279;"></div>
                    <div class="bg-right" style="background: #f9da70;"></div>
                    <button type="button" class="top-banner-close white" @click="showTopBanner = false">닫기</button>
                    <a href="javascript:;" class="pc"><img src="~/assets/image/_temp/top_banner_left.png" alt=""></a>
                </div>
                <!-- 텍스트형 -->
                <div class="flex hidden type-text">
                    <button type="button" class="top-banner-close" @click="showTopBanner = false">닫기</button>
                    탑배너 영역입니다.
                </div>
            </section>
        </div>

        <header id="header" :class="[typeStyle, { 'mobile-search-active': showSearchList }]" ref="headerGnb">
            <!--
            * header class list
            header-default :: 백버튼(메인은 노출x) + 로고 + 검색 + 장바구니 + gnb
            header-pagetitle :: 백버튼 + 타이틀 + 장바구니
            header-detail :: 백버튼 + 로고 + 검색 + 장바구니
            header-login :: 로그인 전용
            -->
            <section class="flex space-between">
                <div class="col-left">
                    <button type="button" class="btn-gnb" @click="gnbToggle()">메뉴 열기</button>
                    <button type="button" class="btn-back btn-history">
                        <img src="~/assets/image/ico/ico_arr_back.svg" alt="뒤로가기">
                    </button>
                    <NuxtLink to="/" class="brand"><img src="~/assets/image/common/brand.svg" alt="세일즈온"></NuxtLink>
                    <h2 class="title-h1-mobile">{{ title }}</h2>
                </div>

                <div class="col-right">
                    <div class="searching-area">
                        <form>
                            <button type="button" class="btn-close" @click="showMobileSearch()"><img
                                    src="~/assets/image/ico/ico_arr_back.svg" alt="뒤로가기"></button>
                            <input type="search" placeholder="내 몸이 좋아하는 프레쉬한 한끼" @focus="showSearchList = true">
                            <button type="button" class="btn-search mobile-search-open" @click="showMobileSearch()">모바일
                                검색창 열기</button>
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
                <div class="link-area">
                    <ul>
                        <li v-for="(linkArea, index) in linkState.linkAreas" :key="index">
                            <NuxtLink :to="linkArea.link">{{ linkArea.linkMenu }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="my-menu">
                    <NuxtLink to="/mypage/order">
                        주문배송
                    </NuxtLink>
                    <NuxtLink to="/customer/notice">
                        고객센터
                    </NuxtLink>
                    <NuxtLink to="/user/login" v-if="!isLogin()">
                        로그인
                    </NuxtLink>
                    <NuxtLink to="/" v-if="isLogin()" @click.prevent="logout">
                        로그아웃
                    </NuxtLink>
                </div>
            </section>
            <nav class="gnb" @mouseleave="itemActive(null)">
                <section class="depth1">
                    <div class="menu-item" v-for="(gnbMenu, index) in linkState.GnbMenuList" :key="index"
                        :class="{ on: index === categoryIndex }">
                        <NuxtLink :to="gnbMenu.link" @mouseenter="itemActive(index)">
                            {{ gnbMenu.menu }}
                        </NuxtLink>
                        <div class="depth2" :class="{ 'on': index == categoryIndex }">
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
</template>
<script setup>
import { reactive, ref , onMounted, onUnmounted } from 'vue';
const GnbMenu = useSampleData('/_sample/gnb.json');

const router = useRouter()

const props = defineProps({
    typeStyle: {
        type: String,
        default: () => {
            return 'header-default'
        }
    },
    type: {
        type: String,
        default: () => {
            return 'default'
        }
    },
    hiddenBackButton: {
        type: Boolean,
        default: () => {
            return false
        }
    },
    backUrl: {
        type: String,
        default: () => {
            return ''
        }
    },
    title: {
        type: String,
        default: () => {
            return ''
        }
    },
    utilMenuType: {
        type: String,
        default: () => {
            return ''
        }
    },
    appBackUrl: {
        type: String,
        default: () => {
            return ''
        }
    },
    backButtonType: {
        type: String,
        default: () => {
            return 'button'
        }
    }
});
const { typeStyle, type, hiddenBackButton, backUrl, title, utilMenuType, appBackUrl, backButtonType } = props;
const isVisible = ref(true); // Create a reactive boolean variable
const isHeaderFixed = ref(true);
const isHeaderGnbOn = ref(true);
const showTopBanner = ref(false);

const fixedHeader = ref(null);
const headerGnb = ref(null);
let headerGnbTop = ref(0);




import {useAuth} from "~/composables/useAuth.js";
const {logout, isLogin}= useAuth();




const handleScroll = () => {
    if (!fixedHeader.value || !headerGnb.value) return;

    let scrollY = window.scrollY;
    if (scrollY > headerGnbTop.value + 70) {
        fixedHeader.value.classList.add('scroll');
    } else {
        fixedHeader.value.classList.remove('scroll');
    }
};

onMounted(() => {
    if (headerGnb.value) {
        headerGnbTop.value = headerGnb.value.getBoundingClientRect().top;
    }

    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

// gnb
const linkState = reactive({
    GnbMenuList: GnbMenu,
    linkAreas: [
        { linkMenu: '신상품', link: '/display/new' },
        { linkMenu: '베스트', link: '/display/best' },
        { linkMenu: '타임세일', link: '/display/timedeal' },
        { linkMenu: '이벤트', link: '/featured' },
        { linkMenu: 'MD추천', link: '/display/md' },
        { linkMenu: '리뷰', link: '/display/review' },
    ]

})

const categoryIndex = ref(null);
const subMenuIndex = ref(null);
const thirdMenuIndex = ref(null);

const itemActive = (index) => {
    categoryIndex.value = index;
}
const subItemActive = (index) => {
    subMenuIndex.value = index;
}
const thirdItemActive = (index) => {
    thirdMenuIndex.value = index;
}

const gnbToggle = () => {
    document.querySelector('.fixed-header').classList.toggle('on');
}

// showSearchList
const showSearchList = ref(false);

const showMobileSearch = () => {
    showSearchList.value = !showSearchList.value;
};


</script>
<style lang="scss" scoped>
@use "~/assets/scss/pages/layout/header";
</style>