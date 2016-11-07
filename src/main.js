import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes/routes';
import store from './store/';
import Header from './components/header'


Vue.use(VueRouter);

Vue.component('common-header', Header);

const router = new VueRouter({
  routes,
  mode: 'history',
});
// router.beforeEach(({meta, path}, from, next) => {
//     var {auth = true} = meta
//     var isLogin = Boolean(store.state.user.id) // true用户已登录， false用户未登录

//     if (auth && !isLogin && path !== '/login') {
//         return next({ path: '/login' })
//     }
//     next()
// })

/* eslint-disable no-new */
new Vue({
  store,
  router,
}).$mount('#app');
