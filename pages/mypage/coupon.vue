<template>
    <section class="mypage-coupon">
        <div class="title-container m-line-divider">
            <h2 class="title-h2">쿠폰</h2>
            <div class="btn-wrap">
                <button type="button" class="btn btn-black btn-action" @click="showModalCoupon">
                    <img src="~/assets/image/ico/ico_download.png" class="ico-down">쿠폰 다운(NN)
                </button>
                <button type="button" class="btn btn-default btn-action"
                    @click="toggleOfflineCoupon = !toggleOfflineCoupon">오프라인쿠폰등록</button>
            </div>
            <div class="coupon-input-area" v-show="toggleOfflineCoupon == true">
                <h3 class="form-title">등록할 쿠폰이 있으신가요?</h3>
                <div class="form-line">
                    <div class="flex">
                        <input type="text" class="form-basic" placeholder="'-'없이 쿠폰 번호 입력" />
                        <button class="btn btn-black" @click="addOfflineCoupon">조회</button>
                    </div>
                    <span class="feedback invalid">유효성 메시지</span>
                </div>
            </div>
        </div>
        <!-- // 활성화 -->
        <div class="tabs">
            <button type="button" :class="['tab-item', { 'active': activeTabContent.useableCoupon }]"
                @click="toggleActiveTab('useable')">사용 가능</button>
            <button type="button" :class="['tab-item', { 'active': activeTabContent.disableCoupon }]"
                @click="toggleActiveTab('disable')">사용 완료</button>
        </div>
        <div class="sort-wrap">
            <p class="all-items">사용가능 쿠폰 (20)</p>
            <ul class="sort-list">
                <li v-for="(list, index) in couponTotalPagination.list" :key="list + index">
                    <button type="button" :class="['sort-item', { active: couponTotalPagination.active == index }]"
                        @click="couponPaging(index)">
                        {{ list }}
                    </button>
                </li>
            </ul>
        </div>
        <div class="tabs-content">
            <!-- 정렬 -->
            <!-- 쿠폰 영역 -->
            <ul class="coupon-container" :class="{ 'deactive': activeTabContent.disableCoupon }">
                <li class="coupon-item" v-for="(coupon, index) in downloadedCoupon.content" :key="index">
                    <div class="flex">
                        <p class="discount"><b>{{ $formatNumber(coupon.couponPay) }}</b>
                            <span v-if="coupon.couponPayType === '1'">원</span>
                            <span v-else-if="coupon.couponPayType === '2'">%</span>
                        </p>
                        <span class="coupon-type item">상품 쿠폰</span>
                    </div>
                    <p class="title">
                        <span class="coupon-name">{{ coupon.couponName }}</span>
                        <span class="sub-title">{{ coupon.couponComment }}</span>
                    </p>
                    <div class="condition-wrap">
                        <p class="condition" v-show="coupon.couponPayRestriction > 0">
                            {{ $formatNumber(coupon.couponPayRestriction) }}원 이상 사용가능</p>
                        <p class="condition"
                            v-show="coupon.couponApplyStartDate !== '' && coupon.couponApplyEndDate !== ''">
                            {{ $dateFormat(coupon.couponApplyStartDate, 'date') }} ~
                            {{ $dateFormat(coupon.couponApplyEndDate, 'date') }}</p>
                    </div>
                    <div class="flex align-end">
                        <button type="button" class="coupon-btn" v-if="coupon.couponTargetItemCount > 0"
                            @click="getAppliesTo(coupon.couponId)">적용 상품 보기<i class="arrow"></i>
                        </button>
                        <span class="used-complete" v-show="activeTabContent.disableCoupon">
                            {{ coupon.couponUseDate ? `사용 완료 ${$dateFormat(coupon.couponUseDate)}` : '기한 만료' }}
                        </span>
                    </div>
                </li>
            </ul>
            <!-- 페이징 -->
            <!-- <Pagination /> -->
        </div>
        <ul class="dot-list large-dot">
            <li>사용 기간 내에 사용하지 않은 쿠폰은 삭제됩니다.</li>
            <li>사용 가능 금액 이상으로 주문 시 쿠폰 혜택 적용이 가능합니다.</li>
        </ul>
        <!-- 
            // 모달
        -->
        <!-- 쿠폰 다운 모달 -->
        <modal-default :title="'쿠폰 다운로드'" :modalShow="modalState.downloadCouponState" :modalTypeClass="'modal-coupon'"
            :dimmedShow="true" :bodyCustomClass="'p-2'" @modal-close="modalState.downloadCouponState = false">
            <button type="button" class="btn btn-default-line btn-all-down" @click="downloadAllCoupon">
                <img src="~/assets/image/ico/ico_download_black_02.svg" class="ico-down"><span>모든 쿠폰
                    다운(NN)</span>
            </button>
            <p class="all-items">총 <strong>{{ $formatNumber(coupons.content.length) }}</strong>개</p>
            <!-- 쿠폰리스트 -->
            <template v-if="coupons.content.length > 0">
                <ul class="coupon-list-container">
                    <!-- 상품 -->
                    <li class="coupon-list line" v-for="(data, index) in coupons.content" :key="index">
                        <div class="coupon-list-wrap">
                            <div class="item">
                                <div class="price-area"><span class="number"><em>{{ $formatNumber(data.couponPay)
                                            }}</em>{{ data.couponPayType == '1' ? '원' : '%' }}</span></div>
                                <div :class="['tag-area', data.tagType]"></div>
                            </div>
                            <div class="info">
                                <strong class="desc title">{{ data.couponName }}</strong>
                                <span class="desc sub">{{ data.couponComment }}</span>
                                <p class="pc">
                                    <span class="desc date">
                                        <template v-if="data.couponApplyType == '1'">
                                            {{ data.couponApplyStartDate }} ~ {{ data.couponApplyEndDate }} /
                                        </template>
                                        <template v-if="data.couponPayRestriction > 0">
                                            {{ $formatNumber(data.couponPayRestriction) }}원 이상 구매시 사용가능
                                        </template>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <button type="button" class="download" @click="downloadCoupon(data.couponId)">
                            <img src="~/assets/image/ico/ico_download_black.svg" class="ico-down"><span>쿠폰받기</span>
                        </button>
                        <p class="mobile">
                            <span class="desc date">
                                <template v-if="data.couponApplyType == '1'">
                                    {{ data.couponApplyStartDate }} ~ {{ data.couponApplyEndDate }} /
                                </template>
                                <template v-if="data.couponPayRestriction > 0">
                                    {{ $formatNumber(data.couponPayRestriction) }}원 이상 구매시 사용가능
                                </template>
                            </span>
                        </p>
                    </li>
                </ul>
            </template>
            <template v-else>
                <!-- 노 컨텐츠 -->
                <div class="no-contents">
                    다운로드 가능한 쿠폰이 없습니다.
                </div>
            </template>
            <!-- 페이징 -->
            <!-- <Pagination v-if="coupons.content.length > 0" /> -->
            <ul class="dot-list large-dot">
                <li>다운로드한 쿠폰은 마이페이지 > 쿠폰에서 확인하실 수 있습니다.</li>
                <li>다운로드한 쿠폰의 유효기간 경과 시 사용할 수 없습니다.</li>
            </ul>
        </modal-default>
        <!-- //쿠폰 다운 모달 -->

        <!-- 적용상품 모달 -->
        <modal-default :title="'적용상품 보기'" :modalShow="modalState.couponItemState" :modalTypeClass="'item-grid'"
            :dimmedShow="true">
            <div v-if="itemData && itemData.length > 0" @modal-close="modalState.couponItemState = false">
                <ItemList :itemData="itemData" :itemListRatio="4" />
                <!-- <Pagination /> -->
            </div>
        </modal-default>

    </section>
</template>
<script setup>
    import { reactive, ref  } from 'vue';
    const { $formatNumber, $dateFormat } = useNuxtApp();

    const couponSample = useSampleData('/_sample/couponList.json');
    const couponUsableList = useSampleData('/_sample/couponUsableList.json');
    const itemData = useSampleData('/_sample/itemList.json');


    definePageMeta({
        layout: 'mypage',
        name: 'mypage-coupon',
        title:'쿠폰'
    });


    //탭 활성화
    const activeTabContent = reactive({
        useableCoupon : true,
        disableCoupon : false,
    })
    const toggleActiveTab = (state) => {
        if(state == 'useable') {
            activeTabContent.useableCoupon = true;
            activeTabContent.disableCoupon = false;
        } else {
            activeTabContent.useableCoupon = false;
            activeTabContent.disableCoupon = true;
        }
    }

    const coupons = reactive({
        content: couponSample,
    })

    const downloadedCoupon = reactive({
        content: couponUsableList,
    })

    const couponTotalPagination = reactive({
        list: ['전체','상품 쿠폰','주문서 쿠폰','카테고리쿠폰'],
        active: 0
    })

    const couponPaging = (index) => {
        couponTotalPagination.active = index;
    }

    const toggleOfflineCoupon = ref(false);

    const addOfflineCoupon = () => {
        alert('등록하시겠습니까?');
    }

    const modalState = reactive({
        downloadCouponState: false,
        couponItemState: false,
    })

    const showModalCoupon = () => {
        modalState.downloadCouponState = true;
    }

    const downloadCoupon = (couponId) => {
        console.log(`downloadCoupon ${couponId}`)
    }

    const downloadAllCoupon = () => {
        alert('쿠폰 전부 다운로드')
    }

</script>
<style lang="scss">
@use "~/assets/scss/pages/mypage/mypage_coupon.scss";
</style>