<template>
    <section class="customer customer-faq">
        <div class="title-h1">고객센터</div>
        <customerTab></customerTab>
        <div class="container">
            <div class="sort-wrap"><span class="all-items">전체 <strong>{{ faqContent.content.length }}</strong>개</span>
            </div>
            <div class="select-wrap">
                <form>
                    <div class="flex">
                        <select class="input-select">
                            <option value="">문의 유형을 선택하세요</option>
                            <option value="">셀렉트박스 옵션</option>
                        </select>
                        <button class="btn btn-form">조회</button>
                    </div>
                </form>
            </div>
            <template v-if="faqContent.content">
                <ul class="board board-text-type">
                    <li :class="['list', { 'open': faqOpen == index }]" v-for="(list, index) in faqContent.content"
                        :key="`${list.categoryStatus}-${index}`">
                        <button type="button" class="title-wrap" @click="toggleNotice(index)">
                            <span class="category">
                                {{ list.categoryStatus == 11 ? '[회원탈퇴]' :
                                    list.categoryStatus == 12 ? '[배송관련]' :
                                        list.categoryStatus == 13 ? '[반품/교환]' :
                                            list.categoryStatus == 14 ? '[포인트/적립]' :
                                                list.categoryStatus == 15 ? '[회원/정보관리]' :
                                                    null }}
                            </span>
                            <strong class="title">{{ list.questionTitle }}</strong>
                        </button>
                        <div class="content" v-show="list.registerAnswer && faqOpen == index">
                            <p class="ico question" v-html="list.userQuestionTitle"></p>
                            <p class="ico answer" v-html="list.registerAnswer">
                            </p>
                        </div>
                    </li>
                </ul>
                <uiPagination :currentPage="pageSet.currentPage" :totalPages="pageSet.totalPages" />
            </template>
            <!-- 문의 없음 -->
            <template v-else>
                <div class="no-contents">
                    <img src="~/assets/image/common/img_noQna.png" alt="게시글 없음">
                    <p>작성하신 게시글이 없습니다.</p>
                </div>
            </template>



        </div>
    </section>
</template>
<script setup>
import { reactive, ref, computed } from 'vue';
const customerFaqSample = useSampleData('/_sample/customerFaq.json');

definePageMeta({
    name:'customer-faq',
    title:'고객센터'
});

    const faqOpen = ref(0);
    const toggleNotice = (val) => {
        faqOpen.value = val;
    }
    const faqContent = ref(customerFaqSample);
    const pageSet = reactive({
        currentPage: 1,
        totalPages:1,
    })
</script>
<style lang="scss">
@use '~/assets/scss/pages/customer/customer_main.scss';
</style>