<template>
    <div class="product-info info3">
        <div class="quantity-wrap">
            <div class="quantity-box">
                <button type="button" class="btn-quantity btn-minus"></button>
                <input type="number" title="수량" readonly value="1" maxlength="999"
                    class="quantity number">
                <button type="button" class="btn-quantity btn-plus"></button>
            </div>

            <button class="btn btn-change">변경</button>
        </div>
        <button class="btn btn-primary-line btn-buynow">바로구매</button>
    </div>
    <!-- 개발소스
    <div class="product-info info3">
        <div class="quantity-wrap">
            <div class="quantity-box">
                <button type="button" class="btn-quantity btn-minus" @click="decreaseQuantity(buyItem, 'decrease')"></button>
                <input type="number" title="수량" :value="itemPrice.quantity" maxlength="999" class="quantity number" @focusout="enterQuantity($event, buyItem)">
                <button type="button" class="btn-quantity btn-plus" @click="increaseQuantity(buyItem, 'increase')"></button>
            </div>

            <button class="btn btn-change" type="button" @click="changeQuantity(buyItem)">변경</button>
        </div>
        <button v-if="disabled == false" class="btn btn-primary-line btn-buynow" type="button" @click="buyOrder(buyItem)">바로구매</button>
    </div>
    -->
</template>

<script setup>
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


/* 개발소스

let $s, vm;

export default {
    data() {
        return {
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
        },
        disabled: {
            type: Boolean,
            default: () => {
                return false;
            }

        }
    },
    computed: {
        selectedItem: {
            get() {
                return this.selectedItems;
            },
            set(value) {
                this.$emit("update:selectedItems", value)
            }
        }
    },
    watch:{
        buyItem: {
            deep: true,
            handler(value) {
                this.buyItem = value;
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
    mounted() {},
    methods: {
         * 수량 감소 처리 (-)
         * @param buyItem
         decreaseQuantity(buyItem) {
            const quantity = this.getItemQuantity(buyItem, 'decrease');
            this.buyItem.itemPrice.quantity = quantity;

            this.$emit("decreaseQuantity", this.buyItem);
        },

         * 수량 추가 처리 (+)
         * @param buyItem
        increaseQuantity(buyItem) {
            const quantity = this.getItemQuantity(buyItem, 'increase');
            this.buyItem.itemPrice.quantity = quantity;

            this.$emit("increaseQuantity", this.buyItem);
        },
         * 수량 계산
         * @param buyItem
        getItemQuantity(buyItem, type) {
            this.buyItem['isQuantityChange'] = false;
            this.buyItem.itemPrice['oldQuantity'] = Number(this.buyItem.itemPrice.quantity); // 현재 상태 저장
            let quantity = Number(buyItem.itemPrice.quantity);

            return type === 'decrease' ? quantity - 1 : quantity + 1;
        },
         * 수량 입력
         * @param $event,buyItem
        enterQuantity($event, buyItem) {
            const quantity = $event.target.value;
            buyItem.itemPrice.quantity = quantity;
            buyItem['isQuantityChange'] = true;

            this.$emit("enterQuantity", buyItem);
        },
         * 수량 변경 버튼 제어
         * @param buyItem
        changeQuantity(buyItem) {
            buyItem['isQuantityChange'] = false;
            this.$emit("changeQuantity", buyItem);
        },
         * 바로구매
         * @param buyItem
        buyOrder(buyItem) {
            this.$emit("buyOrder", buyItem.cartId);
        }
    }
}
*/
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/cart/cart.scss";
</style>