<template>
  <button
    :type="type"
    class="btn"
    :style="{ 'background-color': color, color: fontColor }"
    v-on:click="$emit('clickHandler')"
  >
    <i :class="icon"></i>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "app-button",
  props: {
    text: String,
    type: String,
    icon: String,
    color: String,
    fontColor: String,
  },
};
</script>

<style scoped>
/* button {
  margin-bottom: 1rem;
} */
</style>
