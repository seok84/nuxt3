<template>
    <div class="item-list-page display-page display-brand">
        <h1 class="title-h1">브랜드명</h1>
        <!-- btn-display-tab-more 클릭 시 더보기 활성화 -> display-tab-wrap.on  -->
        <!-- 탭메뉴 개수가 적으면 less 클래스 붙여야함 -> display-tab-wrap.less (더보기 버튼 없어짐)  -->
        <div class="display-tab-wrap on">
            <ul class="display-tab">
                <li class="on">브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
                <li>브랜드 이름</li>
            </ul>
            <div class="btn-display-tab-more"><i></i></div>
        </div>
        <div class="filter-wrap">
            <p>총 <b>123</b>개 상품</p>
            <div class="select-wrap">
                <select class="input-select">
                    <option value="">인기순</option>
                    <option value="">추천순</option>
                    <option value="">최신순</option>
                    <option value="">높은가격순</option>
                    <option value="">낮은가격순</option>
                    <option value="">옵션</option>
                </select>
            </div>
        </div>
        <!-- 아이템리스트 -->
        <div class="item-list-container vertical">
            <div class="item-list item-list-4">
                <!-- 아이템 썸네일 영역 -->
                <div class="thumbnail-container sold-out">
                    <div class="sold-out-wrap">
                        <span>
                            <img src="~/assets/image/sample/sold-out.png" alt="품절">
                        </span>
                    </div>
                    <div to="/" @click.prevent class="thumbnail-wrap">
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
                        서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브
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
            </div>
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
    </div>
</template>

<script  setup>
import { ref } from "vue";

definePageMeta({
    name: 'display-brand-item',
});
const isVisible = ref(false);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";
@use "@/assets/scss/pages/items/item_list.scss";
@use "@/assets/scss/pages/display/display.scss";
</style>