<template>
    <div class="guide-content">
        <h2>썸네일 영역 (기본)</h2>
        <div class="item-list-container vertical">
            <!-- timedeal-list 붙으면 타임딜 레이아웃-->
            <div class="item-list item-list-3">
                <!-- 체크박스 -->
                <label class="checkbox"><input type="checkbox"><i></i></label>
                <label class="circle-checkbox"><input type="checkbox"><i></i></label>

                <!-- 배송상태 -->
                <ul class="delivery-status-wrap">
                    <li class="status cancellation-processing">취소처리중</li>
                    <li class="status cancellation-completed">취소완료</li>
                    <li class="status return-processing">반품처리중</li>
                    <li class="status return-completed">반품완료</li>
                    <li class="status delivery-processing">배송준비중</li>
                    <li class="status delivery-completed">배송완료</li>
                    <li class="status exchange-processing">교환처리중</li>
                    <li class="status deposit-waiting">입금대기중</li>
                    <li class="status deposit-completed">입금완료</li>
                    <li class="status purchase-confirm">구매확정</li>
                </ul>

                <!-- 아이템 썸네일 영역 -->
                <p>rank 에 best 붙으면 보라색 1~3위</p>
                <div class="thumbnail-container sold-out">
                    <div class="sold-out-wrap">
                        <span>
                            <img src="~/assets/image/sample/sold-out.png" alt="품절">
                        </span>
                    </div>
                    <div class="rank">01</div>
                    <div to="/" @click.prevent class="thumbnail-wrap">
                        <div class="thumbnail-area">
                            <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="center-center">
                        </div>
                        <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                    </div>
                    <div class="timedeal">
                        <p>
                            <span>TIME</span>
                            <span>SALE</span>
                        </p>
                        <p>
                            <span>09:38 ~ 11:59</span>
                            <span>월 · 화 · 수 · 목 · 금 · 토 · 일</span>
                        </p>
                    </div>
                    <div class="user-action">
                        <div class="user-ico user-attention">관심상품</div>
                        <div class="user-ico user-basket">장바구니</div>
                    </div>
                </div>
            </div>
        </div>

        <h2>썸네일 영역 (유저액션)</h2>

        <!-- 아이템 썸네일 영역 -->
        <div class="thumbnail-container sold-out">
            <div class="sold-out-wrap">
                <span>
                    <img src="~/assets/image/sample/sold-out.png" alt="품절">
                </span>
            </div>
            <div class="rank">01</div>
            <div to="/" @click.prevent class="thumbnail-wrap">
                <div class="thumbnail-area">
                    <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                    <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                    <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                    <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                    <img class="center-center">
                </div>
                <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
            </div>
            <div class="user-action over">
                <div class="user-ico user-attention">관심상품</div>
                <div class="user-ico user-basket">장바구니</div>
            </div>
        </div>


        <!-- 아이템 썸네일 영역 코드 -->
        <code class="guide-code">
                                    썸네일 영역 (기본)
                           <pre>&lt;div class="item-list-container vertical"&gt;
                  &lt;div class="item-list item-list-3"&gt;
                      &lt;!-- 체크박스 --&gt;
                      &lt;label class="checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;&lt;/label&gt;
                      &lt;label class="circle-checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;&lt;/label&gt;
              
                      &lt;!-- 배송상태 --&gt;
                      &lt;ul class="delivery-status-wrap"&gt;
                          &lt;li class="status cancellation-processing"&gt;취소처리중&lt;/li&gt;
                          &lt;li class="status cancellation-completed"&gt;취소완료&lt;/li&gt;
                          &lt;li class="status return-processing"&gt;반품처리중&lt;/li&gt;
                          &lt;li class="status return-completed"&gt;반품완료&lt;/li&gt;
                          &lt;li class="status delivery-processing"&gt;배송준비중&lt;/li&gt;
                          &lt;li class="status delivery-completed"&gt;배송완료&lt;/li&gt;
                          &lt;li class="status exchange-processing"&gt;교환처리중&lt;/li&gt;
                      &lt;/ul&gt;
              
                      &lt;!-- 아이템 썸네일 영역 --&gt;
                      &lt;div class="thumbnail-container sold-out"&gt;
                          &lt;div class="sold-out-wrap"&gt;
                              &lt;span&gt;
                                  &lt;img src="~/assets/image/sample/sold-out.png" alt="품절"&gt;
                              &lt;/span&gt;
                          &lt;/div&gt;
                          &lt;div class="rank"&gt;01&lt;/div&gt;
                          &lt;div to="/" @click.prevent class="thumbnail-wrap"&gt;
                              &lt;div class="thumbnail-area"&gt;
                                  &lt;img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                                  &lt;img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                                  &lt;img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                                  &lt;img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                                  &lt;img class="center-center"&gt;
                              &lt;/div&gt;
                              &lt;img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일"&gt;
                          &lt;/div&gt;
                          &lt;div class="timedeal"&gt;
                              &lt;p&gt;
                                  &lt;span&gt;TIME&lt;/span&gt;
                                  &lt;span&gt;SALE&lt;/span&gt;
                              &lt;/p&gt;
                              &lt;p&gt;
                                  &lt;span&gt;09:38 ~ 11:59&lt;/span&gt;
                                  &lt;span&gt;월 · 화 · 수 · 목 · 금 · 토 · 일&lt;/span&gt;
                              &lt;/p&gt;
                          &lt;/div&gt;
                          &lt;div class="user-action"&gt;
                              &lt;div class="user-ico user-attention"&gt;관심상품&lt;/div&gt;
                              &lt;div class="user-ico user-basket"&gt;장바구니&lt;/div&gt;
                          &lt;/div&gt;
                      &lt;/div&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
            </pre>
                                    </code>

        <h2>아이템 정보 영역</h2>
        <!-- 아이템 정보 영역 -->
        <div class="info-container">
            <div class="title-main paragraph-ellipsis">
                <b>[브랜드명]</b>제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
            </div>
            <div class="title-sub paragraph-ellipsis">
                <b>[옵션1]</b>서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 <b>[옵션2]</b> 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브
                타이틀
                서브 타이틀 서브 타이틀 서브 타이틀 서브
                타이틀
            </div>
            <div class="discounted">
                138,000원
            </div>
            <div class="price-wrap">
                <p class="price">
                    <span>108,000</span>
                    <span>원</span>
                </p>
                <p class="sale">
                    27%
                </p>
            </div>
            <div class="underline red">
                구성 상품 보기
            </div>
            <div class="purchase-amount">
                <p class="price">9,999,999원</p>
                <p class="amount">수량 999개</p>
            </div>
            <div class="tag-wrap">
                <div class="tag new">신상품</div>
                <div class="tag md">MD추천</div>
                <div class="tag coupon">쿠폰</div>
                <div class="tag delivery">무료배송</div>
                <div class="tag best">베스트</div>
                <div class="tag only">ONLY</div>
                <div class="tag salegoods">행사상품</div>
                <div class="tag timesale">타임세일</div>
                <div class="tag event">이벤트</div>
            </div>
            <div class="tag-wrap type-underline">
                <div class="tag new">신상품</div>
                <div class="tag md">MD추천</div>
                <div class="tag coupon">쿠폰</div>
                <div class="tag delivery">무료배송</div>
                <div class="tag best">베스트</div>
                <div class="tag only">ONLY</div>
                <div class="tag salegoods">행사상품</div>
                <div class="tag timesale">타임세일</div>
                <div class="tag event">이벤트</div>
            </div>
        </div>
        <div class="item-gift">
            <span><i>선물</i>구매 사은품</span>
            <span>루카랩 케어베어 씰 스티커 외 N1개</span>
        </div>

        <!-- 아이템 정보 영역 코드 -->
        <code class="guide-code">
                <pre>
               &lt;div class="info-container"&gt;
               &lt;div&gt; class="title-main paragraph-ellipsis"&gt;
                   [브랜드명] 제품명이 노출되는 영역 50g X 2
               &lt;/div&gt;
               &lt;div&gt; class="title-sub paragraph-ellipsis"&gt;
                   서브 타이틀
               &lt;/div&gt;
               &lt;div&gt; class="discounted"&gt;
                   138,000원
               &lt;/div&gt;
               &lt;div class="price-wrap"&gt;
                   &lt;p class="price"&gt;
                       &lt;span&gt;108,000&lt;/span&gt;
                       &lt;span&gt;원&lt;/span&gt;
                   &lt;/p&gt;
                   &lt;p&gt; class="sale"&gt;
                       27%
                   &lt;/p&gt;
               &lt;/div&gt;
               &lt;div class="tag-wrap"&gt;
                   &lt;div&gt; class="tag new"&gt;신상품&lt;/div&gt;
                   &lt;div&gt; class="tag md"&gt;MD추천&lt;/div&gt;
                   &lt;div&gt; class="tag coupon"&gt;쿠폰&lt;/div&gt;
                   &lt;div&gt; class="tag delivery"&gt;무료배송&lt;/div&gt;
                   &lt;div&gt; class="tag best"&gt;베스트&lt;/div&gt;
                   &lt;div&gt; class="tag timesale"&gt;타임세일&lt;/div&gt;
                   &lt;div&gt; class="tag event"&gt;이벤트&lt;/div&gt;
               &lt;/div&gt;
               &lt;/div&gt;

                &lt;div class="tag-wrap type-underline"&gt;
                    &lt;div class="tag new"&gt;신상품&lt;/div&gt;
                    &lt;div class="tag md"&gt;MD추천&lt;/div&gt;
                    &lt;div class="tag coupon"&gt;쿠폰&lt;/div&gt;
                    &lt;div class="tag delivery"&gt;무료배송&lt;/div&gt;
                    &lt;div class="tag best"&gt;베스트&lt;/div&gt;
                    &lt;div class="tag only"&gt;ONLY&lt;/div&gt;
                    &lt;div class="tag salegoods"&gt;행사상품&lt;/div&gt;
                    &lt;div class="tag timesale"&gt;타임세일&lt;/div&gt;
                    &lt;div class="tag event"&gt;이벤트&lt;/div&gt;
                &lt;/div&gt;
           </pre>
            </code>

        <h2>아이템 리스트 horizon</h2>
        <!-- 아이템 리스트 horizon -->
        <div class="item-list-container horizon">
            <div class="item-list">
                <!-- 체크박스 -->
                <label class="circle-checkbox"><input type="checkbox"><i></i></label>
                <!-- 아이템 썸네일 영역 -->
                <div class="thumbnail-container sold-out">
                    <div class="sold-out-wrap">
                        <span>
                            <img src="~/assets/image/sample/sold-out.png" alt="품절">
                        </span>
                    </div>
                    <div to="/" @click.prevent class="thumbnail-wrap">
                        <div class="thumbnail-area">
                            <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="center-center">
                        </div>
                        <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                    </div>
                    <div class="user-action">
                        <div class="user-ico user-attention">관심상품</div>
                        <div class="user-ico user-basket">장바구니</div>
                    </div>
                </div>
                <!-- 아이템 정보 영역 -->
                <div class="info-container">
                    <div class="title-main paragraph-ellipsis">
                        <b>[브랜드명]</b>제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
                    </div>
                    <div class="title-sub paragraph-ellipsis">
                        <b>[옵션1]</b>서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 <b>[옵션2]</b> 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀
                        서브
                        타이틀 서브 타이틀
                        서브 타이틀 서브 타이틀 서브 타이틀 서브
                        타이틀
                    </div>
                    <div class="discounted">
                        138,000원
                    </div>
                    <div class="price-wrap">
                        <p class="price">
                            <span>108,000</span>
                            <span>원</span>
                        </p>
                        <p class="sale">
                            27%
                        </p>
                    </div>
                    <div class="underline red">
                        구성 상품 보기
                    </div>
                    <div class="purchase-amount">
                        <p class="price">9,999,999원</p>
                        <p class="amount">수량 999개</p>
                    </div>
                    <div class="tag-wrap">
                        <div class="tag new">신상품</div>
                        <div class="tag md">MD추천</div>
                        <div class="tag coupon">쿠폰</div>
                        <div class="tag delivery">무료배송</div>
                        <div class="tag best">베스트</div>
                        <div class="tag timesale">타임세일</div>
                        <div class="tag event">이벤트</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 아이템 리스트 vertical 코드 -->
        <code class="guide-code">
                 <pre>
                &lt;div class="item-list-container horizon"&gt;
    &lt;div class="item-list"&gt;
        &lt;!-- 체크박스 --&gt;
        &lt;label class="circle-checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;&lt;/label&gt;
        &lt;!-- 아이템 썸네일 영역 --&gt;
        &lt;div class="thumbnail-container sold-out"&gt;
            &lt;div class="sold-out-wrap"&gt;
                &lt;span&gt;
                    &lt;img src="~/assets/image/sample/sold-out.png" alt="품절"&gt;
                &lt;/span&gt;
            &lt;/div&gt;
            &lt;div to="/" @click.prevent class="thumbnail-wrap"&gt;
                &lt;div class="thumbnail-area"&gt;
                    &lt;img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                    &lt;img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                    &lt;img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                    &lt;img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                    &lt;img class="center-center"&gt;
                &lt;/div&gt;
                &lt;img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일"&gt;
            &lt;/div&gt;
            &lt;div class="user-action"&gt;
                &lt;div class="user-ico user-attention"&gt;관심상품&lt;/div&gt;
                &lt;div class="user-ico user-basket"&gt;장바구니&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- 아이템 정보 영역 --&gt;
        &lt;div class="info-container"&gt;
            &lt;div class="title-main paragraph-ellipsis"&gt;
                &lt;b&gt;[브랜드명]&lt;/b&gt;제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
            &lt;/div&gt;
            &lt;div class="title-sub paragraph-ellipsis"&gt;
                &lt;b&gt;[옵션1]&lt;/b&gt;서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 &lt;b&gt;[옵션2]&lt;/b&gt; 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브
                타이틀 서브 타이틀
                서브 타이틀 서브 타이틀 서브 타이틀 서브
                타이틀
            &lt;/div&gt;
            &lt;div class="discounted"&gt;
                138,000원
            &lt;/div&gt;
            &lt;div class="price-wrap"&gt;
                &lt;p class="price"&gt;
                    &lt;span&gt;108,000&lt;/span&gt;
                    &lt;span&gt;원&lt;/span&gt;
                &lt;/p&gt;
                &lt;p class="sale"&gt;
                    27%
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class="underline red"&gt;
                구성 상품 보기
            &lt;/div&gt;
            &lt;div class="purchase-amount"&gt;
                &lt;p class="price"&gt;9,999,999원&lt;/p&gt;
                &lt;p class="amount"&gt;수량 999개&lt;/p&gt;
            &lt;/div&gt;
            &lt;div class="tag-wrap"&gt;
                &lt;div class="tag new"&gt;신상품&lt;/div&gt;
                &lt;div class="tag md"&gt;MD추천&lt;/div&gt;
                &lt;div class="tag coupon"&gt;쿠폰&lt;/div&gt;
                &lt;div class="tag delivery"&gt;무료배송&lt;/div&gt;
                &lt;div class="tag best"&gt;베스트&lt;/div&gt;
                &lt;div class="tag timesale"&gt;타임세일&lt;/div&gt;
                &lt;div class="tag event"&gt;이벤트&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;


            
           </pre>
                                    </code>

        <h2>아이템 리스트 vertical</h2>
        <!-- 아이템 리스트 vertical -->
        <div class="item-list-container vertical">
            <div class="item-list item-list-3">
                <!-- 체크박스 -->
                <label class="checkbox"><input type="checkbox"><i></i></label>
                <label class="circle-checkbox"><input type="checkbox"><i></i></label>
                <!-- 아이템 썸네일 영역 -->
                <div class="thumbnail-container sold-out">
                    <div class="sold-out-wrap">
                        <span>
                            <img src="~/assets/image/sample/sold-out.png" alt="품절">
                        </span>
                    </div>
                    <div to="/" @click.prevent class="thumbnail-wrap">
                        <div class="thumbnail-area">
                            <img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" />
                            <img class="center-center">
                        </div>
                        <img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일">
                    </div>
                    <div class="user-action">
                        <div class="user-ico user-attention">관심상품</div>
                        <div class="user-ico user-basket">장바구니</div>
                    </div>
                </div>
                <!-- 아이템 정보 영역 -->
                <div class="info-container">
                    <div class="title-main paragraph-ellipsis">
                        [브랜드명] 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
                    </div>
                    <div class="title-sub paragraph-ellipsis">
                        서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브
                        타이틀 서브
                        타이틀
                        서브
                        타이틀
                    </div>
                    <div class="discounted">
                        138,000원
                    </div>
                    <div class="price-wrap">
                        <p class="price">
                            <span>108,000</span>
                            <span>원</span>
                        </p>
                        <p class="sale">
                            27%
                        </p>
                    </div>
                    <div class="tag-wrap">
                        <div class="tag new">신상품</div>
                        <div class="tag md">MD추천</div>
                        <div class="tag coupon">쿠폰</div>
                        <div class="tag delivery">무료배송</div>
                        <div class="tag best">베스트</div>
                        <div class="tag timesale">타임세일</div>
                        <div class="tag event">이벤트</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 아이템 리스트 vertical 코드 -->
        <code class="guide-code">
                                                        <pre>
                &lt;div class="item-list-container vertical"&gt;
    &lt;div class="item-list item-list-3"&gt;
        &lt;!-- 체크박스 --&gt;
        &lt;label class="checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;&lt;/label&gt;
        &lt;label class="circle-checkbox"&gt;&lt;input type="checkbox"&gt;&lt;i&gt;&lt;/i&gt;&lt;/label&gt;
        &lt;!-- 아이템 썸네일 영역 --&gt;
        &lt;div class="thumbnail-container sold-out"&gt;
            &lt;div class="sold-out-wrap"&gt;
                &lt;span&gt;
                    &lt;img src="~/assets/image/sample/sold-out.png" alt="품절"&gt;
                &lt;/span&gt;
            &lt;/div&gt;
            &lt;div to="/" @click.prevent class="thumbnail-wrap"&gt;
                &lt;div class="thumbnail-area"&gt;
                    &lt;img class="top-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                    &lt;img class="top-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                    &lt;img class="bottom-left" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                    &lt;img class="bottom-right" src="~/assets/image/sample/thum_area.png" alt="플로팅이미지" /&gt;
                    &lt;img class="center-center"&gt;
                &lt;/div&gt;
                &lt;img class="thumbnail" src="~/assets/image/sample/thum.png" alt="썸네일"&gt;
            &lt;/div&gt;
            &lt;div class="user-action"&gt;
                &lt;div class="user-ico user-attention"&gt;관심상품&lt;/div&gt;
                &lt;div class="user-ico user-basket"&gt;장바구니&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- 아이템 정보 영역 --&gt;
        &lt;div class="info-container"&gt;
            &lt;div class="title-main paragraph-ellipsis"&gt;
                [브랜드명] 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2 제품명이 노출되는 영역 50g X 2
            &lt;/div&gt;
            &lt;div class="title-sub paragraph-ellipsis"&gt;
                서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브 타이틀 서브
                타이틀
                서브
                타이틀
            &lt;/div&gt;
            &lt;div class="discounted"&gt;
                138,000원
            &lt;/div&gt;
            &lt;div class="price-wrap"&gt;
                &lt;p class="price"&gt;
                    &lt;span&gt;108,000&lt;/span&gt;
                    &lt;span&gt;원&lt;/span&gt;
                &lt;/p&gt;
                &lt;p class="sale"&gt;
                    27%
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class="tag-wrap"&gt;
                &lt;div class="tag new"&gt;신상품&lt;/div&gt;
                &lt;div class="tag md"&gt;MD추천&lt;/div&gt;
                &lt;div class="tag coupon"&gt;쿠폰&lt;/div&gt;
                &lt;div class="tag delivery"&gt;무료배송&lt;/div&gt;
                &lt;div class="tag best"&gt;베스트&lt;/div&gt;
                &lt;div class="tag timesale"&gt;타임세일&lt;/div&gt;
                &lt;div class="tag event"&gt;이벤트&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
            </pre>
                                    </code>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
    props: {
        item: {
            type: Object,
            default: {
                // thumbnail: require("~/assets/image/sample/no_content.png"),
                soldOut: Boolean,
            }
        }
    },
    setup() {
        const isVisible = ref(false);
        return {
            isVisible,
        };
    },
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";
@use "@/assets/scss/pages/items/item_list.scss";
</style>