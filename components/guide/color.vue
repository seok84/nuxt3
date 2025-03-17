<template>
    <div class="guide-content">
        <h2>컬러</h2>

        <h3>버튼 사이즈</h3>
        <p>
            공통 컬러는 SCSS 변수로 설정.
        </p>

        <ul class="guide-color-list">
            <li class="primaryColor">
                $brandPrimary: #8559ee;
            </li>
            <li class="secondColor">
                $brandSecondary: #7f6dfc;
            </li>
            <li class="redColor">
                $pointDanger: #ff5454;
            </li>
            <li class="lineColor">
                $lineGrey: #d9d9d9;
            </li>
            <li class="lineColor2">
                $lineLight: #e8e8e8;
            </li>
            <li class="bgLight">
                <p></p>
                <div class="tabs">
                    <a class="tab-item active">$brandPrimary: #8559ee</a>
                    <a class="tab-item">$bgLight: #fafafa;</a>
                </div>
            </li>
            <li class="blackColor">
                $fontBlack: #000;
            </li>
            <li class="blackColor2">
                $fontBlackDark: #1f1f1f;
            </li>
            <li class="whiteColor">
                $colorWhite: #fff;
            </li>
            <li class="fontSubColor">
                $fontDark: #7C7E80;
            </li>
            <li class="fontLightColor">
                $lineLightGrey: #cfcfcf;
            </li>
            <li class="fontColor">
                $fontGrey: #9f9f9f;
            </li>
            <li class="fontColor2">
                $fontBlackShade: #333;
            </li>
            <li class="buttonColor">
                <button type="button" class="btn btn-default">$buttonColor: #707070;</button>

            </li>
            <li class="btnFontColor">
                <button type="button" class="btn btn-default">$buttonColor: #1f1f1f;</button>
            </li>
            <li class="checkboxColor">
                <label class="checkbox"><input type="checkbox"><i></i></label>
                <label class="circle-checkbox"><input type="checkbox"><i></i></label>
                $checkboxColor: #ddd;<br>
                active color =
            </li>
        </ul>

    </div>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide.scss";
</style>