<template>
    <div class="user-page find-idpw">
        <layout-header-inner type="default" />
        <h1 class="title-h1">아이디 찾기</h1>
        <template v-if="!successFlag">
            <Form :validationSchema="formSchema" @submit="handleSubmit">
                <formInputText inputType="text" inputName="userName" placeholder="이름을 입력하세요" :addedClass="'mb-10'" />
                <formInputAction inputType="text" inputName="phoneNumber" content="인증요쳥" @emitMethods="authRequest"
                    placeholder="휴대폰 번호를 입력하세요" :addedClass="'mb-10'" />
                <formInputAction v-if="phoneNumberAuth" inputType="text" inputName="authNumber" content="확인"
                    :authTimer="authTimer" @emitMethods="confirmRequest" placeholder="인증번호를 입력하세요"
                    :addedClass="'mb-10'" />
                <div class="btn-wrap">
                    <button type="submit" class="btn btn-primary confirm-btn">확인</button>
                </div>
            </Form>
        </template>
        <template v-else-if="successFlag">
            <img src="assets/image/common/img_find_id.png" alt="아이디 찾기" class="find-img">
            <p class="sub-title">입력하신 회원 정보로 검색된 아이디입니다.</p>
            <div class="box">
                <p>
                    {{ result.userName }} 회원님의 아이디는<br>
                    <strong>{{ result.loginId }}</strong> 입니다.
                </p>
            </div>
            <ul class="dot-list">
                <li>전체 아이디 받기시, 등록된 회원정보의 휴대전화번호로 메시지가 발송됩니다.</li>
            </ul>
            <div class="link-wrap gap">
                <NuxtLink to="/user/find-pw" class="btn btn-primary-line link-item">비밀번호 찾기</NuxtLink>
                <button type="button" class="btn btn-primary link-item">전체 아이디 받기</button>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Form } from 'vee-validate'

definePageMeta({
    name: 'find-id',
    title: '아이디 찾기'
});

const formSchema = computed(()=>({
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
