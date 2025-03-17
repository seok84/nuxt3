<template>
    <div class="product-info info2">
        <div class="product-info2-price">
            <p>상품가 3,000원</p>
            <p>할인 0원</p>
        </div>
        <p class="discounted">할인적용가 3,000원</p>
    </div>
    <!-- 개발소스
    <div class="product-info info2" :class="`-${buyItem.itemSequence}-${shippingIndex}`"
         :item-sale-amount="itemPrice.itemSaleAmount"
         :item-quantity="itemPrice.quantity"
         :item-sale-price="itemPrice.itemSalePrice"
         :item-discount-amount="itemPrice.discountAmount">

        <div class="product-info2-price">
            <p>상품가 {{formatNumber(itemSaleAmount)}}원</p>
            <p>할인 {{formatNumber(itemDiscountAmount)}}원</p>
        </div>
        <p class="discounted">할인적용가 {{formatNumber(itemAmount)}}원</p>
    </div>
    -->
</template>

<script setup>
import { ref } from 'vue';

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
    }
});

const itemSaleAmount = ref(0);
const itemDiscountAmount = ref(0);
const itemAmount = ref(0);
const isTooltipActive = false;

const toggleTooltipActive = (isTooltipActive) => {
    isTooltipActive.value = !isTooltipActive.value;
}

const closeTooltip = () => {
    isTooltipActive = false;
}

/* 개발소스

let $s, vm;

export default {
    data() {
        return {
            itemSaleAmount: 0,
            itemDiscountAmount: 0,
            itemAmount: 0
        };
    },
    props: {
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
        }
    },
    watch: {
        buyItem: {
            deep: true,
            handler(value) {
                this.buyItem = value;
                this.getItemSaleAmount();
                this.getItemDiscount();
                this.getItemAmount();
            }
        },
        itemPrice: {
            deep: true,
            handler(value) {
                this.itemPrice = value;
            }
        }
    },
    beforeCreate: function () {
        // 기존 Vue로 작성된 스크립트 실행시 적용
        $s = this.$saleson;
        vm = this;
    },
    mounted() {
    },
    methods: {
        getItemSaleAmount() {
            let quantity = this.itemPrice.quantity;
            let optionPrice = this.itemPrice.optionPrice;
            let itemSalePrice = this.itemPrice.itemSalePrice + optionPrice;

            this.itemSaleAmount = itemSalePrice * quantity;

        },
        getItemDiscount() {
            let quantity = this.itemPrice.quantity;
            let discountPrice = this.itemPrice.discountPrice; // 상품 할인 총 금액

            this.itemDiscountAmount = discountPrice * quantity;
        },
        getItemAmount() {
            this.itemAmount = this.itemSaleAmount - this.itemDiscountAmount;
        }

    }
}

*/ 


</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/cart/cart.scss";
</style>