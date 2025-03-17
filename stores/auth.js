import { defineStore } from 'pinia';
import { useCookie } from 'nuxt/app';
import useCryptor from '@/composables/utils/useCryptor.js'

const AUTH_TOKEN_KEY = "saleson.auth.token" ;
const AUTH_USER_KEY = "saleson.auth.user" ;

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        user: null
    }),
    actions: {
        setToken(token) {
            this.token = token;
            const cryptor = useCryptor();
            // 쿠키에 토큰 저장
            const authCookie = useCookie(AUTH_TOKEN_KEY);
            authCookie.value = token;
        },
        setUser(user) {
            const cryptor = useCryptor();
            this.user = user;
            // 쿠키에 토큰 저장
            const userCookie = useCookie(AUTH_USER_KEY);
            userCookie.value = cryptor.encrypt(user);
        },
        clearData() {
            // 쿠키에서 토큰 제거
            const authCookie = useCookie(AUTH_TOKEN_KEY);
            authCookie.value = null;
            this.token = null;

            const userCookie = useCookie(AUTH_USER_KEY);
            userCookie.value = null;
            this.user = null;
        },
        initializeFromCookies() {
            const cryptor = useCryptor();
            const authCookie = useCookie(AUTH_TOKEN_KEY);
            const userCookie = useCookie(AUTH_USER_KEY);

            this.token = authCookie.value;

            console.log('userCookie.value: ', userCookie.value)
            if (userCookie.value) {
                this.user = cryptor.decrypt(userCookie.value);
            }


        },
        isLogin() {
            return !!this.token;
        },

        getUser() {
            return this.user;
        }
    },
});
