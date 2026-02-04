import { ViteSSG } from "vite-ssg";
import { router } from "./router";
import App from "./App.vue";
import "./css/main.css";

export const createApp = ViteSSG(
  App,
  { routes: router.getRoutes() },
  ({ app, router }) => {
    app.use(router);
  }
);
