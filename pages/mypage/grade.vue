<template>
    <section class="mypage-grade">
        <div class="title-container">
            <h2 class="title-h2">나의 등급/혜택</h2>
        </div>
        <div class="grade-info">
            <p class="grade-ico"><img src="~/assets/image/mypage/grade_family.svg" alt="패밀리 등급" class="ico"></p>
            <div class="info">
                <span>고객님의 회원 등급은</span>
                <strong>FAMILY</strong>
                <i class="tooltip-handler liner" @click="toggleTooltip">?</i>
                <div :class="{ 'tooltip-wrap': true, active: isTooltipActive }">
                    <div class="dimmed-bg" @click="closeTooltip"></div>
                    <div class="text-center tooltip-content tooltip-delivery" @click="closeTooltip">
                        <p class="tooltip-tit">판매자 조건부 무료배송</p>
                        <p class="txt2">판매자 상품 30,000원 이상 구매 시 무료,<br />
                            30,000원 미만 구매 시 2,500원 부과 </p>
                        <p class="txt1">제주/도서산간</p>
                        <p class="txt2">제주 2,500원 추가 / 도서산간 2,500원 추가</p>
                    </div>
                </div>
            </div>
            <p class="benefits">구매 시 3% 할인, 구매시 적립 0.5%</p>
            <ul class="coupon-list">
                <li>
                    <div class="item">
                        <div class="price-area product">
                            <span class="number"><em>+1</em></span>
                        </div>
                        <div class="tag-area product"></div>
                    </div>
                    <p class="desc">2,000원 쿠폰 1장</p>
                    <p class="condition">(7만원 이상 구매 시 사용)</p>
                </li>
                <li>
                    <div class="item">
                        <div class="price-area product">
                            <span class="number"><em>+1</em></span>
                        </div>
                        <div class="tag-area product"></div>
                    </div>
                    <p class="desc">3,000원 쿠폰 1장</p>
                    <p class="condition">((10만원 이상 구매 시 사용)</p>
                </li>
                <li>
                    <div class="item">
                        <div class="price-area delivery">
                            <span class="number"><em>+1</em></span>
                        </div>
                        <div class="tag-area delivery"></div>
                    </div>
                    <p class="desc">배송비 쿠폰 1장</p>
                    <p class="condition">(도서산간 제외)</p>
                </li>
            </ul>
        </div>
        <p class="page-sub-title">회원 등급 혜택</p>
        <!-- pc -->
        <table class="grade-table grade-content">
            <colgroup>
                <col width="13.5%">
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <thead>
                <tr class="bg">
                    <th></th>
                    <th>
                        <p class="grade"><img src="~/assets/image/mypage/grade_family.svg"
                                alt="family"><strong>family</strong></p>
                    </th>
                    <th>
                        <p class="grade"><img src="~/assets/image/mypage/grade_gold.svg" alt="gold"><strong>gold</strong>
                        </p>
                    </th>
                    <th>
                        <p class="grade"><img src="~/assets/image/mypage/grade_premium.svg"
                                alt="premium"><strong>premium</strong></p>
                    </th>
                    <th>
                        <p class="grade"><img src="~/assets/image/mypage/grade_vip.svg" alt="vip"><strong>vip</strong></p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="desc">
                    <th class="bold">할인</th>
                    <td>3%</td>
                    <td>5%</td>
                    <td>7%</td>
                    <td>10%</td>
                </tr>
                <tr class="desc">
                    <th class="bold">구매적립</th>
                    <td>0.5%</td>
                    <td>1%</td>
                    <td>2%</td>
                    <td>3%</td>
                </tr>
                <tr class="desc">
                    <th class="bold">쿠폰혜택</th>
                    <td>배송비 쿠폰 1장<br>상품 쿠폰 1장</td>
                    <td>배송비 쿠폰 1장<br>상품 쿠폰 1장</td>
                    <td>배송비 쿠폰 1장<br>상품 쿠폰 1장</td>
                    <td>배송비 쿠폰 1장<br>상품 쿠폰 1장</td>
                </tr>
            </tbody>
        </table>
        <!-- mobile -->
        <div class="grade-list grade-content">
            <dl>
                <dt class="bg">
                    <p class="grade"><img src="~/assets/image/mypage/grade_family.svg" alt="family"><strong>family</strong>
                    </p>
                </dt>
                <dd class="desc">5%</dd>
                <dd class="desc">1%</dd>
                <dd class="desc">배송비 쿠폰 1장<br />상품 쿠폰 1장</dd>
            </dl>
            <dl>
                <dt class="bg">
                    <p class="grade"><img src="~/assets/image/mypage/grade_gold.svg" alt="gold"><strong>gold</strong></p>
                </dt>
                <dd class="desc">5%</dd>
                <dd class="desc">1%</dd>
                <dd class="desc">배송비 쿠폰 1장<br />상품 쿠폰 1장</dd>
            </dl>
            <dl>
                <dt class="bg">
                    <p class="grade"><img src="~/assets/image/mypage/grade_premium.svg"
                            alt="premium"><strong>premium</strong></p>
                </dt>
                <dd class="desc">5%</dd>
                <dd class="desc">1%</dd>
                <dd class="desc">배송비 쿠폰 1장<br />상품 쿠폰 1장</dd>
            </dl>
            <dl>
                <dt class="bg">
                    <p class="grade"><img src="~/assets/image/mypage/grade_vip.svg" alt="vip"><strong>vip</strong></p>
                </dt>
                <dd class="desc">5%</dd>
                <dd class="desc">1%</dd>
                <dd class="desc">배송비 쿠폰 1장<br />상품 쿠폰 1장</dd>
            </dl>
        </div>
        <ul class="dot-list large-dot">
            <li class="title">회원 등급 선정 기준 및 혜택 이용안내</li>
            <li>회원등급은 등급산정일로부터 6개월간의 구매확정 된 구매실적을 기준으로 산정됩니다.</li>
            <li>구매실적은 쿠폰, 포인트 등을 할인적용한 후의 최종 결제 금액을 기준으로 산정됩니다.</li>
            <li>적립은 '상품 적립', '등급 별 추가 적립'순으로 적립됩니다.</li>
            <li>쿠폰은 등급 변경 후 매월 1일 00:00 시에 적립됩니다.</li>
            <li>회원 등급, 쿠폰, 포인트 이용에 대한 궁금하신 사항은 고객센터의 FAQ를 참고해 주시기 바랍니다.</li>

        </ul>
    </section>
</template>
<script setup>
import { ref } from 'vue'
definePageMeta({
    layout: 'mypage',
    name: 'mypage-grade',
    title:'나의 등급/혜택'
});

const isTooltipActive = ref(false)

const showModalCoupon = () => {
    document.querySelector('.modal-coupon').classList.add('show')
}

const hideModal = (e) => {
    e.target.closest('.modal').classList.remove('show')
}

const toggleTooltip = () => {
    isTooltipActive.value = !isTooltipActive.value
}

const closeTooltip = () => {
    isTooltipActive.value = false
}

</script>
<style lang="scss">
@use "~/assets/scss/pages/mypage/mypage_grade.scss";
</style>