<template>
    <!-- 아이템 썸네일 영역 -->
    <div class="thumbnail-container" :class="{ 'sold-out': itemData.isSoldOut }">
        <div v-if="itemData.isSoldOut" class="sold-out-wrap">
            <span>
                <img :src="itemData.soldOutImage" alt="품절">
            </span>
        </div>
        <div v-if="rank !== '' && rank !== null" class="rank best">{{ rank }}</div>
        <div @click.prevent class="thumbnail-wrap">
            <div class="thumbnail-area">
                <img class="top-left" :src="itemData.floatingImages.topLeft" alt="플로팅이미지"
                    v-if="itemData.floatingImages.topLeft" />
                <img class="top-right" :src="itemData.floatingImages.topRight" alt="플로팅이미지"
                    v-if="itemData.floatingImages.topRight" />
                <img class="bottom-left" :src="itemData.floatingImages.bottomLeft" alt="플로팅이미지"
                    v-if="itemData.floatingImages.bottomLeft" />
                <img class="bottom-right" :src="itemData.floatingImages.bottomRight" alt="플로팅이미지"
                    v-if="itemData.floatingImages.bottomRight" />
                <img class="center-center" :src="itemData.floatingImages.centerCenter" alt="플로팅이미지"
                    v-if="itemData.floatingImages.centerCenter" />
            </div>
            <img class="thumbnail" :src="itemData.thumbnail" alt="썸네일">
        </div>
        <div class="timedeal" v-if="isSpotList">
            <p>
                <span>TIME</span>
                <span>SALE</span>
            </p>
            <p class="d-day" v-if="spotType === 'dday'">
                <span>00D</span>
                <span>00 : 00 : 00</span>
            </p>
            <p v-else>
                <span>09:38 ~ 11:59</span>
                <span>월 · 화 · 수 · 목 · 금 · 토 · 일</span>
            </p>
        </div>
        <div class="user-action" v-if="exposeUserAct">
            <div class="user-ico user-attention">관심상품</div>
            <div class="user-ico user-basket">장바구니</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({
            isSoldOut: true,
            soldOutImage: "",
            floatingImages: {
                topLeft: "",
                topRight: "",
                bottomLeft: "",
                bottomRight: "",
                centerCenter: ""
            },
            thumbnail: "/_nuxt/assets/image/sample/thum.png",
        }),
    },
    type: {
        type: String,
        default: ""
    },
    rank: {
        type: [String, Number],
        default: () => {
            return '';
        }
    },
    isSpotList: {
        type: Boolean,
        default: () => {
            return false;
        }
    },
    spotType: {
        type: String,
        default: "",
    },
    displayRank: {
        type: Boolean,
        default: false
    },
    exposeUserAct: {
        type: Boolean,
        default: true,
    },
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/guide.scss";
@use "~/assets/scss/pages/items/item_list.scss";
</style>
