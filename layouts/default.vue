<template>
    <div class="content-inner">
        <slot />
    </div>
    <layout-footer />
    <layout-aside />
</template>
<script setup>
    import { useRoute } from 'vue-router';
    import { ref, computed, watchEffect } from 'vue';
    
    const route = useRoute();
    const pageName = ref(route.name);
    const pageMetaTitle = ref(route.meta.title); // 모바일 노출 타이틀

    watchEffect(() => {
        pageName.value = route.name;
        pageMetaTitle.value = route.meta.title;
    });

    //메인 페이지에서만 탑배너 노출
    const pageClass = computed(() => {
        return {
            'show-banner': pageName.value === 'index',
            'show-lnb': ['index', 'featured-index'].includes(pageName.value)
        };
    });

    // #### 페이지별 헤더 노출 조정
    // pageback :: page back button show
    // brand :: brand(logo) show
    // page-title :: page title show
    // searching :: searching-area show
    // basket :: basket ico show
    // quicklink :: quick-link show
    
    /*/
    const defaultHeader = 'pageback page-title basket';
    const type01Header = 'brand searching basket quicklink';
    const type02Header = 'pageback searching basket';
    const type03Header = 'pageback brand searching basket';
    const defaultHeader = 'header-detail';
    const type01Header = 'header-default';
    const type02Header = 'header-search';
    const type03Header = 'header-detail';

    const headerMobileStyle = computed(() => {
        if(['index', 'featured-index', 'item-index', 'display-best', 'display-md', 'display-new', 'display-timedeal', 'display-brand-index','display-brand-item'].includes(pageName.value)) {
            return type01Header;
        } else if(pageName.value === 'items-detail'){
            return type02Header;
        } else if(pageName.value === 'search-index'){
            return type03Header;
        } else{
            return defaultHeader;
        }
    });

    return {
        //모바일
        pageClass, //메인 구분
        headerMobileStyle, // 헤더 스타일
        pageMetaTitle // 헤더 타이틀
    };
    
    */
</script>