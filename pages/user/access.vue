<template>
    <div class="user-page access-container">
        <h2 class="title"><em>세일즈 온</em> 접근 권한 안내</h2>
        <p class="sub">더 나은 <strong>세일즈온 서비스</strong> 사용을 위해<br />
            다음 권한의 허용이 필요합니다.</p>
        <ul class="access-list">
            <li>
                <img src="~/assets/image/ico/ico_access_01.png" alt="카메라">
                <div>
                    <p class="list-title"><strong>카메라(선택)</strong></p>
                    <p>1:1문의 및 후기작성 시 <strong>카메라 촬영</strong>을<br /> 위한 권한</p>
                </div>
            </li>
            <li>
                <img src="~/assets/image/ico/ico_access_02.png" alt="사진 파일 및 미디어(선택)">
                <div>
                    <p class="list-title"><strong>사진 파일 및 미디어(선택)</strong></p>
                    <p>1:1문의 및 후기작성 시 <strong>사진첨부</strong>을<br /> 위한 권한</p>
                </div>
            </li>
            <li>
                <img src="~/assets/image/ico/ico_access_03.png" alt="푸쉬(선택)">
                <div>
                    <p class="list-title"><strong>푸쉬(선택)</strong></p>
                    <p><strong>마케팅 알림</strong>을 위한 권한</p>
                </div>
            </li>
        </ul>
        <ul class="dot-list">
            <li>서비스 제공에 접근 권한이 필요한 경우에만 동의를 받고 있으며,
                비허용시에도 서비스 이용이 가능합니다.</li>
            <li>‘휴대폰 설정 &gt; 세일즈온’에서 각 권한 별 변경이 가능합니다.</li>
        </ul>
        <button type="button" class="btn btn-primary btn-round btn-large">확인</button>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'sub',
    name: 'access',
});
</script>
<style lang="scss" scoped>
@use "@/assets/scss/pages/user/user.scss";
</style>