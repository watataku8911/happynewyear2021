<template>
  <img
    src="@/assets/ushi.png"
    alt="牛"
    class="ushi"
    :style="{
      transform: `translate(${x + dx}%, ${y + dy}px) scale(${scaleX *
        dScaleX}, ${scaleY * dScaleY}) rotate(${rotate + dRotate}deg)`,
      transition: `transform ${duration}ms ${easing}`,
    }"
    @click="jump(150)"
  />
</template>

<script>
import Time from "@/core/Time";
export default {
  name: "Ushi",
  props: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: -50 },
    scaleX: { type: Number, default: 1.0 },
    scaleY: { type: Number, default: 1.0 },
    rotate: { type: Number, default: 0 },
  },
  data() {
    return {
      dx: 0,
      dy: 0,
      dScaleX: 1.0,
      dScaleY: 1.0,
      dRotate: 0,
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
    async jump(height = 200, duration = 2500) {
      await this.tween({ dScaleY: 0.8, easing: "ease" }, duration * 0.1);
      await this.tween(
        { dy: -height, dScaleY: 1.1, easing: "ease-out" },
        duration * 0.35
      );
      await this.tween(
        { dy: 0, dScaleY: 1.2, easing: "ease-in" },
        duration * 0.35
      );
      await this.tween({ dScaleY: 0.7, easing: "ease" }, duration * 0.1);
      await this.tween({ dScaleY: 1.0, easing: "ease" }, duration * 0.1);
    },
    async walk(step, duration) {
      await this.tween(
        { dRotate: 10, dScaleY: 0.8, easing: "ease" },
        duration * 0.2
      );
      await this.tween(
        {
          dx: this.dx + step,
          dy: -step * 0.2,
          dRotate: -5,
          dScaleY: 1.1,
          easing: "cubic-bezier(.04,.67,.52,1)",
        },
        duration * 0.7
      );
      await this.tween(
        { dy: 0, dRotate: 0, dScaleY: 1, easing: "ease" },
        duration * 0.1
      );
    },
  },
};
</script>

<style scoped>
/* PC */
@media screen and (min-width: 1026px) {
  .ushi {
    width: 450px;
    height: 480px;
    max-width: 85%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform-origin: 90px 100%;
    will-change: transform;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .ushi {
    display: block;
    max-width: 70%;
    width: 40vh;
    height: 42vh;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform-origin: 90px 100%;
    will-change: transform;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .ushi {
    max-width: 40%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform-origin: 90px 100%;
    will-change: transform;
  }
}
</style>
