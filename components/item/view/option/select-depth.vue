<template>
    <div class="composition-pruduct active">
        <div class="composition-title">구성상품</div>
        <ul class="composition-list-container">
            <li class="composition-list">
                <div class="item-list-container horizon">
                    <!-- 반복요소 item-list -->
                    <div class="item-list">
                        <!-- 아이템 썸네일 영역 -->
                        <div class="thumbnail-container sold-out">
                            <div class="sold-out-wrap">
                                <span>
                                    <img src="~/assets/image/sample/sold-out.png" alt="품절">
                                </span>
                            </div>
                            <div @click.prevent class="thumbnail-wrap">
                                <div class="thumbnail-area">
                                    <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="center-center">
                                </div>
                                <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                            </div>
                        </div>
                        <!-- 아이템 정보 영역 -->
                        <div class="info-container">
                            <div class="title-main paragraph-ellipsis">
                                [구성상품1] 상품명이 노출됩니다 / [옵션1] : option 1, option 2 / [옵션2] :
                                option1,
                                option 2
                                / [옵션3] : option1, option2
                            </div>
                            <div class="title-sub paragraph-ellipsis">
                                (구성 상품의 설명)
                            </div>
                            <div class="purchase-amount">
                                <p class="amount-only">
                                    <string>999</string>개
                                </p>
                            </div>
                        </div>
                        <!-- 옵션-드롭다운(조합형) -->
                        <div class="option-dropdown">
                            <!-- 버튼 -->
                            <div class="dropdown-title select-wrap" @click="toggleDropdownActive($event)">
                                <a class="input-select">옵션-조합형</a>
                            </div>
                            <!-- 내용 -->
                            <div class="option-contents">
                                <div class="select-wrap" @click="toggleDropdownActive($event)">
                                    <a class="input-select">옵션-조합형</a>
                                </div>
                                <div class="option-inner">
                                    <div class="dropdown-area">
                                        <button class="option-title" @click="toggleOptionActive($event)">옵션 선택1</button>
                                        <div class="option-item">
                                            <button>옵션1</button>
                                            <button>옵션2</button>
                                            <button>옵션3</button>
                                        </div>
                                    </div>
                                    <div class="dropdown-area">
                                        <button class="option-title" @click="toggleOptionActive($event)">옵션 선택2</button>
                                        <div class="option-item">
                                            <button>옵션1</button>
                                            <button>옵션2</button>
                                            <button>옵션3</button>
                                        </div>
                                    </div>
                                    <div class="dropdown-area">
                                        <button class="option-title" @click="toggleOptionActive($event)">옵션 선택3</button>
                                        <div class="option-item">
                                            <button>옵션1</button>
                                            <button>옵션2</button>
                                            <button>옵션3</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-list">
                        <!-- 아이템 썸네일 영역 -->
                        <div class="thumbnail-container sold-out">
                            <div class="sold-out-wrap">
                                <span>
                                    <img src="~/assets/image/sample/sold-out.png" alt="품절">
                                </span>
                            </div>
                            <div @click.prevent class="thumbnail-wrap">
                                <div class="thumbnail-area">
                                    <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                                    <img class="center-center">
                                </div>
                                <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                            </div>
                        </div>
                        <!-- 아이템 정보 영역 -->
                        <div class="info-container">
                            <div class="title-main paragraph-ellipsis">
                                [구성상품1] 상품명이 노출됩니다 / [옵션1] : option 1, option 2 / [옵션2] :
                                option1,
                                option 2
                                / [옵션3] : option1, option2
                            </div>
                            <div class="title-sub paragraph-ellipsis">
                                (구성 상품의 설명)
                            </div>
                        </div>
                        <!-- 옵션-드롭다운(조합형) -->
                        <div class="option-dropdown">
                            <!-- 버튼 -->
                            <div class="dropdown-title select-wrap" @click="toggleDropdownActive($event)">
                                <a class="input-select">옵션-조합형</a>
                            </div>
                            <!-- 내용 -->
                            <div class="option-contents">
                                <div class="select-wrap" @click="toggleDropdownActive($event)">
                                    <a class="input-select">옵션-조합형</a>
                                </div>
                                <div class="option-inner">
                                    <div class="dropdown-area">
                                        <button class="option-title" @click="toggleOptionActive($event)">옵션 선택1</button>
                                        <div class="option-item">
                                            <button>옵션1</button>
                                            <button>옵션2</button>
                                            <button>옵션3</button>
                                        </div>
                                    </div>
                                    <div class="dropdown-area">
                                        <button class="option-title" @click="toggleOptionActive($event)">옵션 선택2</button>
                                        <div class="option-item">
                                            <button>옵션1</button>
                                            <button>옵션2</button>
                                            <button>옵션3</button>
                                        </div>
                                    </div>
                                    <div class="dropdown-area">
                                        <button class="option-title" @click="toggleOptionActive($event)">옵션 선택3</button>
                                        <div class="option-item">
                                            <button>옵션1</button>
                                            <button>옵션2</button>
                                            <button>옵션3</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    contentTitle: '',
    optionList: {
        type: Array,
        default() {
            return [];
        },
    },
});


const toggleOptionActive = (e) => {
    const dropdownArea = e.currentTarget.closest('.dropdown-area');
    dropdownArea.classList.toggle('active');
};

const toggleDropdownActive = (e) => {
    const optionDropdown = e.currentTarget.closest('.option-dropdown');
    optionDropdown.classList.toggle('active');
};



</script>
<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list";
</style>