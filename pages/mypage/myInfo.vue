<template>
    <section class="mypage-myInfo">
        <div class="title-container">
            <h2 class="title-h2">내 정보 관리</h2>
        </div>
        <div class="intro user-page">
            <img src="~/assets/image/common/img_find_pw.png" alt="내 정보 관리" class="content-img">
            <p class="content-info">개인정보를 안전하게 보호하기 위해<br class="mobile"> 비밀번호를 다시 한번 입력해 주세요.</p>
            <form action="">
                <div class="form-line">
                    <button type="button" class="show-password-btn" @click="showPassword($event)"></button>
                    <input type="password" class="form-basic" placeholder="비밀번호" />
                    <span class="feedback invalid">유효성 메시지</span>
                </div>
                <button type="button" class="btn btn-primary confirm-btn">확인</button>
            </form>
        </div>
        <div class="content">
            <form action="">
                <!-- 기본정보 -->
                <div class="toggle-title active">
                    <h2>기본정보<span><em>*</em>표시는 필수 입력사항입니다</span></h2>
                    <button class="toggle-arr"></button>
                </div>
                <div class="toggle-content user-page">
                    <!-- //아이디 -->
                    <h3 class="form-title accent">아이디</h3>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="6자~12자 이내 영문, 숫자" readonly />
                        <span class="feedback invalid" style="display:none;">유효성 메시지</span>
                    </div>
                    <!-- //이름 -->
                    <h3 class="form-title  accent">이름</h3>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="이름" readonly />
                        <span class="feedback invalid" style="display:none;">유효성 메시지</span>
                    </div>
                    <!-- //휴대폰번호 -->
                    <h3 class="form-title  accent">휴대폰번호</h3>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="'-'제외 번호 입력" />
                        <span class="feedback invalid" style="display:none;">유효성 메시지</span>
                    </div>
                    <!-- //전화번호 -->
                    <h3 class="form-title  accent">전화번호</h3>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="'-'제외 번호 입력" />
                        <span class="feedback invalid" style="display:none;">유효성 메시지</span>
                    </div>
                    <!-- //이메일 -->
                    <h3 class="form-title  accent">이메일</h3>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="example@company.com" />
                        <span class="feedback invalid" style="display:none;">유효성 메시지</span>
                    </div>
                    <!-- //생년월일 -->
                    <h3 class="form-title  accent">생년월일</h3>
                    <div class="select-wrap gap">
                        <select class="input-select">
                            <option value="">미선택</option>
                            <option value="">셀렉트박스 옵션</option>
                        </select>
                        <select class="input-select">
                            <option value="">미선택</option>
                            <option value="">셀렉트박스 옵션</option>
                        </select>
                        <select class="input-select">
                            <option value="">미선택</option>
                            <option value="">셀렉트박스 옵션</option>
                        </select>
                    </div>
                    <!-- //성별 -->
                    <h3 class="form-title ">성별</h3>
                    <div class="radio-wrap">
                        <label class="input-radio"><input type="radio" name="Gender"><i></i>미선택</label>
                        <label class="input-radio"><input type="radio" name="Gender"><i></i>여성</label>
                        <label class="input-radio"><input type="radio" name="Gender"><i></i>남성</label>
                    </div>
                    <!-- //주소 -->
                    <h3 class="form-title  accent">주소</h3>
                    <div class="form-line mb-10">
                        <div class="flex">
                            <input type="text" class="form-basic" readonly placeholder="기본주소" />
                            <button class="btn btn-black m-w-118">우편번호</button>
                        </div>
                        <span class="feedback invalid" style="display:none;">유효성 메시지</span>
                    </div>
                    <div class="form-line mb-10">
                        <input type="text" class="form-basic" readonly placeholder="상세주소" />
                        <span class="feedback invalid" style="display:none;">유효성 메시지</span>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="기타주소" />
                        <span class="feedback invalid" style="display:none;">유효성 메시지</span>
                    </div>
                </div>
                <!-- //수신동의 -->
                <div class="toggle-title active m-border-top">
                    <h2>수신동의</h2>
                    <button type="button" class="toggle-arr"></button>
                </div>
                <div class="toggle-content user-page accept-content">
                    <div class="wrap">
                        <h4>문자메시지 수신동의</h4>
                        <ul class="dot-list large-dot">
                            <li>수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 SMS(문자메시지)로 받아볼 수 있습니다.</li>
                            <li>회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.</li>
                        </ul>
                        <div class="radio-wrap">
                            <label class="input-radio"><input type="radio" name="message" checked><i></i>수신동의</label>
                            <label class="input-radio"><input type="radio" name="message"><i></i>동의안함</label>
                        </div>
                    </div>
                    <div class="wrap">
                        <h4>이메일 수신동의</h4>
                        <ul class="dot-list large-dot">
                            <li>수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 E-mail(이메일)로 받아볼 수 있습니다.</li>
                            <li>회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.</li>
                        </ul>
                        <div class="radio-wrap">
                            <label class="input-radio"><input type="radio" name="email" checked><i></i>수신동의</label>
                            <label class="input-radio"><input type="radio" name="email"><i></i>동의안함</label>
                        </div>
                    </div>
                    <div class="wrap mobile">
                        <!-- // mobile -->
                        <h4>앱 푸쉬 수신동의</h4>
                        <ul class="dot-list">
                            <li>다양한 특가상품과 개인 맞춤 이벤트 정보를 가장 빠르게 받아볼 수 있습니다.</li>
                        </ul>
                        <div class="radio-wrap">
                            <label class="input-radio"><input type="radio" name="appPush" checked><i></i>수신동의</label>
                            <label class="input-radio"><input type="radio" name="appPush"><i></i>동의안함</label>
                        </div>
                    </div>
                </div>
                <div class="link-wrap">
                    <button type="button" class="btn btn-primary link-item w-half">저장</button>
                    <NuxtLink to="/user/secede" class="btn btn-default link-item w-half">회원탈퇴</NuxtLink>
                </div>
            </form>
        </div>
    </section>
</template>
<script setup>
definePageMeta({
    layout: 'mypage',
    name: 'mypage-myInfo',
    title: '내 정보 관리'
});

</script>
<style lang="scss">
@use "~/assets/scss/pages/mypage/mypage_myinfo.scss";
</style>