<template>
  <p>
    <a
      href="http://www.facebook.com/share.php?u=http://watataku.html.xdomain.jp/newyear/2021/"
      target="_blank"
      class="share-link"
      ><img :src="path" alt="いいね!!" width="32" height="32"
    /></a>
  </p>
</template>

<script>
export default {
  props: ["imageName"],
  data() {
    return {
      path: require("../assets/icon/" + this.imageName),
    };
  },
};
</script>

<style scoped>
.share-link {
  width: 32px;
  height: 32px;
}

.share-link:hover {
  display: block;
  transform: scale(1.3, 1.3);
  -webkit-transform: scale(1.3, 1.3);
  -moz-transform: scale(1.3, 1.3);
}
</style>