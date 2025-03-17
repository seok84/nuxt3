import { useSalesonApi } from '@/composables/api/useSalesonApi.js';
import CryptoJS from 'crypto-js';
import {PAGES} from '@/utils/constants/const.js'

export const useAuth = () => {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const salesonApi = useSalesonApi();

    const login = async (loginRequest) => {
        try {
            let hmacMessage = JSON.stringify(loginRequest);
            let hash = CryptoJS.HmacSHA256(hmacMessage, config.public.apiUrl);
            const hmac = CryptoJS.enc.Base64.stringify(hash);

            const hmacHeader = {
                Hmac: hmac
            }
            const response = await salesonApi.post('/api/auth/token', loginRequest, hmacHeader);

            // 토큰을 Pinia 상태와 쿠키에 저장
            authStore.setToken(response.token);

            // 사용자 정보 조회
            await fetchUserInfo();

            return response;
        } catch (error) {
            console.error('로그인 실패:', error);
            return false;
        }
    };

    const fetchUserInfo = async () => {
        try {
            const user = await salesonApi.get('/api/auth/auth-me');


            console.log('auth-me: ', user);
            authStore.setUser(user); // 사용자 정보 저장
        } catch (error) {
            console.error('사용자 정보 조회 실패:', error);
        }
    };

    const logout = () => {
        authStore.clearData();

        const router = useRouter();

        router.push('/')


    };

    const isLogin = () => {
        return authStore.isLogin();
    };

    const getUser = () => {
        return authStore.getUser();
    }

    return { login, logout, isLogin, fetchUserInfo, getUser };
};
