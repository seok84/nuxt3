<template>
    <div class="order-completed-page">
        <layoutHeaderInner title="주문하기" type-style="header-detail" type="detail" />
        <h1 class="title-h1 pc">주문하기</h1>
        <div class="w-582">
            <div class="info-order">
                <img src="~/assets/image/cart/ico_completed.svg" alt="competed">
                <span>고객님의 주문이 정상적으로 완료되었습니다.</span>
                <div class="order-number">
                    <p>주문번호</p>
                    <p>K12345678901234</p>
                </div>
                <div class="order-date">2023-11-30 12:00:00</div>
            </div>
            <div class="content-table list info-freebank">
                <table>
                    <tbody>
                        <tr>
                            <th>계좌</th>
                            <td>국민은행 123-1223-123-12</td>
                        </tr>
                        <tr>
                            <th>예금주</th>
                            <td>(주)세일즈온</td>
                        </tr>
                        <tr>
                            <th>금액</th>
                            <td>109,004원</td>
                        </tr>
                        <tr>
                            <th>입금기한</th>
                            <td>2023-12-31</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 배송지 정보 -->
            <h3 class="content-title"><i class="ico"><img src="~/assets/image/ico/ico_location.svg" alt="배송지 정보"></i>배송지
                정보
            </h3>
            <div class="content-table list">
                <table>
                    <tbody>
                        <tr>
                            <th>받는 분</th>
                            <td>받는사람 이름</td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>[08381] 서울 구로구 디지털로27길 24(벽산디지털밸리) 711호 온라인파워스</td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td>010-1234-5678</td>
                        </tr>
                        <tr>
                            <th>배송메세지</th>
                            <td>경비실에 맡겨주세요</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 결제정보 -->
            <h3 class="content-title"><i class="ico"><img src="~/assets/image/ico/ico_money.svg" alt="결제정보"></i>결제정보
            </h3>
            <ul class="info-payment-detail">
                <li>
                    <div class="method">
                        <span>신용카드</span>
                        <span>결제완료</span>
                        <span>영수증보기</span>
                    </div>
                    <div class="amount">
                        <span>19,900<b>원</b></span>
                    </div>
                    <div class="date">2023-01-01<b>12:00:00</b></div>
                </li>
                <li>
                    <div class="method">
                        <span>포인트</span>
                        <span>결제완료</span>
                    </div>
                    <div class="amount">
                        <span>19,900<b>원</b></span>
                    </div>
                    <div class="date">2023-01-01<b>12:00:00</b></div>
                </li>
            </ul>
            <div class="btn-wrap gap">
                <button class="btn btn-round btn-large btn-primary-line">주문내역 확인</button>
                <button class="btn btn-round btn-large btn-primary">쇼핑 계속하기</button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);
const toggleActive = () => {
    isActive.value = !isActive.value;
}

</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/order/order";
</style>