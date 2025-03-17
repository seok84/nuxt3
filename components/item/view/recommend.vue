<template>
    <div class="recommend-container">
        <h4 class="recommend-title">
            다른 고객들이 많이 본 상품
        </h4>
        <Swiper :slidesPerView="2" :spaceBetween="14" :navigation="{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
        }" :breakpoints="{
            '767': {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }" :modules="modules" class="relation-swiper swiper-visible" ref="relationSwiper">
            <SwiperSlide>
                <!-- 아이템 썸네일 영역 -->
                <div class="thumbnail-container sold-out">
                    <div class="sold-out-wrap">
                        <span>
                            <img src="~/assets/image/sample/sold-out.png" alt="품절">
                        </span>
                    </div>
                    <div class="thumbnail-wrap">
                        <div class="thumbnail-area">
                            <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="center-center">
                        </div>
                        <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                    </div>
                    <div class="user-action">
                        <div class="user-ico user-attention">관심상품</div>
                        <div class="user-ico user-basket">장바구니</div>
                    </div>
                </div>
                <!-- 아이템 정보 영역 -->
                <div class="info-container">
                    <div class="title-main paragraph-ellipsis">
                        [브랜드명] 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
                    </div>
                    <div class="title-sub paragraph-ellipsis">
                        서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀
                        서브
                        타이틀 서브
                        타이틀
                        서브
                        타이틀
                    </div>
                    <div class="discounted">
                        138,000원
                    </div>
                    <div class="price-wrap">
                        <p class="price">
                            <span>108,000</span>
                            <span>원</span>
                        </p>
                        <p class="sale">
                            27%
                        </p>
                    </div>
                    <div class="tag-wrap">
                        <div class="tag new">신상품</div>
                        <div class="tag md">MD추천</div>
                        <div class="tag coupon">쿠폰</div>
                        <div class="tag delivery">무료배송</div>
                        <div class="tag best">베스트</div>
                        <div class="tag timesale">타임세일</div>
                        <div class="tag event">이벤트</div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <!-- 아이템 썸네일 영역 -->
                <div class="thumbnail-container sold-out">
                    <div class="sold-out-wrap">
                        <span>
                            <img src="~/assets/image/sample/sold-out.png" alt="품절">
                        </span>
                    </div>
                    <div class="thumbnail-wrap">
                        <div class="thumbnail-area">
                            <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="center-center">
                        </div>
                        <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                    </div>
                    <div class="user-action">
                        <div class="user-ico user-attention">관심상품</div>
                        <div class="user-ico user-basket">장바구니</div>
                    </div>
                </div>
                <!-- 아이템 정보 영역 -->
                <div class="info-container">
                    <div class="title-main paragraph-ellipsis">
                        [브랜드명] 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
                    </div>
                    <div class="title-sub paragraph-ellipsis">
                        서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀
                        서브
                        타이틀 서브
                        타이틀
                        서브
                        타이틀
                    </div>
                    <div class="discounted">
                        138,000원
                    </div>
                    <div class="price-wrap">
                        <p class="price">
                            <span>108,000</span>
                            <span>원</span>
                        </p>
                        <p class="sale">
                            27%
                        </p>
                    </div>
                    <div class="tag-wrap">
                        <div class="tag new">신상품</div>
                        <div class="tag md">MD추천</div>
                        <div class="tag coupon">쿠폰</div>
                        <div class="tag delivery">무료배송</div>
                        <div class="tag best">베스트</div>
                        <div class="tag timesale">타임세일</div>
                        <div class="tag event">이벤트</div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <!-- 아이템 썸네일 영역 -->
                <div class="thumbnail-container sold-out">
                    <div class="sold-out-wrap">
                        <span>
                            <img src="~/assets/image/sample/sold-out.png" alt="품절">
                        </span>
                    </div>
                    <div class="thumbnail-wrap">
                        <div class="thumbnail-area">
                            <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="center-center">
                        </div>
                        <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                    </div>
                    <div class="user-action">
                        <div class="user-ico user-attention">관심상품</div>
                        <div class="user-ico user-basket">장바구니</div>
                    </div>
                </div>
                <!-- 아이템 정보 영역 -->
                <div class="info-container">
                    <div class="title-main paragraph-ellipsis">
                        [브랜드명] 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
                    </div>
                    <div class="title-sub paragraph-ellipsis">
                        서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀
                        서브
                        타이틀 서브
                        타이틀
                        서브
                        타이틀
                    </div>
                    <div class="discounted">
                        138,000원
                    </div>
                    <div class="price-wrap">
                        <p class="price">
                            <span>108,000</span>
                            <span>원</span>
                        </p>
                        <p class="sale">
                            27%
                        </p>
                    </div>
                    <div class="tag-wrap">
                        <div class="tag new">신상품</div>
                        <div class="tag md">MD추천</div>
                        <div class="tag coupon">쿠폰</div>
                        <div class="tag delivery">무료배송</div>
                        <div class="tag best">베스트</div>
                        <div class="tag timesale">타임세일</div>
                        <div class="tag event">이벤트</div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <!-- 아이템 썸네일 영역 -->
                <div class="thumbnail-container sold-out">
                    <div class="sold-out-wrap">
                        <span>
                            <img src="~/assets/image/sample/sold-out.png" alt="품절">
                        </span>
                    </div>
                    <div class="thumbnail-wrap">
                        <div class="thumbnail-area">
                            <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="center-center">
                        </div>
                        <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                    </div>
                    <div class="user-action">
                        <div class="user-ico user-attention">관심상품</div>
                        <div class="user-ico user-basket">장바구니</div>
                    </div>
                </div>
                <!-- 아이템 정보 영역 -->
                <div class="info-container">
                    <div class="title-main paragraph-ellipsis">
                        [브랜드명] 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
                    </div>
                    <div class="title-sub paragraph-ellipsis">
                        서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀
                        서브
                        타이틀 서브
                        타이틀
                        서브
                        타이틀
                    </div>
                    <div class="discounted">
                        138,000원
                    </div>
                    <div class="price-wrap">
                        <p class="price">
                            <span>108,000</span>
                            <span>원</span>
                        </p>
                        <p class="sale">
                            27%
                        </p>
                    </div>
                    <div class="tag-wrap">
                        <div class="tag new">신상품</div>
                        <div class="tag md">MD추천</div>
                        <div class="tag coupon">쿠폰</div>
                        <div class="tag delivery">무료배송</div>
                        <div class="tag best">베스트</div>
                        <div class="tag timesale">타임세일</div>
                        <div class="tag event">이벤트</div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <!-- 아이템 썸네일 영역 -->
                <div class="thumbnail-container sold-out">
                    <div class="sold-out-wrap">
                        <span>
                            <img src="~/assets/image/sample/sold-out.png" alt="품절">
                        </span>
                    </div>
                    <div class="thumbnail-wrap">
                        <div class="thumbnail-area">
                            <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="center-center">
                        </div>
                        <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                    </div>
                    <div class="user-action">
                        <div class="user-ico user-attention">관심상품</div>
                        <div class="user-ico user-basket">장바구니</div>
                    </div>
                </div>
                <!-- 아이템 정보 영역 -->
                <div class="info-container">
                    <div class="title-main paragraph-ellipsis">
                        [브랜드명] 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
                    </div>
                    <div class="title-sub paragraph-ellipsis">
                        서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀
                        서브
                        타이틀 서브
                        타이틀
                        서브
                        타이틀
                    </div>
                    <div class="discounted">
                        138,000원
                    </div>
                    <div class="price-wrap">
                        <p class="price">
                            <span>108,000</span>
                            <span>원</span>
                        </p>
                        <p class="sale">
                            27%
                        </p>
                    </div>
                    <div class="tag-wrap">
                        <div class="tag new">신상품</div>
                        <div class="tag md">MD추천</div>
                        <div class="tag coupon">쿠폰</div>
                        <div class="tag delivery">무료배송</div>
                        <div class="tag best">베스트</div>
                        <div class="tag timesale">타임세일</div>
                        <div class="tag event">이벤트</div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <!-- 아이템 썸네일 영역 -->
                <div class="thumbnail-container sold-out">
                    <div class="sold-out-wrap">
                        <span>
                            <img src="~/assets/image/sample/sold-out.png" alt="품절">
                        </span>
                    </div>
                    <div class="thumbnail-wrap">
                        <div class="thumbnail-area">
                            <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="center-center">
                        </div>
                        <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                    </div>
                    <div class="user-action">
                        <div class="user-ico user-attention">관심상품</div>
                        <div class="user-ico user-basket">장바구니</div>
                    </div>
                </div>
                <!-- 아이템 정보 영역 -->
                <div class="info-container">
                    <div class="title-main paragraph-ellipsis">
                        [브랜드명] 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
                    </div>
                    <div class="title-sub paragraph-ellipsis">
                        서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀
                        서브
                        타이틀 서브
                        타이틀
                        서브
                        타이틀
                    </div>
                    <div class="discounted">
                        138,000원
                    </div>
                    <div class="price-wrap">
                        <p class="price">
                            <span>108,000</span>
                            <span>원</span>
                        </p>
                        <p class="sale">
                            27%
                        </p>
                    </div>
                    <div class="tag-wrap">
                        <div class="tag new">신상품</div>
                        <div class="tag md">MD추천</div>
                        <div class="tag coupon">쿠폰</div>
                        <div class="tag delivery">무료배송</div>
                        <div class="tag best">베스트</div>
                        <div class="tag timesale">타임세일</div>
                        <div class="tag event">이벤트</div>
                    </div>
                </div>

            </SwiperSlide>

            <div class="swiper-controls">
                <button class="swiper-prev show">이전</button>
                <button class="swiper-next show">다음</button>
            </div>
        </Swiper>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const modules = [FreeMode, Navigation, Thumbs];

const isActive = ref(false);

</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list";
</style>