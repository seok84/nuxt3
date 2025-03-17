<template>
    <div class="guide-content">
        <h2>첨부파일</h2>
        <ul class="photo-list">
            <li class="photo-item">
                <img src="~/assets/image/sample/no_content.png" alt="fileName" class="thumbnail">
                <button type="button" class="btn-delete"></button>
            </li>
            <li class="photo-item">
                <img src="~/assets/image/sample/no_content_720480.png" alt="fileName" class="thumbnail">
                <button type="button" class="btn-delete"></button>
            </li>
            <li class="photo-item">
                <img src="~/assets/image/sample/no_content_7201440.png" alt="fileName" class="thumbnail">
                <button type="button" class="btn-delete"></button>
            </li>
            <li class="photo-item">
                <img src="~/assets/image/sample/thum.png" alt="fileName" class="thumbnail">
                <button type="button" class="btn-delete"></button>
            </li>
        </ul>
        <code class="guide-code">
            <pre>
                &lt;ul class="photo-list" v-show="checkPhotoList"&gt;
                    &lt;li class="photo-item"&gt;
                        &lt;img src="" alt="fileName" class="thumbnail"&gt;
                        &lt;button type="button" class="btn-delete"&gt;&lt;/button&gt;
                    &lt;/li&gt;
                    &lt;li class="photo-item"&gt;
                        &lt;img src=" alt="fileName" class="thumbnail"&gt;
                        &lt;button type="button" class="btn-delete"&gt;&lt;/button&gt;
                    &lt;/li&gt;
                    &lt;li class="photo-item"&gt;
                        &lt;img src="" alt="fileName" class="thumbnail"&gt;
                        &lt;button type="button" class="btn-delete"&gt;&lt;/button&gt;
                    &lt;/li&gt;
                    &lt;li class="photo-item"&gt;
                        &lt;img src="" alt="fileName" class="thumbnail"&gt;
                        &lt;button type="button" class="btn-delete"&gt;&lt;/button&gt;
                    &lt;/li&gt;
                &lt;/ul&gt;
            </pre>
        </code>
        <h2>탭</h2>
        <section name="tabs">
            <h3>탭메뉴1</h3>
            <div class="tabs">
                <a class="tab-item active">탭메뉴1</a>
                <a class="tab-item">탭메뉴2</a>
                <a class="tab-item">탭메뉴3</a>
                <a class="tab-item">탭메뉴4</a>
            </div>
            <code class="guide-code">
                                    <pre>
            &lt;div class="tabs"&gt;
                &lt;a class="tab-item active"&gt;탭메뉴1&lt;/a&gt; // active 클래스 추가시 활성화
                &lt;a class="tab-item"&gt;탭메뉴2&lt;/a&gt;
                &lt;a class="tab-item"&gt;탭메뉴3&lt;/a&gt;
                &lt;a class="tab-item"&gt;탭메뉴4&lt;/a&gt;    
            &lt;/div&gt;
            </pre>
                                    </code>

            <h3>탭메뉴2</h3>
            <div class="tabs type-a">
                <a class="tab-item active">탭메뉴1</a>
                <a class="tab-item">탭메뉴2</a>
                <a class="tab-item">탭메뉴3</a>
                <a class="tab-item">탭메뉴4</a>
            </div>

            <h3>탭메뉴3</h3>
            <div class="tabs type-b">
                <a class="tab-item active">탭메뉴1</a>
                <a class="tab-item">탭메뉴2</a>
                <a class="tab-item">탭메뉴3</a>
                <a class="tab-item">탭메뉴4</a>
            </div>

        </section>

        <h2>토글 타이틀, 컨텐츠</h2>
        <section name="toggle-title">
            <div class="toggle-title">
                <h2>기본정보</h2>
                <button type="button" class="toggle-arr"></button>
            </div>
            <div class="toggle-content">
                컨텐츠 내용이 들어가는 toggle contents 내부 입니다
            </div>
            <div class="toggle-title active">
                <h2>기본정보</h2>
                <button type="button" class="toggle-arr"></button>
            </div>
            <div class="toggle-content">
                컨텐츠 내용이 들어가는 toggle contents 내부 입니다
            </div>


            <code class="guide-code">
                        <pre>
                    &lt;div class="toggle-title"&gt
                        &lt;h2&gt기본정보&lt;/h2&gt
                        &lt;button class="toggle-arr"&gt&lt;/button&gt
                    &lt;/div&gt
                    &lt;div class="toggle-content"&gt
                        컨텐츠 내용
                    &lt;/div&gt
                </pre>
                        <hr>
                        <pre>
                    &lt;div class="toggle-title active"&gt
                        &lt;h2&gt기본정보&lt;/h2&gt
                        &lt;button class="toggle-arr"&gt&lt;/button&gt
                    &lt;/div&gt
                    &lt;div class="toggle-content"&gt
                        컨텐츠 내용
                    &lt;/div&gt
                </pre>
                    </code>
        </section>

        <h2>공통요소</h2>
        <section name="common">


            <!-- 노컨텐츠 -->
            <div class="no-contents">
                <img src="~/assets/image/item/no-contents.svg" alt="상품없음">
                <p>엇? 장바구니에 아무것도 없어요<br>
                    상품을 둘러볼까요? :D</p>
                <button class="btn btn-primary-line btn-round btn-home">메인으로</button>
            </div>

        </section>

        <h2>페이징</h2>
        <ul class="pagination">
            <li class="page-item"><span class="page-prev">이전페이지</span></li>
            <li class="page-item active"><span class="page-link">1</span></li>
            <li class="page-item"><span class="page-link">2</span></li>
            <li class="page-item"><span class="page-link">3</span></li>
            <li class="page-item"><span class="page-link">4</span></li>
            <li class="page-item"><span class="page-link">5</span></li>
            <li class="page-item"><span class="page-next">이전페이지</span></li>
        </ul>
        <code class="guide-code">
            <pre>
                &lt;ul class="pagination"&gt;
                    &lt;li class="page-item"&gt;&lt;span class="page-prev"&gt;이전페이지&lt;/span&gt;&lt;/li&gt;
                    &lt;li class="page-item active"&gt;&lt;span class="page-link"&gt;1&lt;/span&gt;&lt;/li&gt;
                    &lt;li class="page-item"&gt;&lt;span class="page-link"&gt;2&lt;/span&gt;&lt;/li&gt;
                    &lt;li class="page-item"&gt;&lt;span class="page-link"&gt;3&lt;/span&gt;&lt;/li&gt;
                    &lt;li class="page-item"&gt;&lt;span class="page-link"&gt;4&lt;/span&gt;&lt;/li&gt;
                    &lt;li class="page-item"&gt;&lt;span class="page-link"&gt;5&lt;/span&gt;&lt;/li&gt;
                    &lt;li class="page-item"&gt;&lt;span class="page-next"&gt;이전페이지&lt;/span&gt;&lt;/li&gt;
                &lt;/ul&gt;
            </pre>
        </code>

        <h2>이미지 없음</h2>
        <div class="no-image" style="width: 200px; height: 200px">이미지 없음</div>
        <code class="guide-code">
            <pre>
                &lt;div class="no-image" &gt;&lt;/div&gt;
            </pre>
        </code>
    </div>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";
</style>