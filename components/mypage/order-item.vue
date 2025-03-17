<template>
    <div class="wrapper">
        <div class="delivery-status-wrap">
            <strong class="state" :class="['status', orderStatusLabelColor]">{{ item.orderStatusLabel }}</strong>
        </div>
        <div class="item-wrap">
            <div class="item-list-container horizon">
                <div class="item-list">
                    <item-part-thumbnail :itemData="item" :type="'order'" :exposeUserAct="false" />
                    <div class="info-container">
                        <div class="title-wrap"><!-- @click.prevent="redirect(`/item/${item.itemUserCode}`)" -->
                            <p class="title-main paragraph-ellipsis">
                                <span v-if="item.brand != ''">[{{ item.brand }}]</span>{{ item.itemName }}
                            </p>
                            <div class="title-sub paragraph-ellipsis" v-html="item.options"></div>
                            <!-- unescapeHtml(item.options) -->
                        </div>
                        <ul class="price-info">
                            <li class="price">{{ $formatNumber(item.itemAmount) }}원</li>
                            <li class="amount">수량 {{ $formatNumber(item.quantity) }}개</li>
                        </ul>
                    </div>
                </div>
            </div>
            <mypage-order-button :order-code="orderCode" :item="item" v-if="btnFlag" @openPopup="orderPopup"
                @deliveryLink="deliveryLink" />
        </div>


    </div>
</template>
<script setup>
const { $formatNumber } = useNuxtApp();

    const props = defineProps({
        orderCode: String,
        item: Object,
        btnFlag: {
            type: Boolean,
            default: true
        },
        orderStatusLabelColor: String,
        orderStatusLabel: String,

    })

    const emit = defineEmits(['deliveryLink', 'orderPopup'])

    const orderPopup = (param) => {
        emit('orderPopup', param);
    };

    const deliveryLink = (param) => {
        emit('deliveryLink', param);
    };
</script>
<style lang="scss" scoped>
@use "~/assets/scss/pages/mypage/mypage_order.scss";
</style>