<template>
    <div class="payment-form-wrap">
        <ul class="dot-list">
            <li>휴대폰으로 결제하신 금액은 익월 휴대폰 요금에 함께 청구되며 별도의 수수료는 부과되지 않습니다.</li>
            <li>휴대폰 소액결제로 구매하실 경우 현금영수증이 발급되지 않습니다.</li>
            <li>다음의 경우에는 휴대폰 결제를 이용하실 수 없습니다.

                <div>
                    - 미납/체납 중인 휴대폰 요금이 있을 경우 <br>
                    - 이동통신사 가입기간(번호이동포함) 6개월 이하인 경우<br>
                    - 외국인, 미성년자 요금제, 법인휴대폰, 선불요금제인 경우<br>
                    - LGT 이용자 중 통신사로 [자동결제] 차단 신청하신 경우
                </div>

            </li>
            <li>휴대폰으로 결제 가능한 최대 금액은 월 30만원 이며 개인별 한도 금액은 통신사 및 개인 설정에 따라 다를 수 있습니다.</li>
            <li>휴대폰으로 결제하신 금액은 익월 휴대폰 요금에 함께 청구되며 별도의 수수료는 부과되지 않습니다.
                <div>
                    - 결제 당월 취소/반품/품절환불 : 휴대폰 이용요금에 부과예정이던 금액이 취소됩니다.<br>
                    - 결제 당월 지난 후 취소/반품/품절환불 : 환불계좌 확인 후 무통장 계좌로
                </div>
            </li>
            <li>휴대폰결제관련 문의사항은 LG유플러스전자결제 고객센터 1544-7772 또는 29CM 1644-0560으로 연락해주시기 바랍니다.</li>
        </ul>
    </div>
</template>
<script setup>
const props = defineProps({
    buyItem: {
        type: Object,
        default: () => {
            return {}
        }
    },
});

/* 개발소스
let $s, vm;

export default {
    data() {
        return {
        };
    },
    props: {},
    watch: {},
    beforeCreate: function() {
        // 기존 Vue로 작성된 스크립트 실행시 적용
        $s = this.$saleson;
        vm = this;
    },
    mounted() {},
    methods: {
    }
}*/
</script>
