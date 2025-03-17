<template>
    <section class="detail-review-contents">
        <!-- 총 평점 -->
        <div class="total-rating">
            <p>총 평점</p>
            <div class="star-group">
                <div class="star-wrap">
                    <div class="star">
                        <i class="star1"></i>
                    </div>
                </div>
                <div class="score">
                    <span>1</span>/<span>5</span>
                </div>
            </div>
        </div>
        <!-- 필터 탭 -->
        <div class="filter-wrap">
            <p>총 <b>123</b>개 상품</p>
            <ul class="">
                <li class="active">전체</li>
                <li>최신순</li>
                <li>추천순</li>
            </ul>
        </div>
        <p class="btn-edit-review">
            <NuxtLink to="/mypage/review">후기작성하기</NuxtLink>
        </p>
        <div class="view-option">
            <div class="check-wrap">
                <label class="circle-input-checkbox"><input type="checkbox"><i></i>사진후기 보기</label>
            </div>
            <div class="select-wrap">
                <select class="input-select">
                    <option value="">기본 셀렉트박스</option>
                    <option value="">셀렉트박스 옵션</option>
                </select>
            </div>
        </div>
        <!-- 리뷰 리스트 -->
        <div>
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
                    <!-- 별점 -->
                    <div class="star-group">
                        <div class="star-wrap">
                            <div class="star">
                                <i class="star1"></i>
                            </div>
                        </div>
                        <div class="score">5</div>
                    </div>
                    <!-- 썸네일 -->
                    <ul class="photo-list">
                        <li class="photo-item">
                            <img src="~/assets/image/sample/no_content.png" alt="fileName" class="thumbnail">

                        </li>
                        <li class="photo-item">
                            <img src="~/assets/image/sample/no_content_720480.png" alt="fileName" class="thumbnail">

                        </li>
                        <li class="photo-item">
                            <img src="~/assets/image/sample/no_content_7201440.png" alt="fileName" class="thumbnail">

                        </li>
                        <li class="photo-item">
                            <img src="~/assets/image/sample/thum.png" alt="fileName" class="thumbnail">

                        </li>
                    </ul>
                    <!-- 사용자리뷰 -->
                    <div class="user-writing">
                        <p class="content">
                            리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역 리뷰
                            내용이
                            노출되는
                            영역 리뷰 내용이
                            노출되는 영역 리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역
                        </p>
                    </div>
                    <!-- 관리자 답변 -->
                    <div class="admin-answer">
                        <p class="administrator">관리자 답변</p>
                        <div class="content">안녕하세요 고객님. 고객센터 입니다. <br />
                            저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.<br />
                            소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                        </div>
                        <p class="date">답변일 2022-06-14</p>
                    </div>

                </li>
                <li class="review-item">
                    <!-- 작성정보 -->
                    <div class="creation-info">
                        <div>
                            <p>enco***</p>
                            <p>2023-12-13</p>
                        </div>
                        <p>신고/차단</p>
                    </div>
                    <!-- 별점 -->
                    <div class="star-group">
                        <div class="star-wrap">
                            <div class="star">
                                <i class="star1"></i>
                            </div>
                        </div>
                        <div class="score">5</div>
                    </div>
                    <!-- 썸네일 -->
                    <ul class="photo-list">
                        <li class="photo-item">
                            <img src="~/assets/image/sample/no_content.png" alt="fileName" class="thumbnail">

                        </li>
                        <li class="photo-item">
                            <img src="~/assets/image/sample/no_content_720480.png" alt="fileName" class="thumbnail">

                        </li>
                        <li class="photo-item">
                            <img src="~/assets/image/sample/no_content_7201440.png" alt="fileName" class="thumbnail">

                        </li>
                        <li class="photo-item">
                            <img src="~/assets/image/sample/thum.png" alt="fileName" class="thumbnail">

                        </li>
                    </ul>
                    <!-- 사용자리뷰 -->
                    <div class="user-writing">
                        <p class="content">
                            리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역 리뷰
                            내용이
                            노출되는
                            영역 리뷰 내용이
                            노출되는 영역 리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역 리뷰 내용이 노출되는 영역
                        </p>
                    </div>
                    <!-- 관리자 답변 -->
                    <div class="admin-answer">
                        <p class="administrator">관리자 답변</p>
                        <div class="content">안녕하세요 고객님. 고객센터 입니다. <br />
                            저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.<br />
                            소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                        </div>
                        <p class="date">답변일 2022-06-14</p>
                    </div>

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