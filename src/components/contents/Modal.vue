<template>
  <div class="modal-opacity">
    <div class="modal">
      <h1 class="title">{{ this.title }}</h1>
      <div class="module--spacing--large"></div>
      <p class="detail">{{ this.detail }}</p>
      <div class="module--spacing--small"></div>
      <p class="name">{{ this.name }}</p>

      <div class="close" v-on:click="close">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "detail", "name"],
  methods: {
    close() {
      this.$emit("push");
    },
  },
};
</script>

<style scoped>
.module--spacing--small {
  height: 10px;
}

.module--spacing--large {
  height: 20px;
}

.modal-opacity {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  transition: all 0.5s ease;
}

.close {
  background-color: #ddd;
  display: block;
  position: fixed;
  right: 13px;
  top: 12px;
  width: 51px;
  height: 51px;
  cursor: pointer;
  z-index: 999;
  border-radius: 50%;
  box-shadow: -25px -16px 35px 0px rgba(0, 0, 0, 0.6),
    20px 25px 36px 0px rgba(0, 0, 0, 0.6);
}

.close span {
  display: block;
  position: absolute; /* .navToggleに対して */
  width: 30px;
  border-bottom: solid 3px #000;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  left: 6px;
}

.close span:nth-child(1) {
  top: 22px;
  left: 10px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.close span:nth-child(2) {
  top: 22px;
  left: 10px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* PC */
@media screen and (min-width: 1026px) {
  .modal {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60vh;
    background: #fff;
  }

  .title {
    padding-top: 2vh;
    padding-left: 2vh;
    font-size: 50px;
    font-family: "Noto Serif JP", serif;
    letter-spacing: 2px;
  }

  .detail {
    font-size: 20px;
    font-family: "Noto Serif JP", serif;
    line-height: 4vh;
    letter-spacing: 2px;
  }

  .name {
    position: absolute;
    bottom: 2vh;
    right: 2vh;
    font-size: 25px;
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-weight: bold;
    letter-spacing: 2px;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .modal {
    width: 95%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(20vh + 35vw);
    background: #fff;
  }

  .title {
    padding-top: 2vh;
    padding-left: 2vh;
    font-size: 50px;
    font-family: "Noto Serif JP", serif;
    letter-spacing: 2px;
  }

  .detail {
    font-size: calc(0.5em + 8px);
    font-family: "Noto Serif JP", serif;
    line-height: calc(1.5vh + 2vw);
    letter-spacing: 2px;
  }

  .name {
    position: absolute;
    bottom: 2vh;
    right: 2vh;
    font-size: 25px;
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .modal {
    width: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(85vh + 35px);
    background: #fff;
  }

  .title {
    padding-top: 2vh;
    padding-left: 2vh;
    font-size: 45px;
    font-family: "Noto Serif JP", serif;
    letter-spacing: 2px;
  }

  .detail {
    margin-top: 15px;
    font-size: 15px;
    font-family: "Noto Serif JP", serif;
    line-height: 3vh;
    letter-spacing: 2px;
  }

  .name {
    position: absolute;
    bottom: 2vh;
    right: 2vh;
    font-size: 20px;
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
</style>
