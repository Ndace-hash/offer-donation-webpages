<template>
  <div class="head-container">
    <div class="container-md">
      <div class="logo fw-bold p-0 fs-3">.offer</div>
      <nav>
        <li class="nav-item">
          <router-link to="/" class="nav-link">home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/donation" class="nav-link">donations</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">about us</router-link>
        </li>
        <li class="nav-item">
          <button class="login" @click="showModal">sign in</button>
        </li>
      </nav>
      <Modal v-show="modalVisible" @close-modal="closeModal" />
    </div>
  </div>
</template>

<script>
import Modal from "./loginModal";
export default {
  name: "app-header",
  data() {
    return {
      modalVisible: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    showModal() {
      this.modalVisible = true;
      document.body.classList.add("no-scroll");
    },
    closeModal() {
      this.modalVisible = false;
      document.body.classList.remove("no-scroll");
    },
  },
};
</script>

<style scoped>
.head-container {
  padding: 1rem;
  display: flex;
  align-items: center;
  height: 60px;
}
.container-md {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 430px) {
  .head-container {
    height: 80px;
  }
  .container-md {
    flex-direction: column;
  }
  .login {
    padding: 0.2rem 0.4rem;
    font-size: 0.7rem;
  }
}
.logo {
  color: white;
}
nav {
  display: flex;
  margin: auto 0;
  align-items: center;
}
.nav-item {
  list-style: none;
}
.nav-link {
  color: white;
  margin: auto 0.5rem;
  padding: 0;
  text-transform: capitalize;
}
.nav-item:is(:hover, :focus) .nav-link {
  color: rgba(255, 255, 255, 0.686);
}
.router-link-exact-active {
  border-bottom: 2px solid white;
  color: white;
}
.login {
  border: 2px solid transparent;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  border-radius: 5px;
  background-color: white;
  display: inline-block;
  width: max-content;
  align-self: center;
  text-transform: capitalize;
  color: var(--primary-clr);
  font-weight: 700;
}
.login:is(:hover, :focus) {
  background-color: var(--primary-clr);
  transition: all 300ms ease-in;
  color: white;
  border: 2px solid white;
}
</style>
