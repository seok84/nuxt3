<template>
    <div class="product-info info1">
        <!-- 아이템 -->
        <div class="product-item">
            <div class="item-list-container horizon">
                <div class="item-list">
                    <!-- 아이템 썸네일 영역 -->
                    <div class="thumbnail-container sold-out">
                        <div class="thumbnail-wrap">
                            <img class="thumbnail" src="~/assets/image/common/no_content.png" onerror="errorImage(this)"
                                alt="YNG - 판매관리자" onclick="$saleson.core.redirect('/item/G2000039305')">
                        </div>
                        <!-- 개발소스 
                        <div v-if="disabled == true" class="sold-out-wrap">
                            <span>
                                <img src="~/assets/image/sample/sold-out.png" alt="품절">
                            </span>
                        </div>
                        <div class="thumbnail-wrap" @click="redirectByItem(buyItem.itemUserCode)">
                            <img class="thumbnail" :src="itemImage(buyItem.itemDetailResponse.itemImage)"
                                 :alt="buyItem.itemDetailResponse.itemName">
                        </div> -->
                    </div>
                    <!-- 아이템 정보 영역 -->
                    <div class="info-container">
                        <div class="title-main paragraph-ellipsis">
                            <b>브랜드</b>
                            제품명이 나오는 부분입니다 제품명이 나오는 부분입니다 제품명이 나오는 부분입니다 제품명이 나오는 부분입니다
                        </div>
                        <div class="title-sub paragraph-ellipsis">
                            [옵션1] 옵션명이 들어가는 영역입니다 (+22,000) [옵션2] 옵션명이 들어가는 영역입니다 (+22,000) [옵션3] 옵션명이 들어가는
                            영역입니다(+22,000)
                        </div>
                        <div class="underline red" @click="freeGiftItemPopupOpen(buyItem)">
                            구성 상품 보기
                        </div>

                        <!-- 개발소스 
                        <div class="title-main paragraph-ellipsis">
                            <b v-if="buyItem.brand != ''">[{{buyItem.brand}}]</b>
                            {{buyItem.itemName}}
                        </div>
                        <div class="title-sub paragraph-ellipsis" v-html="buyItem.options"></div>
                        <template v-if="buyItem.setItemFlag == 'Y' && scope === 'order'">
                            <div class="underline red" @click="freeGiftItemPopupOpen(buyItem)">
                                구성 상품 보기
                            </div>
                        </template>-->
                    </div>

                </div>
            </div>
            <div class="item-gift">
                <span><i>선물</i>구매 사은품</span>
                <span>사은품이 노출되고 있습니다 1개</span>
            </div>-
            <!-- 개발소스 
            <div class="item-gift" v-if="buyItem.freeGiftItemList.length > 0">
                <span><i>선물</i>구매 사은품</span>
                <span>{{buyItem.freeGiftItemText}}</span>
            </div>-->
        </div>
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
    disabled: {
        type: Boolean,
        default: () => {
            return false;
        }
    },
    scope: {
        type: String,
        default: () => {
            return ""
        }
    }
});

const itemDetail = ref(null);
const freeGiftItemList = ref(null);


const emit = defineEmits();

const redirectByItem = (itemUserCode) => {
    //this.$saleson.redirect(`/item/${itemUserCode}`);
};
const freeGiftItemPopupOpen = (buyItem) => {
    emit('freeGiftItemPopupOpen', buyItem.itemId);
};


/* 개발 소스
let $s, vm;

export default {
    data() {
        return {
            itemDetail: {},
            freeGiftItemList: []
        }
    },
    props: {
        buyItem: {
            type: Object,
            default: () => {
                return {}
            }
        },
        disabled: {
            type: Boolean,
            default: () => {
                return false;
            }
        },
        scope: {
            type: String,
            default: () => {
                return ""
            }
        }
    },
    beforeCreate: function() {
        // 기존 Vue로 작성된 스크립트 실행시 적용
        $s = this.$saleson;
        vm = this;
    },
    mounted() {
    },
    methods: {
        redirectByItem(itemUserCode) {
            this.$saleson.redirect(`/item/${itemUserCode}`);
        },
        freeGiftItemPopupOpen(buyItem) {
            this.$emit('freeGiftItemPopupOpen', buyItem.itemId);
        },
    }
}*/
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/order/order";
</style>
