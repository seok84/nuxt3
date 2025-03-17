<template>
    <div class="modal modal-copy" :class="show ? 'show' : ''">
        <div class="dimmed-bg" @click="hideModal"></div>
        <div class="modal-wrap">
            <button class="modal-close" @click="hideModal">닫기</button>
            <div class="modal-header">
                공유하기
            </div>
            <div class="p-2 modal-body">
                <div class="sns-wrap">
                    <a href="javascript:;">
                        <span class="circle"><img src="~/assets/image/common/sns_kakao.svg" alt="카카오톡"></span>
                    </a>
                    <a href="javascript:;">
                        <span class="circle"><img src="~/assets/image/common/sns_naver.svg" alt="네이버"></span>
                    </a>
                    <a href="javascript:;">
                        <span class="circle">URL</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["close"]);

const hideModal = ($event) => {
    emit('close');
};



</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list.scss";
</style>
