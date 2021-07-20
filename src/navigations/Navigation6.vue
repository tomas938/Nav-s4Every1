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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          viewBox="0 0 200 200"
        >
          <g stroke-width="12.5" stroke-linecap="round">
            <path
              :class="{ active: mobileNav }"
              d="M72 82.286h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#fff"
            />
            <path
              :class="{ active: mobileNav }"
              d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
              fill="none"
              stroke="#fff"
            />
            <path
              :class="{ active: mobileNav }"
              d="M72 125.143h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#fff"
            />
            <path
              :class="{ active: mobileNav }"
              d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
              fill="none"
              stroke="#fff"
            />
            <path
              :class="{ active: mobileNav }"
              d="M100.75 82.286h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#fff"
            />
            <path
              :class="{ active: mobileNav }"
              d="M100.75 125.143h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#fff"
            />
          </g>
        </svg>
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
  name: 'Navigation6',
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 200 200"
        >
          <g stroke-width="6.5" stroke-linecap="round">
            <path
              :class="{ active: mobileNav }"
              d="M72 82.286h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#fff"
            />
            <path
              :class="{ active: mobileNav }"
              d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
              fill="none"
              stroke="#fff"
            />
            <path
              :class="{ active: mobileNav }"
              d="M72 125.143h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#fff"
            />
            <path
              :class="{ active: mobileNav }"
              d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
              fill="none"
              stroke="#fff"
            />
            <path
              :class="{ active: mobileNav }"
              d="M100.75 82.286h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#fff"
            />
            <path
              :class="{ active: mobileNav }"
              d="M100.75 125.143h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#fff"
            />
          </g>
        </svg>
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
      svg {
        transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
        .active svg {
          transform: rotate(90deg);
        }
        path {
          transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
          stroke: $hamburger-color;
          &:nth-child(1) {
            transform-origin: 36% 40%;
          }
          &:nth-child(2) {
            stroke-dasharray: 29 299;
          }
          &:nth-child(3) {
            transform-origin: 35% 63%;
          }
          &:nth-child(4) {
            stroke-dasharray: 29 299;
          }
          &:nth-child(5) {
            transform-origin: 61% 52%;
          }
          &:nth-child(6) {
            transform-origin: 62% 52%;
          }
        }
      }
      .active {
        &:nth-child(1) {
          transform: translateX(9px) translateY(1px) rotate(45deg);
        }
        &:nth-child(2) {
          stroke-dasharray: 225 299;
          stroke-dashoffset: -72px;
        }
        &:nth-child(3) {
          transform: translateX(9px) translateY(1px) rotate(-45deg);
        }
        &:nth-child(4) {
          stroke-dasharray: 225 299;
          stroke-dashoffset: -72px;
        }
        &:nth-child(5) {
          transform: translateX(9px) translateY(1px) rotate(-45deg);
        }
        &:nth-child(6) {
          transform: translateX(9px) translateY(1px) rotate(45deg);
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
  transform: translateY(-100%);
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
  name: 'Navigation6',
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
`
      )
        .then(() => {
          console.log('copied!')
        })
        .catch(() => {
          console.log(`can't copy`)
        })
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
      svg {
        transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
        .active svg {
          transform: rotate(90deg);
        }
        path {
          transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
          stroke: $hamburger-color;
          &:nth-child(1) {
            transform-origin: 36% 40%;
          }
          &:nth-child(2) {
            stroke-dasharray: 29 299;
          }
          &:nth-child(3) {
            transform-origin: 35% 63%;
          }
          &:nth-child(4) {
            stroke-dasharray: 29 299;
          }
          &:nth-child(5) {
            transform-origin: 61% 52%;
          }
          &:nth-child(6) {
            transform-origin: 62% 52%;
          }
        }
      }
      .active {
        &:nth-child(1) {
          transform: translateX(9px) translateY(1px) rotate(45deg);
        }
        &:nth-child(2) {
          stroke-dasharray: 225 299;
          stroke-dashoffset: -72px;
        }
        &:nth-child(3) {
          transform: translateX(9px) translateY(1px) rotate(-45deg);
        }
        &:nth-child(4) {
          stroke-dasharray: 225 299;
          stroke-dashoffset: -72px;
        }
        &:nth-child(5) {
          transform: translateX(9px) translateY(1px) rotate(-45deg);
        }
        &:nth-child(6) {
          transform: translateX(9px) translateY(1px) rotate(45deg);
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
  transform: translateY(-100%);
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
