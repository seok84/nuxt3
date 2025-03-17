<template>
    <div class="user-page join-complete">
        <layout-header-inner type="default" />
        <h1 class="title-h1">회원가입</h1>
        <p class="sub-title">
            <em>세일즈온 스토어</em> 회원가입이<br class="mobile" /> 완료되었습니다.
        </p>
        <p class="user-page-info">
            세일즈온에 가입해 주셔서 감사합니다.<br />
            고객님께서 만족스러운 쇼핑을 하실 수 있도록 노력하겠습니다.<br class="pc" />
            지금부터 세일즈온에서 고객님만의 특별한 혜택을 누리세요.<br />
        </p>
        <div class="link-wrap gap">
            <NuxtLink to="/" class="btn btn-primary-line link-item">메인화면</NuxtLink>
            <NuxtLink to="/user/login" class="btn btn-default btn-primary link-item">로그인</NuxtLink>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    name: 'join-complete',
    title: '회원가입'
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/user/user.scss";
</style>
