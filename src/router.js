import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/home/Page_Home.vue";
import Projects from "./components/pages/projects/Page_Projects.vue";
import Cases from "./components/pages/cases/Page_Cases.vue";
import SusDev from "./components/pages/susdev/Page_SusDev.vue";
import Crises from "./components/pages/crises/Page_Crises.vue";

const routes = [
  { path: "/home", component: Home, name: "Home" },
  { path: "/projects", component: Projects, name: "Projects" },
  { path: "/cases", component: Cases, name: "Cases" },
  { path: "/susdev", component: SusDev, name: "SusDev" },
  { path: "/crises", component: Crises, name: "Crises" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
