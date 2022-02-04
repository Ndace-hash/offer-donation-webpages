<template>
  <div class="form-wrapper">
    <form>
      <Input name="Username" placeHolder="enter username..." type="text" />
      <Input name="Password" placeHolder="enter password..." type="password" />
      <Button text="Login" color="rgba(0, 0, 0, 0.6)" fontColor="white" />
      <div class="register">
        <p>Are you new here? <a href="#" class="btn">Register</a></p>
      </div>
    </form>
  </div>
</template>

<script>
import Input from "./form-input";
import Button from "./utils/button";
export default {
  name: "app-form",
  components: {
    Input,
    Button,
  },
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  height: 100vh;
  width: 100%;
}
form {
  background-color: sienna;
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.register {
  margin-top: 0.5rem;
}
.register > p {
  color: rgba(255, 255, 255, 0.871);
}
.register > p > a {
  background-color: rgba(255, 255, 255, 0.645);
}
</style>
