<template>
  <div id="app">
    <transition name="fade">
      <section class="opning" v-show="!isLoading">
        <p class="opning-msg anim-typewriter">Happy new year 2021</p>
      </section>
    </transition>
    <transition name="show">
      <section class="wrapper" v-show="isLoading">
        <div class="triangle-left"></div>
        <div class="triangle-right"></div>
        <Header />
        <main>
          <HelloWorld />
        </main>
        <Footer />
      </section>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HelloWorld from "./components/contents/HelloWorld.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    HelloWorld,
    Footer,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = true;
    }, 6000);
  },
};
</script>

<style>
/* -------------------------------
--------アニメーション----------------
------------------------------------ */
.fade-leave-active,
.fade-enter-active {
  transition: opacity 1s;
}

/* 表示アニメーション */
.show-enter {
  opacity: 0;
}
.show-enter-to {
  opacity: 1;
}

/* 非表示アニメーション */
.fade-leave {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}

.show-leave-active,
.show-enter-active {
  transition: opacity 1s;
}
/* ------------------------------------ */
body {
  margin-top: 2vh;
  margin-bottom: 2vh;
  background-color: #87c0bb;
}

.wrapper {
  padding-bottom: 2vh;
  width: 90%;
  margin: auto;
  border: solid 10px #eede93;
}

.opning {
  position: relative;
  width: 100%;
  height: 100vh;
}

.opning-msg {
  position: relative;
  top: 40%;
  margin: 0 auto;
  width: 30%;
  height: 7vh;
  border-right: 0.5vw solid rgba(255, 255, 255, 0.75);
  font-size: 3vw;
  font-family: "Kaushan Script", cursive;
  font-family: "Bad Script", cursive;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
}
/* Animation */
.anim-typewriter {
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 30%;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
.triangle-left {
  float: left;
  width: 0;
  height: 0;
  border: 200px solid transparent;
  border-top: 200px solid #eede93;
  border-left: 200px solid #eede93;
}

.triangle-right {
  float: right;
  width: 0;
  height: 0;
  border: 200px solid transparent;
  border-top: 200px solid #eede93;
  border-right: 200px solid #eede93;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
