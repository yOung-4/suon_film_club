const routes = [
  {
    path: "/",
    redirect: "/welcome/index",
  },
  {
    path: "/welcome",
    component: () => import("layouts/WelcomeLayout.vue"),
    redirect: "/welcome/index",
    children: [
      {
        path: "index",
        name: "main",
        component: () => import("pages/WelcomePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
