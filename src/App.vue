<template>
  <div id="root">
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Press Start 2P', cursive;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.btn {
  display: flex;
  justify-content: center;
  padding: 10rem;
  gap: 50px;
}
.btn-1,
.btn-2,
.btn-3 {
  border-radius: 20px;
  border: none;
  box-shadow: 5px 5px 15px 5px #000000;
  cursor: pointer;
}
.btn-1 {
  background-color: #ffff;
}
.btn-2 {
  background: rgb(33, 33, 204);
  color: white;
}
.btn-3 {
  background: rgb(247, 27, 57);
  color: white;
}
button {
  padding: 3rem;
}
@media only screen and (max-width: 340px) {
  button {
    padding: 2rem;
  }
}
@media only screen and (max-width: 1200px) {
  .btn {
    flex-direction: column;
  }
}
@media only screen and (max-width: 620px) {
  .btn {
    width: 100%;
    margin: auto;
    flex-direction: column;
    padding: 1rem;
    font-size: 0.6rem;
    margin-top: 5rem;
  }
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
</style>
