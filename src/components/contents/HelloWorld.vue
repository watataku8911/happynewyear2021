<template>
  <div class="hello">
    <transition name="modal">
      <Modal
        v-show="isModal"
        title="謹賀新年"
        detail="新型コロナウイルス影響拡大を憂いお見舞い申し上げますとともに謹んで新年のご挨拶を申し上げます。
        この災禍の一日も早い終息を心より願うばかりです。本年も変わらぬご交際のほど、どうかよろしくお願いいたします。"
        name="令和３年 元日 Watataku"
        v-on:push="closeModal"
      />
    </transition>

    <ul class="arch">
      <li class="item" v-bind:class="pStyle">
        <Round msg="あ" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="け" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="ま" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="し" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="て" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="お" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="め" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="で" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="と" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="う" :route="10" />
      </li>
      <li class="item" v-bind:class="pStyle">
        <Round msg="!!" :route="10" />
      </li>
    </ul>

    <div class="ushi-area-pc">
      <Ushi
        ref="Ushi"
        :x="0"
        :y="0"
        :scaleX="1.0"
        :scaleY="1.1"
        v-show="ushi"
      />
    </div>
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
      }, 1500);
    },
    async play() {
      const ushi = this.$refs.Ushi;
      await ushi.jump(50, 3000);
      await ushi.walk(-20, 1000);
      await ushi.walk(-50, 1500);
      await ushi.walk(-30, 2000);
      await ushi.walk(-40, 2500);
      await ushi.walk(20, 500);
      await ushi.walk(30, 2000);
      await ushi.walk(40, 2550);
      await ushi.jump(80, 3200);

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
    transform: translate(0, 10px);
  }
}
@keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 10px);
  }
}

.tweet a:hover {
  opacity: 0.5;
}

/*PC*/
@media screen and (min-width: 1026px) {
  .hello {
    height: 90vh;
    background-color: #87c0bb;
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
    height: calc(98vh - 5.5vw);
    background-color: #87c0bb;
  }

  .arch {
    z-index: 10;
    width: 100%;
    word-break: break-all;
    margin: auto;
    display: flex;
    justify-content: space-around;
    position: relative;
    bottom: calc(26.5vw - 5px);
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .hello {
    height: 85vh;
    background-color: #87c0bb;
    width: 100%;
  }

  .arch {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    position: relative;
    bottom: 12vh;
  }
}
</style>
