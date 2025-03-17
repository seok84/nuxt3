<template>
    <div class="product-info-group">
        <orderItemPartsInfo :buyItem="buyItem" :disabled="disabled" :scope="`order`"
            @freeGiftItemPopupOpen="freeGiftItemPopupOpen" />

        <orderItemPartsPrice :buyItem="buyItem" :shippingIndex="shippingIndex" />

        <orderItemPartsButton :buyItem="buyItem" @availableCouponsCheck="availableCouponsCheck" />

    </div>
</template>

<script setup>
import { ref  } from 'vue';

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
const disabled = ref(false);
const orderQuantity = ref(null);


const disabledCheck = () => {
    disabled.value = orderQuantity.value.soldOutFlag == true ? true : false;
};

const redirectByItem = (itemUserCode) => {
    //this.$saleson.redirect(`/item/${itemUserCode}`);
};

const emit = defineEmits();
const freeGiftItemPopupOpen = (id) => {
    emit('freeGiftItemPopupOpen', id);
};

const availableCouponsCheck = (buyItem) =>{
    emit('availableCouponsCheck', buyItem);
};

/* 개발소스
let $s, vm;

export default {
    data() {
        return {
            itemPrice: {},
            disabled: false,
            orderQuantity: {},
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
    beforeCreate: function() {
        // 기존 Vue로 작성된 스크립트 실행시 적용
        $s = this.$saleson;
        vm = this;
    },
    mounted() {
        this.$nextTick(() => {
            this.orderQuantity = this.buyItem.orderQuantity;
            this.disabledCheck();
        });

    },
    methods: {
        disabledCheck() {
            this.disabled = this.orderQuantity.soldOutFlag == true ? true : false;
        },

        redirectByItem(itemUserCode) {
            this.$saleson.redirect(`/item/${itemUserCode}`);
        },

        freeGiftItemPopupOpen(id) {
            this.$emit('freeGiftItemPopupOpen', id);
        },

        availableCouponsCheck(buyItem){
            this.$emit('availableCouponsCheck', buyItem);
        }
    }
}*/
</script>
