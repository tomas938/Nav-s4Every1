<template>
  <nav>
    <h1>Nav's4Every1</h1>
  </nav>

  <ul>
    <p>My Favorite mobile and hamburger animations</p>
    <p>(!!!Change logo path and install scss with CLI!!!)</p>

    <li>
      <router-link class="firstlink" to="/Navigation1"
        >Navigation <span class="first">1</span>
      </router-link>
    </li>
    <li>
      <router-link class="secondlink" to="/Navigation2"
        >Navigation <span class="second">2</span></router-link
      >
    </li>
    <li>
      <router-link class="thirdlink" to="/Navigation3"
        >Navigation <span class="third">3</span></router-link
      >
    </li>
    <li>
      <router-link class="fourthlink" to="/Navigation4"
        >Navigation <span class="fourth">4</span></router-link
      >
    </li>
    <li>
      <router-link class="fifthlink" to="/Navigation5"
        >Navigation <span class="fifth">5</span></router-link
      >
    </li>
    <li>
      <router-link class="sixthlink" to="/Navigation6"
        >Navigation <span class="sixth">6</span></router-link
      >
    </li>
    <li>
      <router-link class="seventhlink" to="/Navigation7"
        >Navigation <span class="seventh">7</span></router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
p {
  text-align: center;
  line-height: 2rem;
}
nav {
  height: 10vh;
  background: rgb(15, 15, 15);
  color: #eb9605;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  background: #283747;
  min-height: 90vh;
  padding: 3rem;
  color: #1ff118;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
li {
  list-style: none;
  margin-top: 3rem;
}
a {
  text-decoration: none;
  font-size: 1.5rem;
  color: #cfcfcf;
  transition: 0.3s ease-in-out;
}
.first {
  color: #c402ff;
}
.firstlink:hover {
  color: #c402ff;
}
.second {
  color: #eb9605;
}
.secondlink:hover {
  color: #eb9605;
}
.third {
  color: #02e5fa;
}
.thirdlink:hover {
  color: #c402ff;
}
.fourth {
  color: #05ff8f;
}
.fourthlink:hover {
  color: #05ff8f;
}
.fifth {
  color: #f02244;
}
.fifthlink:hover {
  color: #f02244;
}
.sixth {
  color: #fff30a;
}
.sixthlink:hover {
  color: #fff30a;
}
.seventh {
  color: #ff00d4;
}
.seventhlink:hover {
  color: #ff00d4;
}
a:hover {
  color: #000000;
}
@media only screen and (max-width: 600px) {
  ul {
    padding: 5rem 0;
  }
}
@media only screen and (max-width: 350px) {
  a {
    font-size: 1rem;
  }
  h1 {
    font-size: 1rem;
  }
}
</style>
