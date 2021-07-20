<template>
  <header>
    <nav class="navigation">
      <div class="navigation__logo">
        <!-- //********************************************************************************//
				///////////////////////////******* CHANGE LOGO ********////////////////////////
				//********************************************************************************// !-->
        <img src="../assets/logo-navs.png" alt="" />
      </div>
      <div class="navigation__links">
        <ul v-show="!mobile">
          <!-- //********************************************************************************//
				///////////////////////////******* ADD DESKTOP LINKS ********////////////////////////
				//********************************************************************************// !-->
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Home' }">About</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Home' }"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>

      <div
        class="navigation__hamburger"
        @click="toggleMobileNav"
        v-show="mobile"
      >
        <!-- //********************************************************************************//
				///////////////////////////******* CHANGE HAMBURGER ********////////////////////////
				//********************************************************************************// !-->
        <span class="line" :class="{ active: mobileNav }"></span>
        <span class="line" :class="{ active: mobileNav }"></span>
        <span class="line" :class="{ active: mobileNav }"></span>
      </div>
    </nav>
    <div>
      <ul
        class="mobile__links"
        :class="{ active: mobileNav }"
        v-show="mobileNav"
      >
        <!-- //********************************************************************************//
				///////////////////////////******* ADD MOBILE LINKS ********////////////////////////
				//********************************************************************************// !-->
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Home' }">About</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Contact</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Navigation1',
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize)
    this.checkScreenSize()
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    checkScreenSize() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 800) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },
  },
}
</script>
<style lang="scss" scoped>
$hamburger-color: rgb(255, 115, 0);
$navigation-bg: rgb(253, 226, 208);
$links-color: rgba(0, 0, 0, 0.726);
header {
  background: $navigation-bg;
  .navigation {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      position: relative; ///***NEED FOR Z-INDEX***/
      width: 8rem;
      height: 8rem;
      z-index: 1;
    }
    &__links {
      ul {
        display: flex;
        li {
          list-style: none;
          &:not(:last-child) {
            margin-right: 5rem;
          }
        }
        a {
          text-decoration: none;
          color: $links-color;
        }
      }
    }
    &__hamburger {
      position: relative;
      cursor: pointer;
      z-index: 1; ///***SHOW HAMBURGER WHILE ACTIVE STATE ***///

      .line {
        //********************************************************************************//
        ///////////////////////////******* CHANGE HAMBURGER ********////////////////////////
        //********************************************************************************//
        display: block;
        width: 2.8rem;
        height: 0.4rem;
        margin: 0.5rem auto;
        background-color: $hamburger-color;
        transition: all 0.3s ease-in-out;
      }
      .active {
        &:nth-child(1) {
          transform: translateY(17px);
        }
        &:nth-child(2) {
        }
        &:nth-child(3) {
          transform: translateY(-13px);
        }
      }
    }
  }
}
//********************************************************************************//
///////////////////////////******* ACTIVE CLASS ********////////////////////////
//********************************************************************************//
.mobile__links {
  position: fixed;
  top: 0;
  left: 0;
  // z-index: -1; ///*** IF U WANT TO SEE NAVBAR WHILE ACTIVE STATE ***///
  z-index: 0; //***HIDE NAVBAR***/
  width: 100vw;
  min-height: 100vh;
  padding-top: 15rem;
  background-color: black;
  display: block !important;
  transform: scale(0.1) rotate(360deg);
  opacity: 0;
  transition: all 0.6s ease-in-out;

  li {
    margin-bottom: 4rem;
    text-align: center;
  }
  a {
    color: white;
    font-size: 1.8rem;
  }
}
.active {
  transform: scale(1) rotate(0deg);
  opacity: 1;
  transition: all 0.6s linear;
}
</style>
