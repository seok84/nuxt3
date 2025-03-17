<template>
    <section class="customer customer-notice">
        <div class="title-h1">고객센터</div>
        <customerTab></customerTab>
        <div class="board">
            <div class="list" v-for="(list, index) in sortedNotice" :key="`${list.noticeRegistDate}-${index}`">
                <div class="list-title">
                    <button type="button" class="flex space-between" @click="toggleNotice(index)">
                        <p class="title-wrap">
                            <span class="label" v-if="list.fixedStatus == true">공지</span>
                            <strong class="title">{{ list.noticeTittle }}</strong>
                        </p>
                        <span class="date">{{ list.noticeRegistDate }}</span>
                    </button>
                </div>
                <div class="content" v-show="list.noticeContent && noticeOpen == index">
                    <a :href="list.externalLink" class="notice-link">
                        <img src="~/assets/image/ico/ico_rink.svg" alt="링크">
                        <span>{{ list.externalLink }}</span>
                    </a>
                    <div v-html="list.noticeContent"></div>
                </div>
            </div>
        </div>
        <uiPagination :currentPage="pageSet.currentPage" :totalPages="pageSet.totalPages" />
    </section>
</template>
<script setup>
import { ref, computed } from 'vue';

    const customerNoticeSample = useSampleData('/_sample/customerNotice.json');

    definePageMeta({
        name: 'customer-notice',
        title: '고객센터'
    });

    const noticeOpen = ref(0);
    const toggleNotice = (val) => {
        noticeOpen.value = val;
    }
    const noticeContent = ref(customerNoticeSample);


    const sortedNotice = computed(()=>{
        return [...noticeContent.value].sort((a,b)=> b.fixedStatus - a.fixedStatus);
    })

    const pageSet = reactive({
        currentPage: 1,
        totalPages:1,
    })
</script>
<style lang="scss">
@use '~/assets/scss/pages/customer/customer_main.scss';
</style>