<template>
    <div class="order-non-member-page">
        <layoutHeaderInner title="비회원 약관 동의" type-style="header-detail" type="detail" />
        <h1 class="title-h1 pc">비회원 약관 동의</h1>
        <div class="w-582">
            <div class="induce-login">
                <p>
                    비회원으로 구매하시면 세일즈온에서 드리는 쿠폰할인 및 포인트 적립 혜택을 받으실수 없습니다.<br />
                    또한 비회원 주문시에는 포인트가 지급되지 않습니다.
                </p>
                <div class="btn-wrap gap">
                    <button class="btn btn-primary">주문내역 확인</button>
                    <button class="btn btn-default">쇼핑 계속하기</button>
                </div>
            </div>
            <ul class="terms-content">
                <li class="check-wrap whole-check">
                    <label class="circle-input-checkbox"><input type="checkbox"><i></i>
                        <p class="terms-title">모든 약관 동의</p>
                    </label>
                </li>
                <li class="check-wrap">
                    <label class="circle-input-checkbox"><input type="checkbox"><i></i>
                        <p class="terms-title">이용약관에 동의 <span>(필수)</span></p>
                    </label>
                    <div class="terms-list">

                        <button type="button" class="terms-button">약관보기</button>
                    </div>
                </li>
                <li class="check-wrap">
                    <label class="circle-input-checkbox"><input type="checkbox"><i></i>
                        <p class="terms-title">개인정보의 수집·이용목적 및 항목 동의 <em>(필수)</em></p>
                    </label>
                    <div class="terms-list">

                        <button type="button" class="terms-button">약관보기</button>
                    </div>
                </li>
            </ul>
            <button class="btn btn-round btn-large btn-primary btn-order">주문하기</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);
const toggleActive = () => {
    isActive.value = !isActive.value;
}

</script>
<style lang="scss" scoped>
@use "@/assets/scss/pages/order/order";
</style>