<template>
    <div class="item-list-container horizon">
        <div class="item-list">
            <item-part-thumbnail :itemData="itemData" :exposeUserAct="false" />
            <div class="info-container">
                <div class="title-main paragraph-ellipsis">
                    <b>{{ itemData.brand }}</b>{{ itemData.itemName }}
                </div>
                <div class="title-sub paragraph-ellipsis" v-html="itemData.subtitle"></div>
                <div class="underline red" v-if="itemData.compositeItemFlag">
                    구성 상품 보기
                </div>
                <div class="purchase-amount">
                    <p class="price">{{ $formatNumber(itemData.originalPrice) }}원</p>
                    <p class="amount">수량 {{ $formatNumber(itemData.itemAmount) }}개</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const { $formatNumber } = useNuxtApp();

    const props = defineProps({
        itemData: {
            type: Object,
            default: () => ({
                isSoldOut: false,
                soldOutImage: "/_nuxt/assets/image/sample/sold-out.png",
                floatingImages: {
                    topLeft: "",
                    topRight: "",
                    bottomLeft: "",
                    bottomRight: "",
                    centerCenter: ""
                },
                thumbnail: "/_nuxt/assets/image/sample/thum.png",
                
                brand:"",
                title:"",
                itemName:"",
                subtitle:"",

                compositeItemFlag: false,
                originalPrice: "",
                itemAmount:""
            }),
        },
    });
</script>