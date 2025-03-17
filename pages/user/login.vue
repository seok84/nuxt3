<template>
    <div class="user-page">
        <layout-header-inner type="default" />
        <!-- 로그인 -->
        <h1 class="title-h1">로그인</h1>
        <Form :validation-schema="formSchema" @submit="submit">
            <formInputText v-model="loginRequest.loginId" inputType="text" inputName="id" placeholder="아이디" :addedClass="'mb-10 m-mb-6'" />
            <formInputPassword v-model="loginRequest.password" inputType="password" inputName="password" placeholder="비밀번호"
                :addedClass="'mb-10 m-mb-6'" />
            <div class="user-check-area">
                <div class="check-wrap no-margin">
                    <formInputCheckbox inputName="saveLoginId" labelTitle="아이디 저장" />
                </div>
                <div class="find-idpw-area">
                    <NuxtLink to="/user/find-id">아이디 찾기</NuxtLink>
                    <span class="divider"></span>
                    <NuxtLink to="/user/find-pw">비밀번호 찾기</NuxtLink>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-login">로그인</button>

            <!-- SNS 간편 로그인 -->
            <div class="sns-join-container">
                <h2>SNS 계정으로 간편 로그인</h2>
                <div class="sns-wrap">
                    <a href="#"><span class="circle"><img src="@/assets/image/common/sns_kakao.svg"
                                alt="카카오톡"></span><span class="sns-type">카카오톡</span></a>
                    <a href="#"><span class="circle"><img src="@/assets/image/common/sns_naver.svg"
                                alt="네이버"></span><span class="sns-type">네이버</span></a>
                    <a href="#"><span class="circle"><img src="@/assets/image/common/sns_apple.svg"
                                alt="애플"></span><span class="sns-type">애플</span></a>
                </div>
                <p class="get-joined">회원이 아니신가요? <NuxtLink to="/user/certify-join">회원가입</NuxtLink>
                </p>
            </div>

            <!-- 비회원 주문조회 -->
            <div class="non-member">
                <button type="button" class="btn btn-default non-member-inquiry" @click="toggleNonMemberInquiry">
                    비회원 주문조회<span class="toggle-arr"></span>
                </button>
                <div v-show="nonMemberInquiry" class="non-member-content">
                    <p class="user-page-info">주문 시 인증한 휴대폰 번호로 인증을 통해<br />확인하실 수 있습니다.</p>
                    <div class="form-line mb-10">
                        <Field name="nonMemberUserName" type="text" class="form-basic" placeholder="이름을 입력하세요" />
                    </div>
                    <div class="form-line mb-10">
                        <div class="flex">
                            <Field name="phoneNumber" type="text" class="form-basic" placeholder="휴대폰 번호를 입력하세요" />
                            <button class="btn btn-black m-w-98">인증요청</button>
                        </div>
                    </div>
                    <div class="form-line mb-10">
                        <div class="flex">
                            <Field name="authNumber" type="text" class="form-basic" placeholder="인증번호를 입력하세요" />
                            <button type="button" class="btn btn-black m-w-98" v-if="authRequest">인증요청</button>
                            <button type="button" class="btn btn-black m-w-98" v-else>재전송</button>
                        </div>
                    </div>
                    <button type="button" class="btn btn-black2 user-number-inquiry">조회하기</button>
                </div>
            </div>
        </Form>

        <!-- 비밀번호 변경 모달 -->
        <modal-default v-if="isModalOpen" :title="'비밀번호 변경'" :bodyCustomClass="' p-4'">
            <p class="text-center">개인정보 도용으로 인한 피해를 예방하기 위해 90일 이상 비밀번호를 변경하지 않는 경우 비밀번호 변경을 권장하고 있습니다.</p>
            <div class="btn-wrap gap">
                <NuxtLink to="/user/change-pw" class="btn btn-primary">변경하기</NuxtLink>
                <button type="button" class="btn btn-default" @click="closeModal">다음에</button>
            </div>
        </modal-default>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Form, Field } from "vee-validate";
import useCryptor from "~/composables/utils/useCryptor.js";
import {useCategoryStore} from "~/stores/category.js";

definePageMeta({
    title: '로그인'
});



const categoryStore = useCategoryStore();

console.log('##### categoryStore.getCategories() :: ', await categoryStore.getCategories());


const formSchema = computed(() => ({
    id: 'required|loginId',
    //password: 'required|password1|password2',
    password: 'required',
    saveLoginId: false,
}));


const auth = useAuth();
const route = useRoute();
const router = useRouter();

const loginRequest = reactive({
    loginType: 'ROLE_USER',
    loginId: 'onpaskc',
    password: '1111'
})

const submit = async (values) => {

    const {token, code} = await auth.login(loginRequest);


    console.log('response: ', token + " : " + code);

   console.log('user: ', auth.getUser())

    console.log(values);

    // 쿼리 파라미터에서 리다이렉트 URI 가져오기
    const redirectPath = route.query.redirect || '/'; // 기본 경로 설정

    // 원래 URI로 리다이렉트
    await router.push(redirectPath);
};

const nonMemberInquiry = ref(true);
const authRequest = ref(true);
const isModalOpen = ref(false);

const toggleNonMemberInquiry = () => {
    nonMemberInquiry.value = !nonMemberInquiry.value;
};


</script>
<style lang="scss" scoped>
@use "@/assets/scss/pages/components/modal.scss";
@use "@/assets/scss/pages/user/user.scss";
</style>
