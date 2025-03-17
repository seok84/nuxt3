<template>
    <section class="mypage-address">
        <!-- //본문 -->
        <div class="title-container m-line-divider">
            <h2 class="title-h2">배송주소록 관리</h2>
            <div class="btn-wrap ">
                <button type="button" class="btn btn-default btn-action" @click="showShippingModal('add')">
                    <img src="~/assets/image/ico/ico_plus.svg" class="ico-plus">새 배송지 추가
                </button>
                <button type="button" class="btn btn-black btn-action btn-set-default" @click="setDefaultFlag">기본 배송지로
                    설정</button>
            </div>
        </div>
        <!-- //주소록 리스트 -->
        <template v-if="addressContent.result.length > 0">
            <ul class="address-container">
                <li v-for="(data, index) in addressContent.result" :key="data.title + index"
                    :class="['address-list', { 'active': index === selectedAddressIndex }]">
                    <div class="radio-wrap">
                        <label class="input-radio">
                            <input type="radio" :name="'userAddress' + index" v-model="param.userDeliveryId"
                                :value="data.userDeliveryId">
                            <i></i>
                        </label>
                    </div>
                    <div class="address-content">
                        <div class="title" v-if="data.defaultFlag === 'Y'"><strong>배송지</strong><span
                                class="default">기본배송지</span></div>
                        <p>
                            [{{ data.newZipcode }}]
                            {{ data.address }}
                            {{ data.addressDetail }}
                        </p>
                        <p>{{ data.mobile }}</p>
                    </div>
                    <div class="btn-wrap">
                        <button type="button" class="btn btn-default btn-middle"
                            @click="showShippingModal('edit', data.userDeliveryId)">수정</button>
                        <button type="button" class="btn btn-default btn-middle"
                            @click="deleteUserDelivery(data.userDeliveryId)">삭제</button>
                    </div>
                </li>
            </ul>
            <div class="mobile">
                <div class="btn-wrap">
                    <button type="button" class="btn btn-default btn-black2 btn-set-default" @click="setDefaultFlag">기본
                        배송지로 설정</button>
                </div>
            </div>
            <!-- // 페이징 -->
            <Pagination  />
        </template>
        <template v-else>
            <div class="no-contents">
                <p class="info">등록된 배송지 정보가 없습니다.</p>
            </div>
        </template>

        <!-- 배송지 추가 모달 -->
        <ModalDefault :title="addressContent.addressModalTitle" :modalShow="modalState.addAddress"
            :modalTypeClass="'address-modal'" :dimmedShow="true" @modal-close="toggleAddressModal">
            <form action="">
                <div class="btn-wrap gap m-section-divider">
                    <div class="btn btn-default btn-middle check-wrap">
                        <label class="circle-input-checkbox purple"><input type="checkbox" checked><i></i>기본
                            배송지로
                            설정</label>
                    </div>
                    <div class="btn btn-default btn-middle check-wrap">
                        <label class="circle-input-checkbox purple"><input type="checkbox"><i></i>기본 배송지
                            가져오기</label>
                    </div>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="배송지" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="받는사람" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <div class="flex">
                        <input type="text" class="form-basic" placeholder="우편번호 찾기" />
                        <button class="btn btn-black" @click="toggleSearchModal">우편번호</button>
                    </div>
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="기본주소" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="상세주소" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="휴대폰 또는 전화번호 숫자만 입력" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="btn-wrap">
                    <button type="submit" class="btn btn-primary w-160">저장</button>
                </div>
            </form>
        </ModalDefault>
        <!-- 배송지 검색 모달 -->
        <ModalDefault :title="'배송지 검색'" :modalShow="modalState.searchAddress" :modalTypeClass="'open-modal-address'"
            :dimmedShow="true" @modal-close="toggleSearchModal">
            <form action="">
                <iframe frameborder="0" title="우편번호 검색 프레임" id="__daum__viewerFrame_1"
                    src="https://postcode.map.daum.net/search?origin=https%3A%2F%2Fsaleson4.onlinepowers.com&amp;indaum=off&amp;banner=on&amp;ubl=on&amp;mode=transmit&amp;vt=popup&amp;amr=on&amp;amj=on&amp;ani=off&amp;sd=on&amp;fi=on&amp;fc=on&amp;plrg=&amp;plrgt=1.5&amp;hmb=off&amp;heb=off&amp;asea=off&amp;smh=off&amp;zo=on&amp;us=on&amp;msi=10&amp;ahs=off&amp;whas=500&amp;sm=on&amp;a51=off&amp;zn=Y&amp;fullpath=%2Fmypage%2Finfo%2Fdelivery"
                    style="border:0 none;margin:0;width:100%;height:100%;min-width:300px;overflow:hidden;padding:0"></iframe>
            </form>

        </ModalDefault>
        <div class="modal open-modal-address" style="display: none;">
            <div class="dimmed-bg" @click="hideModal"></div>
            <div class="modal-wrap">
                <button class="modal-close" @click="hideModal">닫기</button>
                <div class="modal-header">
                    배송지 검색
                </div>
                <div class="modal-body">
                </div>
            </div>
        </div>
        <!-- //배송지 검색 모달 -->

    </section>
</template>
<script setup>
import { reactive, ref  } from 'vue';
import Pagination from '~/components/ui/pagination.vue';
const addressSample = useSampleData('/_sample/addressList.json');

definePageMeta({
    layout: 'mypage',
    name: 'mypage-address',
    title:'배송주소록 관리',
});

const param = ref({
    userDeliveryId: 0,
    mode: "",
    title: "",
    userName: "",
    zipcode: "",
    newZipcode: "",
    address: "",
    addressDetail: "",
    addressInfo: "",
    frontMobile: "",
    backMobile: "",
    mobile: "",
    phone: "",
    defaultFlag: "N"
})
const selectedAddressIndex = ref(0);
const addressContent = reactive({
    addressModalTitle: '배송지 추가',
    result: addressSample,
});

//기본 배송지 설정
const setDefaultFlag = ()=>{
    if (param.userDeliveryId === 0) {
        alert("배송지를 선택해주세요.");
        return false;
    }

    confirm('기본 배송지로 설정하시겠습니까?', ()=>{

    });
}

//배송지 삭제
const deleteUserDelivery = (userDeliveryId) => {
    console.log(`${userDeliveryId} 번 삭제!`)
}

//모달
const modalState = reactive({
    addAddress: false,
    searchAddress: false
})

const toggleAddressModal = () => {
    modalState.addAddress = !modalState.addAddress;
};
const toggleSearchModal = () => {
    modalState.searchAddress = !modalState.searchAddress;
};

const showShippingModal = (type, userDeliveryId) => {
    toggleAddressModal();
    param.mode = type;
    if (type == 'add'){
        addressContent.addressModalTitle = "배송지 추가";
    } else {
        addressContent.addressModalTitle = "배송지 수정";
        shippingDetail(userDeliveryId);
    }
}
const shippingDetail = (userDeliveryId) => {
    addressContent.result.title = "배송지 수정";
    addressContent.result.addAddressModal = true;
    addressContent.result.edit = "edit";
    let delivery = addressContent.result.filter(d => d.userDeliveryId == userDeliveryId)[0];
    param = {
        ...delivery
    };
};

</script>
<style lang="scss">
@use "~/assets/scss/pages/mypage/mypage_address.scss";
</style>