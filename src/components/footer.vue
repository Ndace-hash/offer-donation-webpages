<template>
  <div class="container-md">
    <footer class="row">
      <div class="footer-sub socials col">
        <h3>Socials</h3>
        <nav>
          <li>
            <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
          </li>
          <li>
            <a href="#"><i class="fab fa-facebook"></i> Facebook</a>
          </li>
          <li>
            <a href="#"><i class="fab fa-linkedin"></i> LinkedIn</a>
          </li>
        </nav>
      </div>
      <div class="footer-sub socials col">
        <h3>Services</h3>
        <nav>
          <li>
            <a href="#">Support & FAQ</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </nav>
      </div>
      <div class="footer-sub socials col">
        <div class="logo fw-bold p-0 fs-3">LOGO</div>
        <div>
          <p>location</p>
          <p>country</p>
          <p>mail</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
footer {
  padding: 1rem 1.5rem;
}
.footer-sub li {
  list-style: none;
  margin: 0.45rem 0;
}
.footer-sub nav a {
  font-size: 1rem;
  text-decoration: none;
}
.footer-sub nav a:is(:hover, :focus) {
  letter-spacing: 1px;
  transition: all 300ms linear;
}
</style>
