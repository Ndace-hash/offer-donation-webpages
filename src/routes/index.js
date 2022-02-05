import VueRouter from "vue-router";
import Login from "../views/Login";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

export const router = new VueRouter({
  routes,
  mode:'history'
});

// module.exports = router;
