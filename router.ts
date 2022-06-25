import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(".root"));
router.setRoutes([
	{ path: "/my-portfolio", component: "x-home-page" },
	{ path: "/", component: "x-home-page" },
]);
