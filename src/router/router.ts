import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => {
        return { x: 0, y: 0 }
    },
    routes: configRoutes() 
});

function configRoutes() { // eslint-disable-line no-use-before-define
    return [
        {
            path: "/",
            redirect: "/home",
            name: "Home",
            component: () => import("@/containers/TheContainer/TheContainer.vue"),
            children: [
                {
                    path: "home",
                    name: "Products",
                    component: () => import("@/views/pages/Home.vue")
                }
            ]
        }
    ]
}

export default router;
