<template>
    <section class="event-list-wrap">
        <ul class="event-list">
            <li class="event-item" v-for="(data, index) in featuredData">
                <NuxtLink :to="data.url">
                    <div class="event-thumbnail">
                        <img :src="data.image" :alt="data.content">
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>


<script setup>
const props = defineProps({
    featuredData : {
        type: Array,
        default: () => {
            return []
        }
    }
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/main/main_feature";
</style>