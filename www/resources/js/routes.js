import AllProduct from './components/AllProduct.vue';
import ViewProduct from './components/ViewProduct.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllProduct
    },
    {
        name: 'show',
        path: '/products/:id',
        component: ViewProduct
    },
];