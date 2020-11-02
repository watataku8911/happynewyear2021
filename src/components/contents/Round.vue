<template>
  <div class="circle">
    <p>{{ this.msg }}</p>
  </div>
</template>

<script>
export default {
  name: "round",
  props: ["msg"],
};
</script>

<style scoped>
.circle {
  position: relative;
  background-color: tomato;
  width: 7vw;
  height: 7vw;
  border-radius: 50%;
  transform-origin: right bottom;
}

.circle p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3vw;
}
</style>
