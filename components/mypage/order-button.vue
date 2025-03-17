<template>
    <div class="btn-wrap">
        <template v-if="item.orderStatus == '0'">
            <div class="box">
                <button type='button' class="btn square btn-default btn-middle btn-cancel"
                    @click="openPopup('orderCancel', item.itemSequence)">주문취소</button>
            </div>
        </template>
        <template v-if="item.orderStatus == '10' || item.orderStatus == '15'">
            <div class="box">
                <button type='button' class="btn square btn-middle btn-full btn-default"
                    @click="openPopup('cancel', item.itemSequence)">주문취소</button>
            </div>
        </template>
        <template
            v-if="item.orderStatus == '30' || item.orderStatus == '35' || item.orderStatus == '55' || item.orderStatus == '59' || item.orderStatus == '69'">
            <div class="box">
                <button type='button' class="btn square btn-middle btn-primary"
                    @click="openPopup('confirm', item.itemSequence)"><span class="label">7일후 자동
                        확정</span>구매확정</button>
                <template v-if="item.deliveryNumber == null">
                    <button type='button' class="btn square btn-primary-line btn-middle">직접수령</button>
                </template>
                <template v-else>
                    <button type='button' class="btn square btn-middle btn-primary-line"
                        @click="deliveryLink(item.deliveryCompanyUrl, item.deliveryNumber)">배송조회</button>
                </template>
            </div>
            <div class="box" v-if="item.itemReturnFlag != 'N'">
                <button type='button' class="btn btn square btn-middle btn-default"
                    @click="openPopup('exchange', item.itemSequence)">교환신청</button>
                <button type='button' class="btn btn square btn-middle btn-default"
                    @click="openPopup('return', item.itemSequence)">반품신청</button>
            </div>
        </template>
        <template v-if="item.orderStatus == '40'">
            <div class="box">
                <template v-if="item.writeReviewFlag">
                    <button type="button" class="btn square btn-primary btn-middle btn-review"
                        @click="openPopup('review', item.itemSequence)">
                        <span class="label">후기작성 시 포인트 지급</span>
                        후기작성</button>
                </template>
            </div>
        </template>
    </div>
</template>
<script setup>
    const props = defineProps({
        item: Object,
    })

    const emits = defineEmits(['openPopup', 'deliveryLink']);

    const openPopup = (type, itemSequence) => {
            const param = {
                type: type,
                itemSequence: itemSequence
            };
            emits('openPopup', param)
    };

    const deliveryLink = (url, number) => {
        const param = {
            url: url,
            number: number
        }
        emits('deliveryLink', param)
    }


</script>