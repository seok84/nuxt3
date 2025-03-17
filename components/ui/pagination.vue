<template>
    <ul class="pagination">
        <li class="page-item" v-show="showPreviousButton">
            <span class="page-prev" aria-label="Previous" @click="previousPage">이전페이지</span>
        </li>
        <li class="page-item" v-for="pageNumber in pageNumbers" :key="pageNumber"
            :class="{ active: currentPage === pageNumber }">
            <span class="page-link" @click="page(pageNumber)">{{ pageNumber }}</span>
        </li>
        <li class="page-item" v-show="showNextButton">
            <span class="page-next" aria-label="Next" @click="nextPage">다음페이지</span>
        </li>

    </ul>
</template>

<script setup>

const props = defineProps({
    currentPage: {
        type: Number,
        required: true,
        default: 1
    },
    totalPages: {
        type: Number,
        required: true,
        default: 1
    },
    pageSize: {
        type: Number,
        default: 5
    },
    pageTarget: {
        type: String,
        default: 'default',
    },
    scrollTopFlag: {
        type: Boolean,
        default :true,
    }
})


//computed 

const showPreviousButton = computed(()=>{
    return props.currentPage > 1;
})
const showNextButton = computed(()=>{
    return props.currentPage < props.totalPages;
})
const pageNumbers = computed(()=>{
    const pageNumbers = [];

try {

    let pageSize = pageSize;
    let n = 0;
    let startPage = 0;
    let endPage = 0;
    let halfSizeFloor = 0;
    let currentPage = currentPage;
    let totalPages = totalPages;


    currentPage = currentPage > totalPages ? totalPages : currentPage;

    n = pageSize / 2;

    halfSizeFloor = Math.floor(n - (1 - (n % 1)) % 1);

    startPage = currentPage < halfSizeFloor + 1 ? 1 : currentPage - halfSizeFloor;
    startPage = currentPage > totalPages - halfSizeFloor ? totalPages - pageSize + 1 : startPage;

    endPage = startPage + pageSize - 1;
    endPage = endPage > totalPages ? totalPages : endPage;

    startPage = totalPages < pageSize ? 1 : startPage;
    endPage = totalPages < pageSize ? totalPages : endPage;

    for (var i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    if (!pageNumbers.length > 0) {
        pageNumbers.push(1);
    }

} catch (e) { }

return pageNumbers;
})


const emit = defineEmits(['change']);

//methods
    const page = (page) => {
        if (scrollTopFlag) {
            topScroll();
        }
        emit('change', page, pageTarget);
    };

    const nextPage = () => {
        let page = currentPage + 1;
        if (page > totalPages) {
            page = totalPages;
        }
        page(page);
    };

    const previousPage = () => {
        let page = currentPage - 1;
        if (page < 1) {
            page = 1;
        }
        page(page);
    };

    const latestPage = () => {
        let page = 1;
        page(page);
    };

    const oldestPage = () => {
        let page = totalPages;
        page(page);
    };

    const topScroll = () => {
        if (window.scrollY > 0) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

</script>
