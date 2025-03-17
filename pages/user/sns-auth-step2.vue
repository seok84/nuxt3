<template>
    <div class="sns-auth-page step2">
        <layout-header-inner type="default" />
        <h1 class="title-h1">회원가입</h1>
        <p class="title-auth">SNS 인증</p>

        <Form class="sns-auth-form" :validation-schema="formSchema" :initial-values="formValues" @submit="handleSubmit">
            <div class="sns-auth-input">
                <formInputText inputType="text" inputName="userName" placeholder="이름을 입력해주세요" />
                <formInputAction inputName="phoneNumber" placeholder="휴대폰 번호를 입력해주세요"
                    @emitMethods="actionTest('test')" />
                <formInputAction inputName="authNumber" placeholder="인증번호를 입력해주세요"
                    @emitMethods="actionTest('test')" authTimer="50"/>
            </div>

            <div class="btn-wrap gap">
                <button type="button" class="btn btn-default btn-cancel">취소</button>
                <button type="submit" class="btn btn-primary btn-next">다음</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import {Form} from 'vee-validate'

definePageMeta({
    name: 'sns-auth-step2',
    title: 'SNS 인증'
});

const formSchema = computed(()=>({
    userName: 'required',
    phoneNumber: 'required|phoneNumber',
    authNumber:'required|numeric'
}))

const formValues = {
    userName:'',
    phoneNumber:'',
    authNumber:'',
};

const handleSubmit = (values) => { 
    alert(`인증 완료!`)
    console.log(values)
};
</script>

<style lang="scss">
@use "@/assets/scss/pages/user/user.scss";
</style>
