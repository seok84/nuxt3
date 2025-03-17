<template>
    <div class="guide-content">
        <h2>툴팁</h2>
        <div class="guide-modal-area" style="height: 14rem;">
            <!-- <div class="tooltip-wrap">
                <button type="button" class="tooltip-close">닫기</button>
                <div class="text-center">tooltip sample</div>
                </div> -->
            <div>
                <i class="tooltip-handler">!</i> <!--tooltip-handler 바로 뒤에 tooltip-wrap이 있어야함 -->
                <div class="tooltip-wrap">
                    <!--tooltip-wrap에 클래스 active 붙으면 모바일에서 툴팁 뜸-->
                    <div class="dimmed-bg"></div>
                    <div class="text-center tooltip-content tooltip-delivery">
                        <p class="tooltip-tit">판매자 조건부 무료배송</p>
                        <p class="txt2">판매자 상품 30,000원 이상 구매 시 무료,<br />
                            30,000원 미만 구매 시 2,500원 부과
                        </p>
                        <p class="txt1">제주/도서산간</p>
                        <p class="txt2">제주 2,500원 추가 / 도서산간 2,500원 추가</p>
                    </div>
                </div>
            </div>
        </div>
        <code class="guide-code">
                        <pre>
                    <p>
                        tooltip-handler 바로 뒤에 tooltip-wrap이 있어야함
                        <br>
                        pc에서는 호버로 툴팁 뜸
                        <br>
                        모바일에서 tooltip-handler 클릭 시 tooltip-wrap에 클래스 active 붙으면  툴팁 뜸
                        <br>
                        모바일에서 dimmed-bg 또는 tooltip-content 클릭 시 tooltip-wrap에 클래스 active 제거
                    </p>
                
                &lt;div&gt;
                &lt;i class="tooltip-handler"&gt;!&lt;/i&gt; &lt;!--tooltip-handler 바로 뒤에 tooltip-wrap이 있어야함 --&gt;
                &lt;div class="tooltip-wrap"&gt; &lt;!--tooltip-wrap에 클래스 active 붙으면 모바일에서 툴팁 뜸--&gt;
                    &lt;div class="dimmed-bg"&gt;&lt;/div&gt;
                    &lt;div class="text-center tooltip-content tooltip-delivery"&gt;
                        &lt;p class="tooltip-tit"&gt;판매자 조건부 무료배송&lt;/p&gt;
                        &lt;p class="txt2"&gt;판매자 상품 30,000원 이상 구매 시 무료,&lt;br /&gt;
                            30,000원 미만 구매 시 2,500원 부과 &lt;/p&gt;
                        &lt;p class="txt1"&gt;제주/도서산간&lt;/p&gt;
                        &lt;p class="txt2"&gt;제주 2,500원 추가 / 도서산간 2,500원 추가&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;/div&gt;
            </pre>
                        <!-- <pre>
                // 부모요소에 position: relative가 있는지 확인 필요
                &lt;div class="tooltip-wrap"&gt;
                    &lt;button type="button" class="tooltip-close"&gt;닫기&lt;/button&gt;
                    &lt;div class="text-center"&gt;tooltip sample&lt;/div&gt; //텍스트 가운데 정렬이 필요할 때에만 text-center 내부에 텍스트 작성
                &lt;/div&gt;
                </pre> -->
                    </code>
        <br><br>
        <h2>모달 기본</h2>
        <em style="color: red; display: block;">.modal 에 show 클래스가 붙어야 노출</em>
        <br>
        <div class="guide-modal-area" style="height: 24rem;">
            <div class="modal show" style="position: absolute;">
                <div class="dimmed-bg" style="position: absolute;"></div>
                <div class="modal-wrap">
                    <button class="modal-close">닫기</button>
                    <div class="modal-header">
                        타이틀
                    </div>
                    <div class="modal-body">
                        컨텐츠 내용
                    </div>
                </div>
            </div>
        </div>
        <code class="guide-code">
                        <pre>
                &lt;div class="modal"&gt;
                    &lt;div class="dimmed-bg"&gt;&lt;/div&gt;
                    &lt;div class="modal-wrap"&gt;
                        &lt;button class="modal-close"&gt;닫기&lt;/button&gt;
                        &lt;div class="modal-header"&gt;
                            모달 헤더
                        &lt;/div&gt;
                        &lt;div class="modal-body"&gt;
                            &lt;slot /&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            </pre>
        </code>
        <br>
        <br>
        <h2>alert 모달</h2>
        <div class="guide-modal-area" style="height: 24rem;">
            <div class="dimmed-bg"  style="position: absolute;"></div>
            <div class="modal alert-modal show"  style="position: absolute;">
                <div class="modal-wrap">
                    <button class="modal-close">닫기</button>
                    <div class="modal-header">
                        타이틀
                    </div>
                    <div class="p-2 modal-body">
                        <div class="modal-content">
                            컨텐츠 내부
                        </div>
                        <div class="btn-wrap gap">
                            <button type="button" class="btn btn-default">취소</button>
                            <button type="button" class="btn btn-primary">저장</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="guide-modal-area" style="height: 24rem;">
            <div class="modal alert-modal no-head show"  style="position: absolute;">
                <div class="dimmed-bg"  style="position: absolute;"></div>
                <div class="modal-wrap">
                    <button class="modal-close">닫기</button>
                    <div class="p-2 modal-body">
                        <div class="modal-content">
                            컨텐츠 내부
                        </div>
                        <div class="btn-wrap gap">
                            <button type="button" class="btn btn-default">취소</button>
                            <button type="button" class="btn btn-primary">저장</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="guide-modal-area" style="height: 24rem;">
            <div class="dimmed-bg"  style="position: absolute;"></div>
            <div class="modal alert-modal no-head show"  style="position: absolute;">
                <div class="modal-wrap">
                    <button class="modal-close">닫기</button>
                    <div class="p-2 modal-body">
                        <div class="modal-content">
                            컨텐츠 내부
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <code class="guide-code">
                        <pre>
                &lt;div class="modal alert-modal"&gt;
                    &lt;div class="dimmed-bg"&gt;&lt;/div&gt;
                    &lt;div class="modal-wrap"&gt;
                        &lt;button class="modal-close"&gt;닫기&lt;/button&gt;
                        &lt;div class="modal-header"&gt;
                            타이틀
                        &lt;/div&gt;
                        &lt;div class="p-2 modal-body"&gt;
                            &lt;div class="modal-content"&gt;
                                컨텐츠 내부
                            &lt;/div&gt;
                            &lt;div class="btn-wrap gap"&gt;
                                &lt;button type="button" class="btn btn-default"&gt;취소&lt;/button&gt;
                                &lt;button type="button" class="btn btn-primary"&gt;저장&lt;/button&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;div class="modal alert-modal no-head"&gt;
                &lt;div class="dimmed-bg"&gt;&lt;/div&gt;
                &lt;div class="modal-wrap"&gt;
                    &lt;button class="modal-close"&gt;닫기&lt;/button&gt;
                    &lt;div class="p-2 modal-body"&gt;
                        &lt;div class="modal-content"&gt;
                            컨텐츠 내부
                        &lt;/div&gt;
                        &lt;div class="btn-wrap gap"&gt;
                            &lt;button type="button" class="btn btn-default"&gt;취소&lt;/button&gt;
                            &lt;button type="button" class="btn btn-primary"&gt;저장&lt;/button&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div class="modal alert-modal no-head"&gt;
                &lt;div class="dimmed-bg"&gt;&lt;/div&gt;
                &lt;div class="modal-wrap"&gt;
                    &lt;button class="modal-close"&gt;닫기&lt;/button&gt;
                    &lt;div class="p-2 modal-body"&gt;
                        &lt;div class="modal-content"&gt;
                            컨텐츠 내부
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            </pre>
        </code>
        <h2>레이어 팝업</h2>
        <div class="guide-modal-area" style="height: 40rem; background-color: rgba(0,0,0,0.2);">
            <!-- 메인 모달 샘플 -->
            <div class="modal show"  style="position: absolute;">
                <div class="dimmed-bg"  style="position: absolute;"></div>
                <div class="modal-wrap no-rounding free-width" style="width: 36rem;">
                    <div class="modal-body">
                        <!-- 이미지 / html 영역 -->
                        <img src="~/assets/image/sample/no_content_720480.png" alt="이미지 샘플">
                        <div class="content-footer">
                            <div class="check-area">
                                <label class="checkbox"><input type="checkbox"><i></i></label>
                                <span>오늘 그만 보기</span>
                            </div>
                            <button type="button">닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="guide-modal-area" style="height: 40rem; background-color: rgba(0,0,0,0.2);">
            <!-- 메인 모달 샘플 -->
            <div class="modal show"  style="position: absolute;">
                <div class="dimmed-bg"  style="position: absolute;"></div>
                <div class="modal-wrap no-rounding free-width" style="width: 36rem;">
                    <div class="modal-body">
                        <!-- 이미지 / html 영역 -->
                        <img src="~/assets/image/sample/no_content_720480.png" alt="이미지 샘플">
                        <div class="content-footer">
                            <a href="" class="flex-1">이벤트 확인하기</a>
                            <button type="button" class="flex-1">닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <code class="guide-code">
            <pre>
                &lt;div class="modal"&gt;
                        &lt;div class="dimmed-bg"&gt;&lt;/div&gt;
                        &lt;div class="modal-wrap no-rounding free-width" style="width: 36rem;"&gt; &lt;!--관리자단에서 너비 지정--&gt;
                            &lt;div class="modal-body"&gt;
                                &lt;!-- 이미지 / html 영역 --&gt;
                                &lt;img src="~/assets/image/sample/no_content_720480.png" alt="이미지 샘플"&gt;
                                &lt;div class="content-footer"&gt;
                                    &lt;div class="check-area"&gt;
                                        &lt;label class="checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;&lt;/label&gt;
                                        &lt;span&gt;오늘 그만 보기&lt;/span&gt;
                                    &lt;/div&gt;
                                    &lt;button type="button"&gt;닫기&lt;/button&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;div class="modal"&gt;
                    &lt;div class="dimmed-bg"&gt;&lt;/div&gt;
                    &lt;div class="modal-wrap no-rounding free-width" style="width: 36rem;"&gt; &lt;!--관리자단에서 너비 지정--&gt;
                        &lt;div class="modal-body"&gt;
                            &lt;!-- 이미지 / html 영역 --&gt;
                            &lt;img src="~/assets/image/sample/no_content_720480.png" alt="이미지 샘플"&gt;
                            &lt;div class="content-footer"&gt;
                                &lt;a href="" class="flex-1"&gt;이벤트 확인하기&lt;/a&gt;
                                &lt;button type="button" class="flex-1"&gt;닫기&lt;/button&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            </pre>
        </code>
        <br>
        <br>
        <h2>토스트 기본</h2>
        <div class="guide-modal-area" style="height: 24rem;">
            <div class="toast-wrap show"  style="position: absolute;">
                <modal-toast desc="해당 상품이 장바구니에 담겼습니다" />
                <modal-toast desc="URL이 복사되었습니다" />
            </div>
        </div>
        <code class="guide-code">
                        <pre>
                &lt;div class="toast-wrap"&gt;
                    &lt;div class="toast"&gt;
                        &lt;p class="desc"&gt;&lt;/p&gt;
                        &lt;button class="modal-close"&gt;&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            </pre>
                    </code>
        <h2>이미지 상세보기</h2>
        <button type="button" class="btn btn-default" style="width: 20rem;" @click="imagePopShow = true">이미지
            상세보기</button>
        <code class="guide-code">
                        <pre>
                &lt;div class="modal image-pop"&gt;
                    &lt;div class="dimmed-bg"&gt;&lt;/div&gt;
                    &lt;div class="image-wrap"&gt;
                        &lt;div class="pc"&gt;
                            &lt;div class="expansion-img"&gt;
                                &lt;img src="~/assets/image/sample/no_content_720480.png" alt="미리보기"&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                        &lt;ul class="image-list"&gt;
                            &lt;li class="image-item"&gt;&lt;img src="~/assets/image/sample/no_content_720480.png" alt="" srcset=""
                                    @click="getImageSrc($event)"&gt;&lt;/li&gt;
                            &lt;li class="image-item"&gt;&lt;img src="~/assets/image/sample/sample_01.png" alt="" srcset=""
                                    @click="getImageSrc($event)"&gt;&lt;/li&gt;
                            &lt;li class="image-item"&gt;&lt;img src="~/assets/image/sample/sample_02.png" alt="" srcset=""
                                    @click="getImageSrc($event)"&gt;&lt;/li&gt;
                            &lt;li class="image-item"&gt;&lt;img src="~/assets/image/sample/no_content.png" alt="" srcset=""
                                    @click="getImageSrc($event)"&gt;&lt;/li&gt;
                        &lt;/ul&gt;
                        &lt;button class="modal-close"&gt;닫기&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            </pre>
        </code>
        <div class="guide-modal-area">
            <div class="modal image-pop" :class="{ 'show': imagePopShow }">
                <div class="dimmed-bg"></div>
                <div class="image-wrap">
                    <div class="pc">
                        <div class="expansion-img">
                            <img src="~/assets/image/sample/no_content_720480.png" alt="미리보기">
                        </div>
                    </div>
                    <ul class="image-list">
                        <li class="image-item"><img src="~/assets/image/sample/no_content_720480.png" alt="" srcset=""
                                @click="getImageSrc($event)"></li>
                        <li class="image-item"><img src="~/assets/image/sample/sample_01.png" alt="" srcset=""
                                @click="getImageSrc($event)"></li>
                        <li class="image-item"><img src="~/assets/image/sample/sample_02.png" alt="" srcset=""
                                @click="getImageSrc($event)"></li>
                        <li class="image-item"><img src="~/assets/image/sample/no_content.png" alt="" srcset=""
                                @click="getImageSrc($event)"></li>
                    </ul>
                    <button class="modal-close" @click="imagePopShow = false">닫기</button>
                </div>
            </div>
        </div>
        <br><br>
        <br>
        <br>
        <h2>안내문구 팝업</h2>
        <button type="button" class="btn btn-default" style="width: 20rem;" @click="noticePopShow = true">안내문구 팝업
            임시버튼</button>
        <div class="modal notice-modal show" style="position:relative;">
            <div class="dimmed-bg"  style="position:absolute;"></div>
            <div class="modal-wrap">
                <button class="modal-close" @click="noticePopShow = false">닫기</button>
                <div class="modal-header">
                    안내
                </div>
                <div class="modal-body">
                    <div class="text-center modal-content">
                        <div class="notice-img">
                            <img src="~/assets/image/common/img_notice.svg" alt="notice-img">
                        </div>
                        <p class="text text1">지금은 솔루션 <span>업데이트 및 안정화</span>를<br />
                            위해 작업중입니다.</p>
                        <p class="text text2">상황에 따라 데모사이트 이용이 어려울 수 있습니다.<br />
                            빠른 시일 내에 작업을 완료하도록 하겠습니다. </p>
                        <p class="text text3">이용에 불편을 드려 대단히 죄송합니다.</p>
                        <div class="btn-wrap gap">
                            <button class="btn btn-primary">확인</button>
                            <button class="btn btn-primary-line">취소</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <code class="guide-code">
                        <pre>
                            &lt;div class="modal notice-modal show"&gt;
    &lt;div class="dimmed-bg"&gt;&lt;/div&gt;
    &lt;div class="modal-wrap"&gt;
        &lt;button class="modal-close" @click="noticePopShow = false"&gt;닫기&lt;/button&gt;
        &lt;div class="modal-header"&gt;
            안내
        &lt;/div&gt;
        &lt;div class="modal-body"&gt;
            &lt;div class="text-center modal-content"&gt;
                &lt;div class="notice-img"&gt;
                    &lt;img src="~/assets/image/common/img_notice.svg" alt="notice-img"&gt;
                &lt;/div&gt;
                &lt;p class="text text1"&gt;지금은 솔루션 &lt;span&gt;업데이트 및 안정화&lt;/span&gt;를&lt;br/&gt;
                    위해 작업중입니다.&lt;/p&gt;
                &lt;p class="text text2"&gt;상황에 따라 데모사이트 이용이 어려울 수 있습니다.&lt;br /&gt;
                    빠른 시일 내에 작업을 완료하도록 하겠습니다. &lt;/p&gt;
                &lt;p class="text text3"&gt;이용에 불편을 드려 대단히 죄송합니다.&lt;/p&gt;
                &lt;div class="btn-wrap gap"&gt;
                    &lt;button class="btn btn-primary"&gt;확인&lt;/button&gt;
                    &lt;button class="btn btn-primary-line"&gt;취소&lt;/button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
              
            </pre>
                    </code>


        <p>nuxt3 기준 수정</p>
        <code class="guide-code">
            <pre>
                &lt;template&gt;
                    &lt;div class="modal image-pop show"&gt;
                        &lt;div class="dimmed-bg"&gt;&lt;/div&gt;
                        &lt;div class="image-wrap"&gt;
                            &lt;div class="pc"&gt;
                                &lt;div class="expansion-img"&gt;
                                    &lt;img :src="expandedImage" alt="미리보기"&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;ul class="image-list"&gt;
                                &lt;li class="image-item" v-for="(image, index) in imageItems" :key="`image-${index}`"&gt;
                                    &lt;img :src="getImageUrl(image)" :alt="`image-${index}`" @click="expandImage(image)"&gt;
                                &lt;/li&gt;
                            &lt;/ul&gt;
                        &lt;button class="modal-close"&gt;닫기&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;script setup&gt;
                import { ref } from 'vue'
                import image1 from '../../assets/image/sample/sample_01.png'
                import image2 from '../../assets/image/sample/no_content.png'
                import image3 from '../../assets/image/sample/item_sample_02.png'
                import image4 from '../../assets/image/sample/no_content_720480.png'

                const imageItems = [image1,image2,image3,image4]
                const expandedImage = ref(getImageUrl(imageItems[0]))

                function getImageUrl(image){
                    return new URL(image, import.meta.url).href;
                }

                function expandImage(image) {
                    expandedImage.value = getImageUrl(image);
                }
            &lt;/script&gt;
            &lt;style lang="scss" scoped&gt;
                @use "@/assets/scss/pages/components/modal.scss";
            &lt;/style&gt;

            </pre>
        </code>
    </div>
</template>

<script setup>

const imagePopShow = ref(false);
const noticePopShow = ref(false);

const getImageSrc = (event) => {
    let expansionImg = document.querySelector('.expansion-img img');
    let clikedImage = event.target.getAttribute('src');
    expansionImg.setAttribute('src', clikedImage);
}

</script>
<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";

.guide-modal-area {
    position: relative;
}
</style>