<template>
    <div class="vee-sample">
        <div class="simple-form">
            <Form :validation-schema="formSchema" :initial-values="initialVals" @submit="handleFormSubmit">
                <formInputText inputTitle="아이디" inputType="text" inputName="id" placeholder="아이디를 입력해주세요" />
                <formInputText inputTitle="이메일" inputType="email" inputName="email" placeholder="test@example.com" />
                <formInputPassword inputTitle="비밀번호" inputType="password" inputName="password"
                    placeholder="영문, 숫자, 특수문자 조합으로 이루어진 10 ~ 16자의 비밀번호를 입력하세요" />
                <formInputPassword inputTitle="비밀번호 확인" inputType="password" inputName="confirmation"
                    placeholder="동일한 비밀번호를 입력해주세요" />
                <div class="select-wrap">
                    <Field name="drink" as="select" class="input-select">
                        <option value="" disabled>Select a drink</option>
                        <option v-for="drink in selectOptions" :key="drink" :value="drink">
                            {{ drink }}
                        </option>
                    </Field>
                </div>
                <p class="form-title accent">생년월일</p>
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
                <formInputText inputTitle="사업자 번호" inputType="businessNumber" inputName="businessNumber"
                    placeholder="사업자등록번호를 '-'없이 정확히 입력해주세요." />
                <formInputText inputTitle="핸드폰 번호" inputType="phoneNumber" inputName="phoneNumber"
                    placeholder="핸드폰 번호를 '-'없이 정확히 입력해주세요." />

                <p class="form-title">체크박스</p>
                <div class="check-wrap">
                    <formInputCheckbox inputName="termsCheck" labelTitle="water" value="water" />
                    <formInputCheckbox inputName="termsCheck" labelTitle="juice" value="juice"
                        defaultClass="circle-input-checkbox" />
                    <ErrorMessage name="termsCheck" as="span" class="feedback invalid" />
                </div>

                <p class="form-title">라디오박스</p>
                <div class="radio-wrap">
                    <formInputRadio inputName="radioCheck" labelTitle="coffee" value="coffee" :modelValue="true" />
                    <formInputRadio inputName="radioCheck" labelTitle="latte" value="latte" />
                    <ErrorMessage name="radioCheck" as="span" class="feedback invalid" />
                </div>
                <formInputAction inputTitle="인증번호" inputName="authNumber" placeholder="인증번호를 입력해주세요"
                    @emitMethods="actionTest('test')" />


                <div class="btn-wrap">
                    <button type="submit" class="btn btn-primary w-160">저장</button>
                </div>
            </Form>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { Form, Field, ErrorMessage } from "vee-validate";

const formSchema = computed(() => ({
    id: 'required|loginId',
    email: 'required|email',
    password: 'required|password1|password2',
    confirmation: 'required|confirmed:password',
    businessNumber: 'businessNumber',
    phoneNumber: 'required|phoneNumber|numeric',
    birthYear:'required',
    birthMonth:'required',
    birthDate:'required',
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

const selectOptions = ref(["커피", "우유", "물"]);

const sampleArray = ref({
    year: ['2025','2024','2023'],
    month: ['01','02','03'],
    date: ['01','02','03'],
})

const actionTest = (content) => {
    alert(`${content} alert!`)
}

/**
 * <Form></Form> 을 사용하면 useForm 을 사용하지 않아도 된다
 * <Field></Field> 를 사용하면 v-model 없이 직접 값을 바인딩
*/
</script>
<style lang="scss" scoped>
.vee-sample {
    font-size: 14px;
}

.error {
    color: red;
    font-size: 12px;
}
</style>