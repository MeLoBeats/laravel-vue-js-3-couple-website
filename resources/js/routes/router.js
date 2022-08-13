import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import TodoList from "../pages/TodoList.vue";
import Timer from "../pages/Timer.vue";
import Mcdo from "../pages/Mcdo.vue";
import Notebook from "../pages/Notebook.vue";
import Planning from "../pages/Planning.vue";

const routes = [
    { name: "Home", path: "/", component: Home },
    { name: "Todo", path: "/todo", component: TodoList },
    { name: "Timer", path: "/timer", component: Timer },
    { name: "Mcdo", path: "/mcdo", component: Mcdo },
    { name: "Planning", path: "/planning", component: Planning },
    {
        name: "Notes",
        path: "/notes",
        component: Notebook,
    },
];

export default createRouter({
    routes,
    history: createWebHistory(),
});
