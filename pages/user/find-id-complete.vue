<template>
    <div class="user-page find-idpw">
        <layout-header-inner type="default" />
        <h1 class="title-h1">아이디 찾기</h1>
        <img src="~/assets/image/common/img_find_id.png" alt="아이디 찾기" class="find-img find-img-id ">
        <p class="sub-title">입력하신 회원 정보로 검색된 아이디입니다.</p>
        <div class="box">
            <p>
                홍길동 회원님의 아이디는<br>
                <strong>dkdlel*******</strong>입니다.
            </p>
        </div>
        <ul class="dot-list">
            <li>전체 아이디 받기시, <em>등록된 회원정보의 휴대전화번호로 메시지</em>가 발송됩니다.</li>
        </ul>
        <div class="btn-wrap gap link-wrap">
            <NuxtLink to="/user/find-pw" class="btn btn-primary link-item">비밀번호 찾기</NuxtLink>
            <button type="button" class="btn btn-default link-item"> 전체 아이디 받기</button>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    name: 'find-id-complete',
    title: '아이디 찾기'
});
</script>
<style lang="scss" scoped>
@use "@/assets/scss/pages/user/user.scss";
</style>