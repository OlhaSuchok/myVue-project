import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/pages/MainPage/MainPage";
import PostPage from "@/pages/PostPage/PostPage";
import OnePostPage from "@/pages/OnePostPage/OnePostPage";
import AboutPage from "@/pages/AboutPage/AboutPage";

const routes = [
  { path: "/", component: MainPage },
  { path: "/posts", component: PostPage },
  { path: "/posts/:id", component: OnePostPage },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

// eslint-disable-next-line no-undef
console.log("process.env.BASE_URL", process.env.BASE_URL);

export default router;
