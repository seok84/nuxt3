<template>
    <div class="contents-area-page cart-page">
        <layoutHeaderInner title="장바구니" type-style="header-detail" type="detail" />
        <h1 class="title-h1 pc">장바구니</h1>
        <div v-if="!isCartEmpty" class="contents-area" ref="targetElement" :class="{ active: istargetActive }">
            <div class="contents-left">
                <!-- 전체선택 -->
                <div class="select-all-wrap">
                    <div class="select-all">
                        <label class="circle-checkbox">
                            <input type="checkbox"><i></i>전체선택(<span>{{ buyItems.length }}</span>)개
                        </label>
                    </div>

                    <button class="btn btn-default btn-round btn-delete">선택삭제</button>
                </div>
                <!-- 장바구니/주문서 리스트 -->
                <template v-for="(cartGroup, cartGroupIndex) in cartGroups" :key="cartGroupIndex">
                    <div class="brand-container">
                        <div class="brand-name">
                            <label class="circle-checkbox">
                                <input type="checkbox" class="checkbox main">
                                <i></i>
                            </label>
                            {{ cartGroup.sellerName }}({{ cartGroup.itemQuantity }})
                        </div>

                        <!-- 개발소스 
                        <div class="brand-name">
                            <label class="circle-checkbox">
                                <input type="checkbox" class="checkbox main"
                                    :value="cartGroup.sellerId"
                                    :checked="isSellerGroupCheck(cartGroupIndex)"
                                    @change="toggleSellerGroup(cartGroupIndex, $event.target.checked)"
                                ><i></i>
                            </label>
                            {{cartGroup.sellerName}}({{cartGroup.itemQuantity}})
                        </div> -->

                        <div class="brand-wrap">
                            <div class="product-list-container">
                                <ul class="product-list-wrap">
                                    <li class="product-list cart-list" v-for="buyItem in cartGroup.itemGroup"
                                        :class="buyItem.soldOutFlag ? 'sold-out' : ''">

                                        <!-- 아이템 리스트 -->
                                        <cartItemList />

                                        <orderItemPartsGroupPrice />
                                    </li>

                                    <!-- 개발소스 
                                    <li class="product-list cart-list" v-for="buyItem in cartGroup.itemGroup" :class="buyItem.soldOutFlag ? 'sold-out' : ''">
                                        <cart-item-list
                                            :item.sync="buyItem.item"
                                            :selectedItems.sync="selectedItems"
                                            :item-shipping="cartGroup.shippings[buyItem.shippingIndex]"
                                            @freeGiftItemPopupOpen="getFreegiftItemPopupByScope"
                                            @deleteCart="deleteCart"
                                            @update:item="immediateDetectionItem"
                                            @changeQuantity="clickDetectionItem"
                                            @buyOrder="buyOrder"
                                            @enterQuantity="enterQuantity"
                                            :key="buyItemComponentKey"
                                        />

                                        <order-item-parts-group-price
                                            :isLast="buyItem.lastItem"
                                            :item.sync="buyItem.item"
                                            :item-shipping="cartGroup.shippings[buyItem.shippingIndex]"
                                            :groupTotalPrice="groupTotalPrice[`${cartGroup.sellerIndex}_${buyItem.shippingIndex}`]"
                                        />
                                    </li>-->

                                </ul>
                            </div>
                        </div>
                    </div>

                </template>

                <!-- 총금액 -->
                <div class="total-product pc">
                    <h3 class="content-title"><i class="ico"><img src="~/assets/image/ico/ico_money.svg"
                                alt="전체 상품 합계"></i>전체 상품 합계
                    </h3>
                    <div class="price-info-wrap">
                        <div class="price-info">
                            <p>총 상품금액</p>
                            <p>9,999,999<b>원</b></p>
                        </div>
                        <div class="operator">+</div>
                        <div class="price-info">
                            <p>배송비</p>
                            <p>9,999,999<b>원</b></p>
                        </div>
                        <div class="operator">-</div>
                        <div class="price-info">
                            <p>할인혜택</p>
                            <p>9,999,999<b>원</b></p>
                        </div>
                        <div class="operator">=</div>
                        <div class="price-info final">
                            <p>최종 결제금액</p>
                            <p>9,999,999<b>원</b></p>
                        </div>
                    </div>
                </div>
                <div class="total-product mobile">
                    <h3 class="content-title"><i class="ico"><img src="~/assets/image/ico/ico_money.svg"
                                alt="전체 상품 합계"></i>전체 상품 합계
                    </h3>
                    <div class="price-info-wrap">


                        <div class="price-info">
                            <p>총 상품금액</p>
                            <p>9,999,999<b>원</b></p>
                        </div>
                        <div class="price-info">
                            <p>배송비</p>
                            <p>9,999,999<b>원</b></p>
                        </div>
                        <div class="price-info">
                            <p>할인혜택</p>
                            <p>9,999,999<b>원</b></p>
                        </div>
                    </div>
                </div>
                <div class="floating-bottom mobile">
                    <div class="price-info final">
                        <p>결제 예정 금액(NN)</p>
                        <p>9,999,999<b>원</b></p>
                    </div>
                    <button class="btn btn-primary btn-buy">주문하기(NN)</button>
                </div>
            </div>
            <div class="contents-right">
                <!-- 플로팅 어사이드 -->
                <div class="floating-aside" :style="{ top: boxTop + 'px' }">
                    <div class="floating-contents" ref="offsetElement">
                        <div class="title">최종 결제금액</div>
                        <ul class="content">
                            <li>
                                <p>총 상품금액</p>
                                <p>{{ $formatNumber(state.totalPrice.totalItemAmountBeforeDiscounts) }}<b>원</b></p>
                            </li>
                            <li>
                                <p>배송비</p>
                                <p>{{ $formatNumber(state.totalPrice.totalShippingAmount) }}<b>원</b></p>
                            </li>
                            <li class="benefit">
                                <p>총 할인혜택</p>
                                <p>- {{ $formatNumber(state.totalPrice.totalDiscountAmount) }}<b>원</b></p>
                            </li>
                            <li class="point">
                                <p>적립예정 포인트</p>
                                <p>{{ $formatNumber(state.totalPrice.totalEarnPoint) }} P</p>
                            </li>
                        </ul>
                        <div class="total">
                            <p>114,450<b>원</b></p>
                        </div>
                        <button class="btn btn-primary btn-round btn-floating">주문하기</button>
                    </div>
                </div>

            </div>
        </div>
        <!-- 노컨텐츠 -->
        <div v-if="isCartEmpty" class="no-contents">
            <img src="~/assets/image/item/no-contents.svg" alt="상품없음">
            <p>엇? 장바구니에 아무것도 없어요<br>
                상품을 둘러볼까요? :D</p>
            <button class="btn btn-primary-line btn-round btn-home">메인으로</button>
        </div>


        <!-- 구성상품 -->
        <orderPopupDetail :free-gift-item="freeGiftItem" :view="isPopupActive" @close="hideModal" />

    </div>
</template>

<script setup>
import { ref , reactive, onMounted, onBeforeUnmount } from 'vue';
const cartGroups = useSampleData('/_sample/itemCart.json');

const { $formatNumber } = useNuxtApp();
const isCartEmpty = ref(false);
const isTooltipActive = ref(false);
const istargetActive = ref(false);
const buyItems = ref(0);
const boxTop = ref(null);
const targetElement = ref(null);
const offsetElement = ref(null);
const freeGiftItem = ref(null);
const isPopupActive = ref(false);

let selectedItems = ref(null);

const props = defineProps({
    itemPrice: {
        type: Object,
        default: () => {
            return {}
        }
    },
    buyItem: {
        type: Object,
        default: () => {
            return {}
        }
    },
    shippingIndex: {
        type: Number,
        default: 0
    },
    disabled: {
        type: Boolean,
        default: () => {
            return false;
        }

    }
});

const state = reactive({
    totalPrice: {
        totalItemAmountBeforeDiscounts: 145000,
        totalShippingAmount: 145000,
        totalDiscountAmount: 14500,
        totalEarnPoint: 200000,
        orderPayAmount: 114450
    }

})

// scroll event
const handleScroll = () => {
    const targetRect = targetElement.value.getBoundingClientRect();
    const offsetRect = offsetElement.value.getBoundingClientRect();
    
    //console.log("targetRect height : ", offsetRect.height)
    //console.log("targetRect bottom : ", targetRect.bottom)

    istargetActive.value = targetRect.top <= 190

    if (targetRect.bottom <= offsetRect.height + 264) {
        boxTop.value = targetRect.bottom - offsetRect.height - 120
        console.log('boxTop :: ', boxTop.value)
    } else {
        boxTop.value = 146
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

const toggleMainItems = (index, checked) => {
    let target = this.allMainGroupCartIds[index];

    if (checked != undefined && checked != null) {
        if (checked) {
            target.cartIds.forEach(cartId => {
                if (selectedItems.value.indexOf(cartId) < 0) {
                    selectedItems.value.push(cartId);
                }
            });

        } else {
            target.cartIds.forEach(cartId => {
                const index = selectedItems.value.indexOf(cartId);

                if (index > -1) {
                    this.selectedItems.splice(index, 1);
                }
            });
        }

        return checked;
    } else {
        let matchedCount = 0;

        target.cartIds.forEach(cartId => {
            if (this.selectedItems.indexOf(cartId) > -1) {
                matchedCount++;
            }
        })

        return matchedCount > 0;
    }
}


const toggleTooltip = () => {
    isTooltipActive.value = !isTooltipActive.value;
};

const closeTooltip = () => {
    isTooltipActive.value = false;
};


const showModalProduct = () => {
    document.querySelector('.modal-product-detail').classList.add('show');
};

const hideModal = (e) => {
    e.target.closest('.modal').classList.remove('show');
};

</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/cart/cart";
</style>