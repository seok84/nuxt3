<template>
    <div>
        <!-- <i class="btn-close" @click="deleteCart(buyItem.cartId)"></i> -->
        <div class="product-info-group">
            <!-- 아이템 -->
            <cartItemPartInfo />

            <cartItemPartPrice />

            <cartItemPartButton />

            <!-- 개발소스
            <cart-item-parts-info
                :buy-item="buyItem"
                :disabled="disabled"
                :selectedItems.sync="selectedItem"
                @update:selectedItems="changeSelectedItems"
                @freeGiftItemPopupOpen="freeGiftItemPopupOpen"
            />

            <cart-item-parts-price
                :item-price="itemPrice"
                :buy-item="buyItem"
            />

            <cart-item-parts-button
                :item-price="itemPrice"
                :buy-item="buyItem"
                :selectedItems.sync="selectedItem"
                @buyOrder="buyOrder"
                @decreaseQuantity="decreaseQuantity"
                @increaseQuantity="increaseQuantity"
                @changeQuantity="changeQuantity"
                @enterQuantity="enterQuantity"
            />
            -->  
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/cart/cart.scss";
</style>