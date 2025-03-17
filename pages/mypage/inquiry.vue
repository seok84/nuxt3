<template>
    <section class="mypage-inquiry">
        <div class="title-container">
            <h2 class="title-h2">상품문의</h2>
        </div>
        <!-- <div class="all-items">전체 <strong>123</strong>개</div> -->
        <form-period-search-no-qeury />
        <ul class="review-content" v-if="inquiryContent.content != null && inquiryContent.content.length > 0">
            <li v-for="(data, index) in inquiryContent.content" :key="data.id">
                <!-- 상품영역 -->
                <div class="item-list-container horizon">
                    <div class="item-list">

                        <contentThumbnail :item="{
                            itemUserCode: data.itemUserCode,
                            itemImage: data.itemImage,
                            itemSoldOutFlag: false,
                            label: []
                        }" />

                        <!-- 아이템 정보 영역 -->
                        <div class="info-container">
                            <div class="title-main paragraph-ellipsis">
                                {{ data.itemName }}
                            </div>
                        </div>
                    </div>
                </div>
                <span class="divider"></span>
                <!-- 답변 상태 -->
                <div class="delivery-status-wrap">
                    <p class="status answer-waiting" v-if="data.answerFlag !== true">답변대기</p>
                    <p class="status answer-completed" v-else>답변완료</p>
                    <div class="util">
                        <span class="date">{{ data.date }}</span>
                        <span class="divider"></span>
                        <button type="button" class="delete-inquiry" @click="deleteItemQna(data.id)">삭제</button>
                    </div>
                </div>
                <!-- 사용자 문의 -->
                <div class="user-writing">
                    <p class="title"><strong>[{{ data.label }}]</strong><span>{{ data.subject }}</span></p>
                    <p class="content">{{ data.question }} </p>
                </div>

                <div class="admin-answer" v-if="data.answerFlag === true">
                    <p class="administrator">관리자 답변</p>
                    <p class="title">{{ data.answer.title }} </p>
                    <div class="content"> {{ data.answer.answer }} </div>
                    <p class="date">답변일 {{ data.answer.date }}</p>
                </div>
            </li>
        </ul>
        <uiPagination :currentPage="pageSet.currentPage" :totalPages="pageSet.totalPages" />

    </section>
</template>
<script setup>
import { reactive } from 'vue';
const inquirySample = useSampleData('/_sample/itemQnA.json');
import contentThumbnail from '~/components/mypage/part/thumbnail.vue'

definePageMeta({
    layout: 'mypage',
    name: 'mypage-inquiry',
    title: '상품문의'
});


const inquiryContent = reactive({
    content: inquirySample,
})

const pageSet = reactive({
    currentPage: 1,
    totalPages:1,
})

const deleteItemQna = (id) => {
    alert(`${id} 문의를 삭제하시겠습니까?`)

}

</script>
<style lang="scss">
@use "~/assets/scss/pages/mypage/mypage_review.scss";
</style>