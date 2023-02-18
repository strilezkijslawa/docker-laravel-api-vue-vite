/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import './bootstrap.js';
import '../css/app.css';
import { createApp } from 'vue';
import App from './App.vue';
import VueAxios from 'vue-axios';
import * as VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
