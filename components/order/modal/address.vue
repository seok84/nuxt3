<template>
    <!-- 배송지 추가 -->
    <div class="modal address-modal" :class="show ? 'show' : ''">
        <div class="dimmed-bg"></div>
        <div class="modal-wrap">
            <button class="modal-close" type="button" @click="hideModal">닫기</button>
            <div class="modal-header">
                배송지 추가
            </div>
            <div class="modal-body">
                <form action="">
                    <div class="btn-wrap gap ">
                        <div class="btn btn-default btn-middle check-wrap">
                            <label class="circle-input-checkbox purple"><input type="checkbox" checked><i></i>기본
                                배송지로
                                설정</label>
                        </div>
                        <div class="btn btn-default btn-middle check-wrap">
                            <label class="circle-input-checkbox purple"><input type="checkbox"><i></i>기본 배송지
                                가져오기</label>
                        </div>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="배송지" />
                        <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="받는사람" />
                        <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                    </div>
                    <div class="form-line">
                        <div class="flex">
                            <input type="text" class="form-basic" placeholder="우편번호 찾기" />
                            <button class="btn btn-black">우편번호</button>
                        </div>
                        <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="기본주소" />
                        <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="상세주소" />
                        <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="휴대폰 또는 전화번호 숫자만 입력" />
                        <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                    </div>
                    <div class="btn-wrap">
                        <button type="submit" class="btn btn-primary w-160">저장</button>
                    </div>
                </form>
                <!-- 개발 소스
                <ValidationObserver ref="observer" v-slot="{ validate }">
                    <form id="newReceiveAddress" @submit.prevent="submit(validate)">
                        <div class="btn-wrap gap ">
                            <div class="btn btn-default btn-middle check-wrap">
                                <label class="circle-input-checkbox purple">
                                    <input type="checkbox" id="defaultFlag" name="defaultFlag" v-model="address.defaultFlag"><i></i>기본 배송지로 설정
                                </label>
                            </div>
                            <div class="btn btn-default btn-middle check-wrap">
                                <label class="circle-input-checkbox purple"><input type="checkbox" @change="getDefaultAddress($event)"><i></i>기본 배송지
                                    가져오기</label>
                            </div>
                        </div>

                        <ValidationProvider tag="div" name="title" rules="required" v-slot="{ errors }" >
                            <div class="form-line" :class="{'invalid': errors.length > 0}">
                                <input type="text" name="title" class="form-basic" v-model="address.title" placeholder="배송지" />
                                <span v-if="errors.length" class="feedback invalid" style="display: block">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider tag="div" name="userName" rules="required" v-slot="{ errors }" >
                            <div class="form-line" :class="{'invalid': errors.length > 0}">
                                <input type="text" name="userName" class="form-basic" placeholder="받는사람" v-model="address.userName" />
                                <span v-if="errors.length" class="feedback invalid" style="display: block">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider tag="div" name="zipcode" rules="required" v-slot="{ errors }" >
                            <div class="form-line" :class="{'invalid': errors.length > 0}">
                                <div class="flex">
                                    <input type="text" class="form-basic" name="zipcode" v-model="address.zipcode" placeholder="우편번호 찾기" />
                                    <button class="btn btn-black" type="button" @click="openDaumPostcode" >우편번호</button>
                                </div>
                                <span v-if="errors.length" class="feedback invalid" style="display: block">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider tag="div" name="address" rules="required" v-slot="{ errors }" >
                            <div class="form-line" :class="{'invalid': errors.length > 0}">
                                <input type="text" class="form-basic" name="address" v-model="address.address"  placeholder="기본주소" />
                                <span v-if="errors.length" class="feedback invalid" style="display: block">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider tag="div" name="addressDetail" rules="required" v-slot="{ errors }" >
                            <div class="form-line" :class="{'invalid': errors.length > 0}">
                                <input type="text" name="addressDetail" v-model="address.addressDetail" class="form-basic" placeholder="상세주소" />
                                <span v-if="errors.length" class="feedback invalid" style="display: block">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider tag="div" name="mobile" rules="required|phoneNumber" v-slot="{ errors }" >
                            <div class="form-line" :class="{'invalid': errors.length > 0}">
                                <input type="text" class="form-basic" name="mobile" v-model="address.mobile" placeholder="휴대폰 또는 전화번호 숫자만 입력" />
                                <span v-if="errors.length" class="feedback invalid" style="display: block">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <div class="btn-wrap">
                            <button type="submit" class="btn btn-primary w-160">저장</button>
                        </div>
                    </form>
                </ValidationObserver>
                -->
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    newAddress: {
        type: Object,
        default: () => {
            return {};
        }
    }
});

const emit = defineEmits(["close"]);

const hideModal = ($event) => {
    emit('close');
};


/* 개발소스 
let $s, vm;

export default {
    data() {
        return {
        };
    },
    computed: {
        address: {
            get() {
                return this.newAddress;
            },
            set(value) {
                this.$emit("update:newAddress", value);
            }
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        newAddress: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    watch: {
        show: {
            deep: true,
            handler(newValue) {
                return newValue;
            }
        }
    },
    beforeCreate: function() {
        // 기존 Vue로 작성된 스크립트 실행시 적용
        $s = this.$saleson;
        vm = this;
    },
    mounted() {},
    methods: {
        hideModal() {
            this.$emit('close');
        },
        async getDefaultAddress(event){
            if (event.target.checked) {
                await this.$salesonApi().shipping.getDefaultAddress()
                .then((response) => {
                    this.address.title = response.data.title;
                    this.address.userName = response.data.userName;
                    this.address.mobile = response.data.mobile;


                    this.address.zipcode = response.data.zipcode;
                    this.address.newZipcode = response.data.newZipcode;
                    this.address.address = response.data.address;
                    this.address.addressDetail = response.data.addressDetail;
                    this.address.sido = response.data.sido;
                    this.address.sigungu = response.data.sigungu;
                    this.address.eupmyeondong = response.data.eupmyeondong;
                })
                .catch((error) => { vm.$log.error(error);})
            }
        },

        openDaumPostcode() {
            this.$emit('openDaumPostcode', 'receiver');
        },

        submit(validate) {
            this.$saleson.confirm('배송지를 추가하시겠습니까?', async () => {
                const isValid = await validate();

                if (isValid) {
                    this.address.defaultFlag = this.address.defaultFlag ? 'Y' : 'N';

                    await this.$salesonApi().shipping.saveShipping(this.address)
                    .then((response) => {
                        if (response.status == 200) {
                            this.$saleson.alert('등록되었습니다.', () => {
                                this.$saleson.reload();
                            });
                        }
                    })
                    .catch((error) => {
                        this.$log.error(error);
                        this.$saleson.alert(error);
                    });
                }
            });
        }
    }
}*/
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/cart/cart-modal";
</style>
