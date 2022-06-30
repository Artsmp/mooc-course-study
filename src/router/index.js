import { createRouter, createWebHistory } from "vue-router";
import { isMobileTerminal } from "@/utils/flexible";
import mobileRoutes from "./modules/mobile-routes";
import pcRoutes from "./modules/pc-routes";

export const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes,
});
