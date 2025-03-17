<template>
    <div>
        <footer id="footer">
            <div class="pc">
                <div class="link-area">
                    <section class="flex">
                        <div class="col-left">
                            <NuxtLink to="/">회사소개</NuxtLink>
                            <NuxtLink to="/customer/notice">공지사항</NuxtLink>
                            <NuxtLink to="/customer/notice">고객센터</NuxtLink>
                            <NuxtLink to="/terms/terms">이용약관</NuxtLink>
                        </div>
                        <div class="col-right">
                            <NuxtLink to="/terms/policy">개인정보처리방침</NuxtLink>
                            <NuxtLink to="/customer/partner">제휴/입점문의</NuxtLink>
                            <NuxtLink to="/terms/refuseEmail">이메일수집거부</NuxtLink>
                            <NuxtLink to="/customer/faq">자주하는 질문</NuxtLink>
                            <NuxtLink to="/customer/inquiry">1:1문의</NuxtLink>
                        </div>
                    </section>
                </div>
                <section class="footer-info">
                    <div class="footer-brand">
                        <img src="~/assets/image/common/brand.svg" alt="세일즈온">
                    </div>

                    <div class="cs-center">
                        <div class="cs-tel">
                            고객센터
                            <a class="tel" href="tel:02-6737-9200">02-6737-9200</a>
                        </div>
                        <p class="cs-time">
                            평일 AM 09:00 ~ PM 06:00 (점심 PM 12:00 ~ PM 01:00)<br>
                            주말 및 공휴일은 휴무입니다.
                        </p>
                    </div>

                    <div class="info">
                        <p class="company">온라인파워스㈜ 사업자정보</p>
                        <p class="business-info">
                            <span class="owner">대표이사 : 배동혁,박종진</span>
                            <span class="business-number">사업자등록번호 : 123-12-12345</span>
                            <span class="business-type">통신판매신고번호 : 2012-서울구로-00989</span>
                            <NuxtLink to="/">사업자정보 확인</NuxtLink>
                        </p>
                        <p class="company-info">
                            <span class="address">
                                주소 : 서울 구로구 디지털로 27길 24(벽산디지털밸리 1차) 711호
                            </span>
                            <span class="security">
                                개인정보 보호책임자 : 운영자
                                <a href="mailto: E-mail : solah@daesang.com">E-mail : solah@daesang.com</a>
                            </span>
                        </p>
                        <p class="copyright">COPYRIGHT © ONLINEPOWERS. All rights reserved.</p>
                    </div>
                </section>
            </div>

            <div class="mobile">
                <div class="link-area">
                    <NuxtLink to="/">회사소개</NuxtLink>
                    <NuxtLink to="/customer/notice">공지사항</NuxtLink>
                    <NuxtLink to="/customer/notice">고객센터</NuxtLink>
                    <NuxtLink to="/terms/terms">이용약관</NuxtLink>
                </div>

                <div class="cs-center">
                    <div class="cs-tel">
                        고객센터
                        <a class="tel" href="tel:02-6737-9200">02-6737-9200</a>
                    </div>
                    <p class="cs-time">
                        평일 AM 09:00 ~ PM 06:00 (점심 PM 12:00 ~ PM 01:00)<br>
                        주말 및 공휴일은 휴무입니다.
                    </p>
                </div>

                <div class="info">
                    <div class="mobile">
                        <div class="footer-brand">
                            <img src="~/assets/image/common/brand.svg" alt="세일즈온">
                        </div>
                    </div>
                    <p class="company" :class="{ 'on': toggleFooterContent }"
                        @click="toggleFooterContent = !toggleFooterContent">온라인파워스㈜ 사업자정보</p>
                    <p class="business-info toggle-footer-info">
                        <span class="owner">대표이사 : 배동혁,박종진</span>
                        <span class="business-number">사업자등록번호 : 123-12-12345</span>
                        <span class="business-type">통신판매신고번호 : 2012-서울구로-00989</span>
                        <NuxtLink to="/">사업자정보 확인</NuxtLink>
                    </p>
                    <p class="company-info  toggle-footer-info">
                        <span class="address">
                            주소 : 서울 구로구 디지털로 27길 24(벽산디지털밸리 1차) 711호
                        </span>
                        <span class="security">
                            개인정보 보호책임자 : 운영자
                            <a href="mailto: E-mail : solah@daesang.com">E-mail : solah@daesang.com</a>
                        </span>
                    </p>
                </div>

                <div class="link-area bottom">
                    <NuxtLink to="/">개인정보처리방침</NuxtLink>
                    <NuxtLink to="/">제휴/입점문의</NuxtLink>
                    <NuxtLink to="/">이메일수집거부</NuxtLink>
                    <NuxtLink to="/">자주하는 질문</NuxtLink>
                    <NuxtLink to="/">1:1문의</NuxtLink>
                </div>
                <p class="copyright">COPYRIGHT © ONLINEPOWERS. All rights reserved.</p>
            </div>

        </footer>

        <LayoutMobileGnb v-if="showMobileGnb"></LayoutMobileGnb>

    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const showMobileGnb = ref(true);
const route = useRoute();
const toggleFooterContent = ref(false);

console.log("route :: ", route.name)
const toggleMobileGNB = () => {
    showMobileGnb.value = !(route.name === 'order' || route.name === 'cart' || route.name === 'items-detail' || route.name === 'items-_id');
};


watchEffect(toggleMobileGNB);
</script>



<style lang="scss" scoped>
@use "@/assets/scss/pages/layout/footer.scss";
</style>