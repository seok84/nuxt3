<template>
    <div>
        <!-- 옵션-드롭다운(선택형) -->
        <div class="option-dropdown">
            <!-- 버튼 -->
            <div class="dropdown-title select-wrap" @click="toggleDropdownActive($event)">
                <a class="input-select">옵션-선택형</a>
            </div>
            <!-- 내용 -->
            <div class="option-contents">
                <div class="select-wrap" @click="toggleDropdownActive($event)">
                    <a class="input-select">옵션-선택형</a>
                </div>
                <div class="option-inner">
                    <div class="dropdown-area">
                        <button class="option-title" @click="toggleOptionActive($event)">옵션
                            선택1</button>
                        <div class="option-item">
                            <button>옵션1</button>
                            <button>옵션2</button>
                            <button>옵션3</button>
                        </div>
                    </div>
                </div>
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
                        <button class="option-title" @click="toggleOptionActive($event)">옵션
                            선택1</button>
                        <div class="option-item">
                            <button>옵션1</button>
                            <button>옵션2</button>
                            <button>옵션3</button>
                        </div>
                    </div>
                    <div class="dropdown-area">
                        <button class="option-title" @click="toggleOptionActive($event)">옵션
                            선택2</button>
                        <div class="option-item">
                            <button>옵션1</button>
                            <button>옵션2</button>
                            <button>옵션3</button>
                        </div>
                    </div>
                    <div class="dropdown-area">
                        <button class="option-title" @click="toggleOptionActive($event)">옵션
                            선택3</button>
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