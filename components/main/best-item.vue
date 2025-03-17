<template>
    <div class="main-bestitem-area">
        <!-- 탭 영역 -->
        <section class="swiper-wrap">
            <Swiper :slidesPerView="11" :loop="false" :navigation="{
                enabled: true,
                prevEl: '.main-bestitem-area .swiper-prev',
                nextEl: '.main-bestitem-area .swiper-next'
            }" :breakpoints="{
                '320': {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                '767': {
                    slidesPerView: 8,
                    spaceBetween: 10,
                },
                '1194': {
                    slidesPerView: 11,
                    spaceBetween: 10,
                },
            }" :modules="modules" class="main-bestitem" ref="bestitemSwiper">
                <template v-for="(data, index) in categoriesData">
                    <SwiperSlide :class="[`category${index + 1}`, activeIndex === index ? 'on' : '']"
                        @click.prevent="active(index)">{{ data.name }}
                    </SwiperSlide>
                </template>
            </Swiper>
        </section>
        <div class="swiper-controls">
            <button class="swiper-prev">이전</button>
            <button class="swiper-next">다음</button>
        </div>

        <section class="item-list-container">
            <div class="col-left">
                <div class="item-list">
                    <ItemPartThumbnail :itemData="itemData[0]" :rank="1" />
                    <ItemPartInfo :itemData="itemData[0]" />
                </div>
            </div>
            <div class="col-right">
                <div class="item-list item-list-2" v-for="(item, index) in itemData" :key="index">
                    <ItemPartThumbnail :itemData="item" :rank="index + 2" />
                    <ItemPartInfo :itemData="item" />
                </div>
            </div>
        </section>


        <!-- 개발소스
        <section class="item-list-container" v-if="result.content.length > 0">
        <div class="col-left">
            <div class="item-list">
            <item-part-thumbnail :item="firstItem" :rank="getRank(1)" :isSpotList="false"/>
            <item-part-info :item="firstItem" :isBrandView="false"/>
            </div>
        </div>

        <div class="col-right">
            <div class="item-list" v-for="(data, index) in result.content" :key="index" v-if="index > 0">
            <item-part-thumbnail :item="data" :rank="getRank(index + 1)" :isSpotList="false"/>
            <item-part-info :item="data" :isBrandView="false"/>
            </div>
        </div>
        </section>

        <div class="btn-area">
            <button type="button" class="btn-more">더보기</button>
        </div>
        -->
    </div>
</template>

<script setup>
import { ref  } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import "swiper/swiper-bundle.css";

// swiper module
const modules = [Navigation, Pagination, Autoplay, Scrollbar];

const props = defineProps({
    categoriesData : {
        type: Array,
        default: () => {
            return []
        }
    },
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
    displayRank: {
        type: Boolean,
        default: false
    }
});

// best item
const mainSwiper = ref(null);
const activeIndex = ref(0);

const active = (index) => {
    activeIndex.value = index;
};

</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/main/main_bestitem";
</style>