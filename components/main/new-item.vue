<template>
    <section class="main-new-item-list">
        <ul>
            <template v-for="(data, index) in itemData">
                <li>
                    <div class="thumb">
                        <NuxtLink :to="data.itemUserCode ? '/item/' + data.itemUserCode : '#'">
                            <img :src="data.itemImage" :alt="data.title">
                        </NuxtLink>
                    </div>
                    <div class="hover">
                        <div class="info">
                            <ItemPartUserAction />
                            <NuxtLink :to="data.itemUserCode ? '/item/' + data.itemUserCode : '#'">
                                <div class="goods-title">[{{ data.brand }}] {{ data.itemName }}</div>
                                <div class="discounted">{{ $formatNumber(data.originalPrice) }}원</div>
                                <div class="price-wrap">
                                    <span class="price">
                                        <span>{{ $formatNumber(data.discountedPrice) }}</span>원
                                    </span>
                                    <span class="sale" v-if="data.discountRate > 0">
                                        {{ $formatNumber(data.discountRate) }}%
                                    </span>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- 개발소스
                    <div class="thumb">
                        <NuxtLink :to="data.itemUserCode ? '/item/' + data.itemUserCode : '#'" class="thumbnail-wrap">
                            <img :src="itemImage(data.itemImage)" :alt="data.itemImage" @error="errorImage" >
                        </NuxtLink>
                    </div>
                    <div class="hover">
                        <div class="info">
                            <item-part-user-action :item="data"/>
                            <NuxtLink :to="data.itemUserCode ? '/item/' + data.itemUserCode : '#'">
                                <div class="goods-title">[{{data.brand}}] {{data.itemName}}</div>
                                <div class="discounted">{{formatNumber(data.presentPrice)}}원</div>
                                <div class="price-wrap">
                                    <span class="price">
                                        <span>{{formatNumber(data.salePrice)}}</span>원
                                    </span>
                                    <span class="sale" v-if="data.discountRate > 0">
                                        {{formatNumber(item.discountRate)}}%
                                    </span>
                                </div>
                            </NuxtLink>
                        </div>
                    </div> -->

                </li>
            </template>
        </ul>
    </section>
</template>

<script setup>
const { $formatNumber } = useNuxtApp();
const props = defineProps({
    itemData : {
        type: Array,
        default: () => {
            return []
        }
    }
});

</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/main/main_newitem";
</style>
