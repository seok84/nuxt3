<template>
    <div class="info-container">
        <div class="title-main paragraph-ellipsis">{{ itemData.title }}</div>
        <div class="title-sub paragraph-ellipsis">{{ itemData.subtitle }}</div>
        <div class="discounted">{{ itemData.originalPrice }}원</div>
        <div class="price-wrap">
            <p class="price">
                <span>{{ itemData.discountedPrice }}</span>
                <span>원</span>
            </p>
            <p class="sale">{{ itemData.discountRate }}%</p>
        </div>
        <div class="tag-wrap" v-if="itemData.tags.lenght > 0">
            <div v-for="tag in itemData.tags" :key="tag" class="tag" :class="tag">{{ tag }}</div>
        </div>
        <ItemPartTags :tags="itemData.tags" />
    </div>
</template>

<script setup>
const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({
            title: '',
            subtitle: '',
            originalPrice: 0,
            discountedPrice: 0,
            discountRate: 0,
            tags: []
        }),
    },

});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list.scss";
</style>
