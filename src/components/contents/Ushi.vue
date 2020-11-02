<template>
  <img
    src="@/assets/usi.png"
    alt="牛"
    class="ushi"
    :style="{
      transform: `translate(${x + dx}px, ${y + dy}px) scale(${scaleX *
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
    x: { type: Number, default: 200 },
    y: { type: Number, default: 100 },
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
    async walk(step = 100, duration = 500) {
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
    async inversion() {
      await this.tween({
        dx: 350,
        dy: 0,
        dRotate: 0,
        dScaleX: -0.8,
        easing: "ease",
      });
    },
  },
};
</script>

<style scoped>
.ushi {
  max-width: 80%;
  position: absolute;
  bottom: 55vh;
  transform-origin: 90px 100%;
  will-change: transform;
}
</style>
