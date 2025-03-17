<template>
    <div class="modal" :class="[modalTypeClass, { 'show': modalShow }]">
        <div class="dimmed-bg" v-if="dimmedShow" @click="canClose ? closeUseDim : null"></div>
        <div class="modal-wrap">
            <button class="modal-close" @click="emit('modal-close')">닫기</button>
            <div class="modal-header">
                {{ title }}
            </div>
            <div class="modal-body" :class="bodyCustomClass">
                <slot />
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    modalShow: Boolean,
    modalTypeClass: String,
    dimmedShow: Boolean,
    canClose: Boolean,
    title: String,
    bodyCustomClass: String
})

const emit = defineEmits(['modal-close'])

const closeUseDim = () => {
    emit('modal-close')
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/components/modal.scss";
</style>