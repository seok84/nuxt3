<template>
    <div class="guide-content">
        <h2>버튼</h2>
        <h3>버튼 사이즈(높이)</h3>
        <button type="button" class="btn btn-default btn-large">btn-large</button>
        <br><br>
        <button type="button" class="btn btn-default"> 기본 4.8rem </button>
        <br><br>
        <button type="button" class="btn btn-default btn-middle">btn-middle</button>
        <br><br>
        <button type="button" class="btn btn-default btn-small">btn-small</button>
        <br><br>
        <h3>버튼 색상</h3>
        <button type="button" class="btn btn-default">Default</button>
        <br><br>
        <button type="button" class="btn btn-default-line">Default line</button>
        <br><br>
        <button type="button" class="btn btn-primary">Primary color</button>
        <br><br>
        <button type="button" class="btn btn-primary-line">Primary line color</button>
        <br><br>
        <button type="button" class="btn btn-primary">Second color</button>
        <br><br>
        <button type="button" class="btn btn-primary-line">Second line color</button>
        <br><br>
        <button type="button" class="btn btn-black">Black color</button>
        <br><br>
        <button type="button" class="btn btn-black2">Black2 color</button>
        <br><br>
        <button type="button" class="btn btn-danger">red color</button>
        <br><br>
        <h3>버튼 모양</h3>
        <button type="button" class="btn btn-round btn-large btn-primary-line">round</button>
        <br><br>
        <h3>버튼 wrap</h3>
        <div class="btn-wrap">
            <button type="button" class="btn btn-primary">Basic</button>
            <button type="button" class="btn btn-default">Basic</button>
        </div>
        <br><br>
        <h3>버튼 wrap gap</h3>
        <div class="btn-wrap gap">
            <button type="button" class="btn btn-primary">Basic</button>
            <button type="button" class="btn btn-default">Basic</button>
        </div>
        <br><br>
        <h3 style="font-size:2.4rem; font-weight: bold; margin: 1rem 0;">마이페이지 주문배송 조회 버튼</h3>
        <div class="mypage-btn-wrap-guide">
            <div class="mypage">
                <div class="order-item">
                    <div class="order-status">
                        <div class="guide-box">
                            <h4 style="flex:0; margin: 1rem 1rem 2rem; width: 100%;">주문취소 버튼 노출</h4>
                            <div>
                                <!-- 주문취소 -->
                                <div class="btn-wrap">
                                    <div class="box">
                                        <button type='button'
                                            class="btn btn-default btn-middle btn-cancel">주문취소</button>
                                    </div>
                                </div>
                                <div class="btn-wrap" style="display:none;">
                                    <div class="box">
                                        <button type="button"
                                            class="btn btn-primary btn-middle btn-review">후기작성</button>
                                        <button type='button' class="btn btn-primary btn-middle">구매확정</button>
                                        <button type='button' class="btn btn-primary-line btn-middle">배송조회</button>
                                    </div>
                                    <div class="box">
                                        <button type='button' class="btn btn-default btn-middle">교환신청</button>
                                        <button type='button' class="btn btn-default btn-middle">반품신청</button>
                                    </div>
                                </div>
                            </div>
                            <code class="guide-code">
                                <pre>
                                    &lt;div class="btn-wrap"&gt;
                                    &lt;div class="box"&gt;
                                        &lt;button type='button' class="btn btn-default btn-middle btn-cancel"&gt;주문취소&lt;/button&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="btn-wrap" style="display:none;"&gt;
                                    &lt;div class="box"&gt;
                                        &lt;button type="button" class="btn btn-primary btn-middle btn-review"&gt;후기작성&lt;/button&gt;
                                        &lt;button type='button' class="btn btn-primary btn-middle"&gt;구매확정&lt;/button&gt;
                                        &lt;button type='button' class="btn btn-primary-line btn-middle"&gt;배송조회&lt;/button&gt;
                                    &lt;/div&gt;
                                    &lt;div class="box"&gt;
                                        &lt;button type='button' class="btn btn-default btn-middle"&gt;교환신청&lt;/button&gt;
                                        &lt;button type='button' class="btn btn-default btn-middle"&gt;반품신청&lt;/button&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                </pre>
                            </code>
                        </div>
                        <div class="guide-box">
                            <h4 style="flex:0; margin: 1rem 1rem 2rem; width: 100%;">후기 작성 노출</h4>
                            <div>
                                <!-- 주문취소 -->
                                <div class="btn-wrap" style="display:none;">
                                    <div class="box">
                                        <button type='button'
                                            class="btn btn-default btn-middle btn-cancel">주문취소</button>
                                    </div>
                                </div>
                                <div class="btn-wrap">
                                    <div class="box">
                                        <button type="button"
                                            class="btn btn-primary btn-middle btn-review">후기작성</button>
                                        <button type='button' class="btn btn-primary btn-middle"
                                            style="display:none;">구매확정</button>
                                        <button type='button' class="btn btn-primary-line btn-middle">배송조회</button>
                                    </div>
                                    <div class="box">
                                        <button type='button' class="btn btn-default btn-middle">교환신청</button>
                                        <button type='button' class="btn btn-default btn-middle">반품신청</button>
                                    </div>
                                </div>
                            </div>
                            <code class="guide-code">
                                <pre>
                                    &lt;div class="btn-wrap" style="display:none;"&gt;
                                    &lt;div class="box"&gt;
                                        &lt;button type='button' class="btn btn-default btn-middle btn-cancel"&gt;주문취소&lt;/button&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="btn-wrap"&gt;
                                    &lt;div class="box"&gt;
                                        &lt;button type="button" class="btn btn-primary btn-middle btn-review"&gt;후기작성&lt;/button&gt;
                                        &lt;button type='button' class="btn btn-primary btn-middle"
                                            style="display:none;"&gt;구매확정&lt;/button&gt;
                                        &lt;button type='button' class="btn btn-primary-line btn-middle"&gt;배송조회&lt;/button&gt;
                                    &lt;/div&gt;
                                    &lt;div class="box"&gt;
                                        &lt;button type='button' class="btn btn-default btn-middle"&gt;교환신청&lt;/button&gt;
                                        &lt;button type='button' class="btn btn-default btn-middle"&gt;반품신청&lt;/button&gt;
                                    &lt;/div
                                </pre>
                            </code>
                        </div>
                        <div class="guide-box">
                            <h4 style="flex:0; margin: 1rem 1rem 2rem; width: 100%;">교환신청</h4>
                            <div>
                                <!-- 주문취소 -->
                                <div class="btn-wrap" style="display:none;">
                                    <div class="box">
                                        <button type='button'
                                            class="btn btn-default btn-middle btn-cancel">주문취소</button>
                                    </div>
                                </div>
                                <div class="btn-wrap">
                                    <div class="box">
                                        <button type="button" class="btn btn-primary btn-middle btn-review"
                                            style="display:none;">후기작성</button>
                                        <button type='button' class="btn btn-primary btn-middle">구매확정</button>
                                        <button type='button' class="btn btn-primary-line btn-middle">배송조회</button>
                                    </div>
                                    <div class="box">
                                        <button type='button' class="btn btn-default btn-middle">교환신청</button>
                                        <button type='button' class="btn btn-default btn-middle"
                                            style="display:none;">반품신청</button>
                                    </div>
                                </div>
                            </div>
                            <code class="guide-code">
                                <pre>
                                    &lt;div class="btn-wrap" style="display:none;"&gt;
                                    &lt;div class="box"&gt;
                                        &lt;button type='button' class="btn btn-default btn-middle btn-cancel"&gt;주문취소&lt;/button&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="btn-wrap"&gt;
                                    &lt;div class="box"&gt;
                                        &lt;button type="button" class="btn btn-primary btn-middle btn-review"
                                            style="display:none;"&gt;후기작성&lt;/button&gt;
                                        &lt;button type='button' class="btn btn-primary btn-middle"&gt;구매확정&lt;/button&gt;
                                        &lt;button type='button' class="btn btn-primary-line btn-middle"&gt;배송조회&lt;/button&gt;
                                    &lt;/div&gt;
                                    &lt;div class="box"&gt;
                                        &lt;button type='button' class="btn btn-default btn-middle"&gt;교환신청&lt;/button&gt;
                                        &lt;button type='button' class="btn btn-default btn-middle"
                                            style="display:none;"&gt;반품신청&lt;/button&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts"></script>
<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";
@use "@/assets/scss/pages/mypage/mypage_order.scss"
</style>