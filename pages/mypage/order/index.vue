<script setup>
    import { reactive  } from 'vue';
    const myOrderSample = useSampleData('/_sample/mypage_orderList.json');
    const itemLisSample = useSampleData('/_sample/itemList.json');

    definePageMeta({
        layout: 'mypage',
        name: 'mypage-order',
        title:'주문/배송 조회'
    });

    const getOrderStatusLabelColor = (orderStatus) => {
        if (["0", "10", "20", "35"].includes(orderStatus)) {
            return "deposit-waiting";
        } else if (["30", "55"].includes(orderStatus)) {
            return "delivery";
        } else if (["40", "50", "60", "70"].includes(orderStatus)) {
            return "delivery-completed";
        } else if (["65", "75"].includes(orderStatus)) {
            return "cancel-completed";
        } else if (["59", "69"].includes(orderStatus)) {
            return "";
        }
    }
    
    const pageSet = reactive({
        currentPage: 1,
        totalPages:1,
    })

    const orderList = reactive({
        content : myOrderSample
    })

    
    const orderPopup = (param) => {
        switch (param.type) {
                case 'confirm':
                    confirmPopup();
                    break;
                case 'exchange':
                    exchangePopup();
                    break;
                case 'return':
                    returnPopup();
                    break;
                case 'cancel':
                    cancelPopup();
                    break;
                case 'orderCancel':
                    orderCancel();
                    break;
                case 'review':
                    reviewPopup();
                    break;
                default:
                    break;
            }
    };

    const confirmPopup = () => {
        if(confirm('구매확정하시겠습니까?')) {
            modalStatus.buyConfirmModalShow = true;
        }
    }

    const exchangePopup = () => {
        modalStatus.exchangeModalShow = true;
    }

    const returnPopup = () => {
        modalStatus.returnModalShow = true;
    }

    const cancelPopup = () => {
        modalStatus.cancelModalShow = true;
    }

    const orderCancel = () => {
        modalStatus.cancelModalShow = true;
    }

    const reviewPopup = () => {
        modalStatus.reviewModalShow = true;
    }

    const deliveryLink = () => {
        console.log('deliveryLink')
    };

    const modalStatus = reactive({
        reviewModalShow: false,
        buyConfirmModalShow: false,
        cancelModalShow: false,
        exchangeModalShow: false,
        returnModalShow: false,
        deliveryOption: 'return', // 기본값 설정
    })

    const modalData = reactive({
        content : itemLisSample[0]
    })

    const uploadPhotos = reactive({
        images:["/thumb/01.png","/thumb/02.png","/thumb/03.png","/thumb/04.png"]
    })

    const deleteImage = (index) => {
        console.log(`${index} 삭제!`)
    }
</script>
<template>
    <section class="mypage-order">
        <div class="title-container">
            <h2 class="title-h2">주문/배송 조회</h2>
        </div>
        <ul class="dot-list pc">
            <li>제품 구매 후, 14일이 지나면 자동으로 '구매확정'이 됩니다.</li>
            <li>[주문상세]를 클릭하시면 주문 상세 내역 및 상품별 배송현황을 조회하실 수 있습니다.</li>
        </ul>
        <form-period-search @selectedPeriod="" />
        <!-- // 주문 내역 -->
        <div class="order-item-wrapper">
            <template v-if="orderList.content != null">
                <div class="order-item-wrapper">
                    <template v-for="(o, index) in orderList.content" :key="o.orderCode">
                        <div class="order-item">
                            <div class="info">
                                <span class="date">{{ $dateFormat(o.createdDate) }}</span>
                                <NuxtLink :to="'/'" class="detail">
                                    <span>{{ o.orderCode }}</span>
                                    <i class="arrow"></i>
                                </NuxtLink>
                            </div>
                            <div class="order-status">
                                <template v-for="(data, index) in o.items" :key="index">
                                    <mypage-order-item :order-code="o.orderCode" :item="data"
                                        :order-status-label-color="getOrderStatusLabelColor(data.orderStatus)"
                                        @orderPopup="orderPopup" @deliveryLink="deliveryLink" />
                                </template>
                            </div>
                        </div>
                    </template>
                </div>
                <uiPagination :currentPage="pageSet.currentPage" :totalPages="pageSet.totalPages" />
            </template>
            <template v-else>
                <div class="no-contents">
                    <p>주문내역이 없습니다.</p>
                </div>
            </template>
        </div>
        <!-- 
            모달
        -->
        <!-- 후기작성 -->
        <modal-default :title="'후기작성'" :modalTypeClass="'modal-product modal-review'"
            :modalShow="modalStatus.reviewModalShow" :dimmedShow="true" :bodyCustomClass="'p-2'"
            @modalClose="modalStatus.reviewModalShow = false">
            <mypage-popup-item :item-data="modalData.content" />
            <div class="check-wrap">
                <label class="input-checkbox"><input type="checkbox"><i></i> 상품옵션 미노출</label>
            </div>
            <span class="divider"></span>
            <p class="eval-txt">상품은 어떠셨나요?</p>
            <item-score-star :score="5" />
            <textarea name="" id="" cols="30" rows="10" class="form-basic text-area" placeholder="내용을 입력하세요"></textarea>
            <p class="form-title">추가정보 입력</p>
            <div class="select-wrap">
                <select name="" id="" class="input-select">
                    <option value="">선택사항</option>
                </select>
            </div>
            <label for="addPhoto" class="btn btn-default btn-add-photo">
                <input type="file" name="addPhoto" id="addPhoto" class="hidden">
                <img src="~/assets/image/ico/ico_camera.svg" alt="사진 첨부하기" class="ico"><span>사진 첨부하기</span>
                <span class="benefit-balloon">포토후기 +2,000P</span><!-- v-show="!checkPhotoList" -->
            </label>
            <ul class="photo-list">
                <li class="photo-item" v-for="(item, index) in uploadPhotos.images" :key="index">
                    <img :src="item" :alt="item">
                    <button type="button" class="btn-delete" @click="deleteImage(index)">삭제</button>
                </li>
            </ul>
            <ul class="dot-list large-dot">
                <li>5MB 이하의 사진 4장까지 첨부 가능</li>
                <li>이용후기는 구매확정 된 상품에 한하여 주문일로부터 90일내 작성 가능합니다.</li>
                <li><em>일반후기 1,000P / 포토후기 2,000P</em> 적립해드립니다.</li>
            </ul>
            <div class="link-wrap">
                <button type="button" class="btn btn-primary-line link-item w-half"
                    @click="modalStatus.reviewModalShow = false">취소</button>
                <button type="submit" class="btn btn-primary link-item w-half">등록</button>
            </div>
        </modal-default>
        <!-- 구매확정 -->
        <modal-default :title="'구매확정'" :modalTypeClass="'modal-product modal-review'"
            :modalShow="modalStatus.buyConfirmModalShow" :dimmedShow="true" :bodyCustomClass="'p-2'"
            @modalClose="modalStatus.buyConfirmModalShow = false">
            <p class="buy-confirm-txt">
                <strong>구매확정해 주셔서 감사합니다.</strong>
                <span>
                    지금 바로 고객님의 소중한 후기를 남겨주세요.<br />
                    작성해 주시는 이용후기는 다른 분의 쇼핑에
                    소중한 정보가 됩니다.
                </span>
            </p>
            <mypage-popup-item :item-data="modalData.content" />
            <div class="check-wrap">
                <label class="input-checkbox"><input type="checkbox"><i></i> 상품옵션 미노출</label>
            </div>
            <span class="divider"></span>
            <p class="eval-txt">상품은 어떠셨나요?</p>
            <item-score-star :score="5" />
            <textarea name="" id="" cols="30" rows="10" class="form-basic text-area" placeholder="내용을 입력하세요"></textarea>
            <p class="form-title">추가정보 입력</p>
            <div class="select-wrap">
                <select name="" id="" class="input-select">
                    <option value="">선택사항</option>
                </select>
            </div>
            <label for="addPhoto" class="btn btn-default btn-add-photo">
                <input type="file" name="addPhoto" id="addPhoto" class="hidden">
                <img src="~/assets/image/ico/ico_camera.svg" alt="사진 첨부하기" class="ico"><span>사진 첨부하기</span>
                <span class="benefit-balloon">포토후기 +2,000P</span><!-- v-show="!checkPhotoList" -->
            </label>
            <ul class="photo-list">
                <li class="photo-item" v-for="(item, index) in uploadPhotos.images" :key="index">
                    <img :src="item" :alt="item">
                    <button type="button" class="btn-delete" @click="deleteImage(index)">삭제</button>
                </li>
            </ul>
            <ul class="dot-list large-dot">
                <li>5MB 이하의 사진 4장까지 첨부 가능</li>
                <li>이용후기는 구매확정 된 상품에 한하여 주문일로부터 90일내 작성 가능합니다.</li>
                <li><em>일반후기 1,000P / 포토후기 2,000P</em> 적립해드립니다.</li>
            </ul>
            <div class="link-wrap">
                <button type="button" class="btn btn-primary-line link-item w-half" @click="">취소</button>
                <button type="submit" class="btn btn-primary link-item w-half">등록</button>
            </div>
        </modal-default>
        <!-- 취소신청 -->
        <modal-default :title="'취소신청'" :modalTypeClass="'modal-product'" :modalShow="modalStatus.cancelModalShow"
            :dimmedShow="true" :bodyCustomClass="'p-2 type-cancel'" @modalClose="modalStatus.cancelModalShow = false">
            <div class="check-wrap all-check">
                <label class="input-checkbox"><input type="checkbox"><i></i> 전체선택</label>
            </div>
            <mypage-popup-item :item-data="modalData.content" />
            <span class="divider"></span>
            <p class="form-title">취소사유</p>
            <div class="select-wrap">
                <select class="input-select">
                    <option value="">취소 사유 직접입력</option>
                    <option value="">셀렉트박스 옵션</option>
                </select>
            </div>
            <div class="form-line">
                <input type="text" class="form-basic" placeholder="취소 사유를 입력하세요" />
                <span class="feedback invalid">유효성 메시지</span>
            </div>
            <ul class="dot-list large-dot">
                <li>주문 시 사용한 쿠폰과 적립금은 취소 시 복구됩니다. (단, 쿠폰의 경우 유효기간이 남은 쿠폰에 한함)</li>
                <li>이미 상품이 발송된 것으로 확인되면 취소 요청이 자동으로 철회되며, 이 경우 상품을 받으신 후 반품신청을 하실 수 있습니다.</li>
            </ul>
            <!-- 환불정보 -->
            <div class="return-content">
                <h3 class="form-title">환불정보</h3>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="예금주명" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line bank">
                    <div class="flex">
                        <div class="select-wrap">
                            <select class="input-select">
                                <option value="">은행명</option>
                                <option value="">셀렉트박스 옵션</option>
                            </select>
                        </div>
                        <input type="text" class="form-basic" placeholder="계좌번호" />
                    </div>
                </div>
                <ul class="dot-list large-dot">
                    <li>부분취소가 불가능한 결제방식(카드)의 경우 위에 입력하신 계좌로 취소금액을 입금해드립니다.</li>
                    <li>통장입금의 경우 택배가 판매자에게 도착한 후, 2~3일 이내에 반품 신청하신 계좌로 입금됩니다.</li>
                </ul>
            </div>
            <div class="cancel-product">
                <table>
                    <tbody>
                        <tr class="list">
                            <th>취소상품금액</th>
                            <td>9,999,999원</td>
                        </tr>
                        <tr class="list">
                            <th>취소배송비</th>
                            <td>5,000원</td>
                        </tr>
                        <tr class="list">
                            <th>추가배송비</th>
                            <td>5,000원</td>
                        </tr>
                        <tr class="total">
                            <th>총 환불금액</th>
                            <td>9,999,999원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul class="dot-list large-dot">
                <li>환불 금액에 대한 내용이 노출되고 있습니다. 환불 금액에 대한 내용이 노출되고 있습니다. 환불 금액에 대한 내용이 노출되고 있습니다. </li>
            </ul>
            <div class="link-wrap">
                <button type="button" class="btn btn-primary-line link-item w-half"
                    @click="modalStatus.cancelModalShow = false">취소</button>
                <button type="submit" class="btn btn-primary link-item w-half">등록</button>
            </div>
        </modal-default>
        <!-- 교환신청 -->
        <modal-default :title="'교환신청'" :modalTypeClass="'modal-product'" :modalShow="modalStatus.exchangeModalShow"
            :dimmedShow="true" :bodyCustomClass="'p-2 type-exchange'"
            @modalClose="modalStatus.exchangeModalShow = false">
            <div class="check-wrap all-check">
                <label class="input-checkbox"><input type="checkbox"><i></i> 전체선택</label>
            </div>
            <mypage-popup-item :item-data="modalData.content" />
            <div class="article-divider"></div>
            <!-- 취소사유 -->
            <form>
                <h3 class="form-title">교환사유</h3>
                <div class="select-wrap">
                    <select class="input-select">
                        <option value="">제품이 손상되어 왔어요</option>
                        <option value="">셀렉트박스 옵션</option>
                    </select>
                </div>
                <label for="addPhoto" class="btn btn-default btn-add-photo">
                    <input type="file" name="addPhoto" id="addPhoto" class="hidden">
                    <img src="~/assets/image/ico/ico_camera.svg" alt="사진 첨부하기" class="ico"><span>사진 첨부하기</span>
                </label>
                <ul class="photo-list">
                    <li class="photo-item" v-for="(item, index) in uploadPhotos.images" :key="index">
                        <img :src="item" :alt="item">
                        <button type="button" class="btn-delete" @click="deleteImage(index)">삭제</button>
                    </li>
                </ul>
                <ul class="dot-list large-dot">
                    <li>5MB 이하의 사진 4장까지 첨부 가능</li>
                </ul>
                <!-- 반송방법 -->
                <h3 class="form-title">반송방법 </h3>
                <div class="radio-wrap">
                    <label class="input-radio"><input type="radio" name="exchange-way"
                            v-model="modalStatus.deliveryOption" value="return"><i></i>회수요청
                    </label>
                    <label class="input-radio"><input type="radio" name="exchange-way"
                            v-model="modalStatus.deliveryOption" value="direct">
                        <i></i>직접발송</label>
                </div>
                <div class="form-line package" v-show="modalStatus.deliveryOption === 'direct'">
                    <div class="flex">
                        <div class="select-wrap">
                            <select name="" id="" class="input-select">
                                <option value="">택배사</option>
                                <option value="">택배사</option>
                            </select>
                        </div>
                        <input type="text" class="form-basic" placeholder="송장번호">
                    </div>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="홍길동" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="'-'없이 번호만 입력" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <div class="flex">
                        <input type="text" class="form-basic" placeholder="우편번호 찾기" readonly />
                        <button class="btn btn-black">우편번호</button>
                    </div>
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="기본주소" readonly />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="상세주소" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="link-wrap">
                    <button type="button" class="btn btn-primary-line link-item w-half"
                        @click="modalStatus.exchangeModalShow = false">취소</button>
                    <button type="submit" class="btn btn-primary link-item w-half">신청</button>
                </div>
            </form>
        </modal-default>
        <!-- 반품신청 -->
        <modal-default :title="'반품신청'" :modalTypeClass="'modal-product'" :modalShow="modalStatus.returnModalShow"
            :dimmedShow="true" :bodyCustomClass="'p-2 type-exchange'" @modalClose="modalStatus.returnModalShow = false">
            <div class="check-wrap all-check">
                <label class="input-checkbox"><input type="checkbox"><i></i> 전체선택</label>
            </div>
            <mypage-popup-item :item-data="modalData.content" />
            <div class="article-divider"></div>
            <!-- 취소사유 -->
            <form>
                <h3 class="form-title">교환사유</h3>
                <div class="select-wrap">
                    <select class="input-select">
                        <option value="">제품이 손상되어 왔어요</option>
                        <option value="">셀렉트박스 옵션</option>
                    </select>
                </div>
                <label for="addPhoto" class="btn btn-default btn-add-photo">
                    <input type="file" name="addPhoto" id="addPhoto" class="hidden">
                    <img src="~/assets/image/ico/ico_camera.svg" alt="사진 첨부하기" class="ico"><span>사진 첨부하기</span>
                </label>
                <ul class="photo-list">
                    <li class="photo-item" v-for="(item, index) in uploadPhotos.images" :key="index">
                        <img :src="item" :alt="item">
                        <button type="button" class="btn-delete" @click="deleteImage(index)">삭제</button>
                    </li>
                </ul>
                <ul class="dot-list large-dot">
                    <li>5MB 이하의 사진 4장까지 첨부 가능</li>
                </ul>
                <!-- 반송방법 -->
                <h3 class="form-title">반송방법 </h3>
                <div class="radio-wrap">
                    <label class="input-radio"><input type="radio" name="exchange-way"
                            v-model="modalStatus.deliveryOption" value="return"><i></i>회수요청
                    </label>
                    <label class="input-radio"><input type="radio" name="exchange-way"
                            v-model="modalStatus.deliveryOption" value="direct">
                        <i></i>직접발송</label>
                </div>
                <div class="form-line package" v-show="modalStatus.deliveryOption === 'direct'">
                    <div class="flex">
                        <div class="select-wrap">
                            <select name="" id="" class="input-select">
                                <option value="">택배사</option>
                                <option value="">택배사</option>
                            </select>
                        </div>
                        <input type="text" class="form-basic" placeholder="송장번호">
                    </div>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="홍길동" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="'-'없이 번호만 입력" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <div class="flex">
                        <input type="text" class="form-basic" placeholder="우편번호 찾기" readonly />
                        <button class="btn btn-black">우편번호</button>
                    </div>
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="기본주소" readonly />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="상세주소" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="link-wrap">
                    <button type="button" class="btn btn-primary-line link-item w-half"
                        @click="modalStatus.returnModalShow = false">취소</button>
                    <button type="submit" class="btn btn-primary link-item w-half">신청</button>
                </div>
            </form>
        </modal-default>

    </section>
</template>
<style lang="scss">
@use "~/assets/scss/pages/mypage/mypage_order.scss";
</style>