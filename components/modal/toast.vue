<template>
    <div class="toast" ref="toastModal">
        <p class="desc">{{ desc }}</p>
        <button class="modal-close" @click="hideToast"></button>
    </div>
</template>
<script setup>

const props = defineProps({
    desc: {
        type: String,
        default : ''
    }
});

const toastShow = ref(true);

const hideToast = () => {
    this.$refs[toastModal].classList.add('bounce-out-down');

    this.$nextTick(() => {
        setTimeout(() => {
            this.$refs[toastModal].classList.remove('bounce-out-down');
            this.$refs[toastModal].classList.add('hide');
        }, 1000);
    });
}
</script>
<style lang="scss" scoped>
@use "@/assets/scss/pages/components/modal.scss";
</style>