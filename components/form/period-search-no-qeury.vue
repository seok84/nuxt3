<template>
    <div class="period-container">
        <label class="date"><input type="date" class="form-basic"><i></i></label>
        <span class="divider">~</span>
        <label class="date"><input type="date" class="form-basic"><i></i></label>
        <div class="form-line box">
            <div class="flex">
                <div class="select-wrap">
                    <select class="input-select">
                        <option value="">조회기간</option>
                        <option value="">옵션</option>
                    </select>
                </div>
                <button class="btn btn-black" @click="emit('paging')">조회</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['paging'])
</script>
<style></style>