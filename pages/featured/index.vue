<template>
    <div class="featured featured-index">
        <layoutHeaderInner title="이벤트" type-style="header-detail" type="detail" />
        <h1 class="title-h1">이벤트</h1>
        <div class="container">
            <div class="sort-wrap">
                <div class="all-items">총 <strong>123</strong>개 상품</div>
            </div>
            <ul class="event-list">
                <li class="event-item" v-for="(event, index) in events" :key="index">
                    <NuxtLink :to="event.to">
                        <div class="event-thumbnail">
                            <span class="label progress" v-if="event.progress">Event</span>
                            <span class="label closed" v-else>종료</span>
                            <div class="dimmed" v-if="!event.progress"></div>
                            <img :src="event.thumbnail.src" :alt="event.thumbnail.alt">
                        </div>
                        <div class="event-info">
                            <strong class="title">{{ event.info.title }}</strong>
                            <span class="sub" v-if="event.info.sub">{{ event.info.sub }}</span>
                            <span class="date">{{ event.info.date }}</span>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
            <uiPagination />
        </div>
    </div>
</template>
<script setup>

definePageMeta({
    name: 'featured-index',
    title: '이벤트 페이지'
});

const events = reactive([
    {
        id: 1,
        to: '/featured/pages/1',
        thumbnail: {
            src: '_nuxt/assets/image/sample/no_content_720480.png',
            alt: '간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스',
        },
        info: {
            title: '간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스',
            sub: '',
            date: '2023.06.04 ~ 2023.06.30'
        },
        progress: false,

    },
    {
        id: 2,
        to: '/featured/pages/2',
        thumbnail: {
            src: '_nuxt/assets/image/sample/no_content_720480.png',
            alt: '당신이 사랑하는 카페, 한 여름날의 홈카페',
        },
        info: {
            title: '당신이 사랑하는 카페, 한 여름날의 홈카페',
            sub: '좋아하는 음악 한 곡을 틀어놓고, 좋아하는 잔을 선택해 기분에 어울리는 커피 한 잔',
            date: '2023.06.04 ~ 2023.06.30'
        },
        progress: true
    },
    {
        id: 3,
        to: '/featured/pages/3',
        thumbnail: {
            src: '_nuxt/assets/image/sample/sample_01.png',
            alt: '간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스',
        },
        info: {
            title: '간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스',
            sub: '',
            date: '2023.06.04 ~ 2023.06.30'
        },
        progress: true,

    },
    {
        id: 4,
        to: '/featured/pages/4',
        thumbnail: {
            src: '_nuxt/assets/image/sample/sample_02.png',
            alt: '간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스',
        },
        info: {
            title: '간편하게 하나로 완성하는 스타일, 미쏘 썸머드레스',
            sub: '',
            date: '2023.06.04 ~ 2023.06.30'
        },
        progress: false
    }
]);
</script>

<style lang="scss">
@use '~/assets/scss/pages/featured/featured';
</style>