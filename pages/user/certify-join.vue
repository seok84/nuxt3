<template>
    <div class="user-page">
        <h1 class="title-h1">회원가입</h1>
        <p class="user-page-info">원하시는 회원가입 방법을 선택해주세요.<br />
            <strong>세일즈온 스토어</strong> 회원이 되시면 쿠폰 등 다양한<br class="mobile" /> 혜택을 받으실 수 있습니다.
        </p>
        <div class="join-type">
            <NuxtLink to="/user/sns-auth-step1" class="box">
                <span class="ico sns-join"></span>
                <p>
                    <span class="type-title">SNS 회원가입</span>
                    <span class="desc">보유하신 SNS계정으로<br class="pc">인증하실 수 있습니다.</span>
                </p>
            </NuxtLink>
            <NuxtLink to="/user/join" class="box">
                <span class="ico normal-join"></span>
                <p>
                    <span class="type-title">일반 회원가입</span>
                    <span class="desc">고객님의 휴대폰 및 I-PIN(아이핀)<br class="pc">인증을<br class="mobile" /> 하실 수 있습니다.</span>
                </p>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    name: 'certify-join',
    title: '회원가입'
});
</script>
<style lang="scss" scoped>
@use "@/assets/scss/pages/user/user.scss";
</style>