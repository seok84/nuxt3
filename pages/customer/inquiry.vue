<template>
    <section class="customer customer-inquiry">
        <div class="title-h1">고객센터</div>
        <customerTab></customerTab>
        <div class="container">
            <div class="sort-wrap">
                <span class="all-items">전체<strong>{{ inquiryContent.content.length }}</strong>개</span>
                <button type="button" class="switch-details" @click="switchDetail = !switchDetail">1:1문의</button>
            </div>
            <!-- 1:1 문의 form -->
            <div class="inquiry-form" v-show="switchDetail">
                <form>
                    <div class="select-wrap">
                        <select class="input-select">
                            <option value=""> 문의 유형을 선택하세요</option>
                            <option value="">셀렉트박스 옵션</option>
                        </select>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="제목을 입력해주세요" />
                        <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" class="form-basic text-area"
                        placeholder="내용을 입력해주세요"></textarea>
                    <FormPhotoUpload />
                    <ul class="dot-list">
                        <li>5MB 이하의 사진 4장까지 첨부 가능</li>
                    </ul>
                    <div class="link-wrap gap">
                        <button type="button" class="btn btn-primary-line link-item w-half">취소</button>
                        <button type="button" class="btn btn-primary link-item w-half">등록</button>
                    </div>
                </form>
            </div>
            <!-- 문의 목록 -->
            <template v-if="inquiryContent.content">
                <ul class="inquiry-content">
                    <li v-for="(list, index) in inquiryContent.content" :key="index" class="inquiry-list">
                        <!-- 답변 상태 -->
                        <div class="delivery-status-wrap">
                            <p :class="['status', list.adminAnswer ? 'answer-completed' : 'answer-waiting']">
                                {{ list.adminAnswer ? '답변완료' : '답변대기' }}
                            </p>

                        </div>
                        <!-- 사용자 문의 -->
                        <div class="user-writing">
                            <p class="title">
                                <strong class="category">[{{ list.inquiryCategory == 11 ? '환불문의' : list.inquiryCategory
                                    == 12 ? '배송문의' : null
                                    }}]
                                </strong>
                                <span class="question">{{ list.inquiryTitle }}</span>
                            </p>
                            <p class="content" v-html="list.inquiryContent"></p>
                            <ul class="photo-list" v-if="list.userUploadedPhotos.length > 0">
                                <li v-for="(photo, idx) in list.userUploadedPhotos" :key="idx" class="photo-item"
                                    @click="showModal = true">
                                    <img :src="photo" alt="fileName" class="thumbnail">
                                </li>
                            </ul>
                        </div>
                        <!-- 관리자답변 -->
                        <div class="admin-answer" v-if="list.adminAnswer">
                            <p class="administrator">관리자 답변</p>
                            <div class="content" v-html="list.adminAnswer">
                            </div>
                            <p class="date">답변일 {{ list.answerRegistDate }}</p>
                        </div>
                    </li>
                </ul>
                <uiPagination :currentPage="pageSet.currentPage" :totalPages="pageSet.totalPages" />
            </template>
            <!-- 문의 없음 -->
            <div class="no-contents" v-else>
                <img src="~/assets/image/common/img_noQna.png" alt="게시글 없음">
                <p>작성하신 게시글이 없습니다.</p>
            </div>
        </div>
    </section>
    <div class="modal image-pop" :class="{ 'show': showModal == true }">
        <div class="dimmed-bg" @click="showModal = false"></div>
        <ul class="image-wrap">
            <button class="modal-close" @click="showModal = false">닫기</button>
            <div class="pc">
                <div class="expansion-img">
                    <img src="~/assets/image/sample/no_content_720480.png" alt="미리보기">
                </div>
            </div>
            <ul class="image-list">
                <li class="image-item"><img src="~/assets/image/sample/no_content_720480.png" alt="" srcset=""
                        @click="getImageSrc($event)"></li>
                <li class="image-item"><img src="~/assets/image/sample/sample_01.png" alt="" srcset=""
                        @click="getImageSrc($event)"></li>
                <li class="image-item"><img src="~/assets/image/sample/sample_02.png" alt="" srcset=""
                        @click="getImageSrc($event)"></li>
                <li class="image-item"><img src="~/assets/image/sample/no_content.png" alt="" srcset=""
                        @click="getImageSrc($event)"></li>
            </ul>
        </ul>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
const inquirySample = useSampleData('/_sample/customerinquiry.json');

definePageMeta({
    name:'customer-inquiry',
    title:'고객센터'
});

const inquiryContent = reactive({
    content: inquirySample
})

const switchDetail = ref(false);
const showModal = ref(false);

const getImageSrc = (e) => {
    let expansionImg = document.querySelector('.expansion-img img');
    let clikedImage = e.target.getAttribute('src');
    expansionImg.setAttribute('src', clikedImage);
}

const pageSet = reactive({
    currentPage: 1,
    totalPages:1,
})

</script>
<style lang="scss">
@use '~/assets/scss/pages/customer/customer_main.scss';
</style>