<template>
  <div class="modal-opacity" v-on:click="close">
    <div class="modal">
      <h1 class="title">{{ this.title }}</h1>
      <div class="module--spacing--large"></div>
      <p class="detail">{{ this.detail }}</p>
      <div class="module--spacing--small"></div>
      <p class="name">{{ this.name }}</p>
      <button v-on:click="close">閉じる</button>
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

.modal {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60vh;
  /* box-shadow: 23px 17px 29px 8px rgba(0, 0, 0, 0.6),
    -2px 3px 29px 8px rgba(0, 0, 0, 0.6); */
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
  font-size: 25px;
  font-family: "Noto Serif JP", serif;

  letter-spacing: 2px;
}

.name {
  text-align: right;
  padding-right: 2vw;
  font-size: 25px;
  font-family: "Kaushan Script", cursive;
  font-family: "Bad Script", cursive;
  font-weight: bold;
  letter-spacing: 2px;
}
</style>
