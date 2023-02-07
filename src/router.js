import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import ContactUs from "./pages/ContactUs.vue";
import SinglePost from "./pages/SinglePost.vue";
import SingleCategory from "./pages/SingleCategory.vue";
import Page404 from "./pages/Page404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/chi-siamo",
      name: "about-us",
      component: AboutUs,
    },
    {
      path: "/contattaci",
      name: "contact-us",
      component: ContactUs,
    },
    {
      path: "/blog/:slug",
      name: "single-post",
      component: SinglePost,
    },
    {
      path: "/categories/:slug",
      name: "single-category",
      component: SingleCategory,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page-404",
      component: Page404,
    },
  ],
});

export { router };
