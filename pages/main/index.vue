<template>
    <div class="main">
        <layoutHeaderInner title="세일즈온 메인" type-style="header-default" type="default" />

        <!-- visual -->
        <mainPromotion :promotion-data="state.promotion" />

        <!-- 신상품 -->
        <div class="main-title-wrap">
            <NuxtLink class="main-title" to="/">갓- 들어 온 신상품</NuxtLink>
            <p>나오자마자 호감도 상승</p>
        </div>
        <mainNewItem :item-data="state.items" />

        <!-- 타임세일 -->
        <mainTimeSale :item-data="state.items" />

        <!-- banner -->
        <mainBanner :banner-data="state.middleBanner" />

        <!-- 베스트상품 -->
        <div class="main-title-wrap">
            <NuxtLink class="main-title" to="/">핫해핫해~ 베스트상품</NuxtLink>
            <p>BEST상품만 골라서 모았어요!</p>
        </div>
        <mainBest-item :categories-data="state.categories" :item-data="state.items" />

        <!-- 브랜드 -->
        <mainBrand :brand-data="state.brandData" />

        <!-- 배너영역 -->
        <mainAdvertisement :advertisement-data="state.advertisementData" />

        <!-- recommend -->
        <div class="main-title-wrap">
            <NuxtLink class="main-title" to="/">취향 단박에 캐치ఇ</NuxtLink>
            <p>세일즈온에서 추천하는 제품들을 모았어요</p>
        </div>
        <mainMdItem :mdTag="mdTag" :item-data="state.items" />


        <!-- review -->
        <div class="main-title-wrap">
            <NuxtLink class="main-title" to="/">써 본 사람들의 진짜 리뷰</NuxtLink>
            <p>세일즈온의 생생한 후기를 확인해보세요</p>
        </div>
        <mainReview :review-data="state.reviews" />

        <!-- event -->
        <div class="main-title-wrap">
            <NuxtLink class="main-title" to="/">눈여겨볼 ᴥ 만한 기획전</NuxtLink>
            <p>풍성한 이벤트를 만나보세요!</p>
        </div>
        <mainEvent :featured-data="state.featured" />

    </div>
</template>

<script setup>
import { nextTick, onMounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import "swiper/swiper-bundle.css";

// swiper module
const modules = [Navigation, Pagination, Autoplay, Scrollbar];

// data
const itemData = useSampleData('/_sample/itemList.json');

console.log('itemData: ', itemData);

const props = defineProps({
    promotion : [],
    mobilePromotion : [],
    categories : [],
    middleBanner : [],
    advertisementData: [],
    brandData: [],
    mdTag: [],
    reviews: [],
});

// dummy data
const state = reactive({
    promotion: [
        {url: '/', image: "/_sample/main/main_visual01.png"},
        {url: '/', image: "/_sample/main/main_visual02.png"},
        {url: '/', image: "/_sample/main/main_visual03.png"}
    ],
    mobilePromotion: [
        {url: '/', image: "/_sample/main/_temp/m_main_visual01.png"},
        {url: '/', image: "/_sample/main/_temp/m_main_visual02.png"},
        {url: '/', image: "/_sample/main/_temp/m_main_visual03.png"}
    ],
    categories: [
        {name: 'ALL'}, 
        {name: '가구/수납'}, 
        {name: '가전/생활'}, 
        {name:'디자인문구'}, 
        {name:'디지털'}, 
        {name:'뷰티/헬스'},
        {name:'여행/레포츠'},
        {name:'유아동'},
        {name:'인테리어'},
        {name:'주방/푸드'},
        {name:'키덜트/취미'},
        {name:'패브릭'}, 
        {name:'패션의류'}, 
        {name:'패션잡화'}, 
        {name:'펫샵'}
    ],
    middleBanner: [
        {image: "/_sample/main/ad_banner_01.png", url: "/", content: ""},
        {image: "vad_banner_02.png", url: "/", content: ""}
    ],
    advertisementData: [
        {image: "vad_banner_03.png", url: "/", content: ""}
    ],
    brandData: [
        {image: "/_sample/main/main_focus_brand01.png", name: "샘플1"},
        {image: "/_sample/main/main_focus_brand02.png", name: "샘플2"},
        {image: "/_sample/main/main_focus_brand03.png", name: "샘플3"},
        {image: "/_sample/main/main_focus_brand04.png", name: "샘플4"},
        {image: "/_sample/main/main_focus_brand05.png", name: "샘플5"},
        {image: "/_sample/main/main_focus_brand06.png", name: "샘플6"},
    ],
    mdTag: [
        {tag: "클리어런스"}, 
        {tag: "스누지"}, 
        {tag: "디저트"}, 
        {tag: "스누지"}, 
        {tag: "리프레시"}, 
        {tag: "스누지"}, 
        {tag: "피크닉세트"}, 
        {tag: "스마트톡"}, 
        {tag: "귀욤파우치"}
    ],
    reviews: [
        {
            image: "/_sample/main/img_review_sample01.png",
            content: "쓰던 제품 추가로 구매했는데 배송이 빨라 너무 맘에 마음에 들어요! 색 너무 예뻐서 너무 만족스럽고불량아니라서 넘 좋고 잘 사용하겠습니다~",
            score: "5",
            itemName: "[아이카사] 카페 세트_얼그레이밀크"
        },
        {
            image: "/_sample/main/img_review_sample02.png",
            content: "3병을 구매해서 할머니, 엄마, 저까지 셋이서 2달 이상 써봤는데요. 처음에는 효과가 미미하다가 점점 피부 에 텐션이 생겼달까? 만지면 탱탱해진게 느껴지...",
            score: "4",
            itemName: "[더퓨어로터스] 제주 연꽃잎 브라이 제주 연꽃잎 브라이"
        }
    ],
    featured: [
        {
            url: "/featured/pages/_id",
            image: "/_sample/main/banner_01.png",
            content: "간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스"
        },
        {
            url: "/featured/pages/_id",
            image: "/_sample/main/banner_02.png",
            content: "간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스"
        },
        {
            url: "/featured/pages/_id",
            image: "/_sample/main/banner_03.png",
            content: "간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스"
        },
        {
            url: "/featured/pages/_id",
            image: "/_sample/main/banner_04.png",
            content: "간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스"
        },
        {
            url: "/featured/pages/_id",
            image: "/_sample/main/banner_05.png",
            content: "간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스"
        },
        {
            url: "/featured/pages/_id",
            image: "/_sample/main/banner_06.png",
            content: "간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스"
        }
    ],
    items: itemData
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/main/main";
</style>