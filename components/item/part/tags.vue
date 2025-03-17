<template>
    <div v-if="hasTags" class="tag-wrap">
        <div v-for="tag in tags" :key="tag" class="tag" :class="tagClass(tag)">
            {{ tagLabel(tag) }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    tags: {
        type: Array,
        default: () => []
    }
});
const hasTags = computed(() => props.tags.length > 0);

const tagClass = (tag) => {
    return {
        new: 'new',
        md: 'md',
        coupon: 'coupon',
        delivery: 'delivery',
        best: 'best',
        timesale: 'timesale',
        event: 'event',
    }[tag] || '';
};

const tagLabel = (tag) => {
    return {
        new: '신상품',
        md: 'MD추천',
        coupon: '쿠폰',
        delivery: '무료배송',
        best: '베스트',
        timesale: '타임세일',
        event: '이벤트',
    }[tag] || tag;
};
</script>

<style></style>