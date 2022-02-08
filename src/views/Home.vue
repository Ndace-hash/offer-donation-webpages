<template>
  <div class="main-container">
    <div class="hero-wrapper">
      <div class="intro">
        <h1>
          Invest by <br />
          <strong>donating</strong>
        </h1>
        <p class="intro-sales">
          Make an investment by simply showing some love those who are in need.
          With us you do not just donate, but you can also get back 2% on any
          donation you make.
        </p>
        <button class="cta">
          <router-link to="/" class="cta-link">Learn More</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>

<style scope>
.hero-wrapper {
  height: 100vh;
  /* height: calc(100vh - 60px); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(
      to right,
      rgba(41, 41, 40, 0.748),
      rgba(56, 54, 54, 0.111)
    ),
    url(../assets/bg.jpg);
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
}
.intro {
  margin: auto 2rem;
  max-width: 35rem;
}
.hero-wrapper > .intro > h1 {
  text-transform: capitalize;
  margin-bottom: 0.6rem;
  color: white;
}
.hero-wrapper > .intro > h1 > strong {
  text-transform: uppercase;
}
.intro-sales {
  color: rgba(255, 255, 255, 0.611);
}
.cta {
  border: 1px solid transparent;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  border-radius: 5px;
  background-color: white;
  display: inline-block;
  width: max-content;
}
.cta-link {
  text-decoration: none;
  text-transform: capitalize;
  color: var(--primary-clr);
  font-weight: 700;
}
.cta:is(:hover, :focus) {
  background-color: var(--primary-clr);
  transition: all 300ms ease-in;
}
.cta:is(:hover, :focus) .cta-link {
  color: white;
  transition: all 300ms ease-in;
}
</style>
