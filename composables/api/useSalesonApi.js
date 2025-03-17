//import { useAuthStore } from '@/stores/auth';


export const useSalesonApi = () => {
    const authStore = useAuthStore();
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiUrl;

    // 공통 API 호출 로직
    const callApi = async (uri, method, params, addHeaders) => {
        try {
            const headers = {...addHeaders};
            // 토큰이 있는 경우 Authorization 헤더 추가
            if (authStore.token) {
                headers.Authorization = `Bearer ${authStore.token}`;
            }

            let requestData = {
                method: method,
                headers: {
                    ...headers, // 조건부로 추가된 헤더
                    'Content-Type': 'application/json', // 필요 시 Content-Type 추가
                }
            }

            if (params) {
                if (method === 'POST') {
                    requestData.body = params;
                } else {
                    requestData.params = params;
                }
            }

            const response = await $fetch(baseUrl + uri, requestData);

            console.log('response: ', response);
            return response;
        } catch (error) {
            console.error(`${method} 요청 실패:`, error);
            throw error; // 에러를 호출자에게 전달
        }
    };

    const api = {
        // GET 요청 메서드
        get: async (uri, params = {}, addHeaders = {}) => {
            return await callApi(uri, 'GET', params, addHeaders); // 공통 로직 사용
        },

        // POST 요청 메서드
        post: async (uri, requestBody, addHeaders = {}) => {
            return await callApi(uri, 'POST', requestBody, addHeaders); // 공통 로직 사용
        },
    };

    return api; // 객체 반환
};
