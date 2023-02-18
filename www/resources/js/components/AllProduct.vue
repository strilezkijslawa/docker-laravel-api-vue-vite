<template>
    <div>
        <h2 class="text-center">Products List</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ (product.price / 100).toFixed(2) }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'show', params: { id: product.id }}" class="btn btn-success">Show</router-link>
                        <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                products: []
            }
        },
        created() {
            this.axios
                .get('/api/products/')
                .then(response => {
                    this.products = response.data;
                });
        },
        methods: {
            deleteProduct(id) { 
                this.axios
                    .delete(`http://localhost/api/products/${id}`)
                    .then(response => {
                        let i = this.products.map(data => data.id).indexOf(id);
                        this.products.splice(i, 1)
                    });
            }
        }
    }
</script>