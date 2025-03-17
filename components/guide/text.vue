<template>
    <div class="guide-content">
        <h2>텍스트</h2>

        <h3>공통 타이틀</h3>
        <h1 class="title-h1">타이틀 title-h1</h1>
        <h2 class="title-h2">타이틀 title-h2</h2>

        <code class="guide-code">
                                        <pre>
        &lt;h1 class="title-h1"&gt;타이틀 title-h1&lt;/h1&gt;
        &lt;h2 class="title-h2"&gt;타이틀 title-h2&lt;/h2&gt;
        </pre>
                                        </code>

        <h3>공통 단락</h3>
        <p class="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nesciunt totam commodi saepe, adipisci harum
            reprehenderit earum, fugiat ipsa esse ipsam veniam modi eveniet odit, maxime sapiente possimus vitae
            corrupti.
        </p>
        <code class="guide-code">
                                        <pre>
        &lt;p class="paragraph"&gt;
            text
        &lt;/p&gt;
        </pre>
                                        </code>

        <h3>가격</h3>
        <div class="discounted"> 138,000원</div>
        <div class="price-wrap">
            <p class="price">
                <span>108,000</span>
                <span>원</span>
            </p>
            <p class="sale">
                27%
            </p>
        </div>
        <div class="purchase-amount">
            <p class="price">9,999,999원</p>
            <p class="amount">수량 999개</p>
        </div>
        <code class="guide-code">
                                        <pre>
        &lt;div class="discounted"&gt; 138,000원&lt;/div&gt;
        &lt;div class="price-wrap"&gt;
            &lt;p class="price"&gt;
                &lt;span&gt;108,000&lt;/span&gt;
                &lt;span&gt;원&lt;/span&gt;
            &lt;/p&gt;
            &lt;p class="sale"&gt;
                27%
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="purchase-amount"&gt;
            &lt;p class="price"&gt;9,999,999원&lt;/p&gt;
            &lt;p class="amount"&gt;수량 999개&lt;/p&gt;
        &lt;/div&gt;
        </pre>
                                        </code>


        <h3>Underline</h3>
        <p class="underline red">구성 상품 보기</p>
        <p class="underline blue">영수증 보기</p>
        <p class="underline gray">영수증 보기</p>
        <code class="guide-code">
                                        <pre>
        &lt;p class="underline red"&gt;구성 상품 보기&lt;/p&gt;
        &lt;p class="underline blue"&gt;영수증 보기&lt;/p&gt;
        &lt;p class="underline gray"&gt;영수증 보기&lt;/p&gt;
        </pre>
                                        </code>

        <h3>점 리스트</h3>
        <ul class="dot-list">
            <li>수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 E-mail(이메일)로 받아볼 수 있습니다.</li>
            <li>회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.</li>
        </ul>
        <br>
        <br>
        <ul class="dot-list large-dot">
            <li>수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 E-mail(이메일)로 받아볼 수 있습니다.</li>
            <li>회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.</li>
        </ul>
        <code class="guide-code">
                                        <pre>
                &lt;ul class="dot-list"&gt;
                    &lt;li&gt;수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 E-mail(이메일)로 받아볼 수 있습니다.&lt;/li&gt;
                    &lt;li&gt;회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.&lt;/li&gt;
                &lt;/ul&gt;
                &lt;br&gt;
                &lt;br&gt;
                &lt;ul class="dot-list large-dot"&gt;
                    &lt;li&gt;수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 E-mail(이메일)로 받아볼 수 있습니다.&lt;/li&gt;
                    &lt;li&gt;회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.&lt;/li&gt;
                &lt;/ul&gt;
            </pre>
                                    </code>
        <h3>평점</h3>
        <div class="score-wrap">
            <span class="star active"></span>
            <span class="star active"></span>
            <span class="star active"></span>
            <span class="star active"></span>
            <span class="star"></span>
        </div>
        <div class="star-wrap">
            <div class="star">
                <i style="width: 50%"></i>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="star">
                <i class="star1"></i>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="star">
                <i class="star2"></i>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="star">
                <i class="star3"></i>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="star">
                <i class="star4"></i>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="star">
                <i class="star5"></i>
            </div>
        </div>
        <code class="guide-code">
                                        <pre>
                &lt;div class="score-wrap"&gt;
                    &lt;span class="star active"&gt;&lt;/span&gt; //active 클래스로 활성화
                    &lt;span class="star active"&gt;&lt;/span&gt;
                    &lt;span class="star active"&gt;&lt;/span&gt;
                    &lt;span class="star active"&gt;&lt;/span&gt;
                    &lt;span class="star"&gt;&lt;/span&gt;
                &lt;/div&gt;

                &lt;div class="star-wrap"&gt;
                    &lt;div class="star"&gt;
                        &lt;i style="width: 50%"&gt;&lt;/i&gt; // custom width star
                    &lt;/div&gt;
                    &lt;div class="star"&gt;
                        &lt;i class="star1"&gt;&lt;/i&gt; // one star
                    &lt;/div&gt;
                    &lt;div class="star"&gt;
                        &lt;i class="star2"&gt;&lt;/i&gt; // two star
                    &lt;/div&gt;
                    &lt;div class="star"&gt;
                        &lt;i class="star3"&gt;&lt;/i&gt; // three star
                    &lt;/div&gt;
                    &lt;div class="star"&gt;
                        &lt;i class="star4"&gt;&lt;/i&gt; // four star
                    &lt;/div&gt;
                    &lt;div class="star"&gt;
                        &lt;i class="star5"&gt;&lt;/i&gt; // five star
                    &lt;/div&gt;
                &lt;/div&gt;
            </pre>
                                </code>
        <h3>관리자 아이콘</h3>
        <p class="administrator">관리자 답변</p>
        <code class="guide-code">
                                    <pre>
                &lt;p class="administrator"&gt;관리자 답변&lt;/p&gt;
            </pre>
                                </code>
        <h3>그라데이션 텍스트</h3><!-- 임시 -->
        <p class="colorful-text">Gradient Text Effect</p>
    </div>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";
@use "@/assets/scss/pages/items/item_list.scss";

/* 임시 */
.colorful-text {
    position: relative;
    text-align: center;
    font-size: 50px;
    font-family: arial;
    font-weight: 900;
    background-size: 400%;
    background-image: linear-gradient(109.6deg, #30cfd0 11.2%, #330867 92.5%);
    background-clip: text;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    filter: brightness(1.85);
    animation: colorfulMove 5s linear infinite;
}

@keyframes colorfulMove {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }

}
</style>