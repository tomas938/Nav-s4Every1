<template>
  <header>
    <nav class="navigation">
      <div class="navigation__logo">
        <img src="../assets/logo-navs.png" alt="" />
      </div>
      <div class="navigation__links">
        <ul v-show="!mobile">
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
  <div class="btn">
    <button class="btn-1" @click="copyTemplate(), templateBtnToggle()">
      {{ templateBtn ? 'Coppied' : 'Copy Template' }}
    </button>
    <button class="btn-2" @click="copyScript(), scriptBtnToggle()">
      {{ ScriptBtn ? 'Coppied' : ' Copy Script' }}
    </button>
    <button class="btn-3" @click="copyStyle(), styleBtnToggle()">
      {{ StyleBtn ? 'Coppied' : ' Copy Style' }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'Navigation7',
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      templateBtn: null,
      ScriptBtn: null,
      StyleBtn: null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize)
    this.checkScreenSize()
  },
  methods: {
    copyTemplate() {
      this.$copyText(
        ` <template>
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
</template> `
      )
        .then(() => {
          console.log('copied!')
        })
        .catch(() => {
          console.log("can't copy")
        })
    },
    copyStyle() {
      this.$copyText(
        `<style lang="scss" scoped>
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

      //********************************************************************************//
      ///////////////////////////******* CHANGE HAMBURGER ********////////////////////////
      //********************************************************************************//
      .line {
        display: block;
        width: 2.8rem;
        height: 0.4rem;
        margin: 0.5rem auto;
        background-color: $hamburger-color;
        transition: 0.25s ease-in-out;
        &:nth-child(1) {
          width: 50%;
          margin-right: 50%;
        }

        &:nth-child(3) {
          width: 50%;
          margin-left: 50%;
        }
      }
      .active {
        &:nth-child(1) {
          transform: rotate(-135deg) translateX(-7px) translateY(-1px);
        }
        &:nth-child(2) {
          transform: rotate(-45deg);
        }

        &:nth-child(3) {
          transform: rotate(45deg) translateX(-5px) translateY(-3px);
        }
      }
    }
  }
}
//********************************************************************************//
///////////////////////////******* ACTIVE CLASS ********////////////////////////
//********************************************************************************//
.mobile__links {
  position: absolute;
  top: 0;
  left: 0;
  // z-index: -1; ///*** IF U WANT TO SEE NAVBAR WHILE ACTIVE STATE ***///
  z-index: 0; //***HIDE NAVBAR***/
  width: 100vw;
  min-height: 100vh;
  padding-top: 15rem;
  background-color: black;
  display: block !important;
  visibility: hidden;
  transform: scaleY(-100%);
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
  transform: translateY(0%);
  visibility: visible;
  opacity: 1;
  transition: all 0.6s linear;
}
</style>
`
      )
        .then(() => {
          console.log('copied!')
        })
        .catch(() => {
          console.log(`can't copy`)
        })
    },
    copyScript() {
      this.$copyText(
        `

export default {
  name: 'Navigation7',
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
  methods: {toggleMobileNav() {
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
`
      )
        .then(() => {
          console.log('copied!')
        })
        .catch(() => {
          console.log(`can't copy`)
        })
    },
    templateBtnToggle() {
      this.templateBtn = !this.templateBtn
    },
    scriptBtnToggle() {
      this.ScriptBtn = !this.ScriptBtn
    },
    styleBtnToggle() {
      this.StyleBtn = !this.StyleBtn
    },
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
      ///////////////////////////******* CHANGE HAMBURGER ********////////////////////////
      .line {
        display: block;
        width: 2.8rem;
        height: 0.4rem;
        margin: 0.5rem auto;
        background-color: $hamburger-color;
        transition: 0.25s ease-in-out;
        &:nth-child(1) {
          width: 50%;
          margin-right: 50%;
        }

        &:nth-child(3) {
          width: 50%;
          margin-left: 50%;
        }
      }
      .active {
        &:nth-child(1) {
          transform: rotate(-135deg) translateX(-7px) translateY(-1px);
        }
        &:nth-child(2) {
          transform: rotate(-45deg);
        }

        &:nth-child(3) {
          transform: rotate(45deg) translateX(-5px) translateY(-3px);
        }
      }
    }
  }
}
///////////////////////////******* ACTIVE CLASS ********////////////////////////
.mobile__links {
  position: absolute;
  top: 0;
  left: 0;
  // z-index: -1; ///*** IF U WANT TO SEE NAVBAR WHILE ACTIVE STATE ***///
  z-index: 0; //***HIDE NAVBAR***/
  width: 100vw;
  min-height: 100vh;
  padding-top: 15rem;
  background-color: black;
  display: block !important;
  visibility: hidden;
  transform: scaleY(-100%);
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
  transform: translateY(0%);
  visibility: visible;
  opacity: 1;
  transition: all 0.6s linear;
}
</style>
