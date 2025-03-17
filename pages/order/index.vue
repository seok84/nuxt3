<template>
    <div class="contents-area-page order-page">
        <layoutHeaderInner title="주문하기" type-style="header-detail" type="detail" />
        <h1 class="title-h1 pc">주문하기</h1>
        <div class="contents-area" ref="targetElement" :class="{ active: istargetActive }">
            <div class="contents-left">
                <!-- 주문자정보 -->
                <div class="toggle-title" :class="{ 'active': isOrderInfoActive }"
                    @click="isOrderInfoActive = !isOrderInfoActive">
                    <h2>주문자정보</h2>
                    <button type="button" class="toggle-arr"></button>
                </div>
                <!-- 개발소스 
                <div class="toggle-title" :class="{ 'active': isOrderInfoActive }"
                        @click="toggleInfoPanel('isOrderInfoActive')">
                    <h2>주문자정보</h2>
                    <button type="button" class="toggle-arr" :class="{ 'active': isOrderInfoActive }"></button>
                </div> -->
                <div class="toggle-content info-delivery">
                    <!-- 이름 -->
                    <div class="form-line">
                        <input type="text" class="form-basic disabled" placeholder="홍길동" disabled />
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                    <!-- 전화번호 -->
                    <div class="form-line">
                        <input type="text" class="form-basic disabled" placeholder="01011112222" />
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                    <!-- 이메일 -->
                    <div class="form-line">
                        <input type="email" class="form-basic disabled" placeholder="abc@abc.com" />
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                </div>
                <!-- 개발소스
                <div class="toggle-content info-delivery" v-if="isOrderInfoActive">
                    이름
                    <ValidationProvider tag="div" name="buyerName" rules="required" v-slot="{ errors }" >
                        <div class="form-line" :class="{'invalid': errors.length > 0}">
                            <input type="text" name="buyerName" class="form-basic" placeholder="홍길동" v-model="buy.buyer.userName" />
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    전화번호
                    <ValidationProvider tag="div" name="buyerMobile" rules="required|phoneNumber" v-slot="{ errors }" >
                        <div class="form-line" :class="{'invalid': errors.length > 0}">
                            <input type="text" name="buyerMobile" class="form-basic" placeholder="01011112222" v-model="buy.buyer.mobile" />
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    이메일
                    <ValidationProvider tag="div" name="buyerEmail" rules="required" v-slot="{ errors }" >
                        <div class="form-line" :class="{'invalid': errors.length > 0}">
                            <input type="email" name="buyerEmail" class="form-basic" placeholder="abc@abc.com" v-model="buy.buyer.email" />
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>
                </div>-->

                <!-- 배송정보 -->
                <div class="toggle-title" :class="{ 'active': isDeliveryInfoActive }"
                    @click="isDeliveryInfoActive = !isDeliveryInfoActive">
                    <h2>배송정보</h2>
                    <button type="button" class="toggle-arr"></button>
                </div>
                <div class="toggle-content info-delivery">
                    <!-- 이름 -->
                    <!-- 비회원은 disabled x -->
                    <div class="form-line">
                        <input type="text" class="form-basic disabled" placeholder="홍길동" disabled />
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                    <!-- 전화번호 -->
                    <!-- 비회원은 disabled x -->
                    <div class="form-line">
                        <input type="text" class="form-basic disabled" placeholder="01011112222" />
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                    <!-- 주소 (회원)-->
                    <div class="form-line">
                        <div class="flex">
                            <input type="text" class="form-basic disabled" placeholder="08318" />
                            <button class="btn btn-black" @click="showModalAddressList">주소변경</button>
                        </div>
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic disabled" placeholder="서울 구로구 디지털로27길 24(벽산디지털밸리)"
                            disabled />
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="711호 온라인파워스" />
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                    <!-- 주소 (비회원)-->
                    <!-- <div class="form-line">
                        <div class="flex">
                            <input type="text" class="form-basic disabled" placeholder="우편번호" />
                            <button class="btn btn-black">우편번호</button>
                        </div>
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic disabled" placeholder="기본주소" />
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="711호 온라인파워스" />
                        <span class="feedback invalid">유효성 메시지</span>
                    </div> -->
                    <!-- 배송문구 -->
                    <div class="select-wrap">
                        <select class="input-select">
                            <option value="">직접입력</option>
                            <option value="">집앞</option>
                            <option value="">경비실</option>
                        </select>
                    </div>
                    <!-- 배송문구 - 직접입력 선택일 때만 노출 -->
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="직접입력" />
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                </div>


                <!-- 주문 상품리스트 -->
                <div class="toggle-title toggle-order-list" :class="{ 'active': isProductInfoActive }"
                    @click="isProductInfoActive = !isProductInfoActive">
                    <h2>주문상품 정보 (N개)</h2>
                    <button type="button" class="toggle-arr"></button>
                </div>
                <!-- 개발소스
                <div class="toggle-title" :class="{ 'active': isProductInfoActive }"
                        @click="toggleInfoPanel('isProductInfoActive')">
                    <h2>주문상품 정보 ({{buy.receivers[0].totalShippingCount}}개)</h2>
                    <button type="button" class="toggle-arr" :class="{ 'active': isProductInfoActive }"></button>
                </div> -->

                <template v-for="(sellerShipping, sellerIndex) in state.buy">
                    <div class="toggle-content brand-container">
                        <div class="brand-name">{{ sellerShipping.sellerName }}({{ sellerShipping.itemQuantity }})</div>
                        <div class="brand-wrap">
                            <div class="product-list-container">
                                <ul class="product-list-wrap">
                                    <template v-for="(shipping, shippingIndex) in sellerShipping.shippings">
                                        <template v-if="shipping.singleShipping">
                                            <li class="product-list order-list">
                                                <orderItemList :buyItem.sync="shipping.buyItem"
                                                    @freeGiftItemPopupOpen="getFreegiftItemPopup"
                                                    @availableCouponsCheck="showItemCouponPopupActive" />
                                                <orderItemPartsGroupPrice />
                                                <!--
                                                <orderItemList
                                                    :buyItem.sync="shipping.buyItem"
                                                    :shipping-index="buy.receivers[0].shippingIndex"
                                                    @freeGiftItemPopupOpen="getFreegiftItemPopup"
                                                    @availableCouponsCheck="showItemCouponPopupActive"
                                                />
                                                <orderItemPartsGroupPrice
                                                    :isLast="true"
                                                    :item.sync="shipping.buyItem"
                                                    :item-shipping="shipping"
                                                    :total-price="sellerShipping.totalPrice[shippingIndex]"
                                                    :groupTotalPrice="groupTotalPrice[`${sellerIndex}_${shippingIndex}`]"
                                                    :shippingIndex="shippingIndex"
                                                />-->
                                            </li>
                                        </template>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </div>
                </template>

                <!-- 개발 소스
                <template v-for="(sellerShipping, sellerIndex) in buy.receivers[0].sellerShipping">
                    <div class="toggle-content brand-container"> 
                        <div class="brand-name">{{sellerShipping.sellerName}}({{sellerShipping.itemQuantity}})</div>
                        <div class="brand-wrap">
                            <div class="product-list-container">
                                <ul class="product-list-wrap">
                                    <template v-for="(shipping, shippingIndex) in sellerShipping.shippings">
                                        <template v-if="shipping.singleShipping">
                                            <li class="product-list order-list">
                                                <order-item-list
                                                    :buyItem.sync="shipping.buyItem"
                                                    :shipping-index="buy.receivers[0].shippingIndex"
                                                    @freeGiftItemPopupOpen="getFreegiftItemPopup"
                                                    @availableCouponsCheck="showItemCouponPopupActive"
                                                />

                                                <order-item-parts-group-price
                                                    :isLast="true"
                                                    :item.sync="shipping.buyItem"
                                                    :item-shipping="shipping"
                                                    :total-price="sellerShipping.totalPrice[shippingIndex]"
                                                    :groupTotalPrice="groupTotalPrice[`${sellerIndex}_${shippingIndex}`]"
                                                    :shippingIndex="shippingIndex"
                                                />
                                            </li>
                                        </template>
                                        <template v-else>
                                            <template v-for="(buyItem, itemIndex) in shipping.buyItems">
                                                <li class="product-list order-list">
                                                    <order-item-list
                                                        :buyItem.sync="buyItem"
                                                        :shipping-index="buy.receivers[0].shippingIndex"
                                                        @freeGiftItemPopupOpen="getFreegiftItemPopup"
                                                        @availableCouponsCheck="showItemCouponPopupActive"
                                                    />

                                                    <order-item-parts-group-price
                                                        :isLast="itemIndex == shipping.buyItems.length - 1"
                                                        :item.sync="buyItem"
                                                        :item-shipping="shipping"
                                                        :shippingIndex="shippingIndex"
                                                        :groupTotalPrice="groupTotalPrice[`${sellerIndex}_${shippingIndex}`]"
                                                    />
                                                </li>
                                            </template>
                                        </template>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </div>
                </template>-->

                <!-- 포인트 -->
                <div class="toggle-title" :class="{ 'active': isPointInfoActive }"
                    @click="isPointInfoActive = !isPointInfoActive">
                    <h2>포인트</h2>
                    <button type="button" class="toggle-arr"></button>
                </div>
                <div class="toggle-content">
                    <div class="info-point">
                        <div class="point-status">
                            <p>보유 포인트</p>
                            <p>9,999 P</p>
                        </div>
                        <div class="use-point-wrap">
                            <div class="check-wrap">

                                <label class="circle-input-checkbox"><input type="checkbox"><i></i>모두 사용</label>

                            </div>
                            <div class="use-point">

                                <label class="input-point">
                                    <input type="text" value="0">
                                </label>
                                <!-- <button class="btn-point">포인트 사용</button> -->
                            </div>

                        </div>
                    </div>
                </div>
                <!-- 개발소스
                <template v-if="buy.buyPayments['point'] != ''">
                    <div class="toggle-title" :class="{ 'active': isPointInfoActive }" @click="toggleInfoPanel('isPointInfoActive')">
                        <h2>포인트</h2>
                        <button type="button" class="toggle-arr" :class="{ 'active': isPointInfoActive }"></button>
                    </div>
                    <div class="toggle-content" v-if="isPointInfoActive">
                        <div class="info-point">
                            <div class="point-status">
                                <p>보유 포인트</p>
                                <p>{{$formatNumber(retentionPointText)}}P</p>
                            </div>
                            <div class="use-point-wrap">
                                <div class="check-wrap">
                                    <label class="circle-input-checkbox"><input type="checkbox" @change="useAllPoint($event)"><i></i>모두 사용</label>
                                </div>
                                <div class="use-point">
                                    <label class="input-point">
                                        <input type="text" v-model.number.lazy="usePoint" maxlength="8">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </template> -->

                <!-- 결제수단 -->
                <div class="toggle-title" :class="{ 'active': isPaymentInfoActive }"
                    @click="isPaymentInfoActive = !isPaymentInfoActive">
                    <h2>결제수단</h2>
                    <button type="button" class="toggle-arr"></button>
                </div>
                <div class="toggle-content info-payment-method">
                    <p>최근 결제수단으로 결제 : {{ state.recentOrderPayment.approvalTypeLabel }}</p>
                    <!-- <p v-if="isLogin">최근 결제수단으로 결제 : {{recentOrderPayment.approvalTypeLabel}}</p> -->
                    <ul class="payment-wrap">
                        <li v-for="(payment, index) in state.paymentMethods" :key="index"
                            :class="{ 'active': payType === payment.type, [payment.alt]: true, [payment.class]: true }"
                            class="payment" @click="payTypeSelect(payment.type, true)">
                            <img :src="payment.image" :alt="payment.name">
                            <span v-if="payment.name">{{ payment.name }}</span>
                        </li>
                        <!-- 개발소스
                        <li v-for="(payment, index) in paymentMethods" :key="index"
                            v-if="buy.buyPayments[`${payment.type}`] != undefined && isNaverPayActive(payment.type)"
                            :class="{ 'active': payType === payment.type , [payment.alt]: true, [payment.class]: true }"
                            @click="payTypeSelect(payment.type, true)" class="payment">
                            <img :src="payment.image" :alt="payment.alt">
                            <span v-if="payment.name">{{ payment.name }}</span>
                        </li>
                        -->
                    </ul>
                    <!-- 무통장입금 -->
                    <orderPaymentBank v-show="payType === 'bank'" />

                    <!-- 신용카드 -->
                    <orderPaymentCard v-show="payType === 'card'" />

                    <!-- 가상계좌 -->
                    <orderPaymentVbank v-show="payType === 'vbank'" />

                    <!-- 휴대전화 -->
                    <orderPaymentMobile v-show="payType === 'hp'" />

                    <!-- 실시간계좌이체 -->
                    <orderPaymentRealtimebank v-show="payType === 'realtimebank'" />

                </div>

                <!-- 결제 예정 금액 -->
                <div class="total-expected">
                    <h3 class="content-title">
                        <i class="ico"><img src="~/assets/image/ico/ico_money.svg" alt="결제 예정 금액"></i>
                        결제 예정 금액
                    </h3>
                    <ul class="expected-info-wrap">
                        <li class="expected-info primary first">
                            <p>총 상품금액</p>
                            <p>9,999,999<b>원</b></p>
                        </li>
                        <li class="expected-info">
                            <p>상품할인</p>
                            <p>-500<b>원</b></p>
                        </li>
                        <li class="expected-info">
                            <p>세트할인</p>
                            <p>-500<b>원</b></p>
                        </li>
                        <li class="expected-info">
                            <p>회원할인(FAMILY)</p>
                            <p>-1,000<b>원</b></p>
                        </li>

                        <li class="expected-info primary">
                            <p>배송비</p>
                            <p>9,999,999<b>원</b></p>
                        </li>

                        <li class="expected-info primary">
                            <p>쿠폰할인</p>
                            <p>9,999,999<b>원</b></p>
                        </li>
                        <li class="expected-info">
                            <p>상품 쿠폰</p>
                            <p>-500<b>원</b></p>
                        </li>
                        <li class="expected-info">
                            <p>카테고리 쿠폰</p>
                            <p>-500<b>원</b></p>
                        </li>
                        <li class="expected-info">
                            <p>주문서 쿠폰</p>
                            <p>-1,000<b>원</b></p>
                        </li>

                        <li class="expected-info primary">
                            <p>포인트 사용</p>
                            <p>9,999,999<b>P</b></p>
                        </li>
                        <li class="expected-info primary last">
                            <p>최종 결제금액</p>
                            <p>9,999,999<b>원</b></p>
                        </li>
                    </ul>
                    <!-- 개발소스
                     <ul class="expected-info-wrap">
                        <li class="expected-info primary first">
                            <p>총 상품금액</p>
                            <p>{{$formatNumber(order.buy.totalItemPrice)}}<b>원</b></p>
                        </li>
                        <li class="expected-info" v-if="order.buy.totalItemDiscountAmount > 0">
                            <p>상품할인</p>
                            <p>-{{$formatNumber(order.buy.totalItemDiscountAmount)}}<b>원</b></p>
                        </li>
                        <li class="expected-info" v-if="order.buy.totalSetDiscountAmount > 0" >
                            <p>세트할인</p>
                            <p>-{{$formatNumber(order.buy.totalSetDiscountAmount)}}<b>원</b></p>
                        </li>
                        <li class="expected-info" v-if="isLogin && order.buy.totalUserLevelDiscountAmount > 0">
                            <p>회원할인<span v-if="order.buy.userLevelLabel != ''">({{order.buy.userLevelLabel}})</span></p>
                            <p>-{{$formatNumber(order.buy.totalUserLevelDiscountAmount)}}<b>원</b></p>
                        </li>

                        <li class="expected-info primary">
                            <p>배송비</p>
                            <p>{{$formatNumber(order.buy.totalShippingAmount + order.buy.totalShippingCouponDiscountAmount)}}<b>원</b></p>
                        </li>

                        <li class="expected-info primary" v-if="order.buy.totalItemCouponDiscountAmount > 0">
                            <p>쿠폰할인</p>
                            <p>{{$formatNumber(order.buy.totalItemCouponDiscountAmount + order.buy.totalCartCouponDiscountAmount)}}<b>원</b></p>
                        </li>
                        <li class="expected-info">
                            <p>상품 쿠폰</p>
                            <p>-{{$formatNumber(order.buy.totalItemCouponDiscountAmount)}}<b>원</b></p>
                        </li>
                        <li class="expected-info primary">
                            <p>포인트 사용</p>
                            <p>{{$formatNumber(usePoint)}}<b>P</b></p>
                        </li>
                        <li class="expected-info primary last">
                            <p>최종 결제금액</p>
                            <p>{{$formatNumber(order.buy.orderPayAmount)}}<b>원</b></p>
                        </li>

                    </ul>
                    -->
                </div>

                <!-- 약관동의 -->
                <!-- .circle-input-checkbox {
                    i {
                        @include round($full);
                        background-color: $checkboxColor;
                        background-image: url(~/assets/image/ico/ico_check_white.svg);
                    }
                } -->
                <div class="agree-terms mobile">
                    <div class="agree toggle-wrap active check-wrap">
                        <label class="circle-input-checkbox"><input type="checkbox"><i></i></label>
                        개인정보 제 3자 제공동의
                        <div class="toggle-arr"></div>
                        <div class="toggle-content">
                            개인정보 제 3자 제공동의 내용 자리입니다 개인정보 제 3자 제공동의 내용 자리입니다 개인정보 제 3자 제공동의 내용 자리입니다
                        </div>
                    </div>
                    <div class="agree check-wrap">
                        <label class="circle-input-checkbox"><input type="checkbox"><i></i></label>
                        주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며, 구매에 동의 하시겠습니까?
                    </div>
                </div>

                <div class="floating-bottom mobile">
                    <div class="price-info final">
                        <p>총 결제금액(NN)</p>
                        <p>9,999,999<b>원</b></p>
                    </div>
                    <button class="btn btn-primary btn-buy">결제하기</button>
                </div>
            </div>

            <div class="contents-right">
                <!-- 플로팅 어사이드 -->
                <div class="floating-aside" :style="{ top: boxTop + 'px' }">
                    <div class="floating-contents" ref="offsetElement">
                        <div class="title">최종 결제금액</div>
                        <ul class="content expected-info-wrap">

                            <li class="expected-info primary first active"> <!-- 토글 시 active -->
                                <p class="toggle-wrap">총 상품금액<i class="toggle-arr"></i></p>
                                <p>9,999,999<b>원</b></p>
                            </li>

                            <li class="expected-info sub">
                                <p>상품할인</p>
                                <p>-500<b>원</b></p>
                            </li>
                            <li class="expected-info sub">
                                <p>세트할인</p>
                                <p>-500<b>원</b></p>
                            </li>
                            <li class="expected-info sub">
                                <p>회원할인(FAMILY)</p>
                                <p>-1,000<b>원</b></p>
                            </li>
                            <li class="expected-info primary dashed-none">
                                <p>배송비</p>
                                <p>+ 9,999,999<b>원</b></p>
                            </li>
                            <li class="expected-info primary dashed-none active"> <!-- 토글 시 active -->
                                <p class="toggle-wrap">쿠폰할인<i class="toggle-arr"></i></p>
                                <p>- 9,999,999<b>원</b></p>
                            </li>
                            <li class="expected-info sub">
                                <p>상품 쿠폰</p>
                                <p>-500<b>원</b></p>
                            </li>
                            <li class="expected-info sub">
                                <p>카테고리 쿠폰</p>
                                <p>-500<b>원</b></p>
                            </li>
                            <li class="expected-info sub">
                                <p>주문서 쿠폰</p>
                                <p>-1,000<b>원</b></p>
                            </li>
                            <li class="expected-info primary">
                                <p>포인트 사용</p>
                                <p>9,999,999<b>P</b></p>
                            </li>
                            <li class="expected-info primary last">
                                <p>적립 예정 포인트</p>
                                <p>9,999,999<b>P</b></p>
                            </li>
                        </ul>
                        <div class="agree-terms">
                            <div class="agree toggle-wrap active check-wrap"> <label
                                    class="circle-input-checkbox"><input type="checkbox"><i></i></label>
                                개인정보 제 3자 제공동의
                                <div class="toggle-arr"></div>
                                <div class="toggle-content">
                                    개인정보 제 3자 제공동의 내용 자리입니다 개인정보 제 3자 제공동의 내용 자리입니다 개인정보 제 3자 제공동의 내용 자리입니다
                                </div>
                            </div>
                            <div class="agree check-wrap">
                                <label class="circle-input-checkbox"><input type="checkbox"><i></i></label>
                                주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며, 구매에 동의 하시겠습니까?
                            </div>
                        </div>
                        <button class="btn btn-primary btn-round btn-floating">9,999,999원 결제하기</button>
                    </div>
                </div>

            </div>
        </div>
        <!-- 팝업 -->
        <!-- show 클래스로 노출여부 제어 -->
        <!-- 배송지 목록 -->
        <orderModalAddressList :show="isAddressListPopupActive" :buy.sync="state.buy"
            @close="isAddressListPopupActive = !isAddressListPopupActive" @showModalAddAddress="showModalAddAddress" />
        <!-- 개발소스
        <orderModalAddressList 
            :show="isAddressListPopupActive"
            :buy.sync="state.buy"
            @close="isAddressListPopupActive = !isAddressListPopupActive"
            @showModalAddAddress="showModalAddAddress"
            @setDelivery="setDelivery"
        /> -->

        <!-- 배송지 추가 -->
        <orderModalAddress :show="isAddressPopupActive" @close="isAddressPopupActive = !isAddressPopupActive" />
        <!-- 개발소스
        <orderModalAddress
            :show="isAddressPopupActive"
            :newAddress.sync="newAddress"
            @close="isAddressPopupActive = !isAddressPopupActive"
            @openDaumPostcode="openDaumPostcode"
        /> -->

        <orderModalCoupon :show="isItemCouponPopupActive" :buy="state.buy"
            @close="isItemCouponPopupActive = !isItemCouponPopupActive" />
        <!-- 상품쿠폰적용 
        <orderModalCoupon
            v-if="data?.buy && !applyCouponPending"
            :show="isItemCouponPopupActive"
            :buy="buy"
            :applyCoupon="applyCoupon"
            :selectedCoupon.sync="selectedCoupon"
            @close="isItemCouponPopupActive = !isItemCouponPopupActive"
            @setCouponDiscountAmount="setCouponDiscountAmount"
        />
        -->

    </div>
</template>

<script setup>
import { ref , reactive, onMounted, onBeforeUnmount } from 'vue';
const buyList = useSampleData('/_sample/orderList.json');

const { $formatNumber, $dateFormat } = useNuxtApp();

// scroll
const isActive = ref(false);
const istargetActive = ref(false);
const boxTop = ref(null);
const targetElement = ref(null);
const offsetElement = ref(null);
const isTooltipActive = ref(false);

// fold area
const isOrderInfoActive = ref(true);
const isDeliveryInfoActive = ref(true);
const isProductInfoActive = ref(true);
const isPointInfoActive = ref(true);
const isPaymentInfoActive = ref(true);

// modal
const isAddressListPopupActive = ref(null);
const isAddressPopupActive = ref(null);
const isItemCouponPopupActive = ref(false);

// scroll event
const handleScroll = () => {
    const targetRect = targetElement.value.getBoundingClientRect();
    const offsetRect = offsetElement.value.getBoundingClientRect();
    
    //console.log("targetRect height : ", offsetRect.height)
    //console.log("targetRect bottom : ", targetRect.bottom)

    istargetActive.value = targetRect.top <= 190

    if (targetRect.bottom <= offsetRect.height + 264) {
        boxTop.value = targetRect.bottom - offsetRect.height - 120
        console.log('boxTop :: ', boxTop.value)
    } else {
        boxTop.value = 146
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

const toggleActive = () => {
    isActive.value = !isActive.value;
}

const toggleMainItems = (index, checked) => {
    let target = this.allMainGroupCartIds[index];

    if (checked != undefined && checked != null) {
        if (checked) {
            target.cartIds.forEach(cartId => {
                if (selectedItems.value.indexOf(cartId) < 0) {
                    selectedItems.value.push(cartId);
                }
            });

        } else {
            target.cartIds.forEach(cartId => {
                const index = selectedItems.value.indexOf(cartId);

                if (index > -1) {
                    this.selectedItems.splice(index, 1);
                }
            });
        }

        return checked;
    } else {
        let matchedCount = 0;

        target.cartIds.forEach(cartId => {
            if (this.selectedItems.indexOf(cartId) > -1) {
                matchedCount++;
            }
        })

        return matchedCount > 0;
    }
}

const toggleInfoPanel = (panelName) => {
    console.log('panelName : ', panelName)
    this[panelName] = !this[panelName];
};

const toggleTooltip = () => {
    isTooltipActive.value = !isTooltipActive.value;
};

const closeTooltip = () => {
    isTooltipActive.value = false;
};

const showModalAddressList = () => {
    isAddressListPopupActive.value = true;
}
const showModalAddAddress = () => {
    isAddressListPopupActive.value = false;
    isAddressPopupActive.value = true;
};

const showItemCouponPopupActive = () => {
    //isItemCouponPopupActive.value = true;
    document.querySelector('.modal-apply-coupon').classList.add('show');
};
    

// buy
const state = reactive({
    buy: buyList,
    recentOrderPayment: {
        "approvalTypeLabel": "신용카드"
    },
    paymentMethods: [
        {
            alt: "default",
            name: "무통장입금",
            image: "/_nuxt/assets/image/cart/payment_bank_free.svg",
            type: "bank",
            class: "bank"
        },
        {
            alt: "default",
            name: "신용카드",
            image: "/_nuxt/assets/image/cart/payment_card.svg",
            type: "card",
            class: "bcardank"
        },
        {
            alt: "default",
            name: "가상계좌",
            image: "/_nuxt/assets/image/cart/payment_virtual.svg",
            type: "vbank",
            class: "vbank"
        },
        {
            alt: "default",
            name: "휴대전화",
            image: "/_nuxt/assets/image/cart/payment_phone.svg",
            type: "hp",
            class: "hp"
        },
        {
            alt: "default",
            name: "실시간계좌이체",
            image: "/_nuxt/assets/image/cart/payment_bank_free.svg",
            type: "realtimebank",
            class: "realtimebank"
        },
        {
            alt: "naver",
            name: "네이버",
            image: "/_nuxt/assets/image/cart/payment_naver.svg",
            type: "naver",
            class: "naver"
        },
        {
            alt: "kakao",
            name: "카카오",
            image: "/_nuxt/assets/image/cart/payment_kakao.svg",
            type: "kakao",
            class: "kakao"
        },
        {
            alt: "toss",
            name: "토스",
            image: "/_nuxt/assets/image/cart/payment_toss.svg",
            type: "toss",
            class: "toss"
        },
        {
            alt: "hana",
            name: "하나",
            image: "/_nuxt/assets/image/cart/payment_hana.svg",
            type: "hana",
            class: "hana"
        }
    ]
})


const getFreegiftItemPopup = () => {
    console.log('popup')
}
const setDelivery = () => {
    console.log('setDelivery')
}

const payType = ref('bank');

const payTypeSelect = ($type) => {
    payType.value = $type
}


/* 
import { ref } from "vue";

definePageMeta({
    name: 'order',
    title: '주문/결제'
});

export default {
    data() {
        return {
            isActive: false,
            istargetActive: false,
            istargetOffset: false,
            isTooltipActive: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        },
        handleScroll() {
            const targetElement = this.$refs.targetElement;
            const offsetElement = this.$refs.offsetElement;
            const rect = targetElement.getBoundingClientRect();
            const rectO = offsetElement.getBoundingClientRect();

            if (rect.y < 100) {
                this.istargetActive = true;
                if (rect.bottom < 1000) {
                    this.istargetOffset = true;
                    document.querySelector('.floating-aside').style.top = rect.height - rectO.height + 250 + 'px'
                } else {
                    this.istargetOffset = false;
                    document.querySelector('.floating-aside').style.top = '25rem'
                }
            } else {
                this.istargetActive = false;
            }
        },
        toggleTooltip() {
            this.isTooltipActive = !this.isTooltipActive;
        },
        closeTooltip() {
            this.isTooltipActive = false;
        },
        //modal
        // 배송지목록
        showModalAddressList() {
            document.querySelector('.modal-address-list').classList.add('show');
        },
        // 배송지추가
        showModalAddAddress() {
            document.querySelector('.address-modal').classList.add('show');
        },
        // 상품쿠폰적용
        showModalCoupon() {
            document.querySelector('.modal-apply-coupon').classList.add('show');
        },
        hideModal(e) {
            e.target.closest('.modal').classList.remove('show');
        },
    },
};
*/
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/order/order";
</style>
