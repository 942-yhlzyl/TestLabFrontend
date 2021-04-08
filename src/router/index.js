import Vue from 'vue'
import HelloWorld from "./../components/HelloWorld";
import Router from 'vue-router'
import Login from './../components/Login'
import Homepage from './../components/Homepage'
import store from './../store'

Vue.use(Router);

export const router = new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            meta: {
                cannotBeAccessed: true//跳转到homepage
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {//       requireAuth: false
            }
        },
        {
            path: '/homepage',
            name: 'Homepage',
            component: Homepage,
            meta: {
                requireAuth: true
            }
        },
   ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            console.log(store.state.token);
            next({
                path: '/login',
                // query: {redirect: to.fullPath} // 登录成功之后重新跳转到该路由
            })
        }
    }
    else {
        next();
    }
    if (to.matched.some(record => record.meta.cannotBeAccessed)) {
        next({
            path: '/homepage',
        })
    }
});
