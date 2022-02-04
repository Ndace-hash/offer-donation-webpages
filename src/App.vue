<template>
  <div class="container-md-fluid">
    <Header />
    <Login />
  </div>
</template>

<script>
import Header from "./components/header";
import Login from "./components/login";
export default {
  name: "App",
  components: {
    Header,
    Login,
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 2;
}
</style>
