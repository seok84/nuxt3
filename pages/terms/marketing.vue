<template>
    <section class="terms">
        <layoutHeaderInner title="마케팅 수신동의" type-style="header-default" type="default" />
        <div class="title-h1">마케팅 수신동의</div>
        <termsTab></termsTab>
        <div class="container">
            <div class="select-wrap">
                <form>
                    <select class="input-select" @change="setTermsContent" v-model="selectedPolicyContent">
                        <option v-for="(policy, index) in policies" :key="index" :value="policy.content">
                            {{ policy.title }}
                        </option>
                    </select>
                </form>
            </div>
            <div v-html="termsContent" class="terms-content-wrap"></div>
        </div>
    </section>
</template>
<script setup>
    import {ref, onMounted} from 'vue'

    definePageMeta({
        name:'terms-marketing',
        title:'마케팅수신동의'
    });

    const termsContent = ref('관리자단에서 입력한 내용이 노출되는 영역입니다.');
    const selectedPolicyContent = ref('');
    const policies = ref([
        {
            title: "마케팅 수신 이용약관 변경 2025-02-27",
            content: "마케팅 수신 이용약관 변경 2025-02-27 마케팅 수신 이용약관 변경 2025-02-27"
        },
        {
            title: "마케팅 수신 이용약관 변경 2024-12-31",
            content: "마케팅 수신 이용약관 변경 2024-12-31 마케팅 수신 이용약관 변경 2024-12-31"
        },
    ]);

    const setTermsContent = (event) => {
        termsContent.value = event.target.value;
    }

    onMounted(()=>{
        selectedPolicyContent.value = policies.value[0].content;
        termsContent.value = policies.value[0].content;
    })
</script>
<style lang="scss">
@use '~/assets/scss/pages/terms/terms_main.scss';
</style>