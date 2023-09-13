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
      {
        path: "contact",
        name: "contact",
        component: () => import("pages/ContactPage.vue"),
      },
      {
        path: "news",
        name: "news",
        component: () => import("pages/NewsPage.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("pages/AboutPage.vue"),
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
