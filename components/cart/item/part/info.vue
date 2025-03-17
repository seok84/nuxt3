<template>
    <div class="product-info info1">
        <div class="product-item">
            <div class="item-list-container horizon">
                <div class="item-list">
                    <!-- 체크박스 -->
                    <label class="circle-checkbox">
                        <input type="checkbox"><i></i>
                    </label>
                    
                    <!-- 개발소스
                    <label class="circle-checkbox">
                        <input type="checkbox" class="checkbox sub" :class="[disabled ? 'check-sold-out' : '']"
                                v-model="selectedItem" :value="buyItem.cartId" @click="handleCheckboxClick"><i></i>
                    </label> -->
                    
                    <div class="thumbnail-container sold-out">
                        <!-- 아이템 썸네일 영역 -->
                        <div class="sold-out-wrap">
                            <span>
                                <img src="~/assets/image/sample/sold-out.png" alt="품절">
                            </span>
                        </div>
                        <div class="thumbnail-wrap">
                            <img class="thumbnail" src="~/assets/image/sample/thum_area.png" alt="itemName">
                        </div>
                        <div class="user-action">
                            <button type="button" class="user-ico user-attention">
                                관심상품
                            </button>
                        </div>

                        <!-- 개발소스
                        <div v-if="disabled == true" class="sold-out-wrap">
                            <span>
                                <img src="~/assets/image/sample/sold-out.png" alt="품절">
                            </span>
                        </div>
                        <div class="thumbnail-wrap" @click="redirectByItem(buyItem.itemUserCode)">
                            <img class="thumbnail" :src="itemImage(itemDetail.itemImage)" :alt="itemDetail.itemName">
                        </div>
                        <div class="user-action">
                            <button :id="`wish_${buyItem.itemId}`" type="button"
                                    class="user-ico user-attention"
                                    @click="addToWishList(buyItem.itemId)">
                                관심상품
                            </button>
                        </div>
                        -->
                    </div>

                    <!-- 아이템 정보 영역 -->
                    <div class="info-container">
                        <div class="title-main paragraph-ellipsis">
                            <b>[브랜드명]</b>
                            제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
                        </div>
                        <div class="title-sub paragraph-ellipsis">
                            <b>[옵션1]</b>서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 
                            <b>[옵션2]</b> 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀
                        </div>
                        <div class="underline red" @click="freeGiftItemPopupOpen(buyItem)">
                            구성 상품 보기
                        </div>
                    </div>

                    <!-- 개발소스
                    <div class="info-container">
                        <div class="title-main paragraph-ellipsis">
                            <b v-if="buyItem.brand != ''">[{{buyItem.brand}}]</b>
                            {{buyItem.itemName}}
                        </div>
                        <div class="title-sub paragraph-ellipsis" v-html="buyItem.options"></div>
                        <template v-if="buyItem.setItemFlag == 'Y'">
                            <div class="underline red" @click="freeGiftItemPopupOpen(buyItem)">
                                구성 상품 보기
                            </div>
                        </template>
                    </div>-->

                </div>
            </div>
            
            <div class="item-gift">
                <span><i>선물</i>구매 사은품</span>
                <span>루카랩 케어베어 씰 스티커 외 N1개</span>
            </div>
            
            <!-- 개발소스
            <div class="item-gift" v-if="freeGiftItemList.length > 0">
                <span><i>선물</i>구매 사은품</span>
                <span>{{buyItem.freeGiftItemText}}</span>
            </div>-->
            
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    buyItem: {
        type: Object,
        default: () => {
            return {}
        }
    },
    selectedItems: {
        type: Array,
        default: () => {
            return []
        }
    },
    disabled: {
        type: Boolean,
        default: () => {
            return false;
        }
    }
});

const itemDetail = ref(null);
const freeGiftItemList = ref(null);

const freeGiftItemPopupOpen = (buyItem) => {
    console.log('pop up!')
}


/* 개발소스
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
        selectedItems: {
            type: Array,
            default: () => {
                return []
            }
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
        },
    },
    watch:{
        buyItem: {
            deep: true,
            handler(value) {
                this.buyItem = value;
                this.itemDetail = this.buyItem.itemDetailResponse;
                this.freeGiftItemList = this.buyItem.freeGiftItemList;
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
            this.$router.push(`/item/${itemUserCode}`);
        },
        freeGiftItemPopupOpen(buyItem) {
            vm.$emit('freeGiftItemPopupOpen', buyItem.cartId);
        },
        handleCheckboxClick(event) {
            if (this.disabled) {
                event.preventDefault();
                event.stopPropagation();

                this.$saleson.alert('해당 상품은 품절입니다.');
            }
        },
        async addToWishList(itemId) {
            if (!this.$saleson.isLogin()) {
                this.$common.redirectLoginPage(this.$saleson, this.$route.path);
                return;
            }
            let msg = "";

            try {

                const {data} = await this.$salesonApi().wishlist.addWishlist(itemId);

                msg = data.addEventType === "REMOVE" ? "해당 상품이 관심상품에서 삭제되었습니다"
                    : "해당 상품이 관심상품에 담겼습니다.";

                this.$common.fetchWishlistCount();

            } catch (e) {
                this.$log.error('[item/_id] 관심상품 담기: ', e);
            }

            this.$saleson.toast(msg);
        }
    }
}
*/
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/cart/cart.scss";
</style>