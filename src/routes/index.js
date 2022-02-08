import VueRouter from "vue-router";
import SignUp from "../views/SignUp";
import Home from "../views/Home";
import Donation from "../views/Donation";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/donation",
    name: "Donation",
    component: Donation,
  },
];

export const router = new VueRouter({
  routes,
  mode: "history",
});

// module.exports = router;
