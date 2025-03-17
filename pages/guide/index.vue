<template>
    <div class="guide-page">
        <h1 class="title">가이드 페이지</h1>

        <div class="guide-subtabs">
            <button type="button" class="tab-item" v-for="(tabItem, index) in tabItems"
                :class="[index === tabIndex ? 'active' : '']" @click="tabActive(index)">{{ tabItem }}</button>
        </div>

        <div class="guide-components">
            <component v-bind:is="currentTabComponent" class="tab"></component>
        </div>

    </div>
</template>
<script setup>
import { ref, computed } from "vue";

// components
import GuideForm from "~/components/guide/form.vue";
import GuideButton from "~/components/guide/button.vue";
import GuideText from "~/components/guide/text.vue";
import GuideItem from "~/components/guide/item.vue";
import GuideModal from "~/components/guide/modal.vue";
import GuideLayout from "~/components/guide/layout.vue";
import GuideColor from "~/components/guide/color.vue";

definePageMeta({
    layout: 'default',
    name: 'guide-index',
    title: '가이드 페이지'
});

// 탭
const tabIndex = ref(0);
const tabItems = [ "form","layout", "button", "text", "item", "modal", "color"];
const tabContent = [
    GuideForm,
    GuideLayout,
    GuideButton,
    GuideText,
    GuideItem,
    GuideModal,
    GuideColor,
];

// 현재 활성화된 탭의 컴포넌트
const currentTabComponent = computed(() => tabContent[tabIndex.value]);

// 탭 변경 함수
const tabActive = (index) => {
    tabIndex.value = index;
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";
</style>