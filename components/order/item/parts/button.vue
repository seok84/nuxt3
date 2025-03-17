<template>
    <div class="product-info info3">
        <p class="op-used-coupon itemCouponUsedArea-0 coupon-apply">couponText</p>
        <button class="btn btn-round btn-coupon" type="button" @click="availableCouponsCheck(item)">상품 쿠폰 적용</button>

        <!-- 개발소스
        <template v-if="itemCoupons.length > 0 && isCouponActive">
            <p class="op-used-coupon" :class="`itemCouponUsedArea-${item.itemSequence} coupon-apply`" >{{couponText}}</p>
            <button class="btn btn-round btn-coupon" type="button" @click="availableCouponsCheck(item)">상품 쿠폰 적용</button>
        </template>
<template v-else>
            <p class="coupon-none">적용 쿠폰 없음</p>
        </template> -->
    </div>
</template>

<script setup>
import { ref   } from 'vue';

const props = defineProps({
    buyItem: {
        type: Object,
        default: () => {
            return {}
        }
    },
});

const item = ref(null);
const itemCoupons = ref(null);
const itemDetail = ref(null);
const itemPrice = ref(null);


const emit = defineEmits(["availableCouponsCheck"]);
const availableCouponsCheck = (buyItem) => {
    emit('availableCouponsCheck', buyItem);
}


/* 개발소스
import {isCouponActive} from "@/modules/utils/OrderUtils";

let $s, vm;

export default {
    data() {
        return {
            item: {},
            itemCoupons: [],
            itemDetail: {},
            itemPrice: {}
        };
    },
    props: {
        buyItem: {
            type: Object,
            default: () => {
                return {}
            }
        },
    },
    computed: {
        couponText() {
            return this.buyItem.couponText || '';
        },
        isCouponActive() {
            return isCouponActive(this.buyItem);
        }
    },
    beforeCreate: function () {
        // 기존 Vue로 작성된 스크립트 실행시 적용
        $s = this.$saleson;
        vm = this;
    },
    mounted() {
        this.$nextTick(() => {
            this.item = this.buyItem;
            this.itemDetail = this.buyItem.itemDetailResponse;
            this.itemPrice = this.buyItem.itemPrice;
            this.itemCoupons = this.buyItem.itemCoupons || [];
        });
    },
    methods: {
        availableCouponsCheck(buyItem){
            this.$emit('availableCouponsCheck', buyItem);
        }
    }
}*/
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/order/order";
</style>
