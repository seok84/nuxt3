<template>
    <div>
        <aside id="aside-menu">
            <nav class="quick-menu">
                <div class="toggle-area" :class="{ on: isVisible == true }">
                    <NuxtLink to="/mypage" class="menu ico-mypage"><span>마이페이지</span></NuxtLink>
                    <NuxtLink to="/mypage/favorite" class="menu ico-heart"><i
                            class="number">1004</i><span>관심상품</span></NuxtLink>
                    <NuxtLink to="/mypage/recent" class="menu ico-recent"><i>10</i><span>최근 본 상품</span></NuxtLink>
                    <NuxtLink to="/" class="menu ico-talk"><span>1:1문의</span></NuxtLink>
                </div>
                <button type="button" class="btn-toggle" v-if="isVisible == true" @click="isVisible = !isVisible">
                    접기
                </button>
                <button type="button" class="btn-toggle" v-if="isVisible == false" @click="isVisible = !isVisible">
                    열기
                </button>
            </nav>

            <button type="button" class="btn-top" @click="topScroll">TOP</button>
        </aside>

    </div>
</template>

<script setup>
import { ref } from 'vue';
const isVisible = ref(true);

const topScroll = () =>{
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/layout/aside.scss";
</style>