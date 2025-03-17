import { useRuntimeConfig, useAsyncData } from '#app';

export const useSampleData = (uri) => {
    const config = useRuntimeConfig();

    const key = `sample-data-${uri.replace(/\//g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`;

    const { data, error } = useAsyncData(key, async () => {
        try {
            const fetchUrl = `${config.public.frontUrl}${uri}`;
            const response = await $fetch(fetchUrl);
            console.log('Fetched data:', response); // 응답 확인
            return response;
        } catch (err) {
            console.error('Fetch error:', err);
            return null;
        }
    });

    return data;
};