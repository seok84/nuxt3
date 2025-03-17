
export default defineNuxtPlugin((nuxtApp) => {
    const category = useCategory();

    // 데이터 로딩 함수
    const initCommonData = async () => {
        await category.fetchCategories();
    };

    // 초기 데이터 로딩
    initCommonData();

    // 라우터 이벤트 리스너
    nuxtApp.vueApp.config.globalProperties.$router.afterEach((to, from) => {
        // 페이지 전환 시 데이터 로딩
        initCommonData();
    });
});
