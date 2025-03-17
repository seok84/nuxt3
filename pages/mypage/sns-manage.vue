<template>
    <section class="mypage-sns">
        <div class="title-container">
            <h2 class="title-h2">SNS 연동관리</h2>
        </div>
        <ul class="sns-interlock">
            <li>
                <p><img src="~/assets/image/common/sns_kakao.svg" alt="kakao" class="ico">
                    <span>
                        <strong>카카오</strong><span class="status">{{ $dateFormat(sns.kakao.createdDate) }}</span>
                    </span>
                </p>
                <button type="button" class="switch-btn" :class="{ 'active': sns.kakao.status }"
                    @click="connectSns('kakao', 'connect', sns.kakao.snsUserId)">
                    <span class="circle"></span>
                </button>
            </li>
            <li>
                <p><img src="~/assets/image/common/sns_naver.svg" alt="naver" class="ico">
                    <span>
                        <strong>네이버</strong><span class="status">{{ $dateFormat(sns.naver.createdDate) }}</span>
                    </span>
                </p>
                <button type="button" class="switch-btn" :class="{ 'active': sns.naver.status }"
                    @click="connectSns('naver', 'connect', sns.naver.snsUserId)">
                    <span class="circle"></span>
                </button>
            </li>
            <li>
                <p><img src="~/assets/image/common/sns_apple.svg" alt="apple" class="ico">
                    <span>
                        <strong>애플</strong><span class="status">{{ $dateFormat(sns.apple.createdDate) }}</span>
                    </span>
                </p>
                <button type="button" class="switch-btn" :class="{ 'active': sns.apple.status }"
                    @click="connectSns('apple', 'connect', sns.apple.snsUserId)">
                    <span class="circle"></span>
                </button>
            </li>
        </ul>
        <ul class="dot-list large-dot">
            <li>SNS연결 해제는 'SNS 연동관리' 메뉴 또는 각 SNS 설정에서 가능합니다.</li>
            <li>네이버 / 카카오/ 애플 로그인을 할 때 각 SNS 플랫폼 인증 절차가 필요합니다.</li>
        </ul>
    </section>
</template>
<script setup>
import { reactive} from 'vue';
const { $dateFormat } = useNuxtApp();

definePageMeta({
    layout: 'mypage',
    name: 'mypage-sns',
    title:'SNS 연동관리'
});

const sns = reactive({
    kakao: {
        status: false,
        snsUserId: 0,
        createdDate: "2023-01-01 12:00:00",
    },
    naver: {
        status: false,
        snsUserId: 1,
        createdDate: "2023-01-01 12:00:00",
    },
    apple: {
        status: false,
        snsUserId: 2,
        createdDate: "",
    },
})

const connectSns = (snsType, state, snsUserId) => {
    if (snsType === 'naver') {
            sns.naver.status = !sns.naver.status;
        } else if (snsType === 'kakao') {
            sns.kakao.status = !sns.kakao.status;
        } else if (snsType === 'apple') {
            sns.apple.status = !sns.apple.status;
        }
}


</script>
<style lang="scss">
@use "~/assets/scss/pages/mypage/mypage_myinfo.scss";
</style>