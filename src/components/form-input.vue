<template>
  <div class="input-wrapper">
    <label :for="name" class="label">{{ name }}</label>
    <input
      :type="type"
      :id="name"
      :placeholder="placeHolder"
      class="input"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "app-input",
  data() {
    return {
      input: "",
    };
  },
  props: {
    name: String,
    type: String,
    placeHolder: String,
    value: String,
  },
};
</script>

<style scoped>
.input-wrapper {
  margin: 0.5rem 0;
}
.label {
  display: block;
  font-weight: 600;
  font-size: 1rem;
  color: hsla(0, 100%, 0%, 1);
  margin-bottom: 0.2rem;
}
.input {
  margin: 0;
  margin-bottom: 0.5rem;
  display: block;
  outline: none;
  border-radius: 5px;
  width: 90%;
  max-width: 100%;
  font-size: 1rem;
  font-weight: 500;
  color: hsla(0, 50%, 0%, 0.6);
  border: 2px solid transparent;
  background-color: rgb(201, 187, 151);
}
.input::placeholder {
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.8;
}
</style>
