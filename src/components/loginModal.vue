<template>
  <div class="modal-wrapper">
    <div class="modal-bg" @click="close"></div>
    <div class="modal-container">
      <div class="modal-header">
        <h2>Login</h2>
        <span class="fas fa-times" @click="close"></span>
      </div>
      <div class="modal-body">
        <form>
          <Input
            name="Username"
            placeHolder="enter username..."
            type="text"
            v-model="username"
          />
          <Input
            name="Password"
            placeHolder="enter password..."
            type="password"
            v-model="password"
          />
          <Button
            text="Login"
            type="button"
            color="var(--primary-clr)"
            fontColor="white"
            v-on:clickHandler="signIn"
          />
          <div class="register"></div>
        </form>
      </div>
      <div class="modal-footer">
        <p>
          Are you new here?
          <router-link to="/signup">
            <button class="btn" @click="close">Register</button>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "./form-input";
import Button from "./utils/button";
export default {
  name: "modal",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    Input,
    Button,
  },
  methods: {
    close() {
      this.$emit("close-modal");
    },
    signIn() {
      console.log(this.username);
      console.log(this.password);
    },
  },
};
</script>

<style scoped>
.modal-wrapper {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.modal-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.289);
  transition: all 400ms ease-in;
}
.modal-container {
  background-color: white;
  border-radius: 10px;
  width: 25rem;
  max-width: 27rem;
  overflow: hidden;
  z-index: 10050;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fa-times {
  color: var(--primary-clr);
  cursor: pointer;
  font-size: 1.2rem;
}
.btn {
  border: 2px solid var(--primary-clr);

  text-decoration: none;
  color: var(--primary-clr);
  font-weight: 700;
}
.btn:is(:hover, :focus) {
  color: var(--primary-clr);
}
</style>
