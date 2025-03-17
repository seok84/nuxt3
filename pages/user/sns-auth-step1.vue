<template>
    <div class="sns-auth-page step1">
        <layout-header-inner type="default" />
        <h1 class="title-h1">회원가입</h1>
        <p class="title-auth">SNS 인증</p>

        <div class="sns-auth-wrap">
            <button>
                <div class="img-wrap"><img src="~/assets/image/ico/ico_sns_kakao.svg" alt="kakao"></div>
                <p>카카오톡</p>
            </button>
            <button>
                <div class="img-wrap"><img src="~/assets/image/ico/ico_sns_naver.svg" alt="naver"></div>
                <p>네이버</p>
            </button>
            <button>
                <div class="img-wrap"><img src="~/assets/image/ico/ico_sns_apple.svg" alt="apple"></div>
                <p>애플</p>
            </button>
        </div>

        <button type="button" class="btn btn-default btn-prev">이전으로</button>
    </div>
</template>

<script setup>
definePageMeta({
    name: 'sns-auth-step1',
    title: 'SNS 인증'
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/user/user.scss";
</style>
