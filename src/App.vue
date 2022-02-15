<template>
  <div class="container--md-fluid main">
    <Header class="header" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
.no-scroll {
  height: 100%;
  overflow: hidden;
}
.main {
  overflow-x: hidden;
}
:root {
  --primary-clr: rgb(197, 135, 20);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 2;
  background: var(--primary-clr);
}
</style>
