<template>
    <div class="customer-tab">
        <NuxtLink to="/customer/notice" class="link" :prefetch="true"><span>공지사항</span></NuxtLink> <!-- active 활성화 -->
        <NuxtLink to="/customer/faq" class="link en" :prefetch="true"><span>FAQ</span></NuxtLink>
        <NuxtLink to="/customer/inquiry" class="link" :prefetch="true"><span>1:1문의</span></NuxtLink>
        <NuxtLink to="/customer/partner" class="link" :prefetch="true"><span>제휴/입점문의</span></NuxtLink>
    </div>
</template>
<script setup>
</script>
<style lang="scss">
@use '~/assets/scss/pages/customer/customer_main.scss';
</style>