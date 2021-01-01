<template>
  <div
    class="circle"
    :style="{
      transform: ` rotate(${route + dRoute}deg)`,
    }"
    @click="deg(12)"
  >
    <p>{{ this.msg }}</p>
  </div>
</template>

<script>
import Time from "@/core/Time";
export default {
  name: "round",
  props: ["msg", "route"],
  data() {
    return {
      dRoute: 0,
      duration: 1000,
      easing: "ease",
    };
  },
  methods: {
    async tween(props, duration = 1000) {
      Object.assign(this.$data, props);
      this.$data.duration = duration;
      await Time.wait(duration);
    },
    async deg(route, duration = 1500) {
      await this.tween({ dRoute: route, easing: "ease" }, duration * 0.1);
      await this.tween({ dRoute: -route, easing: "ease-out" }, duration * 0.1);
      await this.tween({ dRoute: 0, easing: "ease" }, duration * 0.1);
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1026px) {
  .circle {
    position: relative;
    background-color: tomato;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform-origin: right bottom;
  }

  .circle p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3.5em;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .circle {
    position: relative;
    background-color: tomato;
    width: calc(10vw - 30px);
    height: calc(10vw - 30px);
    border-radius: 50%;
    transform-origin: right bottom;
  }

  .circle p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: calc(2em - 8px);
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .circle {
    position: relative;
    background-color: tomato;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transform-origin: right bottom;
  }

  .circle p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1em;
  }
}
</style>
