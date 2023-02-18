<template>
    <div>
        <h3 class="text-center" v-text="product.name"></h3>
        <div class="row">
            <div class="col-3">Price:</div>
            <div class="col-9">{{ (product.price / 100).toFixed(2) }}</div>

            <div class="col-3">Published:</div>
            <div class="col-9">{{ product.published_at }}</div>
            
            <div class="col-12" v-html="product.detail"></div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                product: {}
            }
        },
        created() {
            this.axios
                .get(`http://localhost/api/products/${this.$route.params.id}`)
                .then((res) => {
                    this.product = res.data;
                });
        },
    }
</script>