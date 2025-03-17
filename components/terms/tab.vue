<template>
    <div class="terms-lnb">
        <NuxtLink to="/terms/terms" class="link"><span>이용약관</span></NuxtLink> <!-- active 활성화 -->
        <NuxtLink to="/terms/policy" class="link en"><span>개인정보<br class="mobile">처리방침</span></NuxtLink>
        <NuxtLink to="/terms/refuseEmail" class="link"><span>이메일<br class="mobile">수신거부</span></NuxtLink>
        <NuxtLink to="/terms/marketing" class="link"><span>마케팅<br class="mobile">수신동의</span></NuxtLink>

    </div>
</template>
<script  setup>
</script>
<style lang="scss">
@use '~/assets/scss/pages/terms/terms_main.scss';
</style>