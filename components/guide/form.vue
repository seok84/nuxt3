<template>
    <div class="guide-content">
        <h2>vee-validate(option)</h2>
        <guideVeeValidateSample />
        <p>필수표기<em class="mandatory-mark">*</em></p>
        <code class="guide-code">
            <pre>
                &lt;em class="mandatory-mark"&gt;*&lt;/em&gt;
            </pre>
        </code>
        <h2>폼</h2><!--  -->
        <p class="form-title accent">폼제목</p>
        <div class="form-line">
            <input type="text" class="form-basic" placeholder="기본폼" />
            <span class="feedback invalid">유효성 메시지</span>
        </div>
        <div class="form-line">
            <input type="text" class="form-basic" placeholder="기본폼" disabled />
            <span class="feedback invalid">유효성 메시지</span>
        </div>
        <code class="guide-code">
                <pre>
        &lt;p class="form-title accent"&gt;폼제목&lt;/p&gt;
        &lt;div class="form-line"&gt;
            &lt;input type="text" class="form-basic" placeholder="기본폼" /&gt;
            &lt;span class="feedback invalid"&gt;유효성 메시지&lt;/span&gt;
        &lt;/div&gt;

        &lt;div class="form-line"&gt;
            &lt;input type="text" class="form-basic" placeholder="기본폼" disabled /&gt; // disabled
            &lt;span class="feedback invalid"&gt;유효성 메시지&lt;/span&gt;
        &lt;/div&gt;
        </pre>
            </code>
        <h2>폼 + 버튼</h2>
        <div class="form-line">
            <div class="flex">
                <input type="text" class="form-basic" placeholder="기본폼" />
                <button class="btn btn-form">폼버튼</button>
            </div>
            <span class="feedback invalid">유효성 메시지</span>
        </div>
        <code class="guide-code">
                <pre>
        &lt;p class="form-title"&gt;폼제목&lt;/p&gt;
        &lt;div class="form-line"&gt;
            &lt;div class="flex"&gt;
                &lt;input type="text" class="form-basic" placeholder="기본폼" /&gt;
                &lt;button class="btn btn-black"&gt;폼버튼&lt;/button&gt;
            &lt;/div&gt;
            &lt;span class="feedback invalid"&gt;유효성 메시지&lt;/span&gt;
        &lt;/div&gt;
        </pre>
            </code>
        <h2>비밀번호</h2>
        <p><span>버튼액션</span> <em style="color:red;">2024-03-20 수정</em></p>
        <p class="form-title accent">비밀번호</p>
        <div class="form-line">
            <button type="button" class="show-password-btn" @click="$togglePasswordType($event)"></button>
            <input type="password" class="form-basic" placeholder="비밀번호" />
            <span class="feedback invalid">유효성 메시지</span>
        </div>
        <!-- <span>가상선택자 20240321</span>
        <div class="form-line i-pwd">
            <input type="password" class="form-basic" placeholder="비밀번호" />
            <span class="feedback invalid">유효성 메시지</span>
        </div> -->
        <code class="guide-code">
                <pre>
        &lt;p class="form-title accent"&gt;비밀번호&lt;/p&gt;
        &lt;div class="form-line"&gt;
            &lt;button type="button" class="show-password-btn" @click="$togglePasswordType($event)"&gt;&lt;/button&gt;
            &lt;input type="password" class="form-basic" placeholder="비밀번호" /&gt;
            &lt;span class="feedback invalid"&gt;유효성 메시지&lt;/span&gt;
        &lt;/div&gt;
        </pre>
            </code>
        <h2>셀렉트박스</h2>
        <div class="select-wrap">
            <select class="input-select">
                <option value="">기본 셀렉트박스</option>
                <option value="">셀렉트박스 옵션</option>
            </select>
        </div>
        <p>작은 arrow</p>
        <div class="select-wrap">
            <select class="input-select small-arr">
                <option value="">기본 셀렉트박스</option>
                <option value="">셀렉트박스 옵션</option>
            </select>
        </div>
        <code class="guide-code">
                <pre>
        &lt;p class="form-title accent"&gt;셀렉트박스&lt;/p&gt;
        &lt;div class="select-wrap"&gt;
            &lt;select class="input-select"&gt;
                &lt;option value=""&gt;기본 셀렉트박스&lt;/option&gt;
                &lt;option value=""&gt;셀렉트박스 옵션&lt;/option&gt;
            &lt;/select&gt;
        &lt;/div&gt;
        </pre>
            </code>
        <h2>커스텀 셀렉트박스</h2>
        <div class="select-wrap">
            <a class="input-select" @click="isVisible = !isVisible">커스텀 셀렉트박스</a>
            <ul class="select-option" v-show="isVisible">
                <li>옵션1</li>
                <li>옵션2</li>
                <li>옵션3</li>
            </ul>
        </div>
        <code class="guide-code">
                <pre>
        &lt;p class="form-title"&gt;커스텀 셀렉트박스&lt;/p&gt;
        &lt;div class="select-wrap"&gt;
            &lt;a class="input-select" @click="isVisible = !isVisible"&gt;커스텀 셀렉트박스&lt;/a&gt;
            &lt;ul class="select-option" v-show="isVisible"&gt;
                &lt;li&gt;옵션1&lt;/li&gt;
                &lt;li&gt;옵션2&lt;/li&gt;
                &lt;li&gt;옵션3&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
        </pre>
            </code>
        <h2>셀렉트박스 + 버튼</h2>
        <div class="select-wrap">
            <div class="flex">
                <select class="input-select">
                    <option value="">기본 셀렉트박스</option>
                    <option value="">셀렉트박스 옵션</option>
                </select>
                <button class="btn btn-form">폼버튼</button>
            </div>
        </div>
        <code class="guide-code">
                <pre>
        &lt;p class="form-title"&gt;셀렉트박스 + 버튼&lt;/p&gt;
        &lt;div class="select-wrap"&gt;
            &lt;div class="flex"&gt;
                &lt;select class="input-select"&gt;
                    &lt;option value=""&gt;기본 셀렉트박스&lt;/option&gt;
                    &lt;option value=""&gt;셀렉트박스 옵션&lt;/option&gt;
                &lt;/select&gt;
                &lt;button class="btn btn-form"&gt;폼버튼&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        </pre>
            </code>
        <h2>라디오</h2>
        <div class="radio-wrap">
            <label class="input-radio"><input type="radio" name="sample-radio"> <i></i>라디오</label>
            <label class="input-radio"><input type="radio" name="sample-radio" checked> <i></i>라디오</label>
        </div>
        <code class="guide-code">
                <pre>
        &lt;p class="form-title accent"&gt;라디오&lt;/p&gt;
        &lt;div class="radio-wrap"&gt;
            &lt;label class="input-radio"&gt;&lt;input type="radio"&gt;&lt;i&gt;&lt;/i&gt;라디오&lt;/label&gt;
        &lt;/div&gt;
        </pre>
            </code>
        <h2>체크박스</h2>
        <div class="check-wrap">
            <label class="input-checkbox"><input type="checkbox"><i></i>체크박스</label>
            <label class="input-checkbox"><input type="checkbox" checked><i></i>체크박스</label>
            <label class="circle-input-checkbox"><input type="checkbox"><i></i>원형 체크박스</label>
            <label class="circle-input-checkbox"><input type="checkbox" checked><i></i>원형 체크박스</label>
            <label class="circle-input-checkbox purple"><input type="checkbox" checked><i></i>원형 체크박스</label>
        </div>
        <label class="checkbox"><input type="checkbox"><i></i></label>
        <label class="circle-checkbox"><input type="checkbox"><i></i></label>
        <code class="guide-code">
                <pre>
        &lt;label class="input-checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;체크박스&lt;/label&gt;
        &lt;label class="input-checkbox"&gt;&lt;input type="checkbox" checked&gt;&lt;i&gt;&lt;/i&gt;체크박스&lt;/label&gt;
        &lt;label class="circle-input-checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;원형 체크박스&lt;/label&gt;
        &lt;label class="circle-input-checkbox"&gt;&lt;input type="checkbox" checked&gt;&lt;i&gt;&lt;/i&gt;원형 체크박스&lt;/label&gt;
        &lt;label class="circle-input-checkbox purple"&gt;&lt;input type="checkbox" checked&gt;&lt;i&gt;&lt;/i&gt;원형 체크박스&lt;/label&gt;

        // 체크박스 단독
        &lt;label class="checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;&lt;/label&gt;
        &lt;label class="circle-checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;&lt;/label&gt;
        </pre>
            </code>
        <h2>달력 input</h2>
        <label class="date"><input type="date" class="form-basic"><i></i></label>
        <br>
        <br>
        <h2>수량</h2>
        <div class="quantity-box">
            <button type="button" class="btn-quantity btn-minus"></button>
            <input type="number" title="수량" readonly value="1" maxlength="999" class="quantity number">
            <button type="button" class="btn-quantity btn-plus"></button>
        </div>
        <code class="guide-code">
                <pre>
        &lt;div class="quantity-box"&gt;
&lt;button&gt; type="button" class="btn-quantity btn-minus"&gt;&lt;/button&gt;
&lt;input type="number" title="수량" value="1" readonly maxlength="999" class="quantity number"&gt;
&lt;button&gt; type="button" class="btn-quantity btn-plus"&gt;&lt;/button&gt;
&lt;/div&gt;


</pre>
            </code>
        <br>
        <br>
        <h2>기간조회</h2>
        <div class="period-container">
            <label class="date"><input type="date" class="form-basic"><i></i></label>
            <span class="divider">~</span>
            <label class="date"><input type="date" class="form-basic"><i></i></label>
            <div class="select-wrap box">
                <select class="input-select">
                    <option value="">조회기간</option>
                    <option value="">옵션</option>
                </select>
            </div>
            <div class="form-line box">
                <div class="flex">
                    <input type="text" class="form-basic" placeholder="검색어를 입력하세요" />
                    <button class="btn btn-black">조회</button>
                </div>
            </div>
        </div>
        <code class="guide-code">
                <pre>
                    &lt;div class="period-container"&gt;
                &lt;label class="date"&gt;&lt;input type="date" class="form-basic"&gt;&lt;i&gt;&lt;/i&gt;&lt;/label&gt;
                &lt;span class="divider"&gt;~&lt;/span&gt;
                &lt;label class="date"&gt;&lt;input type="date" class="form-basic"&gt;&lt;i&gt;&lt;/i&gt;&lt;/label&gt;
                &lt;div class="select-wrap box"&gt;
                    &lt;select class="input-select"&gt;
                        &lt;option value=""&gt;조회기간&lt;/option&gt;
                        &lt;option value=""&gt;옵션&lt;/option&gt;
                    &lt;/select&gt;
                &lt;/div&gt;
                &lt;div class="form-line box"&gt;
                    &lt;div class="flex"&gt;
                        &lt;input type="text" class="form-basic" placeholder="검색어를 입력하세요" /&gt;
                        &lt;button class="btn btn-black"&gt;조회&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
                </pre>
            </code>
        <br>
        <br>

        <h2>작성자 정보</h2>
        <div class="creation-info">
            <div>
                <p>enco***</p>
                <p>2023-12-13</p>
            </div>
            <p>신고/차단</p>
        </div>

        <br>
        <br>

        <h2>수량 - 라운드</h2>
        <div class="quantity-box-round">
            <button type="button" class="btn-quantity btn-minus"></button>
            <input type="number" title="수량" readonly value="1" maxlength="999" class="quantity number">
            <button type="button" class="btn-quantity btn-plus"></button>
        </div>
        <code class="guide-code">
                <pre>
                &lt;div class="quantity-box-round"&gt;
    &lt;button&gt; type="button" class="btn-quantity btn-minus"&gt;&lt;/button&gt;
    &lt;input type="number" title="수량" value="1" readonly maxlength="999" class="quantity number"&gt;
    &lt;button&gt; type="button" class="btn-quantity btn-plus"&gt;&lt;/button&gt;
&lt;/div&gt;


    </pre>
            </code>
        <br>
        <br>
        <h2>필터 탭</h2>
        <div class="filter-wrap">
            <p>총 <b>123</b>개 상품</p>
            <div class="select-wrap">
                <select class="input-select">
                    <option value="">인기순</option>
                    <option value="">셀렉트박스 옵션</option>
                </select>
            </div>
        </div>
        <code class="guide-code">
                <pre>
                &lt;div class="filter-wrap"&gt;
                &lt;p&gt;총 &lt;b&gt;123&lt;/b&gt;개 상품&lt;/p&gt;
                &lt;div class="select-wrap"&gt;
                    &lt;select class="input-select"&gt;
                        &lt;option value=""&gt;인기순&lt;/option&gt;
                        &lt;option value=""&gt;셀렉트박스 옵션&lt;/option&gt;
                    &lt;/select&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        </pre>
            </code>
        <h2>약관동의</h2>
        <ul class="terms-content">
            <li class="check-wrap whole-check">
                <label class="circle-input-checkbox"><input type="checkbox"><i></i></label>
                <p class="terms-title">모든 약관 동의</p>
            </li>
            <li class="check-wrap">
                <label class="circle-input-checkbox"><input type="checkbox"><i></i>
                    <p class="terms-title">서비스 이용 약관 동의 <span>(선택)</span></p>
                </label>
                <div class="terms-list">

                    <button type="button" class="terms-button">약관보기</button>
                </div>
            </li>
            <li class="check-wrap">
                <label class="circle-input-checkbox"><input type="checkbox"><i></i>
                    <p class="terms-title">개인정보의 수집·이용목적 및 항목 동의 <em>(필수)</em></p>
                </label>
                <div class="terms-list">

                    <button type="button" class="terms-button">약관보기</button>
                </div>
            </li>
            <li class="check-wrap">
                <label class="circle-input-checkbox"><input type="checkbox"><i></i>
                    <p class="terms-title">개인정보의 수집·이용항목 목적 동의 <em>(필수)</em></p>
                </label>
                <div class="terms-list">
                    <button type="button" class="terms-button">약관보기</button>
                </div>
            </li>
        </ul>
        <code class="guide-code">
            <pre>
                &lt;ul class="terms-content"&gt;
                &lt;li class="check-wrap whole-check"&gt;
                    &lt;label class="circle-input-checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;&lt;/label&gt;
                    &lt;p class="terms-title"&gt;모든 약관 동의&lt;/p&gt;
                &lt;/li&gt;
                &lt;li class="check-wrap"&gt;
                    &lt;label class="circle-input-checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;
                        &lt;p class="terms-title"&gt;서비스 이용 약관 동의 &lt;span&gt;(선택)&lt;/span&gt;&lt;/p&gt;
                    &lt;/label&gt;
                    &lt;div class="terms-list"&gt;
            
                        &lt;button type="button" class="terms-button"&gt;약관보기&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/li&gt;
                &lt;li class="check-wrap"&gt;
                    &lt;label class="circle-input-checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;
                        &lt;p class="terms-title"&gt;개인정보의 수집·이용목적 및 항목 동의 &lt;em&gt;(필수)&lt;/em&gt;&lt;/p&gt;
                    &lt;/label&gt;
                    &lt;div class="terms-list"&gt;
            
                        &lt;button type="button" class="terms-button"&gt;약관보기&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/li&gt;
                &lt;li class="check-wrap"&gt;
                    &lt;label class="circle-input-checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;
                        &lt;p class="terms-title"&gt;개인정보의 수집·이용항목 목적 동의 &lt;em&gt;(필수)&lt;/em&gt;&lt;/p&gt;
                    &lt;/label&gt;
                    &lt;div class="terms-list"&gt;
                        &lt;button type="button" class="terms-button"&gt;약관보기&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
            </pre>
            </code>
    </div>
</template>
<script setup>
import {ref} from "vue";
import guideVeeValidateSample from "~/components/guide/vee-validate-sample.vue"

const isVisible = ref(false);
</script>
<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";
</style>