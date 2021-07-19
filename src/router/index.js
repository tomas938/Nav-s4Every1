/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Navigation1 from "../navigations/Navigation1";
import Navigation2 from "../navigations/Navigation2";
import Navigation3 from "../navigations/Navigation3";
import Navigation4 from "../navigations/Navigation4";
import Navigation5 from "../navigations/Navigation5";
import Navigation6 from "../navigations/Navigation6";
import Navigation7 from "../navigations/Navigation7";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/Navigation1",
		name: "Navigation1",
		component: Navigation1,
	},
	{
		path: "/Navigation2",
		name: "Navigation2",
		component: Navigation2,
	},
	{
		path: "/Navigation3",
		name: "Navigation3",
		component: Navigation3,
	},
	{
		path: "/Navigation4",
		name: "Navigation4",
		component: Navigation4,
	},
	{
		path: "/Navigation5",
		name: "Navigation5",
		component: Navigation5,
	},
	{
		path: "/Navigation6",
		name: "Navigation6",
		component: Navigation6,
	},
	{
		path: "/Navigation7",
		name: "Navigation7",
		component: Navigation7,
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
