<template>
    <!-- 배송지 목록 -->
    <div class="modal modal-address-list" :class="show ? 'show' : ''">
        <div class="dimmed-bg"></div>
        <div class="modal-wrap">
            <button type="button" class="modal-close" @click="hideModal($event)">닫기</button>
            <div class="modal-header">배송지 목록</div>
            <div class="modal-body">
                <ul class="address-container">
                    <li class="address-list">
                        <div class="radio-wrap">
                            <label class="input-radio"><input type="radio" name="userAddress" checked><i></i></label>
                        </div>
                        <div class="address-content">
                            <div class="title"><strong>배송지</strong><span class="default">기본배송지</span></div>
                            <p>[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스</p>
                            <p>010 - 1234 - 5678</p>
                        </div>
                    </li>
                    <li class="address-list">
                        <div class="radio-wrap">
                            <label class="input-radio"><input type="radio" name="userAddress"><i></i></label>
                        </div>
                        <div class="address-content">
                            <div class="title"><strong>배송지</strong></div>
                            <p>[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스</p>
                            <p>010 - 1234 - 5678</p>
                        </div>
                    </li>
                    <li class="address-list">
                        <div class="radio-wrap">
                            <label class="input-radio"><input type="radio" name="userAddress"><i></i></label>
                        </div>
                        <div class="address-content">
                            <div class="title"><strong>배송지</strong></div>
                            <p>[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스</p>
                            <p>010 - 1234 - 5678</p>
                        </div>
                    </li>
                </ul>
                <div class="no-contents">
                    등록된 배송지가 없습니다.
                </div>
                <!-- Pagination -->
                <uiPagination />

                <div class="btn-wrap gap">
                    <button type="button" class="btn btn-default" @click="hideModal">취소</button>
                    <button type="button" class="btn btn-primary" @click="setDefaultAddress()">적용</button>
                </div>
                <button type="button" class="btn btn-default btn-add-address" @click="showModalAddAddress">배송지
                    추가</button>

                <!-- 개발소스
                <ul class="address-container" v-if="shippingContent.content.length > 0">
                    <li class="address-list" v-for="shipping in shippingContent.content">
                        <div class="radio-wrap">
                            <label class="input-radio">
                                <input type="radio" name="userAddress"
                                       :id="shipping.userDeliveryId"
                                       :checked="shipping.checked"
                                       @change="changeShippingCheckStatus($event)"><i></i></label>
                        </div>
                        <div class="address-content">
                            <div class="title"><strong>{{shipping.title}}</strong>
                                <span class="default" v-if="shipping.defaultFlag == 'Y'">기본배송지</span>
                            </div>
                            <p>[{{shipping.zipcode}}] {{shipping.address}} {{shipping.addressDetail}}</p>
                            <p>{{shipping.phone}}</p>
                        </div>
                    </li>
                </ul>
                <div class="no-contents" v-else>
                    등록된 배송지가 없습니다.
                </div>
                <div class="btn-wrap gap">
                    <button type="button"  v-show="shippingContent.content.length > 0" class="btn square btn-medium btn-half btn-primary-line" @click="hideModal">취소</button>
                    <button type="button" v-show="shippingContent.content.length > 0" class="btn square btn-medium btn-half btn-primary"  @click="setDefaultAddress()">적용</button>
                    <button type="button" class="btn square btn-medium btn-full btn-dark" @click="showModalAddAddress">배송지 추가</button>
                </div>
                <uiPagination :current-page="shippingContent.pagination.currentPage" :total-pages="shippingContent.pagination.totalPages" @change="paging"/>
                -->
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
});

const emit = defineEmits();

const hideModal = ($event) => {
    emit('close');
};

const showModalAddAddress = () => {
    emit('showModalAddAddress');
}



/* 개발소스
let $s, vm;

export default {
    watchQuery: true,
    data() {
        return {
            shippingContent: {
                content: [],
                pagination: {}
            },
            param: {
                orderBy: '',
                sort: '',
                page: 1,
                size: 5
            },
        };
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
    },
    watch: {
        show: {
            deep: true,
            handler(newValue) {
                return newValue;
            }
        },

    },
    beforeCreate: function () {
        // 기존 Vue로 작성된 스크립트 실행시 적용
        $s = this.$saleson;
        vm = this;
    },
    mounted() {
        this.$nextTick( () => {
            this.getShippingsByUser();
        })
    },
    methods: {

        async getShippingsByUser() {
            try {
                let {data} = await this.$salesonApi().shipping.getShippingsByUser(this.param);

                this.shippingContent = data;

                this.shippingContent.content.forEach(shipping => {
                    shipping.checked = shipping.defaultFlag === 'Y';
                });
            } catch (error) {
                this.$log.error(error);
            }
        },
        hideModal($event) {
            this.$emit('update:show', false);
        },
        showModalAddAddress() {
            this.$emit('showModalAddAddress');
        },
        paging(page) {
            this.param.page = page
            this.$salesonApi().shipping.getShippingsByUser(this.param)
            .then(function (response) {
                if (response.status === 200) {
                    vm.shippingContent = response.data;
                }
            })
            .catch(function (error) {
                this.$log.error("Error paging:", error);
            });
        },

        setDefaultAddress() {
            let addressSet = false;
            let userDeliveryId = 0;



            if(this.shippingContent.content.length === 0) {
                this.$saleson.alert('등록된 배송지가 없습니다.');
                return false;
            }


            this.shippingContent.content.forEach((shipping) => {
                if (shipping.checked != undefined && shipping.checked == true) {
                    addressSet = true;
                    userDeliveryId = shipping.userDeliveryId;
                }
            });
            if (!addressSet) {
                this.$saleson.alert("선택된 항목이 없습니다.");
                return false;
            }

            this.$saleson.confirm(('해당 배송지로 설정하시겠습니까? '), () => {
                if (addressSet) {
                    this.hideModal();
                    this.$emit('setDelivery', userDeliveryId);
                }
            });
        },

        // checked 핻들링
        changeShippingCheckStatus(event) {
            const target = event.target;
            let targetId = target.id;

            this.shippingContent.content.forEach((shipping) => {
                if (shipping.userDeliveryId == targetId) {
                    shipping.checked = true;
                } else {
                    shipping.checked = false;
                }
            });
        }
    }
} */
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/cart/cart-modal";
</style>
