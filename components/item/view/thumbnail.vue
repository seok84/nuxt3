<template>
    <div class="thumbnail-detail">
        <!-- 썸네일 메인 -->
        <Swiper :spaceBetween="0" :slidesPerView="1" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
        class="thumbnail-main-swiper">
            <!-- 아이템 썸네일 영역 -->
            <template v-for="(image, index) in item" :key="index">
                <SwiperSlide>
                    <div class="thumbnail-container" :class="image.isItemSoldOutFlag ? 'sold-out' : ''">
                        <div class="sold-out-wrap" v-if="image.isItemSoldOutFlag">
                            <span><img :src="image.soldOutImage" alt="품절"></span>
                            <div class="ico-restocking"><img :src="image.restockingImag" alt="재입고 알림"></div>
                        </div>
                        <div class="thumbnail-wrap">
                            <img class="thumbnail" :src="image.itemImage" :alt="image.itemName" />
                        </div>
                    </div>
                </SwiperSlide>
            </template>

            <!-- 개발소스
            <div class="swiper-slide" v-for="(image, index) in item.images" :key="index">
                아이템 썸네일 영역
                <div class="thumbnail-container" :class="isItemSoldOutFlag ? 'sold-out' : ''">
                    <div class="sold-out-wrap" v-if="isItemSoldOutFlag">
                        <span><img src="~/assets/image/sample/sold-out.png" alt="품절"></span>
                        <div class="ico-restocking"><img src="~/assets/image/item/restocking.svg" alt="재입고 알림"></div>
                    </div>
                    <div to="/" @click.prevent class="thumbnail-wrap">
                        <img class="thumbnail" :src="itemImage(image)" :alt="unescapeHtml(item.itemName)" @error="errorImage"/>
                    </div>
                </div>
            </div>
            -->
        </Swiper>
        <!-- 썸네일 리스트 -->
        <Swiper @swiper="setThumbsSwiper" :spaceBetween="6" :slidesPerView="5" :navigation="{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
        }" :freeMode="true" :modules="modules" class="thumbnail-list-swiper swiper-visible">
            <template v-for="(image, index) in item" :key="index">
                <SwiperSlide>
                    <div class="thumbnail-container" :class="image.isItemSoldOutFlag ? 'sold-out' : ''">
                        <div class="sold-out-wrap" v-if="image.isItemSoldOutFlag">
                            <span><img :src="image.soldOutImage" alt="품절"></span>
                            <div class="ico-restocking"><img :src="image.restockingImag" alt="재입고 알림"></div>
                        </div>
                        <div class="thumbnail-wrap">
                            <img class="thumbnail" :src="image.itemImage" :alt="image.itemName" />
                        </div>
                    </div>
                </SwiperSlide>
            </template>

            <div class="swiper-controls">
                <div class="swiper-prev">이전</div>
                <div class="swiper-next">다음</div>
            </div>
        </Swiper>

        <!-- 개발소스
        <div class="swiper thumbnail-main-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(image, index) in item.images" :key="index">
                    아이템 썸네일 영역
                    <div class="thumbnail-container" :class="isItemSoldOutFlag ? 'sold-out' : ''">
                        <div class="sold-out-wrap" v-if="isItemSoldOutFlag">
                            <span><img src="~/assets/image/sample/sold-out.png" alt="품절"></span>
                            <div class="ico-restocking"><img src="~/assets/image/item/restocking.svg" alt="재입고 알림"></div>
                        </div>
                        <div to="/" @click.prevent class="thumbnail-wrap">
                            <img class="thumbnail" :src="itemImage(image)" :alt="unescapeHtml(item.itemName)" @error="errorImage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        -->
        
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const item = useSampleData('/_sample/itemList.json');

const thumbsSwiper = ref(null);
const relationSwiper = ref(null);
const modules = [FreeMode, Navigation, Thumbs];

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list";
</style>