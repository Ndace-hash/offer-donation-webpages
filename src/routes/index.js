import VueRouter from "vue-router";
import SignUp from "../views/SignUp";
import Home from "../views/Home";
import Donation from "../views/Donation";
import About from "../views/About";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/register",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/donation",
    name: "Donation",
    component: Donation,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

export const router = new VueRouter({
  routes,
  mode: "history",
});
