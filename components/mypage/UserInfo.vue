<template>
    <div class="mypage-container-top">
        <div class="user-info">
            <p class="user-name"><strong class="user">홍길동님,</strong>안녕하세요!</p>
            <div class="user-grade">
                <div class="grad-wrap">
                    <i class="ico"><img src="~/assets/image/mypage/grade_welcome.svg" alt="WELCOME"></i>
                    <strong>WELCOME</strong>
                </div>
                <span class="divider"></span>
                <span>회원등급별 혜택<i class="arrow"></i></span>
            </div>
        </div>
        <div class="user-benefits">
            <div class="box">
                <NuxtLink to="/mypage/point" class="title"><i class="ico"><img src="~/assets/image/mypage/ico_point.svg"
                            alt="포인트"></i><span>포인트</span><i class="arrow"></i></NuxtLink>
                <p class="amount"><strong>3,000</strong><span class="unit en">P</span></p>
            </div>
            <span class="divider"></span>
            <div class="box">
                <NuxtLink to="/mypage/coupon" class="title"><i class="ico"><img
                            src="~/assets/image/mypage/ico_coupon.svg" alt="쿠폰"></i><span>쿠폰</span><i class="arrow"></i>
                </NuxtLink>
                <p class="amount"><strong>99</strong><span class="unit kr">장</span><span
                        class="able-alert">다운가능쿠폰</span>
                </p>
            </div>
            <span class="divider"></span>
            <div class="box liked-item">
                <NuxtLink to="/mypage/favorite" class="title"><i class="ico"><img
                            src="~/assets/image/mypage/ico_heart.svg" alt="관심상품"></i><span>관심상품</span><i
                        class="arrow"></i></NuxtLink>
                <p class="amount"><strong>6</strong></p>
            </div>
        </div>
        <div class="user-event">
            <i class="ico"></i>
            <strong>이벤트</strong>
            <span>플러스 친구 추가하면 3,000원 쿠폰 증정!</span>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
@use "~/assets/scss/pages/mypage/mypage_main.scss";
</style>