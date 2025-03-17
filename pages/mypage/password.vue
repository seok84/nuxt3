<template>
    <section class="mypage-password">
        <div class="title-container">
            <h2 class="title-h2">비밀번호 변경</h2>
        </div>
        <form action="">
            <div class="user-page find-idpw">
                <h3 class="form-title">현재 비밀번호</h3>
                <div class="form-line">
                    <button type="button" class="show-password-btn" @click="showPassword($event)"></button>
                    <input type="password" class="form-basic" placeholder="사용중인 비밀번호" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <h3 class="form-title">변경할 비밀번호</h3>
                <div class="form-line">
                    <button type="button" class="show-password-btn" @click="showPassword($event)"></button>
                    <input type="password" class="form-basic" placeholder="변경할 비밀번호" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <h3 class="form-title">변경할 비밀번호 재입력</h3>
                <div class="form-line">
                    <button type="button" class="show-password-btn" @click="showPassword($event)"></button>
                    <input type="password" class="form-basic" placeholder="변경할 비밀번호 재입력" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="link-wrap">
                    <button type="button" class="btn btn-primary confirm-btn">확인</button>
                </div>
            </div>
        </form>
    </section>
</template>
<script setup>

definePageMeta({
    layout: 'mypage',
    name: 'mypage-password',
    title:'비밀번호 변경'
});


</script>
<style lang="scss">
@use "~/assets/scss/pages/mypage/mypage_myinfo.scss";
</style>