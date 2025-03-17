// plugins/initAuth.js
import { useAuthStore } from '@/stores/auth';

export default defineNuxtPlugin(() => {
    const authStore = useAuthStore();
    authStore.initializeFromCookies(); // 쿠키에서 초기화
});
