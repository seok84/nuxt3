<template>
    <div class="user-page find-idpw">
        <layout-header-inner type="default" />
        <h1 class="title-h1">비밀번호 찾기</h1>
        <img src="~/assets/image/common/img_find_pw.png" alt="비밀번호 찾기" class="find-img">
        <p class="sub-title">임시 비밀번호가 발송 되었습니다.</p>
        <div class="link-wrap">
            <NuxtLink to="/user/login" class="btn btn-primary link-item w-half">로그인</NuxtLink>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    name: 'find-password-complete',
    title: '비밀번호 찾기'
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/user/user.scss";
</style>
