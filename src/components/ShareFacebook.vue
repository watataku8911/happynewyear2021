<template>
  <p>
    <a
      href="http://www.facebook.com/share.php?u=https://watataku8911.github.io/happynewyear2021/"
      target="_blank"
      class="share-link"
      ><FbSvg
    /></a>
  </p>
</template>

<script>
import FbSvg from "@/assets/icon/icon_facebook.svg";
export default {
  components: {
    FbSvg,
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
