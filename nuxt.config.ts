export default defineNuxtConfig({
    runtimeConfig: {

        public: {
            frontUrl: process.env.FRONT_URL || 'http://localhost:3000',
            apiUrl: process.env.API_URL || 'http://localhost:7080',
            aesSecret: process.env.AES_SECRET || 'xHyU0GrPCB4Jr5mEXT3TfrNhqp0wpWNl'
        },

    },
    devtools: { enabled: true },
    css: [
        '~/assets/scss/common.scss',
        'swiper/css',
        'swiper/css/navigation'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/variables.scss" as *;'
                }
            }
        }
    },
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/device',
        '@nuxt/icon',
        '@pinia/nuxt',
    ],
    googleFonts: {
        families: {
            Roboto: true, // 사용하고자 하는 폰트 추가
            'Open Sans': [300, 400, 600], // 원하는 두께를 지정할 수 있음
        },
    },
    build: {
        transpile: ['swiper'],
        cache: true // 기본 캐시 활성화
    },
    compatibility: {
        bridge: false
    },
    serverMiddleware: [
        { path: '/healthcheck', handler: '~/server/middleware/healthcheck.js' }
    ],
    plugins: [
        { src: "~/plugins/common.js", mode: "client" },
        { src: "~/plugins/vee-validate-rule.js", mode: "client" },
        { src: "~/plugins/form-utils.js", mode: "client" },
        { src: "~/plugins/init-common-data.js"},
        { src: "~/plugins/init-auth.js"},
    ],
    veeValidate: {
        autoImports: true,
        componentNames: {
            Form: 'VeeForm',
            Field: 'VeeField',
            FieldArray: 'VeeFieldArray',
            ErrorMessage: 'VeeErrorMessage',
        },
    },
    compatibilityDate: '2025-02-04',


    options: {
        // PostCSS 설정 추가
        postcss: {
            plugins: {
                autoprefixer: {},
            }
        }
    }
})