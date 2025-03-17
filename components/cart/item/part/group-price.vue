<template>
    <div v-show="buyItem != null && isLast == true">
        <div class="product-price">
            <div class="price-info info1 op-shipping-text-" :class="itemShipping.shippingSequence">
                <p>
                    <span>
                        상품금액 {{$formatNumber(groupTotalPrice.itemTotalPrice)}}원
                    </span>
                    +
                    <span>배송비 {{$formatNumber(groupTotalPrice.shipping)}}원</span>
                    <span><b>= {{$formatNumber(groupTotalPrice.finalPaymentAmount)}}원</b></span>
                </p>
                <p v-if="itemShipping.shippingType != 1 && itemShipping.realShipping != 0 && itemShipping.shippingFreeAmount > 0">
                    (<b>{{$formatNumber(itemShipping.shippingFreeAmount)}}원 이상</b> 무료배송)
                </p>
            </div>
            <div class="price-info info2">
                <p>{{itemShipping.shippingTypeLabel}}
                    <b v-if="deliveryCompanyName != ''">({{deliveryCompanyName }})</b>
                </p>
                <span v-if="itemShipping.shippingTypeMessage != ''">
                <i class="tooltip-handler" @click.prevent="toggleTooltip">!</i>
                <div :class="{ 'tooltip-wrap': true, active: isTooltipActive }">
                    <div class="dimmed-bg" @click.prevent="closeTooltip"></div>
                    <div class="text-center tooltip-content tooltip-delivery">
                        <button class="btn-tooltip-close" @click.prevent="closeTooltip">닫기</button>
                        <p class="tooltip-tit">{{itemShipping.shippingTypeLabel}}</p>
                        <p class="txt2" v-html="itemShipping.shippingTypeMessage"></p>
                    </div>
                </div>
            </span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref} from 'vue';
const { $formatNumber } = useNuxtApp();

const props = defineProps({
    item: {
        type: Object,
        default: () => {
            return {}
        }
    },
    itemShipping: {
        type: Object,
        default: () => {
            return {}
        }
    },
    groupTotalPrice: {
        type: Object,
        default: () => {
            return {}
        }
    },
    shippingIndex: {
        type: Number,
        default: () => {
            return 0
        }
    },
    isLast: {
        type: Boolean,
        default: () => {
            return false;
        }
    },
});

const buyItem = ref(null);
const itemDetail = ref(null);
const deliveryCompanyName = ref(null);
const itemSaleAmount = ref(0);
const itemAmount = ref(0);
const shippingAmount = ref(0);
const extraShippingAmount = ref(0);
const totalPriceAmount = ref(0);
const isTooltipActive = ref(false);


/* 개발소스
let $s, vm;

export default {
    data() {
        return {
            buyItem: {},
            itemDetail: {},
            deliveryCompanyName: '',
            itemSaleAmount: 0,
            itemDiscountAmount: 0,
            itemAmount: 0,
            shippingAmount: 0,
            extraShippingAmount: 0,
            totalPriceAmount: 0,
            isTooltipActive: false
        };
    },
    props: {
        item: {
            type: Object,
            default: () => {
                return {}
            }
        },
        itemShipping: {
            type: Object,
            default: () => {
                return {}
            }
        },
        groupTotalPrice: {
            type: Object,
            default: () => {
                return {}
            }
        },
        shippingIndex: {
            type: Number,
            default: () => {
                return 0
            }
        },
        isLast: {
            type: Boolean,
            default: () => {
                return false;
            }
        },
    },
    watch: {
        item:{
            deep: true,
            handler(value){
                this.buyItem = value;
            }
        }
    },
    beforeCreate: function() {
        // 기존 Vue로 작성된 스크립트 실행시 적용
        $s = this.$saleson,
        vm = this;
    },
    created() {
        this.getCompanyName();
    },
    beforeMount() {},
    mounted() {
        this.$nextTick(() => {});
    },
    methods: {
        toggleTooltip() {
            this.isTooltipActive = true;
        },
        closeTooltip() {
            this.isTooltipActive = false;
        },
        getCompanyName() {
            vm.itemDetail = vm.item.itemDetailResponse;

            if (vm.itemDetail.deliveryType == '1') {
                vm.deliveryCompanyName = '본사';
            } else {
                vm.deliveryCompanyName = vm.itemDetail.deliveryCompanyName;
            }
        },
        isEmptyObject(object) {
            return JSON.stringify(object) === '{}' || object === undefined;
        },

    }
}*/
</script>
