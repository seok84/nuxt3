<template>
    <div class="user-page join">
        <layout-header-inner type="default" />
        <Form :validation-schema="formSchema" :initial-values="formValues" @submit="handleSubmit"
            @invalid-submit="onInvalidSubmit">
            <h1 class="title-h1">SNS 간편회원 가입</h1>
            <!-- // 기본정보 -->
            <div :class="['toggle-title', { 'active': userInfoContent }]">
                <h2>기본정보<span><em>*</em>표시는 필수 입력사항입니다</span></h2>
                <button type="button" class="toggle-arr" @click="$toggleState($event)"></button>
            </div>
            <div class="toggle-content user-info-content">
                <!-- //이름 -->
                <formInputText inputTitle="이름" inputType="text" inputName="userName" placeholder="이름" />
                <!-- 휴대폰번호 -->
                <formInputText inputTitle="핸드폰 번호" inputType="phoneNumber" inputName="phoneNumber"
                    placeholder="핸드폰 번호를 '-'없이 정확히 입력해주세요." />
                <!-- 이메일 -->
                <formInputText inputTitle="이메일" inputType="email" inputName="email" placeholder="example@company.com" />
                <!-- //생년월일 -->
                <h3 class="form-title accent">생년월일</h3>
                <div class="select-wrap">
                    <div class="flex">
                        <Field name="birthYear" as="select" class="input-select" title="년">
                            <option value="" disabled>미선택</option>
                            <option v-for="i in 100" :key="2025 - i" :value="2025 - i">
                                {{ (2025 - i) }}년
                            </option>
                        </Field>
                        <Field name="birthMonth" as="select" class="input-select" title="월">
                            <option value="" disabled>미선택</option>
                            <option v-for="i in 12" :key="$padNumber(i)" :value="$padNumber(i)">{{ (i) }}월</option>
                        </Field>
                        <Field name="birthDate" as="select" class="input-select" title="일">
                            <option value="" disabled>미선택</option>
                            <option v-for="i in 31" :key="$padNumber(i)" :value="$padNumber(i)">{{ (i) }}일</option>
                        </Field>
                    </div>
                </div>
                <!-- //성별 -->
                <h3 class="form-title accent">성별</h3>
                <div class="radio-wrap">
                    <formInputRadio inputName="userGender" labelTitle="미선택" value="" :modelValue="true" />
                    <formInputRadio inputName="userGender" labelTitle="여성" value="f" />
                    <formInputRadio inputName="userGender" labelTitle="남성" value="m" />
                </div>
            </div>
            <!-- //수신동의 -->
            <div :class="['toggle-title', { 'active': receiveContent }]">
                <h2>수신동의</h2>
                <button type="button" class="toggle-arr"  @click="$toggleState($event)"></button>
            </div>
            <div class="toggle-content accept-content">
                <div class="wrap">
                    <h4>문자메시지 수신동의</h4>
                    <ul class="dot-list">
                        <li>수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 SMS(문자메시지)로 받아볼 수 있습니다.</li>
                        <li>회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.</li>
                    </ul>
                    <div class="radio-wrap">
                        <formInputRadio inputName="receiveMessage" labelTitle="수신동의" value="1" :modelValue="true" />
                        <formInputRadio inputName="receiveMessage" labelTitle="동의안함" value="0" />
                    </div>
                </div>
                <div class="wrap">
                    <h4>이메일 수신동의</h4>
                    <ul class="dot-list">
                        <li>수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 E-mail(이메일)로 받아볼 수 있습니다.</li>
                        <li>회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.</li>
                    </ul>
                    <div class="radio-wrap">
                        <formInputRadio inputName="receiveEmail" labelTitle="수신동의" value="1" :modelValue="true" />
                        <formInputRadio inputName="receiveEmail" labelTitle="동의안함" value="0" />
                    </div>
                </div>
                <div class="wrap mobile"><!-- // mobile -->
                    <h4>앱 푸쉬 수신동의</h4>
                    <ul class="dot-list">
                        <li>다양한 특가상품과 개인 맞춤 이벤트 정보를 가장 빠르게 받아볼 수 있습니다.</li>
                    </ul>
                    <div class="radio-wrap">
                        <formInputRadio inputName="receiveAppPush" labelTitle="수신동의" value="1" :modelValue="true" />
                        <formInputRadio inputName="receiveAppPush" labelTitle="동의안함" value="0" />
                    </div>
                </div>
            </div>
            <!-- //약관동의 -->
            <div :class="['toggle-title', { 'active': acceptContent }]">
                <h2>약관동의</h2>
                <button type="button" class="toggle-arr"  @click="$toggleState($event)"></button>
            </div>
            <div class="toggle-content" v-show="acceptContent">
                <ul class="terms-content">
                    <li class="check-wrap whole-check">
                        <formInputCheckbox inputName="allTerms" labelTitle="" value="allTerms" />
                        <p class="terms-title">모든 약관 동의</p>
                    </li>
                    <li class="check-wrap">
                        <formInputCheckbox inputName="serviceTerms" labelTitle="" value="serviceTerms" />
                        <div class="terms-list">
                            <p class="terms-title">서비스 이용 약관 동의 <span>(필수)</span></p>
                            <button type="button" class="terms-button">약관보기</button>
                        </div>
                    </li>
                    <li class="check-wrap">
                        <formInputCheckbox inputName="personalTerms" labelTitle="" value="personalTerms" />
                        <div class="terms-list">
                            <p class="terms-title">개인정보의 수집·이용목적 및 항목 동의 <em>(필수)</em></p>
                            <button type="button" class="terms-button">약관보기</button>
                        </div>
                    </li>
                    <li class="check-wrap">
                        <formInputCheckbox inputName="privacyTerms" labelTitle="" value="privacyTerms" />
                        <div class="terms-list">
                            <p class="terms-title">개인정보의 수집·이용항목 목적 동의 <em>(필수)</em></p>
                            <button type="button" class="terms-button">약관보기</button>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- // 회원가입 -->
            <button type="submit" class="btn btn-default btn-primary confirm-btn">회원가입</button>
        </Form>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { Form, Field  } from "vee-validate";
const { $toggleState } = useNuxtApp();

definePageMeta({
    name: 'sns-join',
    title: 'SNS 간편회원 가입'
});

const formSchema = computed(() => ({
    userName: 'required',
    phoneNumber: 'required|phoneNumber|numeric',
    email: 'required|email',
    userGender: (value) => value ? true : false,
    birth: (value) => {
        if (!value.year || !value.month || !value.date) {
            return '생년월일을 작성해주세요.'
        }
        return true
    },
    receiveEmail: (value) => value ? true : false,
    receiveMessage: (value) => value ? true : false,
    receiveAppPush: (value) => value ? true : false,
    serviceTerms: (value) => value ? true : false,
    personalTerms: (value) => value ? true : false,
    privacyTerms: (value) => value ? true : false,
}));

const formValues = {
    userName: '',
    phoneNumber: '',
    email: '',
    userGender: 'none',
    birth: { year: '', month: '', date: ''},
    receiveEmail: false,
    receiveMessage: false,
    receiveAppPush: false,
    serviceTerms: false,
    personalTerms: false,
    privacyTerms: false,
};

const userInfoContent = ref(true);
const receiveContent = ref(true);
const acceptContent = ref(true);


const handleSubmit = (values) => { 
    alert(`인증 완료!`)
    console.log(values)
};

const toggleUserInfo = (val) => {
    console.log( val)
    // userInfoContent.value = !userInfoContent.value;
};

const toggleAccept = () => {
    acceptContent.value = !acceptContent.value;
};

const onInvalidSubmit = ({ values, errors, results }) => {
    console.log(values, errors, results)
    // const firstErrorFieldName = Object.keys(errors)[0];
    // const el = document.querySelector(`[name="${firstErrorFieldName}"]`);
    
}
</script>
<style lang="scss" scoped>
@use "@/assets/scss/pages/user/user.scss";
</style>