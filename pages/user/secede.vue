<template>
    <div class="user-page secede-page">
        <layout-header-inner type="default" />
        <ModalDefault modalTypeClass="modal-secede" title="회원탈퇴" bodyCustomClass="p-2" :modalShow="showAlertModal"
            @modal-close="showAlertModal = !showAlertModal">
            <div class="modal-content">
                <div class="text-center">
                    정말 탈퇴 하시겠습니까?
                </div>
            </div>
            <div class="btn-wrap gap">
                <button type="button" class="btn btn-default">탈퇴</button>
                <button type="button" class="btn btn-primary" @click="showAlertModal = !showAlertModal">취소</button>
            </div>
        </ModalDefault>
        <h1 class="title-h1">회원탈퇴</h1>
        <p class="user-page-info">
            회원탈퇴시<br class="mobile" /> 상품 구매내역, 쿠폰 및 포인트 등 모든 정보가 삭제되며<br />
            회원 서비스를 모두 이용할 수 없습니다.
        </p>
        <p class="extinct-point"><span>소멸예정 포인트</span><strong>9,999,999 P</strong></p>
        <Form :validation-schema="formSchema" :initial-values="initialVals"><!-- @submit="handleFormSubmit" -->
            <formInputPassword inputType="password" inputName="password"
                placeholder="영문, 숫자, 특수문자 조합으로 이루어진 10 ~ 16자의 비밀번호를 입력하세요" />
            <h2 class="survey-title">탈퇴이유</h2>
            <p class="survey-content">
                그동안 Saleson store를 이용해 주셔서 감사합니다.<br>
                더 나은 운영을 위한 설문조사 이므로 솔직한 답변 부탁 드립니다.
            </p>
            <p class="survey-divider"></p>
            <div class="radio-wrap survey-radio-wrap">
                <Field name="radioCheck" type="radio" v-for="(list, index) in surveyList" :key="list"
                    :unchecked-value="false">
                    <label class="input-radio">
                        <input type="radio" name="radioCheck" :value="list" :checked="index == 0"
                            @input="checkSurveyFn" />
                        <i></i>
                        <span>
                            {{ list }}
                        </span>
                    </label>
                </Field>
                <formInputRadio inputName="radioCheck" labelTitle="기타" :value="checkEtc"
                    @update:model-value="checkEtcFn" />
            </div>
            <div class="form-line" v-show="checkEtc">
                <Field name="ectSurvey" as="textarea" cols="30" rows="10" class="form-basic text-area"
                    placeholder="기타사유가 있다면 입력하세요" />
            </div>
            <button type="button" class="btn btn-primary confirm-btn" @click="handleFormSubmit">탈퇴</button>
        </Form>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { Form, Field } from "vee-validate";

definePageMeta({
    name: 'secede',
    title: '회원탈퇴'
});

const showAlertModal = ref(false)

const surveyList = ref(['상품설명이 알기 어렵기 때문에','주문 및 문의 시 직원의 대응이 만족스럽지 않아서', '상품의 상태가 좋지 않아서', '상품의 가격이 높아서', '원하는 상품이 없어서'])

const checkSurveyFn = () => {
    return checkEtc.value = false
};
const checkEtc = ref(false);

const checkEtcFn = (value) => {
    return checkEtc.value = value
}

const formSchema = computed(() => ({
    password: 'required|password1|password2',
}));

const initialVals = {
    radioCheck:false,
}

const handleFormSubmit = async (values) => {
    showAlertModal.value = true;

    alert('폼 제출 성공!');
    console.log(values);
};


</script>
<style lang="scss">
@use "@/assets/scss/pages/user/user.scss";
</style>