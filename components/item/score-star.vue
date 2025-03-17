<template>
    <div class="score-wrap">
        <span v-for="n in 5" :key="n" :class="['star', { 'active': n <= score }]"></span>
    </div>
</template>
<script setup>
const props = defineProps({
    score : Number
})

</script>
<style></style>