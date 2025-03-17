<template>
    <div class="info-detail">
        <!-- 태그 -->
        <template v-for="(item, index) in itemData">
            <div class="tag-wrap">
                <template v-for="(label, index) in item.labels" :key="index">
                    <div class="tag" :class="label.tag" :style="{ background: label.color }">
                        {{ label.name }}
                    </div>
                </template>
            </div>
            <!-- 개발소스
            <div class="tag-wrap">
                <div class="tag" v-for="(label, index) in item.labels" :key="index"
                        :style="{background: label.color}">{{ label.label }}</div>
                <div class="tag delivery" v-if="item.shippingType === '1'">무료배송</div>
                <div class="tag timesale" v-if="item.spotFlag">타임세일</div>
            </div> -->

            <div class="timedeal top pc weekend">
                <p>
                    <span>TIME</span>
                    <span>SALE</span>
                </p>
                <p>
                    <span>{{ item.displaySpotStartTime }} ~ {{ item.displaySpotEndTime }}</span>
                    <span>{{ item.spotWeekDays }}</span>
                </p>
            </div>
            <div class="timedeal top pc time-limit">
                <p>
                    <span>TIME</span>
                    <span>SALE</span>
                </p>
                <p class="d-day">
                    <span>90D</span>
                    <span>00:00:00</span>
                    <!-- 개발소스
                    <span>{{ countdownData.day }}D</span>
                    <span>{{ countdownTime }}</span>
                    -->
                </p>
            </div>
            <!-- 브랜드 -->
            <div class="brand-area">
                <div class="brand-name" v-if="!isEmpty(item.brand)">
                    <NuxtLink :to="'/brand?brandId=' + item.brandId + '&page=1&size=24'" class="link">
                        <span>{{ item.brand }}</span>
                        <span class="ico-link"></span>
                    </NuxtLink>
                </div>
                <div class="brand-action">
                    <span class="ico-heart2" @click="addToWishList(item.itemId)"></span>
                    <span class="link-copy" @click="copyUrl"></span>
                </div>
            </div>
            <!-- 타이틀 -->
            <div class="title-area">
                <p class="title-main paragraph-ellipsis">{{ item.displayItemName }}</p>
                <p class="title-option paragraph-ellipsis">{{ item.originCountry }}</p>
                <p class="title-sub paragraph-ellipsis">{{ item.itemSummary }}</p>

            </div>
            <!-- 가격 -->
            <div class="price-area">
                <div class="price-info">
                    <div class="cost">{{ $formatNumber(item.salePrice) }}<strong>원</strong></div>
                    <div class="price">
                        <span>{{ $formatNumber(item.presentPrice) }}<strong>원</strong></span>
                        <span v-if="Number(item.discountRate) + Number(item.userLevelDiscountRate) > 0">
                            {{ Number(item.discountRate) + Number(item.userLevelDiscountRate) }}<strong>%</strong>
                        </span>
                        <span class="tooltip-handler" @click="toggleTooltip">?</span>
                        <div :class="{ 'tooltip-wrap ': true, active: isTooltipActive }">
                            <div class="dimmed-bg" @click="closeTooltip"></div>
                            <div class="tooltip-content tooltip-benefit">
                                <button class="btn-tooltip-close" @click="closeTooltip">닫기</button>
                                <p class="text-center tooltip-tit">판매자 조건부 무료배송</p>
                                <ul>
                                    <li class="default">
                                        <p>정상가</p>
                                        <p>{{ $formatNumber(item.itemPrice) }}원</p>
                                    </li>
                                    <li class="txt1 sale">
                                        <p>판매가</p>
                                        <p>{{ $formatNumber(item.salePrice) }}원</p>
                                    </li>
                                    <li class="txt2" v-if="isSetItem && item.setDiscountAmount > 0">
                                        <p>세트할인</p>
                                        <p>{{ $formatNumber(item.setDiscountPrice) }}원</p>
                                    </li>
                                    <li class="txt2" v-if="item.spotFlag && item.spotDiscountAmount > 0">
                                        <p>타임세일</p>
                                        <p>{{ $formatNumber(item.spotDiscountAmount) }}원</p>
                                    </li>
                                    <li class="txt2" v-if="item.sellerDiscountFlag === 'Y'">
                                        <p>즉시할인</p>
                                        <p>{{ $formatNumber(item.sellerDiscountPrice) }}원</p>
                                    </li>
                                    <li class="txt2" v-if="item.userLevelDiscountAmount > 0">
                                        <p>회원추가할인({{ item.userLevelName }} {{ item.userLevelDiscountRate }}%)</p>
                                        <p>{{ $formatNumber(item.userLevelDiscountAmount) }}원</p>
                                    </li>
                                    <li class="txt1 max">
                                        <p>최대혜택가</p>
                                        <p>{{ $formatNumber(item.presentPrice) }}원</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-round btn-primary-line btn-coupondown"
                    @click="showModalCoupon">쿠폰다운<i></i></button>

                <!-- 개발소스 
                <button class="btn btn-primary-line btn-coupondown"
                        v-if="isLogin && item.couponUseFlag === 'Y'"
                        @click="getItemCoupons(1)">
                    쿠폰다운<i></i>
                </button> -->
            </div>

        </template>
        <!-- 카드혜택 -->
        <div class="select-wrap card-benefit-wrap">
            <div class="input-select" @click="toggleActiveCard" :class="{ 'active': isActiveCard }">>카드혜택<p>최대 12개월
                    무이자할부</p>
            </div>
            <div class="select-option card-benefit">
                HTML TEXT노출(관리자에서 작성 시 노출되는 영역)
                <br /><br />
                6월 신용카드 무이자 행사 안내<br />
                <br /><br />
                기간 : 2016.06.01 ~ 06.30<br />
                대상 : 5만원 이상 신용카드 결제 고객<br />
                1. 현대카드
                <br /><br />
                - 전체무이자 : 2, 3, 4, 5개월 무이자<br />
                - 신청방법 : 별도 신청 없이 적용<br />
                2. 신한카드
                <br /><br />
                - 전체무이자 : 2, 3, 4, 5개월 무이자<br />
                - 신청방법 : 별도 신청 없이 적용
            </div>
        </div>

        <!-- 상품정보 -->
        <div class="item-info-area">
            <table>
                <tbody>
                    <tr>
                        <th>적립예정포인트</th>
                        <td>3,766P (1% 적립 + SILVER 0.5%)</td>
                    </tr>
                    <tr>
                        <th>상품코드</th>
                        <td>G2000123456789</td>
                    </tr>
                    <tr>
                        <th>배송정보</th>
                        <td>
                            2,500원(50,000원이상 무료배송) <br>
                            <span class="delivery-info" @click="showModalDelivery">
                                도서산간 지역보기
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 개발소스
        <div class="item-info-area">
            <table>
                <tr v-if="itemEarnPoint.point > 0">
                    <th>적립예정포인트</th>
                    <td>3,766P (1% 적립 + SILVER 0.5%)</td>
                    <td v-if="!isEmpty(itemEarnPoint.levelName) && itemEarnPoint.levelPointRate > 0">
                        {{ formatNumber(itemEarnPoint.point) }}P ({{ itemEarnPoint.pointRate }}% 적립 + {{ itemEarnPoint.levelName }} {{ formatNumber(itemEarnPoint.levelPointRate)  }}%)
                    </td>
                    <td v-else>
                        {{ formatNumber(itemEarnPoint.point) }}P ({{ itemEarnPoint.pointRate }}% 적립)
                    </td>
                </tr>
                <tr>
                    <th>상품코드</th>
                    <td>{{ item.itemUserCode }}</td>
                </tr>
                <tr>
                    <th>배송정보</th>
                    <td>
                        <template v-if="item.shippingType === '1'">무료배송</template>
                        <template v-else-if="item.shippingType === '2' || item.shippingType === '3' || item.shippingType === '4'">
                            {{ formatNumber(item.shipping) }}원({{ formatNumber(item.shippingFreeAmount) }}원이상 무료배송)
                        </template>
                        <template v-else-if="item.shippingType === '5'">
                            {{ formatNumber(item.shippingItemCount) }} 개당 {{ formatNumber(item.shipping) }}원
                        </template>
                        <template v-else-if="item.shippingType === '6'">
                            {{ formatNumber(item.shipping) }}원
                        </template>
                        <br>

                        <template  v-if="getShippingExtraText !== ''">
                            {{ getShippingExtraText }}
                            <br>
                        </template>

                        <span class="delivery-info" @click="getIslands(1)">도서산간 지역보기</span>
                    </td>
                </tr>
                <tr v-if="item.freeGiftFlag && item.freeGiftItemList.length > 0">
                    <th>사은품</th>
                    <td>
                        <template v-if="!isEmpty(item.freeGiftName)">
                            {{ item.freeGiftName }} <br/>
                        </template>
                        <template v-for="(gift, idx) in item.freeGiftItemList">
                            [{{ gift.code }}] {{ gift.name }}<br/>
                        </template>
                    </td>
                </tr>
            </table>
        </div> -->

        <!-- 옵션 선택 영역컨테이너 -->
        <article class="select-option-container" :class="{ active: isActive }">
            <div class="dimmed-bg mobile" @click="toggleActive"></div>
            <p class="product-title mobile">[슈스스 추천템] 소녀의세계 x 뷰티비기닝무선 미니고데기</p>
            <form>
                <div class="form-inner">
                    <!-- 옵션 미사용 - 수량 -->
                    <div class="quantity-wrap">
                        <p>수량</p>
                        <div class="quantity-box-round">
                            <button type="button" class="btn-quantity btn-minus"></button>
                            <input type="number" title="수량" value="10" readonly maxlength="999" class="quantity number">
                            <button type="button" class="btn-quantity btn-plus"></button>
                        </div>
                    </div>
                    <!-- 옵션 -->

                    <div class="txt_box">
                        <p>*상품을 구매하려면 필수 옵션을 작성하세요.</p>
                    </div>

                    <!-- 옵션-텍스트형 -->
                    <div class="option-text">
                        <div class="form-line">
                            <input type="text" class="form-basic" placeholder="옵션-텍스트형" />
                            <!-- <span class="feedback invalid">유효성 메시지</span> -->
                        </div>

                        <div class="form-line">
                            <input type="text" class="form-basic" placeholder="옵션-텍스트형" />
                            <!-- <span class="feedback invalid">유효성 메시지</span> -->
                        </div>
                        <div class="form-line">
                            <div class="flex">
                                <input type="text" class="form-basic" placeholder="옵션-텍스트형" />
                                <button class="btn btn-black">추가</button>
                            </div>
                            <!-- <span class="feedback invalid">유효성 메시지</span> -->
                        </div>
                    </div>

                    <!-- 옵션-드롭다운 -->
                    <itemViewOptionSelect />

                    <!-- 구성상품 -->
                    <itemViewOptionSelectDepth />

                    <!-- 옵션리스트 -->
                    <itemViewOptionList />

                    <!-- 옵션총금액 -->
                    <div class="total-price">
                        <p>
                            합계
                        </p>
                        <p>
                            <span>9,999,999,999</span>
                            <span>원</span>
                        </p>
                    </div>

                </div>
                <!-- 버튼 -->
                <div class="btn-option-buy btn-wrap gap pc">
                    <button class="btn btn-round btn-primary-line">장바구니</button>
                    <button class="btn btn-round btn-primary">바로구매</button>
                </div>
                <div class="btn-option-buy btn-wrap gap mobile">
                    <button class="btn btn-round btn-primary-line" @click.prevent="toggleActive"
                        v-if="!toggleActive">장바구니</button>
                    <button class="btn btn-round btn-primary" @click.prevent="toggleActive"
                        v-if="!toggleActive">바로구매</button>
                    <button class="btn btn-round btn-primary-line" v-if="toggleActive">장바구니</button>
                    <button class="btn btn-round btn-primary" @click.prevent="toggleActive" v-if="toggleActive">
                        <NuxtLink to="/order">바로구매</NuxtLink>
                    </button>
                </div>
            </form>
        </article>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    itemData: {
        type: Array,
        default: () => {
            return []
        }
    },
});

const state = reactive({
    itemEarnPoint: [
        {
            point: 10000,
            levelName: "silver",
            levelPointRate:  10,
            pointRate: 3
        }
    ],
})

const { $formatNumber } = useNuxtApp();

const isActive = ref(false);
const isActiveCard = ref(false);

const emit = defineEmits(["isCouponModalActive", "close"]);


// showModalCoupon
const showModalCoupon = () => {
    document.querySelector('.modal-coupon').classList.add('show');
    //emit('isCouponModalActive');
};

const showModalDelivery = () => {
    document.querySelector('.modal-delivery').classList.add('show');
    //emit('showModalDelivery');
};

const toggleActive = () => {
    isActive.value = !isActive.value;
}


const toggleActiveCard = () => {
    isActiveCard.value = !isActiveCard.value;
}


const toggleOptionActive = (e) => {
    const dropdownArea = e.currentTarget.closest('.dropdown-area');
    dropdownArea.classList.toggle('active');
};

const toggleDropdownActive = (e) => {
    const optionDropdown = e.currentTarget.closest('.option-dropdown');
    optionDropdown.classList.toggle('active');
};

const isEmpty = (value) => {
    if (typeof value !== "undefined" && value !== null) {

        if (value !== '') {
            return false;
        }
    }
    return true;
};

</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list";
</style>