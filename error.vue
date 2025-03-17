<script setup>
const error = useError();

const handleError = () => {
    clearError({
        redirect: '/',
    });
};
</script>
<template>
    <NuxtLayout>
        <div class="no-contents error">
            <template v-if="error.statusCode === 404">
                <img src="~/assets/image/common/img_404.png" alt="404" class="img-404">
                <p>요청한 페이지를 찾을 수 없습니다.</p>
                <p class="sub">홈페이지 이용에 불편을 드려 죄송합니다.<br />
                    새로고침을 누르시거나, 잠시 후에 이용해 주시기 바랍니다.</p>
            </template>
            <button class="btn btn-primary-line btn-round btn-home" @click="handleError">메인으로</button>
        </div>
    </NuxtLayout>
</template>
<style lang="scss">
@use "~/assets/scss/common.scss"
</style>