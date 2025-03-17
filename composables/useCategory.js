import { useSalesonApi } from '@/composables/api/useSalesonApi.js';
import CryptoJS from 'crypto-js';
import {PAGES} from '@/utils/constants/const.js'

export const useCategory = () => {
    const config = useRuntimeConfig();
    const categoryStore = useCategoryStore();
    const salesonApi = useSalesonApi();

    const fetchCategories = async () => {

        try {
            // 라우터 이동시 계속 조회하지 않고 캐시 처리함.
            const cacheMinutes = 2; // 분
            const cacheDuration = cacheMinutes * 60 * 1000; // 2분 캐시 시간 (밀리초 단위)
            const now = new Date().getTime();

            // 마지막으로 데이터를 가져온 시간이 캐시 시간 내에 있는지 확인합니다.
            if (categoryStore.getCategories().length > 0 && categoryStore.getLastFetch() && (now - categoryStore.getLastFetch() < cacheDuration)) {
                console.log('[store/category] 카테고리 정보를 ' + cacheMinutes + '분간 조회하지 않음.');
                return;
            }

            categoryStore.setLastFetch(now);

            // 카테고리 정보가 변경되었는지 조회
            const data = await salesonApi.get("/api/category/updated-check", {d: categoryStore.getUpdatedDate()});

            console.log('data: ', data);

            if (categoryStore.getCategories().length === 0 || data.categoryUpdateFlag) {
                const data = await salesonApi.get("/api/category")

                // 카테고리 세팅.
                categoryStore.setCategories(data.list);
                categoryStore.setUpdatedDate(data.updatedDate);
                categoryStore.setLastFetch(now);
            }
        } catch (error) {

            console.log('[store/category] 카테고리 데이터를 가져오는 중 오류 발생:', error);
        }
    }



    return { fetchCategories };
};
