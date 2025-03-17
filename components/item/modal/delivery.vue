<template>
    <div class="modal modal-delivery" :class="show ? 'show' : ''">
        <div class="dimmed-bg" @click="hideModal"></div>
        <div class="modal-wrap">
            <button class="modal-close" @click="hideModal">닫기</button>
            <div class="modal-header">
                제주/도서산간지역
            </div>
            <div class="modal-body">
                <div class="form-wrap">
                    <div class="select-wrap">
                        <select class="input-select">
                            <option value="">주소</option>
                            <option value="">셀렉트박스 옵션</option>
                        </select>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-basic" placeholder="주소를 입력해주세요." />
                        <button><i class="ico-search"></i></button>
                        <span class="feedback invalid">유효성 메시지</span>
                    </div>
                </div>
                <div>
                    <table>
                        <colgroup>
                            <col style="width: 60%" />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>우편번호/주소</th>
                                <th>제주</th>
                                <th>도서산간</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p class="address">23103</p>
                                    <p>인천 옹진군 백령면 북포리 544-4</p>
                                </td>
                                <td>○</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="address">23103</p>
                                    <p>인천 옹진군 백령면 북포리 544-4</p>
                                </td>
                                <td>○</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="address">23103</p>
                                    <p>인천 옹진군 백령면 북포리 544-4</p>
                                </td>
                                <td>○</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="address">23103</p>
                                    <p>인천 옹진군 백령면 북포리 544-4</p>
                                </td>
                                <td>○</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="address">23103</p>
                                    <p>인천 옹진군 백령면 북포리 544-4</p>
                                </td>
                                <td>○</td>
                                <td>○</td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- 페이징 -->
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

            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["close"]);

const hideModal = ($event) => {
    emit('close');
};



</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/items/item_list.scss";
</style>
