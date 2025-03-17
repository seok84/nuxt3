<template>
    <div class="payment-form-wrap">
        <ul class="dot-list">
            <li>우측 [결제하기]를 클릭하여 토스페이먼츠 계좌이체 화면에서 결제정보를 입력해주시길 바랍니다.</li>
            <li>대금 청구 시 가맹점 란에는 {{ shopName }}로 기재됩니다.</li>
        </ul>
        <form class="payment-form">
            <h3 class="form-title">에스크로</h3>
            <div class="mb-0 radio-wrap">
                <label class="input-radio"><input type="radio"><i></i>사용안함</label>
                <label class="input-radio"><input type="radio"><i></i>사용</label>
                <!-- 개발소스
                <label class="input-radio"><input type="radio" v-model="useEscrowRadio" :value="false"><i></i>사용안함</label>
                <label class="input-radio"><input type="radio" v-model="useEscrowRadio" :value="true"><i></i>사용</label>
                -->
            </div>
        </form>
    </div>
</template>
<script setup>
const props = defineProps({
    useEscrow: {
        type: String,
        default: ''
    },
    cashbillCode: {
        type: String,
        default: ''
    },
    cashbillTypes: {
        type: Array,
        default: []
    },
    cashbillType: {
        type: String,
        default: ''
    }
});

/* 개발소스
let $s, vm;

export default {
    data() {
        return {
            cashbillCodeText: '',
        };
    },
    props: {
        useEscrow: {
            type: String,
            default: ''
        },
        cashbillCode: {
            type: String,
            default: ''
        },
        cashbillTypes: {
            type: Array,
            default: []
        },
        cashbillType: {
            type: String,
            default: ''
        }
    },
    computed: {
        shopName() {
          return this.$store.state.about.shopName;
        },
        useEscrowRadio: {
            get() {
                return this.useEscrow === 'Y';
            },
            set(value) {
                this.$emit('update:useEscrow', value ? 'Y' : 'N');
            }
        },
        cashbillTypeRadio: {
            get() {
                let element = this.cashbillTypes.find((type) => type.id === this.cashbillType);
                return element.id;
            },
            set(value) {
                this.$emit('update:cashbillType', value); // Emit event to update the parent component
            }
        }
    },
    watch: {},
    beforeCreate: function() {
        // 기존 Vue로 작성된 스크립트 실행시 적용
        $s = this.$saleson;
        vm = this;
    },
    mounted() {},
    methods: {
        setCashbillCode() {
            this.$emit('update:cashbillCode', this.cashbillCodeText);
        }
    }
}*/
</script>
