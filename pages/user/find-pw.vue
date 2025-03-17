<template>
    <div class="user-page find-idpw">
        <layout-header-inner type="default" />
        <h1 class="title-h1">비밀번호 찾기</h1>

        <template v-if="!successFlag">
            <Form :validationSchema="formSchema" @submit="handleSubmit">
                <formInputText inputType="text" inputName="userId" placeholder="아이디를 입력하세요" :addedClass="'mb-10'" />
                <formInputText inputType="text" inputName="userName" placeholder="이름을 입력하세요" :addedClass="'mb-10'" />
                <formInputAction inputType="text" inputName="phoneNumber" content="인증요쳥" @emitMethods="authRequest"
                    placeholder="휴대폰 번호를 입력하세요" :addedClass="'mb-10'" />
                <formInputAction inputType="text" inputName="authNumber" content="확인" :authTimer="authTimer"
                    @emitMethods="confirmRequest" placeholder="인증번호를 입력하세요" :addedClass="'mb-10'" />
                <div class="btn-wrap">
                    <button type="submit" class="btn btn-primary confirm-btn">임시비밀번호 발송</button>
                </div>
            </Form>
        </template>
        <template v-else-if="successFlag">
            <img src="assets/image/common/img_find_pw.png" alt="아이디 찾기" class="find-img">
            <p class="sub-title">임시 비밀번호가 발송 되었습니다.</p>
            <div class="link-wrap">
                <NuxtLink to="/user/login" class="btn btn-primary link-item w-half">로그인</NuxtLink>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Form } from 'vee-validate'

definePageMeta({
    title: '비밀번호 찾기'
});

const formSchema = computed(()=>({
    userId: 'required',
    userName: 'required',
    phoneNumber: 'required|phoneNumber|numeric',
    authNumber: 'required|numeric',
}))

const successFlag = ref(false);
const phoneNumberAuth = ref(false);
const authTimer = ref('50');
const result = ref({
    userName: '',
    loginId: 'sampleUserId'
})

const authRequest = (phoneNumber) => { 
    console.log(phoneNumber)
    alert(`입력된 전화번호: ${phoneNumber}`)
    phoneNumberAuth.value = true;
};


const confirmRequest = (authNumber) => { 
    alert(`인증번호: ${authNumber}`)
};

const handleSubmit = (values) => { 
    alert(`인증 완료!`)
    console.log(values.userName)

    result.value.userName = values.userName;
    successFlag.value = true;
};
</script>

<style lang="scss">
@use "@/assets/scss/pages/user/user.scss";
</style>
