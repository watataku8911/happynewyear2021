<template>
  <div id="app">
    <section class="main-contents">
      <Header />
      <div class="wrapper">
        <div class="triangle-left"></div>
        <div class="triangle-right"></div>
        <main>
          <HelloWorld />
          <Footer />
          <nav class="n-area">
            <ShareTwitter class="link-twitter" />
            <ShareFacebook class="link-facebook" />
          </nav>
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HelloWorld from "./components/contents/HelloWorld.vue";
import Footer from "./components/Footer.vue";
import ShareTwitter from "./components/ShareTwitter";
import ShareFacebook from "./components/ShareFacebook";

export default {
  name: "app",
  components: {
    Header,
    HelloWorld,
    Footer,
    ShareTwitter,
    ShareFacebook,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bad+Script&display=swap");
body {
  background-color: #87c0bb;
}

.opning {
  margin-top: -2vh;
  position: relative;
  width: 100%;
  height: 100vh;
}

.opning-msg {
  position: relative;
  top: 50%;
  margin: 0 auto;
  width: 30%;
  height: 50px;
  font-size: 2.5em;
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
  animation: typewriter 4s steps(44) 1s 1 normal both;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/*PC*/
@media screen and (min-width: 1026px) {
  .wrapper {
    width: 95%;
    margin: auto;
    border: solid 10px #eede93;
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

  .n-area {
    position: absolute;
    bottom: 35px;
    left: 3%;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .wrapper {
    padding-bottom: 2vh;
    width: 90%;
    margin: auto;
    border: solid 10px #eede93;
  }

  .triangle-left {
    float: left;
    width: 0;
    height: 0;
    border: 15vw solid transparent;
    border-top: 15vw solid #eede93;
    border-left: 15vw solid #eede93;
  }

  .triangle-right {
    float: right;
    width: 0;
    height: 0;
    border: 15vw solid transparent;
    border-top: 15vw solid #eede93;
    border-right: 15vw solid #eede93;
  }

  .n-area {
    position: absolute;
    bottom: 2.5%;
    left: 5.5%;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .wrapper {
    padding-bottom: 2vh;
    width: 85%;
    margin: auto;
    border: solid 10px #eede93;
  }

  .triangle-left {
    float: left;
    width: 0;
    height: 0;
    border: 20vw solid transparent;
    border-top: 20vw solid #eede93;
    border-left: 20vw solid #eede93;
  }

  .triangle-right {
    float: right;
    width: 0;
    height: 0;
    border: 20vw solid transparent;
    border-top: 20vw solid #eede93;
    border-right: 20vw solid #eede93;
  }

  .n-area {
    position: absolute;
    bottom: 3%;
    left: 7%;
  }
}
</style>
