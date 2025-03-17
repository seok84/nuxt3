<template>
    <section class="mypage-review">
        <div class="title-container">
            <h2 class="title-h2">이용후기</h2>
        </div>
        <form-period-search-no-qeury />
        <ul class="review-content">
            <li v-for="(data, index) in reviewContent.content" :key="data.id + index">
                <div class="item-list-container horizon">
                    <div class="item-list">
                        <!-- 아이템 썸네일 영역 -->
                        <contentThumbnail :item="{
                            itemUserCode: data.itemUserCode,
                            itemImage: data.itemImage,
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
                <div class="eval">
                    <item-score-star :score="data.score" />
                    <div class="util">
                        <span class="date">{{ data.date }}</span>
                        <span class="divider"></span>
                        <button type="button" class="delete-inquiry" @click="deleteReview(data.id)">삭제</button>
                    </div>
                </div>
                <div class="user-writing">
                    <p class="content">{{ data.reviewDesc }}</p>
                </div>
                <div class="admin-answer" v-if="data.answerFlag">
                    <p class="administrator">관리자 답변</p>
                    <div class="content">{{ data.answer.title }} <br />
                        {{ data.answer.answer }}
                    </div>
                    <p class="date">{{ data.answer.date }}</p>
                </div>
            </li>
        </ul>
        <uiPagination :currentPage="pageSet.currentPage" :totalPages="pageSet.totalPages" />
    </section>
</template>

<script setup>
import { reactive } from 'vue';
const reviewSample = useSampleData('/_sample/review.json');
import contentThumbnail from '~/components/mypage/part/thumbnail.vue'

definePageMeta({
    layout: 'mypage',
    name: 'mypage-review',
    title:'이용후기'
});

const reviewContent = reactive({
    content: reviewSample,
})

const deleteReview = (id) => {
    alert(`${id} 리뷰를 삭제하시겠습니까?`)
}

const pageSet = reactive({
    currentPage: 1,
    totalPages:1,
})
</script>

<style lang="scss">
@use "~/assets/scss/pages/mypage/mypage_review.scss";
</style>