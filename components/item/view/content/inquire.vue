<template>
    <section class="detail-inquire-contents">
        <!-- 필터 탭 -->
        <div class="filter-wrap">
            <p>총 <b>123</b>개</p>
            <span class="btn-edit-qna">Q&A 쓰기</span>
        </div>
        <!-- q&a작성 -->
        <form class="edit-qna-wrap">
            <div class="qna-option">
                <div class="select-wrap">
                    <select class="input-select">
                        <option value="">상품문의</option>
                        <option value="">내용전달없음</option>
                    </select>
                </div>
                <div class="check-wrap">
                    <label class="circle-input-checkbox"><input type="checkbox"><i></i>비밀글</label>
                </div>
            </div>
            <div class="form-line">
                <input type="text" class="form-basic" placeholder="제목을 입력해 주세요" />
                <span class="feedback invalid">유효성 메시지</span>
            </div>
            <div class="form-line">
                <textarea class="form-basic text-area" placeholder="내용을 입력해주세요" />
                <span class="feedback invalid">유효성 메시지</span>
            </div>

            <div class="btn-wrap gap">
                <button class="btn btn-primary">등록</button>
                <button class="btn btn-default">취소</button>
            </div>
        </form>
        <div>
            <!-- 상품문의 리스트 -->
            <ul class="review-content">
                <li class="review-item">
                    <!-- 작성자 정보 -->
                    <div class="creation-info">
                        <div>
                            <p>enco***</p>
                            <p>2023-12-13</p>
                        </div>
                        <p>신고/차단</p>
                    </div>
                    <!-- 답변 상태 -->
                    <div class="delivery-status-wrap">
                        <p class="status answer-waiting">답변대기</p>
                        <!-- <p class="status answer-completed">답변완료</p> -->
                    </div>
                    <!-- 사용자 문의 -->
                    <div class="user-writing">
                        <p class="title"><strong>[환불문의]</strong><span>질문자의 제목이 노출되고 있습니다</span></p>
                        <p class="content">고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는
                            질문 상세
                            내용이 노출되고 있습니다
                            고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는 질문 상세 내용이 노출되고
                            있습니다
                        </p>
                    </div>
                    <!-- 관리자 답변 -->
                    <!-- <div class="admin-answer">
                        <p class="administrator">관리자 답변</p>
                        <div class="content">안녕하세요 고객님. 고객센터 입니다.
                            저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.
                            소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                        </div>
                        <p class="date">답변일 2022-06-14</p>
                    </div> -->
                </li>
                <li class="review-item">
                    <!-- 작성자 정보 -->
                    <div class="creation-info">
                        <div>
                            <p>enco***</p>
                            <p>2023-12-13</p>
                        </div>
                        <p>신고/차단</p>
                    </div>
                    <!-- 답변 상태 -->
                    <div class="delivery-status-wrap">
                        <!-- <p class="status answer-waiting">답변대기</p> -->
                        <p class="status answer-completed">답변완료</p>
                    </div>
                    <!-- 사용자 문의 -->
                    <div class="user-writing">
                        <p class="title"><strong>[환불문의]</strong><span>질문자의 제목이 노출되고 있습니다</span></p>
                        <p class="content">고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는
                            질문 상세
                            내용이 노출되고 있습니다
                            고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는 질문 상세 내용이 노출되고
                            있습니다
                        </p>
                    </div>
                    <!-- 관리자 답변 -->
                    <div class="admin-answer">
                        <p class="administrator">관리자 답변</p>
                        <div class="content">안녕하세요 고객님. 고객센터 입니다.
                            저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.
                            소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                        </div>
                        <p class="date">답변일 2022-06-14</p>
                    </div>
                    <!-- 관리자 답변 비밀글 -->
                    <!-- <p class="administrator-secret">비밀글입니다.</p> -->

                </li>
                <li class="review-item">
                    <!-- 작성자 정보 -->
                    <div class="creation-info">
                        <div>
                            <p>enco***</p>
                            <p>2023-12-13</p>
                        </div>
                        <p>신고/차단</p>
                    </div>
                    <!-- 답변 상태 -->
                    <div class="delivery-status-wrap">
                        <!-- <p class="status answer-waiting">답변대기</p> -->
                        <p class="status answer-completed">답변완료</p>
                    </div>
                    <!-- 사용자 문의 -->
                    <div class="user-writing">
                        <p class="title"><strong>[환불문의]</strong><span>질문자의 제목이 노출되고 있습니다</span></p>
                        <!-- <p class="content">고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는 질문 상세
                            내용이 노출되고 있습니다
                            고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는 질문 상세 내용이 노출되고 있습니다 고객이 남기는 질문 상세 내용이 노출되고 있습니다
                        </p> -->
                    </div>
                    <!-- 관리자 답변 -->
                    <!-- <div class="admin-answer">
                        <p class="administrator">관리자 답변</p>
                        <div class="content">안녕하세요 고객님. 고객센터 입니다.
                            저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.
                            소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                        </div>
                        <p class="date">답변일 2022-06-14</p>
                    </div> -->
                    <!-- 관리자 답변 비밀글 -->
                    <p class="administrator-secret">비밀글입니다.</p>

                </li>
            </ul>
            <ul class="pagination">
                <li class="page-item"><span class="page-prev">이전페이지</span></li>
                <li class="page-item active"><span class="page-link">1</span></li>
                <li class="page-item"><span class="page-link">2</span></li>
                <li class="page-item"><span class="page-link">3</span></li>
                <li class="page-item"><span class="page-link">4</span></li>
                <li class="page-item"><span class="page-link">5</span></li>
                <li class="page-item"><span class="page-next">이전페이지</span></li>
            </ul>
        </div>
    </section>
</template>
<script setup>
import { ref  } from 'vue';

</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list";
</style>