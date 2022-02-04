<template>
  <div class="head-container">
    <div class="logo fw-bold p-0 fs-3">LOGO</div>
    <nav>
      <li class="nav-item"><a href="#" class="nav-link">home</a></li>
      <li class="nav-item"><a href="#" class="nav-link">donations</a></li>
      <li class="nav-item"><a href="#" class="nav-link">about us</a></li>
      <li class="nav-item"><a href="#" class="nav-link">sign in</a></li>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<style scoped>
.head-container {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav {
  display: flex;
  margin: auto 0;
}
.nav-item {
  list-style: none;
}
.nav-link {
  color: black;
  margin: auto 0.5rem;
  padding: 0;
  text-transform: capitalize;
}
</style>
