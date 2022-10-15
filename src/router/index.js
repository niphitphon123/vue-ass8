import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import Design from '../pages/Design.vue'
import Preview from "../pages/Preview.vue"
import Hoyoverse from "../pages/Hoyoverse.vue"

const routes = [{
    path: "/",
    component: Home,
    name: "Home",
},{
    path: "/Design",
    component: Design,
    name: "Design",
},{
    path: "/Preview",
    component: Preview,
    name: "Preview",
},{
    path: "/Hoyoverse",
    component: Hoyoverse,
    name: "Hoyoverse",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveclass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x:0, y: 0 }; 
    },
    routes,
});

export default router;