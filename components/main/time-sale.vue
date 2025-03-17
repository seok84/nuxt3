<template>
    <div class="main-timesale-bg">
        <div class="main-timesale-area">
            <div class="main-title-wrap">
                <NuxtLink class="main-title" to="/">찐 혜택 യ 타임세일</NuxtLink>
                <p>이 순간만 할인하는 상품을 모았어요</p>
            </div>
            <section class="swiper-wrap">
                <Swiper :slidesPerView="1" :loop="false" :pagination="{
                    clickable: true,
                    el: '.timesale-swiper-pagination',
                }" :navigation="{
                    enabled: true,
                    prevEl: '.main-timesale-area .swiper-prev',
                    nextEl: '.main-timesale-area .swiper-next'
                }" :modules="modules" class="main-timesale" ref="timesaleSwiper">


                    <template v-for="(data, index) in itemData">
                        <SwiperSlide>
                            <div class="thum">
                                <NuxtLink :to="data.itemUserCode ? '/item/' + data.itemUserCode : '#'" class="thum">
                                    <img class="thumbnail" :src="data.itemImage" :alt="data.itemName" />
                                </NuxtLink>
                            </div>
                            <div class="info-container">
                                <div class="time-area">
                                    <span class="day">99DAY</span>
                                    <span class="time">06 : 18 : 42</span>
                                </div>
                                <NuxtLink :to="data.itemUserCode ? '/item/' + data.itemUserCode : '#'" class="title-main paragraph-ellipsis">
                                    <template v-if="data.brand">
                                        <b>[{{ data.brand }}]</b>
                                    </template>
                                    {{ data.itemName }}
                                </NuxtLink>

                                <div class="discounted">
                                    <span>{{ $formatNumber(data.presentPrice) }}</span>원
                                </div>
                                <div class="flex justify-between">
                                    <NuxtLink :to="data.itemUserCode ? '/item/' + data.itemUserCode : '#'" class="price-wrap">
                                        <p class="price">
                                            <span>{{ $formatNumber(data.salePrice) }}</span>
                                            <span>원</span>
                                        </p>
                                        <span class="sale">{{ $formatNumber(data.discountRate) }}%</span>
                                    </NuxtLink>
                                    <ItemPartUserAction />
                                </div>
                                <div class="tag-wrap type-underline">
                                    <div class="tag new">신상품</div>
                                    <div class="tag md">MD추천</div>
                                    <div class="tag coupon">쿠폰</div>
                                    <div class="tag delivery">무료배송</div>
                                    <div class="tag best">베스트</div>
                                    <div class="tag only">ONLY</div>
                                    <div class="tag salegoods">행사상품</div>
                                    <div class="tag timesale">타임세일</div>
                                    <div class="tag event">이벤트</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </template>


                    <!-- 개발소스
                    <div class="swiper-slide">
                        <NuxtLink :to="`/item/${data.itemUserCode}`" tag="div" class="thum">
                            <img class="thumbnail" :src="itemImage(data.itemImage)" :alt="data.itemImage" @error="errorImage"/>
                        </NuxtLink>
                        <div class="info-container">
                            <div class="time-area">
                                <span class="day"></span>
                                <span class="time"></span>
                            </div>
                            <NuxtLink :to="`/item/${data.itemUserCode}`" tag="div" class="title-main paragraph-ellipsis">
                                <template v-if="data.brand">
                                    <b>[{{data.brand}}]</b>
                                </template>
                                {{data.itemName}}
                            </NuxtLink>
                            <div class="discounted">
                                <span>{{formatNumber(data.presentPrice)}}</span>원
                            </div>
                            <div class="flex justify-between">
                                <NuxtLink :to="`/item/${data.itemUserCode}`" tag="div" class="price-wrap">
                                    <p class="price">
                                        <span>{{formatNumber(data.salePrice)}}</span>
                                        <span>원</span>
                                    </p>
                                    <span class="sale" v-if="data.discountRate > 0">{{formatNumber(data.discountRate)}}%</span>
                                </NuxtLink>
                                <item-part-user-action :item="data"/>
                            </div>
                        </div>
                    </div>
                    -->
                </Swiper>
                <div class="timesale-swiper-pagination"></div>
            </section>

            <div class="swiper-controls">
                <button class="swiper-prev">이전</button>
                <button class="swiper-next">다음</button>
            </div>

        </div>
    </div>

</template>

<script setup>
import { ref  } from 'vue';
const { $formatNumber } = useNuxtApp();
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import "swiper/swiper-bundle.css";
// swiper module
const modules = [Navigation, Pagination, Autoplay, Scrollbar];

const props = defineProps({
    itemData : {
        type: Array,
        default: () => {
            return []
        }
    }
});

const mainTimesaleSwiper = ref(null);

</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/main/main_timesale";
</style>