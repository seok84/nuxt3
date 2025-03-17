<template>
    
    <div class="user-action">
            <div class="user-ico user-attention">관심상품</div>
            <div class="user-ico user-basket">장바구니</div>
        </div>
        
    <!-- 개발소스 
    <div class="user-action" v-if="type != 'order'">
        <div class="user-ico user-attention "
            :style="{ visibility: type === 'wish' ? 'hidden' : 'visible' }" :id="'wish_' + item.itemId"
            @click.prevent="addToWishList(item.itemId)">
        관심상품
        </div>
        <div class="user-ico user-basket" :id="'cart_' + item.itemId"
            v-if="!isItemSoldOutFlag && item.itemOptionFlag !== 'Y'
                && item.itemType !== '3'"
            @click.prevent="addToCart(item.itemId, item.orderMinQuantity)">
        장바구니
        </div>
    </div> -->
</template>
  
<script setup>
const props = defineProps({
    item: {
      type: Object,
      default: () => {
        return {
          itemId: 0,
          itemName: "",
          itemSummary: "",
          itemImage: "",
          itemUserCode: "",
          discountRate: 0,
          presentPrice: 0,
          salePrice: 0,
          brand: "",
          soldOutFlag: false,
          wishlistFlag: false,
          labels: [],
          nonmemberOrderType: "1",
          param: {
            arrayRequiredItems: []
          }
        }
      }
    },
    type : {
      type : String,
      default : ""
    },
});

</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/main/main.scss";
</style>
