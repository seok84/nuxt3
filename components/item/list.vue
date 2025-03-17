<template>
    <div class="item-list-container" :class="containerDirection">
        <div v-for="(item, index) in itemData" :key="index" :class="`item-list item-list-${itemListRatio}`">
            <template v-if="itemCheckFlag">
                <!-- 체크박스 -->
                <label class="checkbox"><input type="checkbox"><i></i></label>
            </template>
            <ItemPartThumbnail :itemData="item" :rank="getRank(index + 1)" :isSpotList="isSpotList" />
            <ItemPartInfo :itemData="item" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    itemData: {
        type: Object,
        required: true,
        default: () => ({
            isSoldOut: true,
            soldOutImage: "/_nuxt/assets/image/sample/sold-out.png",
            floatingImages: {
                topLeft: "",
                topRight: "",
                bottomLeft: "",
                bottomRight: "",
                centerCenter: ""
            },
            thumbnail: "/_nuxt/assets/image/sample/thum.png",
            title: '',
            subtitle: '',
            originalPrice: 0,
            discountedPrice: 0,
            discountRate: 0,
            tags: [],
        }),
    },
    containerDirection: {
        type: String,
        default: 'vertical'
    },
    itemListRatio: {
        type: Number,
        default: 3
    },
    isSpotList: {
        type: Boolean,
        default: () => {
            return false;
        }
    },
    displayRank: {
        type: Boolean,
        default: false
    },
    itemCheckFlag: {
        type: Boolean,
        default: false
    },
});
const getRank = (index) => {
    if (props.displayRank) {
        return index.toString().padStart(2, '0');
    }
    return '';
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/guide.scss";
@use "~/assets/scss/pages/items/item_list.scss";
</style>
