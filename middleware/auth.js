export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    console.log('middleware')
    // 토큰이 없는 경우
    if (!authStore.token) {
        // 현재 URI를 쿼리 파라미터로 저장
        return navigateTo({
            path: '/user/login',
            query: { redirect: to.fullPath } // 원래 URI 저장
        });
    }
});