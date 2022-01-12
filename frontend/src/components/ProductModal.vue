<template>
<div class="productModalContainer">

    <div class="modal">
     <div class="closeButtonContainer">
            <CloseButton @click.native="$emit('close')"/>
     </div> 
     <div class="modalContent">
      <img class="productItemImage" :src="product.imgURL" />
        <div>
            <h5>{{ product.name }}</h5>
            <h5>{{ product.price }}</h5>
        </div>
        <div>
            <AddToCartButton @click.native="$emit('add-to-cart', product)"/>
        </div >  
     </div>   
    </div>
</div>

</template>

<script>
import CloseButton from "../components/CloseButton.vue";
import AddToCartButton from "../components/AddToCartButton.vue";

export default {
props: {
    product: {},
},

components: {
    CloseButton,
    AddToCartButton,
 },

 }

</script>

<style lang="scss">
@import "../styles/components/_productModal.scss";
</style>
