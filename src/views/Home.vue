<template>
  <div class="main-container">
    <div class="hero-wrapper">
      <div class="container">
        <div class="intro">
          <h1>
            Invest by <br />
            <strong>donating</strong>
          </h1>
          <p class="intro-sales">
            Make an investment by simply showing some love those who are in
            need. With us you do not just donate, but you can also get back 2%
            on any donation you make.
          </p>
          <button class="cta">
            <router-link to="/donation" class="cta-link"
              >Learn More</router-link
            >
          </button>
        </div>
      </div>
    </div>
    <div class="container-md">
      <article class="mission-vision row mx-auto gap-3">
        <section class="mission col-12 col-md-5 mx-auto">
          <h2 class="text-center text-uppercase">mission</h2>
          <div class="mission-content text-center">
            <p>
              Our mission here at <strong>Offer</strong> is to increase the
              availiablity of basic need (shelter, clothing and food) to those
              who lack such resources
            </p>
          </div>
        </section>
        <section class="Vision col-12 col-md-5 mx-auto">
          <h2 class="text-center text-uppercase">vision</h2>
          <div class="mission-content text-center">
            <p>
              We see that in the near future, the world will be more nourished
              and it will have healthier people in it
            </p>
          </div>
        </section>
      </article>
      <article class="posts-display">
        <h3>Recent Blog Posts</h3>
        <div class="posts-wrapper">
          <Posts />
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Posts from "../components/posts/PostCards.vue";
export default {
  name: "home",
  components: {
    Posts,
  },
};
</script>

<style scoped>
.hero-wrapper {
  height: 100vh;
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
.hero-wrapper .intro > h1 {
  text-transform: capitalize;
  margin-bottom: 0.6rem;
  color: white;
}
.hero-wrapper .intro > h1 > strong {
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
  border: 2px solid transparent;
}
.cta-link {
  text-decoration: none;
  text-transform: capitalize;
  color: var(--primary-clr);
  font-weight: 700;
}
.cta:is(:hover, :focus) {
  border: 2px solid var(--primary-clr);
  background-color: transparent;
  transition: all 300ms ease-in;
}
.cta:is(:hover, :focus) .cta-link {
  color: white;
  transition: all 300ms ease-in;
}

.mission-vision {
  margin: 1rem 0;
}
.mission-vision section {
  background: var(--primary-clr);
  border-radius: 1rem;
  color: white;
  box-shadow: 3px 2px 20px 3px hsl(240, 1%, 19%),
    2px 1px 5px 1px hsl(0, 0%, 12%);
}
.mission-vision section h2 {
  margin-top: 0.5rem;
  font-weight: 700;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.mission-vision section p {
  opacity: 0.9;
}
</style>
