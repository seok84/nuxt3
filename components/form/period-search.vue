<template>
    <div class="period-container">
        <label class="date">
            <input type="date" class="form-basic" :placeholder="startPlaceholder" />
            <!-- 
                    v-model="param.searchStartDate"
                    @input="updateDate('searchStartDate')"  
                -->
            <i></i>
        </label>
        <span class="divider">~</span>
        <label class="date">
            <input type="date" class="form-basic" :placeholder="endPlaceholder" />
            <!-- 
                    v-model="param.searchEndDate"
                    @input="updateDate('searchEndDate')"
                -->
            <i></i>
        </label>
        <div class="select-wrap box">
            <select class="input-select" @change="selectedPeriod">
                <option value="">조회기간</option>
                <option value="week-1">1주일</option>
                <option value="month-1">1개월</option>
                <option value="month-3">3개월</option>
                <option value="month-6">6개월</option>
                <option value="month-12">1년</option>
            </select>
        </div>
        <div class="form-line box">
            <div class="flex">
                <input type="text" class="form-basic" placeholder="검색어를 입력하세요" /><!-- v-model="param.query"  -->
                <button class="btn btn-black" @click="paging">조회</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    param: Object,
    startPlaceholder: String,
    endPlaceholder: String,
})
const emit = defineEmits(['paging','selectedPeriod'])

const paging = ()=>{
    emit['paging']
}

const selectedPeriod = () => {
    emit['selectedPeriod']
}
</script>
