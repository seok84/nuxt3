<template>
    <ul class="option-list-container">
        <!-- 옵션리스트 - 썸네일형 -->
        <li class="option-list">
            <i class="btn-close"></i>
            <div class="item-list-container horizon">
                <!-- 반복요소 item-list -->
                <div class="item-list">
                    <!-- 아이템 썸네일 영역 -->
                    <itemPartThumbnail />

                    <!-- 아이템 정보 영역 -->
                    <div class="info-container">
                        <div class="title-main paragraph-ellipsis">
                            [구성상품1] 상품명이 노출됩니다 / [옵션1] : option 1, option 2 / [옵션2] : option1,
                            option 2
                            / [옵션3] : option1, option2
                        </div>
                        <div class="title-sub paragraph-ellipsis">
                            추가 텍스트 옵션작성 (+22,000원 추가)
                        </div>
                    </div>
                </div>
                <div class="item-list">
                    <!-- 아이템 썸네일 영역 -->
                    <itemPartThumbnail />

                    <!-- 아이템 정보 영역 -->
                    <div class="info-container">
                        <div class="title-main paragraph-ellipsis">
                            [구성상품1] 상품명이 노출됩니다 / [옵션1] : option 1, option 2 / [옵션2] : option1,
                            option 2
                            / [옵션3] : option1, option2
                        </div>
                        <div class="title-sub paragraph-ellipsis">
                            추가 텍스트 옵션작성 (+22,000원 추가)
                        </div>
                    </div>
                </div>
            </div>
            <div class="option-price-wrap">
                <div class="quantity-box">
                    <button type="button" class="btn-quantity btn-minus"></button>
                    <input type="number" title="수량" value="1" readonly maxlength="999" class="quantity number">
                    <button type="button" class="btn-quantity btn-plus"></button>
                </div>
                <div class="option-price">
                    <span>9,999,999,999</span>
                    <span>원</span>
                </div>

            </div>
        </li>
        <li class="option-list">
            <i class="btn-close"></i>
            <div class="item-list-container horizon">
                <div class="item-list">
                    <!-- 아이템 썸네일 영역 -->
                    <itemPartThumbnail />

                    <!-- 아이템 정보 영역 -->
                    <div class="info-container">
                        <div class="title-main paragraph-ellipsis">
                            [구성상품1] 상품명이 노출됩니다 / [옵션1] : option 1, option 2 / [옵션2] : option1,
                            option 2
                            / [옵션3] : option1, option2
                        </div>
                        <div class="title-sub paragraph-ellipsis">
                            추가 텍스트 옵션작성 (+22,000원 추가)
                        </div>
                    </div>
                </div>
            </div>
            <div class="option-price-wrap">
                <div class="quantity-box">
                    <button type="button" class="btn-quantity btn-minus"></button>
                    <input type="number" title="수량" value="1" readonly maxlength="999" class="quantity number">
                    <button type="button" class="btn-quantity btn-plus"></button>
                </div>
                <div class="option-price">
                    <span>9,999,999,999</span>
                    <span>원</span>
                </div>

            </div>
        </li>
        <!-- 옵션리스트 - 번호형 -->
        <li class="option-list">
            <i class="btn-close"></i>
            <div class="item-list-container horizon">
                <!-- 반복요소 item-list -->
                <div class="item-list">
                    <!-- 아이템 상품 번호 -->
                    <div class="option-number">상품01</div>
                    <!-- 아이템 정보 영역 -->
                    <div class="info-container">
                        <div class="title-main paragraph-ellipsis">
                            [구성상품1] 상품명이 노출됩니다 / [옵션1] : option 1, option 2 / [옵션2] : option1,
                            option 2
                            / [옵션3] : option1, option2
                        </div>
                        <div class="title-sub paragraph-ellipsis">
                            추가 텍스트 옵션작성 (+22,000원 추가)
                        </div>
                    </div>
                </div>
                <div class="item-list">
                    <!-- 아이템 상품 번호 -->
                    <div class="option-number">상품01</div>
                    <!-- 아이템 정보 영역 -->
                    <div class="info-container">
                        <div class="title-main paragraph-ellipsis">
                            [구성상품1] 상품명이 노출됩니다 / [옵션1] : option 1, option 2 / [옵션2] : option1,
                            option 2
                            / [옵션3] : option1, option2
                        </div>
                        <div class="title-sub paragraph-ellipsis">
                            추가 텍스트 옵션작성 (+22,000원 추가)
                        </div>
                    </div>
                </div>
            </div>
            <div class="option-price-wrap">
                <div class="quantity-box">
                    <button type="button" class="btn-quantity btn-minus"></button>
                    <input type="number" title="수량" value="1" readonly maxlength="999" class="quantity number">
                    <button type="button" class="btn-quantity btn-plus"></button>
                </div>
                <div class="option-price">
                    <span>9,999,999,999</span>
                    <span>원</span>
                </div>

            </div>
        </li>
        <li class="option-list">
            <i class="btn-close"></i>
            <div class="item-list-container horizon">
                <div class="item-list">
                    <!-- 아이템 상품 번호 -->
                    <div class="option-number">상품01</div>
                    <!-- 아이템 정보 영역 -->
                    <div class="info-container">
                        <div class="title-main paragraph-ellipsis">
                            [구성상품1] 상품명이 노출됩니다 / [옵션1] : option 1, option 2 / [옵션2] : option1,
                            option 2
                            / [옵션3] : option1, option2
                        </div>
                        <div class="title-sub paragraph-ellipsis">
                            추가 텍스트 옵션작성 (+22,000원 추가)
                        </div>
                    </div>
                </div>
            </div>
            <div class="option-price-wrap">
                <div class="quantity-box">
                    <button type="button" class="btn-quantity btn-minus"></button>
                    <input type="number" title="수량" value="1" readonly maxlength="999" class="quantity number">
                    <button type="button" class="btn-quantity btn-plus"></button>
                </div>
                <div class="option-price">
                    <span>9,999,999,999</span>
                    <span>원</span>
                </div>

            </div>
        </li>
    </ul>
</template>

<script setup>
</script>
<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list";
</style>