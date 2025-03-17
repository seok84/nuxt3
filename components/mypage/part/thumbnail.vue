<template>
    <!-- 아이템 썸네일 영역 -->
    <div :class="['thumbnail-container',
        { 'sold-out': item.itemSoldOutFlag }]">
        <!-- 타임딜 영역 -->
        <div class="thumbnail-area">
            <div @click="redirect(item.itemUserCode)" class="thumbnail-wrap">
                <div @click="redirect(item.itemUserCode)" class="sold-out-wrap" v-if="item.itemSoldOutFlag">
                    <span><img src="~/assets/image/sample/sold-out.png" alt="품절" /></span>
                </div>
                <itemPartTag :tags="item.labels" />
                <img class="thumbnail" :src="item.itemImage" :alt="item.itemImage" @error="errorImage" />
            </div>
        </div>
    </div>
</template>

<script setup>
import itemPartTag from '~/components/item/part/tags.vue'
import { useRouter } from 'vue-router';

// Props 선언
const props = defineProps({
    item: {
        type: Object,
        default: () => ({
            itemImage: '',
            itemUserCode: '',
            itemSoldOutFlag: false,
            labels: []
        })
    },
});

// Router 사용
const router = useRouter();

// 메서드
const redirect = (itemUserCode) => {
    router.push(`/item/${itemUserCode}`);
};
</script>
