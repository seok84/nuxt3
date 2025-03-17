<template>
    <div class="item-detail-page">
        <layoutHeaderInner title="상품명" type-style="header-detail" type="detail" />
        
        <!-- 카테고리 -->
        <itemViewCategory />

        <!-- 상단컨텐츠 -->
        <div class="detail-content-area top">
            <!-- 타임딜 -->
            <template v-for="(item, index) in state.itemDetailList">
                <div class="timedeal top mobile weekend">
                    <p class="timedeal-area-2">
                        <span>{{ item.displaySpotStartTime }} ~ {{ item.displaySpotEndTime }}</span>
                        <span>{{ item.spotWeekDays }}</span>
                    </p>
                </div>
                <div class="timedeal top mobile time-limit">
                    <p class="timedeal-area-2 d-day">
                        <span>{{ state.countdownData }}D</span>
                        <span>{{ state.countdownTime }}</span>
                        <!--
                        -->
                    </p>
                </div>
            </template>

            <!-- 개발소스
            <div class="timedeal top mobile weekend" v-if="item.spotFlag && item.spotDateType === '1'">
                <p class="timedeal-area-2">
                    <span>{{ item.displaySpotStartTime }} ~ {{ item.displaySpotEndTime }}</span>
                    <span>{{ item.spotWeekDays }}</span>
                </p>
            </div>
            <div class="timedeal top mobile time-limit" v-if="item.spotFlag && item.spotDateType === '2'">
                <p class="timedeal-area-2 d-day">
                    <span>{{ countdownData.day }}D</span>
                    <span>{{ countdownTime }}</span>
                </p>
            </div>
            -->

            <!-- 상단-썸네일 영역 -->
            <itemViewThumbnail />

            <!-- 상단-정보 영역 -->
            <itemViewInfo 
                :item-data="state.itemDetailList" 
                :countdownData-data="state.countdownData" 
                :countdownTime-data="state.countdownTime" 
            />
        </div>

        <!-- 연관상품 -->
        <itemViewRecommend />

        <!-- 하단컨텐츠 -->
        <section ref="targetElement" :class="{ 'detail-contents-area bottom': true, 'active': isTargetActive }">
            <div class="contents-left" ref="leftElement">
                <!-- 탭메뉴 -->
                <div class="tabs type-b">
                    <a v-for="(tab, index) in tabs" :key="index" :id="tab.id"
                        :class="{ 'tab-item': true, 'active': tabIndex === index }" @click="toggleTab(index)">
                        {{ tab.name }}
                    </a>
                </div>
                <!-- 상세정보 -->
                <!-- 상품정보 더보기 클릭 시 detail-info-contents에 active-->
                <itemViewContentInfo id="content1" ref="sectionRefs"/>

                <!-- 기본정보 -->
                <itemViewContentDetail id="content2" ref="sectionRefs"/>
                
                <!-- 후기(1,955) -->
                <itemViewContentReview id="content3" ref="sectionRefs"/>
                
                <!-- 상품문의 -->
                <itemViewContentInquire id="content4" ref="sectionRefs"/>
                
            </div>
            <div class="contents-right" ref="offsetElement">
                <article class="select-option-container" ref="rightElement" :style="{ top: boxTop + 'px' }"> 
                    <form>
                        <div class="scroll-y">
                            <!-- 옵션 미사용 - 수량 -->
                            <div class="quantity-wrap">
                                <p>수량</p>
                                <div class="quantity-box-round">
                                    <button type="button" class="btn-quantity btn-minus"></button>
                                    <input type="number" title="수량" value="1" readonly maxlength="999"
                                        class="quantity number">
                                    <button type="button" class="btn-quantity btn-plus"></button>
                                </div>
                            </div>
                            
                            <!-- 하단 옵션 미사용 - 수량
                            <div class="quantity-wrap" v-if="!isOptionFlag && !isSetItem">
                                <p>수량</p>
                                <div class="quantity-box-round" v-for="(info, index) in itemOptionInfo.addOptionList" :key="index">
                                    <button type="button" class="btn-quantity btn-minus" @click="minus(index)"></button>
                                    <input type="number" title="수량" readonly maxlength="999"
                                           class="quantity number" v-model="info.quantity">
                                    <button type="button" class="btn-quantity btn-plus" @click="plus(index)"></button>
                                </div>
                            </div>

                            하단 세트상품용 - 수량
                            <div class="quantity-wrap" v-if="!isOptionFlag && isSetItem && orderParam.itemSets.length > 0">
                                <p>수량</p>
                                <div class="quantity-box-round">
                                    <button type="button" class="btn-quantity btn-minus" @click="minus(0)"></button>
                                    <input type="number" title="수량" readonly maxlength="999"
                                           class="quantity number" v-model="orderParam.itemSets[0].quantity">
                                    <button type="button" class="btn-quantity btn-plus" @click="plus(0)"></button>
                                </div>
                            </div> -->



                            <!-- 옵션 -->
                            <div class="txt_box">
                                <p>*상품을 구매하려면 필수 옵션을 작성하세요.</p>
                            </div>

                            <!-- 개발소스
                            <div class="txt_box" v-if="isOptionFlag && !isSetItem">
                                <p>*상품을 구매하려면 필수 옵션을 {{ item.itemOptionType === 'T' ? '작성' : '선택' }}하세요.</p>
                            </div> -->

                            <!-- 옵션-드롭다운 -->
                            <itemViewOptionSelect />
                            
                            <!-- 구성상품 -->
                            <itemViewOptionSelectDepth />
                            
                            <!-- 옵션리스트 -->
                            <itemViewOptionList />

                        </div>

                        <!-- 옵션총금액 -->
                        <div class="total-price">
                            <p>
                                합계
                            </p>
                            <p>
                                <span>{{ $formatNumber(state.amount) }}</span>
                                <span>원</span>
                            </p>
                        </div>

                        <!-- 버튼 -->
                        <div class="btn-option-buy btn-wrap gap">
                            <button type="button" class="btn btn-primary-line" @click.prevent="addToCart(false)">장바구니</button>
                            <button type="button" class="btn btn-primary" @click.prevent="buyOrder()">바로구매</button>
                        </div>
                    </form>
                </article>
            </div>
        </section>

        <!-- 쿠폰 다운 모달 -->
        <itemModalCoupon 
            :show="isCouponModalActive"
            @close="isCouponModalActive = !isCouponModalActive"
        />

        <!-- 배송산간지역 모달 -->
        <itemModalDelivery 
            :show="isDeliveryModalActive"
            @close="isDeliveryModalActive = !isDeliveryModalActive"
        />

        <!-- 공유하기 모달 -->
        <itemModalCopy 
            :show="isCopyModalActive"
            @close="isCopyModalActive = !isCopyModalActive"
        />

        
        <!-- 신고 모달
        <modal-report
            :show="reportParam.show"
            :content-id="reportParam.contentId"
            :content-type="reportParam.contentType"
            :block-flag="reportParam.blockFlag"
            @reload="reloadReport"
            @close="closeReport"/> -->

        <!-- 리뷰이미지 모달
        <modal-review-image-modal
            :showFlag="showModal.reviewImage"
            :imageList="selectedReviewImages"
            @close="closeModalReviewImage"/> -->

    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const itemDetail = useSampleData('/_sample/itemDetail.json');

const { $formatNumber } = useNuxtApp();

const thumbsSwiper = ref(null);
const relationSwiper = ref(null);

const isActive = ref(false);
const isTooltipActive = ref(false);

// modal
const isCouponModalActive = ref(false);
const isDeliveryModalActive = ref(false);
const isCopyModalActive = ref(false);


const state = reactive({
    itemDetailList: itemDetail,
    countdownData: "90",
    countdownTime: "00 : 00 : 00",
    labels: [
        {"tag": "new", "name": "신상품"},
        {"tag": "md", "name": "MD추천"},
        {"tag": "coupon", "name": "쿠폰"},
        {"tag": "delivery", "name": "무료배송"},
        {"tag": "best", "name": "베스트"},
        {"tag": "only", "name": "ONLY"},
        {"tag": "salegoods", "name": "행사상품"},
        {"tag": "timesale", "name": "타임세일"},
        {"tag": "event", "name": "이벤트"}
    ],
    amount: "10000000"
})


// 탭메뉴
let tabIndex = ref(0);
//const tabs = ['상세정보', '기본정보', '후기(N)', '상품문의'];
const tabs = ref([
  { id: "section1", name: "상세정보" },
  { id: "section2", name: "기본정보" },
  { id: "section3", name: "후기(N)" },
  { id: "section4", name: "상품문의" }
]);

const sectionRefs = ref([]);
const activeSection = ref("");
const toggleTab = (index) => {
    tabIndex.value = index;

    const element = document.getElementById("content" + parseInt(tabIndex.value + 1));
    console.log("element : ", element)
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
    
};


// 스크롤 이벤트
const targetElement = ref(null);
const leftElement = ref(null);
const rightElement = ref(null);
const offsetElement = ref(null);
const isTargetActive = ref(false);
const boxTop = ref(null);

const handleScroll = () => {
    const targetRect = targetElement.value.getBoundingClientRect();
    const leftRect = leftElement.value.getBoundingClientRect();
    const rightRect = rightElement.value.getBoundingClientRect();
    
    const section1 = document.getElementById("content1").getBoundingClientRect();
    const section2 = document.getElementById("content2").getBoundingClientRect();
    const section3 = document.getElementById("content3").getBoundingClientRect();
    const section4 = document.getElementById("content4").getBoundingClientRect();
    
    if (leftRect.height > rightRect.height) {
        
        isTargetActive.value = targetRect.top <= 100
        
        if ( targetRect.bottom <= rightRect.height + 120) { // 120 = content margin bottom balue
            boxTop.value = targetRect.bottom - rightRect.height - 120
            //console.log('boxTop :: ', boxTop.value)
        } else {
            boxTop.value = 80 
        } 

        // tab scroll active
        tabIndex.value = [section1, section2, section3, section4].findIndex(
            (section) => section.bottom > 120
        );
    }

};

onMounted(() => {
    if (thumbsSwiper.value) {
        thumbsSwiper.value.thumbs.swiper = thumbsSwiper.value.swiper;
    }
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

/* toggle */
const toggleActive = () => {
    isActive.value = !isActive.value;
};


/* modal */
const hideModal = (e) => {
    e.target.closest('.modal').classList.remove('show');
};

/* 장바구니/구매 */
const addToCart = () => {

}
const buyOrder = () => {

}


</script>


<style lang="scss" scoped>
@use "~/assets/scss/pages/components/modal";
@use "~/assets/scss/pages/items/item_list";
</style>