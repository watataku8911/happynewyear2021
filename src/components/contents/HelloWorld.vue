<template>
  <div class="hello">
    <transition name="modal">
      <Modal
        v-show="isModal"
        title="題名"
        detail="内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。
        内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。
        内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。
        内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。
        内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。内容だよん。
        内容だよん。内容だよん。内容だよん。内容だよん。"
        name="hogehoge"
        v-on:push="closeModal"
      />
    </transition>

    <ul class="arch">
      <li class="item" v-bind:class="pStyle">
        <Round msg="も" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="じ" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="が" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="は" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="い" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="り" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="よ" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="る" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="け" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="ん" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="!" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="!" :route="10" />
      </li>
    </ul>

    <Ushi ref="Ushi" :x="0" :y="-50" :scaleX="0.9" :scaleY="1" v-show="ushi" />
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
import Modal from "../contents/Modal";
import Round from "../contents/Round";
import Ushi from "../contents/Ushi";

export default {
  name: "HelloWorld",
  components: {
    Modal,
    Round,
    Ushi,
  },
  data() {
    return {
      isModal: false,
      ushi: false,

      x: 0,
      y: 0,
      scaleX: 1.0,
      scaleY: 1.0,
      rotate: 0,
      duration: 1000,
      easing: "ease",

      pStyle: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isModal = true;
    }, 8000);
  },
  methods: {
    closeModal(push) {
      this.isModal = false;
      this.ushi = true;
      setTimeout(() => {
        this.play();
      }, 2000);
    },
    async play() {
      const ushi = this.$refs.Ushi;
      await ushi.jump(100, 1500);
      await ushi.walk(-30, 600);
      await ushi.walk(-20, 1000);
      await ushi.walk(-50, 900);
      await ushi.walk(-60, 900);
      await ushi.walk(-50, 900);
      await ushi.walk(-50, 900);
      await ushi.jump(100, 1500);
      await ushi.walk(10, 900);
      await ushi.walk(50, 1500);
      await ushi.walk(30, 800);
      await ushi.walk(50, 1500);
      await ushi.walk(20, 800);
      await ushi.walk(50, 1500);
      await ushi.jump(100, 1500);
      this.pStyle = "show";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ----------------------
-------------アニメーション
------------------------- */
.modal-leave-active,
.modal-enter-active {
  transition: opacity 1s;
}

/* 表示アニメーション */
.modal-enter {
  opacity: 0;
}
.modal-enter-to {
  opacity: 1;
}

/* 非表示アニメーション */
.modal-leave {
  opacity: 1;
}
.modal-leave-to {
  opacity: 0;
}
/* ------------------------------ */

.arch .item {
  list-style: none;
  transform: translate(0, 0px);
  opacity: 0;
}

.arch .item:nth-child(1) {
  transform: rotate(-37deg);
}

.arch .item:nth-child(2) {
  transform: rotate(-30deg);
}

.arch .item:nth-child(3) {
  transform: rotate(-23deg);
}

.arch .item:nth-child(4) {
  transform: rotate(-16deg);
}

.arch .item:nth-child(5) {
  transform: rotate(-9deg);
}

.arch .item:nth-child(6) {
  transform: rotate(-2deg);
}

.arch .item:nth-child(7) {
  transform: rotate(5deg);
}

.arch .item:nth-child(8) {
  transform: rotate(12deg);
}

.arch .item:nth-child(9) {
  transform: rotate(19deg);
}

.arch .item:nth-child(10) {
  transform: rotate(26deg);
}

.arch .item:nth-child(11) {
  transform: rotate(33deg);
}

.arch .item:nth-child(12) {
  transform: rotate(40deg);
}

/* ---------------------
---------アニメーション-----
-------------------------- */
.arch .item.show:nth-child(1) {
  -webkit-animation: example 0.5s ease 0.5s 1 forwards;
  animation: example 0.5s ease 0.5s 1 forwards;
}
.arch .item.show:nth-child(2) {
  -webkit-animation: example 0.5s ease 1s 1 forwards;
  animation: example 0.5s ease 1s 1 forwards;
}
.arch .item.show:nth-child(3) {
  -webkit-animation: example 0.5s ease 1.5s 1 forwards;
  animation: example 0.5s ease 1.5s 1 forwards;
}
.arch .item.show:nth-child(4) {
  -webkit-animation: example 0.5s ease 2s 1 forwards;
  animation: example 0.5s ease 2s 1 forwards;
}
.arch .item.show:nth-child(5) {
  -webkit-animation: example 0.5s ease 2.5s 1 forwards;
  animation: example 0.5s ease 2.5s 1 forwards;
}
.arch .item.show:nth-child(6) {
  -webkit-animation: example 0.5s ease 3s 1 forwards;
  animation: example 0.5s ease 3s 1 forwards;
}
.arch .item.show:nth-child(7) {
  -webkit-animation: example 0.5s ease 3.5s 1 forwards;
  animation: example 0.5s ease 3.5s 1 forwards;
}
.arch .item.show:nth-child(8) {
  -webkit-animation: example 0.5s ease 4s 1 forwards;
  animation: example 0.5s ease 4s 1 forwards;
}
.arch .item.show:nth-child(9) {
  -webkit-animation: example 0.5s ease 4.5s 1 forwards;
  animation: example 0.5s ease 4.5s 1 forwards;
}
.arch .item.show:nth-child(10) {
  -webkit-animation: example 0.5s ease 5s 1 forwards;
  animation: example 0.5s ease 5s 1 forwards;
}
.arch .item.show:nth-child(11) {
  -webkit-animation: example 0.5s ease 5.5s 1 forwards;
  animation: example 0.5s ease 5.5s 1 forwards;
}
.arch .item.show:nth-child(12) {
  -webkit-animation: example 0.5s ease 5.5s 1 forwards;
  animation: example 0.5s ease 5.5s 1 forwards;
}
@-webkit-keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 50px);
  }
}
@keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 50px);
  }
}

/*PC*/
@media screen and (min-width: 1026px) {
  .hello {
    height: 88vh;
    background-color: #87c0bb;
    /* background: url("/grid.svg") repeat; */
  }

  .arch {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    position: relative;
    bottom: 350px;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .hello {
    height: 90vh;
    background-color: #87c0bb;
    /* background: url("/grid.svg") repeat; */
  }

  .arch {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    position: relative;
    bottom: 42vw;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .hello {
    height: 90vh;
    background-color: #87c0bb;
    width: 100%;
    /* background: url("/grid.svg") repeat; */
  }

  .arch {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    position: relative;
    bottom: 80px;
  }
}
</style>
