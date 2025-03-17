<template>
    <div class="product-info info2">
        <div class="info2-list">
            <p>상품가 28,900원</p>
            <p>할인 <span class="expected-discount-amount-order">6,000</span>원</p>
            <p class="discounted">할인적용가 <span class="op-expected-item-sale-amount">18,900</span>원</p>
        </div>
        <p class="quantity">수량: 999개</p>
    </div>
    <!-- 개발소스
    <div class="product-info info2" :class="`item-price-info-${buyItem.itemSequence}-${shippingIndex}-order`">
        <div class="info2-list">
            <p>상품가 {{formatNumber(itemSaleAmount)}}원</p>
            <p>할인 <span class="expected-discount-amount-order">{{formatNumber(itemDiscountAmount)}}</span>원</p>
            <p class="discounted">할인적용가 <span class="op-expected-item-sale-amount" :class="`${buyItem.itemSequence}-${shippingIndex}`">{{formatNumber(itemAmount)}}</span>원</p>
        </div>
        <p class="quantity">수량:{{itemPrice.quantity}}개</p>
    </div>-->
</template>

<script setup>
import { ref  } from 'vue';
const { $formatNumber, $dateFormat } = useNuxtApp();

const props = defineProps({
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
});

const itemPrice = ref(null);
const itemSaleAmount = ref(0);
const itemDiscountAmount = ref(0);
const itemAmount = ref(0);

const getItemSalePrice = () => {
    let optionPrice = this.itemPrice.optionPrice;
    let quantity = this.itemPrice.quantity;
    this.itemSaleAmount = (this.itemPrice.itemSalePrice + optionPrice) * quantity;
};
const getItemDiscount = () => {
    let couponDiscountAmount = Number(this.itemPrice.couponDiscountAmount);
    let discountPriceAmount  = this.itemPrice.discountAmount;

    this.itemDiscountAmount = couponDiscountAmount + discountPriceAmount;
};
const getItemAmount = () => {
    this.itemAmount =  this.itemSaleAmount - this.itemDiscountAmount;
};



/* 개발 소스
let $s, vm;

export default {
    data() {
        return {
            itemPrice: {},
            itemSaleAmount: 0,
            itemDiscountAmount: 0,
            itemAmount: 0,
        };
    },
    props: {
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
    },
    watch:{
        buyItem: {
            deep: true,
            handler(value) {
                this.buyItem = value;
                this.itemPrice = this.buyItem.itemPrice;
                this.getItemSalePrice();
                this.getItemDiscount();
                this.getItemAmount();
            }
        }
    },
    beforeCreate: function () {
        // 기존 Vue로 작성된 스크립트 실행시 적용
        $s = this.$saleson;
        vm = this;
    },
    mounted() {
        this.$nextTick(() => {
            this.itemPrice = this.buyItem.itemPrice;
            this.getItemSalePrice();
            this.getItemDiscount();
            this.getItemAmount();
        });
    },
    methods: {
        getItemSalePrice() {
            let optionPrice = this.itemPrice.optionPrice;
            let quantity = this.itemPrice.quantity;
            this.itemSaleAmount = (this.itemPrice.itemSalePrice + optionPrice) * quantity;
        },
        getItemDiscount() {
            let couponDiscountAmount = Number(this.itemPrice.couponDiscountAmount);
            let discountPriceAmount  = this.itemPrice.discountAmount;

            this.itemDiscountAmount = couponDiscountAmount + discountPriceAmount;
        },
        getItemAmount() {
            this.itemAmount =  this.itemSaleAmount - this.itemDiscountAmount;
        }
    }
} */
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/order/order";
</style>
