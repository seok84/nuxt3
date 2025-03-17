<template>
    <div class="modal modal-coupon" :class="show ? 'show' : ''">
        <div class="dimmed-bg" @click="hideModal"></div>
        <div class="modal-wrap">
            <button class="modal-close" @click="hideModal">닫기</button>
            <div class="modal-header">
                쿠폰 다운로드
            </div>
            <div class="p-2 modal-body">
                <button type="button" class="btn btn-default-line btn-all-down">
                    <img src="~/assets/image/ico/ico_download_black_02.svg" class="ico-down"><span>모든 쿠폰
                        다운(NN)</span>
                </button>
                <p class="all-items">총 <strong>1,392</strong>개</p>
                <!-- 쿠폰리스트 -->
                <ul class="coupon-list-container">
                    <!-- 상품 -->
                    <li class="coupon-list line">
                        <div class="coupon-list-wrap">
                            <div class="item">
                                <div class="price-area"><span class="number"><em>10</em>%</span></div>
                                <div class="tag-area product"></div>
                            </div>
                            <div class="info">
                                <strong class="desc title">[패밀리] 10%할인(최대 5천원)</strong>
                                <span class="desc sub">상품 쿠폰이 노출되고 있습니다.</span>
                                <p class="pc">
                                    <span class="desc date">2019-01-01 ~ 2019-06-03 / 50,000원 이상 구매시 사용가능</span>
                                </p>
                            </div>
                        </div>
                        <button type="button" class="download">
                            <img src="~/assets/image/ico/ico_download_black.svg" class="ico-down"><span>쿠폰받기</span>
                        </button>
                        <div class="mobile">
                            <span class="desc date">2019-01-01 ~ 2019-06-03 / 50,000원 이상 구매시 사용가능</span>
                        </div>
                    </li>
                    <!-- 주문 -->
                    <li class="coupon-list line">
                        <div class="coupon-list-wrap">
                            <div class="item">
                                <div class="price-area"><span class="number"><em>3,000</em>원</span></div>
                                <div class="tag-area order"></div>
                            </div>
                            <div class="info">
                                <strong class="desc title">[패밀리] 10%할인(최대 5천원)</strong>
                                <span class="desc sub">상품 쿠폰이 노출되고 있습니다.</span>
                                <p class="pc">
                                    <span class="desc date">2019-01-01 ~ 2019-06-03 / 50,000원 이상 구매시 사용가능</span>
                                </p>
                            </div>
                        </div>
                        <button type="button" class="download">
                            <img src="~/assets/image/ico/ico_download_black.svg" class="ico-down"><span>쿠폰받기</span>
                        </button>
                        <div class="mobile">
                            <span class="desc date">2019-01-01 ~ 2019-06-03 / 50,000원 이상 구매시 사용가능</span>
                        </div>
                    </li>
                    <!-- 카테고리 -->
                    <li class="coupon-list line">
                        <div class="coupon-list-wrap">
                            <div class="item">
                                <div class="price-area"><span class="number"><em>10</em>%</span></div>
                                <div class="tag-area category"></div>
                            </div>
                            <div class="info">
                                <strong class="desc title">[패밀리] 10%할인(최대 5천원)</strong>
                                <span class="desc sub">상품 쿠폰이 노출되고 있습니다.</span>
                                <p class="pc">
                                    <span class="desc date">2019-01-01 ~ 2019-06-03 / 50,000원 이상 구매시 사용가능</span>
                                </p>
                            </div>
                        </div>
                        <button type="button" class="download">
                            <img src="~/assets/image/ico/ico_download_black.svg" class="ico-down"><span>쿠폰받기</span>
                        </button>
                        <div class="mobile">
                            <span class="desc date">2019-01-01 ~ 2019-06-03 / 50,000원 이상 구매시 사용가능</span>
                        </div>
                    </li>
                </ul>
                <!-- 노 컨텐츠 -->
                <div class="no-contents">
                    다운로드 가능한 쿠폰이 없습니다.
                </div>
                <!-- 페이징 -->
                <ul class="pagination">
                    <li class="page-item"><span class="page-prev">이전페이지</span></li>
                    <li class="page-item active"><span class="page-link">1</span></li>
                    <li class="page-item"><span class="page-link">2</span></li>
                    <li class="page-item"><span class="page-link">3</span></li>
                    <li class="page-item"><span class="page-link">4</span></li>
                    <li class="page-item"><span class="page-link">5</span></li>
                    <li class="page-item"><span class="page-next">이전페이지</span></li>
                </ul>
                <ul class="dot-list large-dot">
                    <li>다운로드한 쿠폰은 마이페이지 > 쿠폰에서 확인하실 수 있습니다.</li>
                    <li>다운로드한 쿠폰의 유효기간 경과 시 사용할 수 없습니다.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["close"]);

const hideModal = ($event) => {
    emit('close');
};



</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list.scss";
</style>
