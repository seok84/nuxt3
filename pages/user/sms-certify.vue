<template>
    <div class="user-page">
        <layout-header-inner type="default" />
        <h1 class="title-h1">회원가입</h1>
        <Form :validation-schema="formSchema" :initial-values="initialVals" @submit.prevent="handleFormSubmit">
            <formInputText inputTitle="SMS인증" inputType="text" inputName="userName" addedClass="mb-10"
                placeholder="이름을 입력해주세요" :showRequired="false" />
            <formInputAction inputName="phoneNumber" placeholder="휴대폰 번호를 입력해주세요" addedClass="mb-10"
                :content="form.authRequest ? '인증요청' : '재전송'" @emitMethods="actionTest('test')" />
            <formInputAction inputName="authNumber" placeholder="인증번호를 입력해주세요" addedClass="mb-10" authTimer="50"
                content="인증" @emitMethods="actionTest('test')" />
            <div class="link-wrap">
                <NuxtLink to="/" class="btn btn-default w-half link-item">취소</NuxtLink>
                <button type="submit" class="btn btn-primary w-half link-item">다음</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import {Form} from 'vee-validate'

definePageMeta({
    name: 'sms-certify',
    title: 'SMS 인증하기'
});

const form = reactive({
    authRequest: true,
})

const formSchema = computed(() => ({
    userName: 'required|min:3',
    phoneNumber: 'required|phoneNumber|numeric',
    authNumber:'required|numeric'
}));

const initialVals = {
    userName: '',
    phoneNumber: '',
    authNumber:''
}

const handleFormSubmit = async (values) => {
    showAlertModal.value = true;
    alert('폼 제출 성공!');
    console.log(values);
};

const actionTest = (content) => {
    alert(`${content} alert!`)
}
</script>

<style lang="scss">
@use "@/assets/scss/pages/user/user.scss";
</style>
