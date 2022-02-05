<template>
  <div class="head-container">
    <div class="logo fw-bold p-0 fs-3">LOGO</div>
    <nav>
      <li class="nav-item"><router-link to="/" class="nav-link">home</router-link></li>
      <li class="nav-item"><router-link to="/donations" class="nav-link">donations</router-link></li>
      <li class="nav-item"><router-link to="/about" class="nav-link">about us</router-link></li>
      <li class="nav-item"><router-link to="/login" class="nav-link">sign in</router-link></li>
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
