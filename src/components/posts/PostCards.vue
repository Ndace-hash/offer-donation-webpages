<template>
  <div>
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from "./PostCard.vue";
export default {
  name: "Post-Cards",
  components: {
    Post,
  },
};
</script>

<style scoped>
div {
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
}
</style>
