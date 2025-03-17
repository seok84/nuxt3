<template>
    <div class="user-page join">
        <layout-header-inner type="default" />
        <Form :validation-schema="formSchema" :initial-values="formValues" @submit="handleSubmit"
            @invalid-submit="onInvalidSubmit">
            <h1 class="title-h1">회원가입</h1>
            <!-- 기본정보 -->
            <div class="toggle-title" :class="{ 'active': userInfoContent }">
                <h2>기본정보<span><em>*</em>표시는 필수 입력사항입니다</span></h2>
                <button type="button" class="toggle-arr" @click="toggleUserInfo"></button>
            </div>
            <div v-if="userInfoContent" class="toggle-content user-info-content">
                <!-- 아이디 -->
                <formInputAction inputTitle="아이디" inputType="text" inputName="id" placeholder="6자~12자 이내 영문, 숫자"
                    content="중복검사" />
                <!-- 비밀번호 -->
                <formInputPassword inputTitle="비밀번호" inputType="password" inputName="password"
                    placeholder="8~16자 이내 영문, 숫자, 특수문자" />
                <!-- 비밀번호 재입력-->
                <formInputPassword inputTitle="비밀번호 확인" inputType="password" inputName="confirmation"
                    placeholder="비밀번호 재입력" />
                <!-- 이름 -->
                <formInputText inputTitle="이름" inputType="text" inputName="userName" placeholder="이름" />
                <!-- 휴대폰번호 -->
                <formInputText inputTitle="핸드폰 번호" inputType="phoneNumber" inputName="phoneNumber"
                    placeholder="핸드폰 번호를 '-'없이 정확히 입력해주세요." />
                <!-- 전화번호 -->
                <formInputText inputTitle="사업자 번호" inputType="businessNumber" inputName="businessNumber"
                    placeholder="사업자등록번호를 '-'없이 정확히 입력해주세요." />
                <!-- 이메일 -->
                <formInputText inputTitle="이메일" inputType="email" inputName="email" placeholder="example@company.com" />
                <!-- 생년월일 -->
                <h3 class="form-title accent">생년월일</h3>
                <div class="select-wrap">
                    <Field name="birthYear" as="select" class="input-select" v-model="userBirthInfo.year">
                        <option value="" disabled>미선택</option>
                        <option v-for="year in selectOptions.year" :key="year" :value="year">
                            {{ year }}
                        </option>
                    </Field>
                    <Field name="birthMonth" as="select" class="input-select" v-model="userBirthInfo.month">
                        <option value="" disabled>미선택</option>
                        <option v-for="month in selectOptions.month" :key="month" :value="month">
                            {{ month }}
                        </option>
                    </Field>
                    <Field name="birthDate" as="select" class="input-select" v-model="userBirthInfo.date">
                        <option value="" disabled>미선택</option>
                        <option v-for="date in selectOptions.date" :key="date" :value="date">
                            {{ date }}
                        </option>
                    </Field>
                </div>
                <!-- 성별 -->
                <h3 class="form-title accent">성별</h3>
                <div class="radio-wrap">
                    <formInputRadio inputName="userGender" labelTitle="미선택" value="none" />
                    <formInputRadio inputName="userGender" labelTitle="여성" value="female" />
                    <formInputRadio inputName="userGender" labelTitle="남성" value="male" />
                    <ErrorMessage name="userGender" as="span" class="feedback invalid" />
                </div>
                <!-- 주소 -->
                <h3 class="form-title accent">주소</h3>
                <formInputAction inputType="text" inputName="userAddressDefault" placeholder="기본주소" content="우편번호"
                    :readonlyStatus="true" addedClass="mb-10" />
                <formInputText inputType="text" inputName="userAddressDetail" placeholder="상세주소" addedClass="mb-10" />
                <formInputText inputType="text" inputName="userAddressEtc" placeholder="기타주소" addedClass="mb-10" />
            </div>

            <!-- 수신동의 -->
            <div class="toggle-title" :class="{ 'active': acceptContent }">
                <h2>수신동의</h2>
                <button type="button" class="toggle-arr" @click="toggleAccept"></button>
            </div>
            <div v-if="acceptContent" class="toggle-content accept-content">
                <div class="wrap">
                    <h4>문자메시지 수신동의</h4>
                    <ul class="dot-list">
                        <li>수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 SMS(문자메시지)로 받아볼 수 있습니다.</li>
                        <li>회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.</li>
                    </ul>
                    <div class="radio-wrap">
                        <formInputRadio inputName="receiveMessage" labelTitle="수신동의" :modelValue="true" />
                        <formInputRadio inputName="receiveMessage" labelTitle="동의안함" />
                    </div>
                </div>
                <div class="wrap">
                    <h4>이메일 수신동의</h4>
                    <ul class="dot-list">
                        <li>수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 E-mail(이메일)로 받아볼 수 있습니다.</li>
                        <li>회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.</li>
                    </ul>
                    <div class="radio-wrap">
                        <formInputRadio inputName="receiveEmail" labelTitle="수신동의" :modelValue="true" />
                        <formInputRadio inputName="receiveEmail" labelTitle="동의안함" />
                    </div>
                </div>
                <div class="wrap mobile"><!-- // mobile -->
                    <h4>앱 푸쉬 수신동의</h4>
                    <ul class="dot-list">
                        <li>다양한 특가상품과 개인 맞춤 이벤트 정보를 가장 빠르게 받아볼 수 있습니다.</li>
                    </ul>
                    <div class="radio-wrap">
                        <label class="input-radio"><input type="radio" name="appPush" checked><i></i>수신동의</label>
                        <label class="input-radio"><input type="radio" name="appPush"><i></i>동의안함</label>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-default btn-primary confirm-btn">회원가입</button>
        </Form>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { Form, Field } from "vee-validate";



definePageMeta({
    title: '회원가입'
});

const formSchema = computed(() => ({
    id: 'required|loginId',
    password: 'required|password1|password2',
    confirmation: 'required|confirmed:password',
    userName: 'required',
    phoneNumber: 'required|phoneNumber|numeric',
    email: 'required|email',
    businessNumber: 'required|businessNumber',
    userAddressDefault: '',
    userAddressDetail: 'required',
    userAddressEtc: '',
    receiveEmail: (value) => value ? true : false,
    receiveMessage: (value) => value ? true : false,
}));

const formValues = {
    id: '',
    password: '',
    confirmation: '',
    userName: '',
    phoneNumber: '',
    email: '',
    businessNumber: '',
    userAddressDefault: '',
    userAddressDetail: '',
    userAddressEtc: '',
    receiveEmail: false,
    receiveMessage: false,
};

const userInfoContent = ref(true);
const acceptContent = ref(true);

const userBirthInfo = ref({
    year: '',
    month: '',
    date: ''
})

const selectOptions = ref({
    year: ['2000','2001','2002'],
    month: ['01','02','03'],
    date: ['01','02','03']
})



const toggleUserInfo = () => {
    userInfoContent.value = !userInfoContent.value;
};

const toggleAccept = () => {
    acceptContent.value = !acceptContent.value;
};

const handleSubmit = (values) => { 
    alert(`인증 완료!`)
    console.log(values)
};

const onInvalidSubmit = ({ values, errors, results }) => {
    console.log(values, errors, results)
    // const firstErrorFieldName = Object.keys(errors)[0];
    // const el = document.querySelector(`[name="${firstErrorFieldName}"]`);
    
}
</script>

<style lang="scss">
@use "@/assets/scss/pages/user/user.scss";
</style>
