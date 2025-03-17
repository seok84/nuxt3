<template>
    <!-- 팝업 -->
    <!-- show 클래스로 노출여부 제어 -->
    <!-- 상품쿠폰적용 -->
    <div class="modal modal-apply-coupon" :class="show ? 'show' : ''">
        <div class="dimmed-bg" @click="couponClear"></div>
        <div class="modal-wrap">
            <button class="modal-close" @click="couponClear">닫기</button>
            <div class="modal-header">
                상품쿠폰적용
            </div>
            <div class="p-2 modal-body">
                <p class="modal-desc">상품쿠폰 적용 <span>사용 가능한 쿠폰만 보여집니다.</span></p>
                <div class="toggle-content brand-container">
                    <div class="brand-wrap">
                        <div class="product-list-container"> <!-- 반복요소 product-list-container -->
                            <ul class="product-list-wrap">
                                <li class="product-list order-list"> <!-- 반복요소 product-list -->
                                    <div class="product-info-group">
                                        <div class="product-info info1">
                                            <!-- 아이템 -->
                                            <div class="product-item">
                                                <div class="item-list-container horizon">
                                                    <div class="item-list">
                                                        <!-- 아이템 썸네일 영역 -->
                                                        <div class="thumbnail-container sold-out">
                                                            <div class="sold-out-wrap">
                                                                <span>
                                                                    <img src="~/assets/image/sample/sold-out.png"
                                                                        alt="품절">
                                                                </span>
                                                            </div>
                                                            <div to="/" @click.prevent class="thumbnail-wrap">
                                                                <div class="thumbnail-area">
                                                                    <img class="top-left"
                                                                        src="~/assets/image/sample/thum_area.png"
                                                                        alt="플로팅이미지" />
                                                                    <img class="top-right"
                                                                        src="~/assets/image/sample/thum_area.png"
                                                                        alt="플로팅이미지" />
                                                                    <img class="bottom-left"
                                                                        src="~/assets/image/sample/thum_area.png"
                                                                        alt="플로팅이미지" />
                                                                    <img class="bottom-right"
                                                                        src="~/assets/image/sample/thum_area.png"
                                                                        alt="플로팅이미지" />
                                                                    <img class="center-center">
                                                                </div>
                                                                <img class="thumbnail"
                                                                    src="~/assets/image/sample/thum.png" alt="썸네일">
                                                            </div>
                                                        </div>
                                                        <!-- 아이템 정보 영역 -->
                                                        <div class="info-container">
                                                            <div class="title-main paragraph-ellipsis">
                                                                <b>[브랜드명]</b>제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X
                                                                2 제품명이 노출되는
                                                                영역
                                                                50g
                                                                X 2 제품명이 노출되는 영역 50g X 2
                                                            </div>
                                                            <div class="title-sub paragraph-ellipsis">
                                                                <b>[옵션1]</b>서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 <b>[옵션2]</b>
                                                                서브 타이틀 서브
                                                                타이틀
                                                                서브
                                                                타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀
                                                                서브 타이틀 서브 타이틀 서브 타이틀 서브
                                                                타이틀
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-gift">
                                                    <span><i>선물</i>구매 사은품</span>
                                                    <span>루카랩 케어베어 씰 스티커 외 N1개</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-info info2">
                                            <div class="info2-list">
                                                <p>상품가 21,000</p>
                                                <p>할인 6,000</p>
                                                <p class="discounted">할인적용가 20,000</p>
                                            </div>
                                            <p class="quantity">수량:NNN개</p>
                                        </div>
                                    </div>
                                    <div class="select-coupon">
                                        <div class="select-wrap">
                                            <select class="input-select">
                                                <option value="">쿠폰을 선택해주세요.</option>
                                                <option value="">셀렉트박스 옵션</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div class="product-price">
                                        <div class="price-info info1">
                                            <p>상품금액 2,000원 + 배송비 3,000원<b>= 23,000원</b></p>
                                        </div>
                                        <div class="price-info info2">
                                            <p>판매자 조건부<b>(본사)</b></p>
                                            <i class="tooltip-handler" @click="toggleTooltip">!</i>
                                            <div :class="{ 'tooltip-wrap': true, active: isTooltipActive }">
                                                <div class="dimmed-bg" @click="closeTooltip"></div>
                                                <div class="text-center tooltip-content tooltip-delivery">
                                                    <button class="btn-tooltip-close" @click="closeTooltip">닫기</button>
                                                    <p class="tooltip-tit">판매자 조건부 무료배송</p>
                                                    <p class="txt2">판매자 상품 30,000원 이상 구매 시 무료,<br />
                                                        30,000원 미만 구매 시 2,500원 부과 </p>
                                                    <p class="txt1">제주/도서산간</p>
                                                    <p class="txt2">제주 2,500원 추가 / 도서산간 2,500원 추가</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 반복요소 brand-container
                    <template v-for="(sellerShipping, sellerIndex) in buy.receivers[0].sellerShipping">
                        <div class="brand-wrap" v-for="(shipping, shippingIndex) in sellerShipping.shippings">
                            <div class="product-list-container">
                                반복요소 product-list-container
                                <ul class="product-list-wrap">
                                    <template >
                                        <template v-if="shipping.singleShipping">
                                            <li class="product-list order-list">
                                                <order-coupon-item-list
                                                    :buyItem="shipping.buyItem"
                                                    :shipping-index="shippingIndex"
                                                    :applyCoupon="applyCoupon"
                                                    :discount-amount="discountAmount"
                                                    :sale-amount="saleAmount"
                                                    @couponSelect="couponSelect"
                                                />

                                                <order-item-parts-group-price
                                                    v-if="!groupTotalPricePending"
                                                    :isLast="true"
                                                    :item.sync="shipping.buyItem"
                                                    :item-shipping="shipping"
                                                    :groupIndex="shippingIndex"
                                                    :groupTotalPrice="groupTotalPrice[`${sellerIndex}_${shippingIndex}`]"
                                                />
                                            </li>
                                        </template>
<template v-else>
                                            <template v-for="(buyItem, itemIndex) in shipping.buyItems">
                                                <li class="product-list order-list">
                                                    <order-coupon-item-list
                                                        :buyItem="buyItem"
                                                        :shipping-index="shippingIndex"
                                                        :applyCoupon="applyCoupon"
                                                        :discount-amount="discountAmount"
                                                        :sale-amount="saleAmount"
                                                        @couponSelect="couponSelect"
                                                    />

                                                    <order-item-parts-group-price
                                                        v-if="!groupTotalPricePending"
                                                        :isLast="itemIndex == shipping.buyItems.length - 1"
                                                        :item.sync="buyItem"
                                                        :item-shipping="shipping"
                                                        :groupTotalPrice="groupTotalPrice[`${sellerIndex}_${shippingIndex}`]"
                                                    />
                                                </li>
                                            </template>
</template>
</template>
</ul>
</div>
</div>
</template>
-->
                </div>


                <div class="btn-wrap gap">
                    <button class="btn btn-primary" @click="setCoupon">적용</button>
                    <button class="btn btn-default" @click="couponClear">취소</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref  } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    buy: {
        type: Object,
        default: () => {
            return {}
        }
    },
    selectedCoupon: {
        type: Array,
        default: () => {
            return []
        }
    },
    applyCoupon: {
        type: Object,
        default: () => {
            return {}
        }
    },
});

const isTooltipActive = ref(false);

const emit = defineEmits(["close"]);

const couponClear = ($event) => {
    emit('close');
};

/* 개발 소스
import {getGroupPrice} from "@/modules/utils/OrderUtils";


let $s, vm;

export default {
    data() {
        return {
            discountAmount: [],
            saleAmount: [],
            groupTotalPrice: {},
            groupTotalPricePending: true
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        buy: {
            type: Object,
            default: () => {
                return {}
            }
        },
        selectedCoupon: {
            type: Array,
            default: () => {
                return []
            }
        },
        applyCoupon: {
            type: Object,
            default: () => {
                return {}
            }
        },
    },
    watch: {
        show: {
            deep: true,
            handler(newValue) {
                return newValue;
            }
        },
        buy: {
            deep: true,
            handler(newValue) {
                this.groupTotalPricePending = true;
                this.updateGroupTotalPrice();
                return newValue;
            }
        }
    },
    beforeCreate() {
        // 기존 Vue로 작성된 스크립트 실행시 적용
        $s = this.$saleson;
        vm = this;
    },
    mounted() {
        this.$nextTick(() => {
            this.updateGroupTotalPrice();
            this.setCouponDiscountData('clear'); // 쿠폰 초기화
        });
    },
    methods: {
        couponSelect(itemSequence, itemId) {
            let select = document.getElementById(`coupon1_${itemSequence}`);
            let couponAreaKey = select.getAttribute('id');
            let selectedCouponUserId = select.value.split('.', 1).toString();

            for (let [key, value] of Object.entries(this.applyCoupon)) {
                let checkCouponAreaKey = `coupon1_${key}`;
                let itemCoupons = this.applyCoupon[key];

                if (itemCoupons && itemCoupons.length > 0) {
                    itemCoupons.forEach(coupon => {
                        coupon.disabled = false;

                        if (couponAreaKey == checkCouponAreaKey) {
                            coupon.selected = coupon.couponUserId == selectedCouponUserId ? true
                                : false;
                        } else {
                            coupon.selected = coupon.couponUserId == selectedCouponUserId ? false
                                : coupon.selected
                        }
                    });
                }
            }

            for (let [key, value] of Object.entries(this.applyCoupon)) {
                let itemCoupons = this.applyCoupon[key];

                if (itemCoupons && itemCoupons.length > 0) {
                    itemCoupons.forEach(coupon => {
                        if (coupon.selected) {
                            let selectedCouponUserId = coupon.couponUserId;

                            for (let [subKey, subValue] of Object.keys(this.applyCoupon)) {
                                if (key !== subKey) {
                                    itemCoupons = this.applyCoupon[subKey];

                                    itemCoupons.forEach(coupon1 => {
                                        if (coupon1.couponUserId == selectedCouponUserId) {
                                            coupon1.disabled = true;
                                        }
                                    })
                                }
                            }
                        }
                    });
                }
            }

            this.setCouponDiscountData();
        },

        setCouponDiscountData(type) {
            for (let [key, value] of Object.entries(this.applyCoupon)) {

                let differentPlaceSelectedCoupons = [];
                let differentPlaceSelectNotCoupons = [];

                let selectId = 0;

                let itemCoupons = this.applyCoupon[key];
                let select = document.getElementById(`coupon1_${key}`);

                itemCoupons.forEach(coupon => {
                    if (coupon.selected) {
                        selectId = coupon.couponUserId;
                    }

                    if (coupon.disabled == true) {
                        differentPlaceSelectedCoupons.push(coupon);
                    } else {
                        differentPlaceSelectNotCoupons.push(coupon);
                    }
                });

                while (select.firstChild != null) {
                    select.removeChild(select.firstChild);
                }

                if (differentPlaceSelectedCoupons.length > 0) {
                    let usedOptgroup = document.createElement('optgroup');
                    usedOptgroup.label = "다른 상품에 적용된 쿠폰";

                    differentPlaceSelectedCoupons.forEach(selectedCoupon => {
                        usedOptgroup.appendChild(this.makeOption(selectedCoupon, selectId));
                    })

                    select.appendChild(usedOptgroup);
                }

                let optgroup = document.createElement('optgroup');
                optgroup.label = "사용 가능 쿠폰";

                let defaultOption = document.createElement('option');
                defaultOption.text = "쿠폰을 선택해주세요.";
                defaultOption.value = 'clear';

                if (selectId == 0) {
                    defaultOption.selected = true;
                }

                optgroup.insertBefore(defaultOption, optgroup.firstChild);

                if (differentPlaceSelectNotCoupons.length > 0) {
                    for (let l = 0; l < differentPlaceSelectNotCoupons.length; l++) {
                        optgroup.appendChild(
                            this.makeOption(differentPlaceSelectNotCoupons[l], selectId));
                    }
                }

                select.appendChild(optgroup);
            }

            let entries = Object.entries(this.applyCoupon);
            for (let i = 0; i < entries.length; i++) {
                let [key, value] = entries[i];

                let select = document.getElementById(`coupon1_${key}`);
                if (select.options.length > 1) {
                    let itemCoupons = this.applyCoupon[key];

                    for (let j = 0; j < itemCoupons.length; j++) {
                        let coupon = itemCoupons[j];
                        if (coupon.selected == true && select.value != 'clear') {
                            coupon['itemSequence'] = key;
                            this.selectedCoupon[i] = coupon;
                            this.selectedCoupon[i].itemDiscountAmount = coupon.discountAmount;
                        }
                        if (select.value == 'clear') {
                            this.selectedCoupon[i] = 'clear';
                        }
                    }
                }
            }

            if (type == 'clear') {
                this.setItemPrice('all');
            } else {
                // 쿠폰 할인 계산식
                this.setItemPrice('coupon');
            }
        },

        makeOption(coupon, selectId) {
            let optionText = coupon.couponUserId + '. ' + coupon.couponName;
            optionText += ' - ' + this.formatNumber(coupon.discountAmount) + '원 할인';

            if (coupon.couponConcurrently == '1') {
                optionText += ' [1개 수량만 적용]';
            } else {
                optionText += ' [구매 수량 할인]';
            }

            let option = document.createElement('option');
            option.textContent = optionText;
            option.setAttribute('coupon-user-id', coupon.couponUserId);

            if (coupon.couponType == null || coupon.couponType == undefined) {
                coupon.couponType = "";
            }

            if (coupon.selected == true && selectId == coupon.couponUserId) {
                option.selected = true;
            }

            return option;
        },

        // 쿠폰 계산
        setItemPrice(scope) {
            for (let [key, value] of Object.entries(this.applyCoupon)) {
                let itemCoupons = this.applyCoupon[key];

                let couponDiscountAmount = 0;
                let couponShippingIndex = 0;

                itemCoupons.forEach(coupon => {
                    if (coupon.selected) {
                        couponDiscountAmount = coupon.discountAmount;
                        couponShippingIndex = coupon.shippingIndex;
                    }
                });

                let buyItem = {}
                this.buy.receivers[0].sellerShipping.forEach((sellerShipping) => {
                    sellerShipping.shippings.forEach((shipping) => {
                        if (shipping.singleShipping) {
                            if (shipping.buyItem.itemSequence == key) {
                                buyItem = shipping.buyItem;
                                return false;
                            }
                        } else {
                            const foundItem = shipping.buyItems.find(
                                item => item.itemSequence == key);
                            if (foundItem) {
                                buyItem = foundItem;
                                return false;
                            }
                        }
                    });
                });

                let itemPrice = buyItem.itemPrice;
                let itemSequence = buyItem.itemSequence;

                let quantity = itemPrice.quantity;
                let optionPrice = itemPrice.optionPrice;
                let itemSaleAmount = (itemPrice.itemSalePrice + optionPrice) * quantity;

                let discountAmount = itemPrice.discountPrice * quantity;

                // 객체에게 직접 값을 부여 ( itemPrice 핸들링을 위해서 )
                itemPrice.couponDiscountAmount = couponDiscountAmount;

                if (scope != 'all') {
                    vm.$set(vm.discountAmount, itemSequence, discountAmount + couponDiscountAmount);
                    vm.$set(vm.saleAmount, itemSequence,
                        itemSaleAmount - (discountAmount + couponDiscountAmount));
                } else {
                    // 할인가 및 판매가 초기화
                    vm.$set(vm.discountAmount, itemSequence, discountAmount + 0);
                    vm.$set(vm.saleAmount, itemSequence, itemSaleAmount - discountAmount);
                }
            }
        },

        closePopup() {
            this.$emit('close');
        },

        async setCoupon() {
            let itemCoupons = [];
            let addItemCoupons = [];
            let cartCoupons = [];

            await this.$emit("update:selectedCoupon", vm.selectedCoupon);
            for (let i = 0; i < this.selectedCoupon.length; i++) {
                let coupon = this.selectedCoupon[i];
                if (coupon != 'clear') {
                    itemCoupons.push(coupon);
                }
            }

            await this.$emit('setCouponDiscountAmount', itemCoupons, addItemCoupons, cartCoupons);

            await this.closePopup();
        },

        couponClear() {
            this.$saleson.confirm('쿠폰과 관련된 할인 금액들이 전부 초기화 상태로 변경됩니다.', async () => {

                for (let [key, value] of Object.entries(this.applyCoupon)) {
                    let itemCoupons = this.applyCoupon[key];

                    for (let j = 0; j < itemCoupons.length; j++) {
                        let coupon = itemCoupons[j];

                        coupon.selected = false;
                        coupon.disabled = false;
                    }
                }

                await this.setCouponDiscountData('clear');
                vm.$set(vm.selectedCoupon, []);

                await this.setCoupon();
            });
        },

        updateGroupTotalPrice() {
            this.buy.receivers[0].sellerShipping.forEach((sellerShipping, sellerIndex) => {
                const shippings = sellerShipping.shippings;
                shippings.forEach((shipping, shippingIndex) => {
                    let key = `${sellerIndex}_${shippingIndex}`;

                    this.groupTotalPrice[key] = getGroupPrice(shipping);
                });
            });
            this.groupTotalPricePending = false;
        }
    }
}*/
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/order/order";
</style>