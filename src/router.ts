import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import FranciscoPage from "./pages/FranciscoPage.vue";
import ColonialsPage from "./pages/ColonialsPage.vue";
import IndigenousPage from "./pages/IndigenousPage.vue";

export const router = createRouter({
  history: !import.meta.env.SSR ? createWebHistory() : createMemoryHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      meta: { title: "Honduras Museum" },
    },
    {
      path: "/francisco-morazan",
      component: FranciscoPage,
      meta: { title: "Francisco Morazan - Honduras Museum" },
    },
    {
      path: "/spanish-colonials",
      component: ColonialsPage,
      meta: { title: "Spanish Colonials - Honduras Museum" },
    },
    {
      path: "/indigenous-population",
      component: IndigenousPage,
      meta: { title: "Indigenous Population - Honduras Museum" },
    },
  ],
});
