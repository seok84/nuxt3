<template>
    <div class="category-tab-all">
        <!-- deps1에 클래스 on으로 토글 -->
        <div class="deps1">홈</div>
        <div class="deps1" :class="{ 'on': isDeps1 }" @click="toggleInfoPanel('isDeps1')">
            {{ itemCategoryInfo.categoryName1 }}<i></i>
            <div class="select-wrap">
                <ul class="select-option">
                    <template v-for="(category1, index) of getCategories(0)" :key="index">
                        <li>
                            <NuxtLink to="category1.link">{{ category1.name }}</NuxtLink>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="deps1" :class="{ 'on': isDeps2 }" @click="toggleInfoPanel('isDeps2')">
            {{ itemCategoryInfo.categoryName2 }}<i></i>
            <div class="select-wrap">
                <ul class="select-option">
                    <template v-for="(category2, index) of getCategories(1)" :key="index">
                        <li>
                            <NuxtLink to="category2.link">{{ category2.name }}</NuxtLink>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="deps1" :class="{ 'on': isDeps3 }" @click="toggleInfoPanel('isDeps3')">
            {{ itemCategoryInfo.categoryName3 }}<i></i>
            <div class="select-wrap">
                <ul class="select-option">
                    <template v-for="(category3, index) of getCategories(2)" :key="index">
                        <li>
                            <NuxtLink to="category3.link">{{ category3.name }}</NuxtLink>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// category
const itemCategoryInfo = {
    categoryName1: "1차 카테고리",
    categoryName2: "2차 카테고리",
    categoryName3: "3차 카테고리",
}

const isDeps1 = ref(false);
const isDeps2 = ref(false);
const isDeps3 = ref(false);

const toggleInfoPanel = (panelName) => {
    if (panelName === 'isDeps1') {
        isDeps1.value = !isDeps1.value;
        isDeps2.value = false;
        isDeps3.value = false;

    } else if (panelName === 'isDeps2') {
        isDeps2.value = !isDeps2.value;
        isDeps1.value = false;
        isDeps3.value = false;
    } else if (panelName === 'isDeps3') {
        isDeps3.value = !isDeps3.value;
        isDeps1.value = false;
        isDeps2.value = false;
    }
    this.isVisible = false;
    // this[panelName] = !this[panelName];
};

const getCategories = (index) => {
    if (itemCategoryInfo.value != null && itemCategoryInfo.value.categories) {
        let arr = itemCategoryInfo.value.categories[index];
        if (arr == null || arr.length == 0) {
            arr = null;
        }
        return arr;
    }
    return null;
}

</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list";
</style>