<template>
    <div class="user-page find-idpw">
        <layout-header-inner type="default" />
        <h1 class="title-h1">비밀번호 변경하기</h1>

        <Form :validation-schema="formSchema" :initial-values="initialVals" @submit="handleFormSubmit">
            <formInputPassword inputTitle="기존 비밀번호" inputType="password" inputName="password"
                placeholder="영문, 숫자, 특수문자 조합으로 이루어진 10 ~ 16자의 비밀번호를 입력하세요" />
            <formInputPassword inputTitle="새 비밀번호" inputType="password" inputName="confirmation"
                placeholder="영문, 숫자, 특수문자 조합으로 이루어진 10 ~ 16자의 비밀번호를 입력하세요" />
            <formInputPassword inputTitle="새 비밀번호 재입력" inputType="password" inputName="newPassword"
                placeholder="영문, 숫자, 특수문자 조합으로 이루어진 10 ~ 16자의 비밀번호를 입력하세요" />

            <div class="link-wrap">
                <button type="submit" class="btn btn-primary confirm-btn">저장</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import {Form} from 'vee-validate'

definePageMeta({
    name: 'change-pw',
    title: '비밀번호 변경하기'
});
const formSchema = computed(() => ({
    password: 'required|password1|password2',
    confirmation: 'required|confirmed:password',
    newPassword : 'required|password1|password2'
}));

const initialVals = {
    id: '',
    email: '',
    password: '',
    confirmation: '',
    businessNumber: '',
    phoneNumber: '',
    birthYear:'',
    birthMonth:'',
    birthDate:'',
    authNumber: '',
    termsCheck:false,
    radioCheck:false,
}

const handleFormSubmit = async (values) => {
    alert('폼 제출 성공!');
    console.log(values);
};
</script>

<style lang="scss">
@use "@/assets/scss/pages/user/user.scss";
</style>
