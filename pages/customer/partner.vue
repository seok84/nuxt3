<template>
    <section class="customer customer-partner">
        <div class="title-h1">고객센터</div>
        <customerTab></customerTab>
        <div class="container">
            <form action="">


                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="업체명" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="담당자명" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="number" class="form-basic" placeholder="담당자 연락처" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="email" class="form-basic" placeholder="담당자 이메일" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="홈페이지url" />
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="form-line">
                    <textarea name="" id="" cols="30" rows="10" class="form-basic text-area"
                        placeholder="판매하고자 하는 제품"></textarea>
                    <span class="feedback invalid" style="display: none;">유효성 메시지</span>
                </div>
                <div class="upload-wrap">
                    <label for="upload-file" class="btn btn-default">
                        <input type="file" name="upload-file" id="upload-file" accept=".gif,.png,.jpg,.jpeg,.pdf"
                            multiple>
                        <span>파일선택</span>
                    </label>
                    <p class="file-placeholder">선택된 파일 없음</p>
                    <div class="upload-preview hide"></div>
                </div>
                <ul class="dot-list large-dot">
                    <li>제품리스트를 파일로 첨부하시면 빠른 견적 진행 가능합니다.</li>
                    <li>10MB 이내의 jpg, gif, png, pdf 파일만 업로드 가능합니다.</li>
                </ul>
                <ul class="terms-content">
                    <li class="check-wrap">
                        <label class="circle-input-checkbox"><input type="checkbox"><i></i></label>
                        <div class="terms-list">
                            <p class="terms-title">개인정보의 수집·이용목적 및 항목 동의 <em>(필수)</em></p>
                            <button type="button" class="terms-button"
                                @click="showTermsModal = !showTermsModal">약관보기</button>
                        </div>
                    </li>
                </ul>
                <div class="link-wrap gap">
                    <button type="button" class="btn btn-primary link-item w-half">저장</button>
                    <button type="button" class="btn btn-primary-line link-item w-half">취소</button>
                </div>
            </form>
        </div>
        <!-- 약관보기 모달 -->
        <div class="modal modal-terms" :class="{ 'show': showTermsModal }">
            <div class="dimmed-bg" @click="showTermsModal = !showTermsModal"></div>
            <div class="modal-wrap">
                <button class="modal-close" @click="showTermsModal = !showTermsModal">닫기</button>
                <div class="modal-header">
                    약관보기
                </div>
                <div class="modal-body p-2">
                    <div class="modal-content">
                        약관내용
                    </div>
                    <div class="btn-wrap gap">
                        <button type="button" class="btn btn-default">취소</button>
                        <button type="button" class="btn btn-primary">저장</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref }  from 'vue';

definePageMeta({
    name:'customer-partner',
    title:'고객센터',
});

const showTermsModal = ref(false);

onMounted(()=>{
    getFileName()
})

const getFileName = () => {
        const inputFile = document.getElementById('upload-file');
        const filePreview = document.querySelector('.upload-preview');

        inputFile.addEventListener('change', handleFileChange);

        function handleFileChange() {
            const filePlaceholder = document.querySelector('.file-placeholder');
            const uploadPreview = document.querySelector('.upload-preview');
            
            filePlaceholder.classList.add('hide');
            uploadPreview.classList.remove('hide');

            while (filePreview.firstChild) {
                filePreview.removeChild(filePreview.firstChild);
            }

            const selectedFiles = inputFile.files;
            const list = document.createElement('ul');
            filePreview.appendChild(list);

            for (const file of selectedFiles) {
                if (validFileType(file)) {
                    const listItem = createListItem(file);
                    list.appendChild(listItem);
                } else {
                    alert('.png, .jpg, .jpeg, .pdf 파일을 선택해주세요');
                }
            }
        }

        function createListItem(file) {
            const listItem = document.createElement('li');
            const icoContents = document.createElement('div');
            const textContents = document.createElement('p');
            const closeButton = document.createElement('button');

            closeButton.classList.add('btn-close');

            if (file.type.includes('image')) {
                icoContents.classList.add('ico-image');
            } else {
                icoContents.classList.add('ico-pdf');
            }

            textContents.textContent = file.name;

            listItem.appendChild(icoContents);
            listItem.appendChild(textContents);
            listItem.appendChild(closeButton);

            return listItem;
        }

        function validFileType(file) {
            const fileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'];
            return fileTypes.includes(file.type);
        }
    }
</script>
<style lang="scss">
@use '~/assets/scss/pages/customer/customer_main.scss';
</style>