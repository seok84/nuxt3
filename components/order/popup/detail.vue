<template>
    <div class="modal modal-product-detail" :class="view == true ? 'show' : ''">
        <div class="dimmed-bg" @click="hideModal($event)"></div>
        <div class="modal-wrap">
            <button class="modal-close" type="button" @click="hideModal()">닫기</button>
            <div class="modal-header">
                구성상품
            </div>
            <div class="p-2 modal-body">
                <!-- 아이템 리스트 horizon -->
                <div class="item-list-container horizon">
                    <!-- 반복 요소 item-list -->
                    <div class="item-list">
                        <!-- 아이템 썸네일 영역 -->
                        <div class="thumbnail-container sold-out">
                            <div class="sold-out-wrap">
                                <span>
                                    <img src="~/assets/image/sample/sold-out.png" alt="품절">
                                </span>
                            </div>
                            <div to="/" @click.prevent class="thumbnail-wrap">
                                <div class="thumbnail-area">
                                    <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="center-center">
                                </div>
                                <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                            </div>
                        </div>
                        <!-- 아이템 정보 영역 -->
                        <div class="info-container">
                            <div class="title-main paragraph-ellipsis">
                                <b>[브랜드명]</b>제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이
                                노출되는 영역
                                50g X 2
                            </div>
                            <div class="title-sub paragraph-ellipsis">
                                <b>[옵션1]</b>서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 <b>[옵션2]</b> 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브
                                타이틀
                                서브 타이틀 서브
                                타이틀 서브 타이틀
                                서브 타이틀 서브 타이틀 서브 타이틀 서브
                                타이틀
                            </div>
                            <div class="purchase-amount">
                                <p class="price">9,999,999원</p>
                                <p class="amount">수량 999개</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 개발소스
                <div class="item-list-container horizon" v-for="(item, index) in freeGiftItem">
                    반복 요소 item-list
                    <div class="item-list">
                        아이템 썸네일 영역
                        <div class="thumbnail-container sold-out">
                            <div v-if="isSoldOut(index)" class="sold-out-wrap">
                                <span>
                                    <img src="~/assets/image/sample/sold-out.png" alt="품절">
                                </span>
                            </div>
                            <div @click="this.$router.push(`/item/${item.itemDetail.itemUserCode}`);" class="thumbnail-wrap">
                                <img class="thumbnail" :src="item.itemDetailResponse.itemImage" :alt="item.itemName">
                            </div>
                        </div>
                        아이템 정보 영역
                        <div class="info-container">
                            <div class="title-main paragraph-ellipsis">
                                <b v-if="item.brand != ''">[{{item.brand}}]</b>
                                {{item.itemName}}
                            </div>
                            <div class="title-sub paragraph-ellipsis" v-html="item.options">

                            </div>
                            <div class="purchase-amount">
                                <p class="price">{{formatNumber(item.itemDetailResponse.salePrice)}}원</p>
                                <p class="amount">수량 {{formatNumber(item.itemPrice.quantity)}}개</p>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref  } from 'vue';

let $s, vm;

const buyItem = ref({});
const itemDetail = ref({});
const itemPrice = ref({});
const itemDetailShipping = ref({});
const isTooltipActive = ref(false);
const disabled = ref('');
const checkboxArray = ref([]);

const props = defineProps({
    view: {
            type: Boolean,
        default: false
    },
    freeGiftItem: {
        type: Array,
        default: () => {
            return new Array();
        }
    }
})

const emit = defineEmits(['close'])

onBeforeMount(() => {
    // $s = this.$saleson;
    // vm = this;
});

const hideModal = () => {
    emit('close')
};

const isSoldOut = () => {
    let itemDetail = freeGiftItem[index].itemDetailResponse;
    return itemDetail.itemSoldOutFlag === 'Y' ? true : false;
}

</script>
<style lang="scss" scoped>
@use "@/assets/scss/pages/cart/cart-modal";
</style>