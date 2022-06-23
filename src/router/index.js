import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import("../views/Home.vue"),
  },
  
  {
    path: "/detail-pengumuman/:id",
    name: "detail",
    component: () =>
      import("../views/Detail.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
