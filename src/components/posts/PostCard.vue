<template>
  <div class="card-wrapper">
    <img src="../../assets/blog.jpg" alt="" class="img-fluid" />
    <div class="card-detail">
      <h5>The proper solution to eradicate child starvation</h5>
      <small>by <span>phil Chetea</span></small>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: {
    post: Object,
  },
};
</script>

<style scoped>
.card-wrapper {
  border: 1px solid var(--primary-clr);
  width: 12rem;
  border-radius: 10px;
  overflow-x: hidden;
  box-shadow: 0px 3px 15px 1px hsl(0, 0%, 27%), 0px 1px 7px 0px hsl(0, 0%, 13%);
  margin: 1rem auto;
  display: inline-block;
}
.card-detail {
  padding: 0.3rem 0.2rem;
}
.card-detail h5 {
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0;
}
.card-detail small {
  opacity: 0.7;
  font-size: 0.6rem;
  margin-top: 0;
}
.card-detail small > span {
  text-transform: capitalize;
  font-weight: 700;
}
</style>
