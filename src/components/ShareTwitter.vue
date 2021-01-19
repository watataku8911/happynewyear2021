<template>
  <p>
    <a
      href="https://twitter.com/share?text=Happy new year at 2021&url=http://watataku.html.xdomain.jp/newyear/2021/ "
      target="_blank"
      class="share-link"
      ><TwitterSvg
    /></a>
  </p>
</template>

<script>
import TwitterSvg from "@/assets/icon/icon_twitter.svg"
export default {
  components: {
    TwitterSvg
  }
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