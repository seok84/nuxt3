<template>
    <div class="modal image-pop show">
        <div class="dimmed-bg"></div>
        <div class="image-wrap">
            <div class="pc">
                <div class="expansion-img">
                    <img :src="expandedImage" alt="미리보기">
                </div>
            </div>
            <ul class="image-list">
                <li class="image-item" v-for="(image, index) in imageItems" :key="`image-${index}`">
                    <img :src="getImageUrl(image)" :alt="`image-${index}`" @click="expandImage(image)">
                </li>
            </ul>
            <button class="modal-close">닫기</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import image1 from '../../assets/image/sample/sample_01.png'
import image2 from '../../assets/image/sample/no_content.png'
import image3 from '../../assets/image/sample/item_sample_02.png'
import image4 from '../../assets/image/sample/no_content_720480.png'

const imageItems = [image1,image2,image3,image4]
const expandedImage = ref(getImageUrl(imageItems[0]))

function getImageUrl(image){
    return new URL(image, import.meta.url).href;
}

function expandImage(image) {
    expandedImage.value = getImageUrl(image);
}

</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/components/modal.scss";
</style>
