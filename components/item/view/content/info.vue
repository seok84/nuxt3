<template>
    <section class="detail-info-contents" :class="{ 'active': isShowDetailInfo }">
        <div class="admin-content-wrap">
            <div class="admin-content">
                html 관리자 컨텐츠 내용
                <img src="~/assets/image/sample/detail_info.png" alt="html 관리자 컨텐츠 이미지 예시">
            </div>
            <button class="btn btn-primary-line btn-round btn-more" @click="isShowDetailInfo = true"><span>상품정보
                    더보기</span></button>
        </div>
        <div class="detail-table">
            <table>
                <tbody>
                    <tr>
                        <th>대표자명</th>
                        <td>배동혁, 박종진</td>
                    </tr>

                    <tr>
                        <th>사업자번호</th>
                        <td>111-22-3333</td>
                    </tr>
                    <tr>
                        <th>통신판매업 신고</th>
                        <td>2015-서울구로-12345</td>
                    </tr>
                    <tr>
                        <th>연락처</th>
                        <td>02-6737-9200</td>
                    </tr>
                    <tr>
                        <th>응대가능시간</th>
                        <td>09:00 ~ 18:00</td>
                    </tr>
                    <tr>
                        <th>E-mail</th>
                        <td>abcc@onlinepowers.com</td>
                    </tr>
                    <tr>
                        <th>FAX</th>
                        <td>02-6737-3330</td>
                    </tr>
                    <tr>
                        <th>소재지</th>
                        <td>서울특별시 구로구 디지털로 27길
                            24 벽산디지털밸리 1차 711호</td>
                    </tr>

                </tbody>
            </table>
        </div>

    </section>
</template>

<script setup>
import { ref  } from 'vue';
const isShowDetailInfo = ref(false);

</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list";
</style>