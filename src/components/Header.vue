<template>
  <header>
  </header>
</template>

<style scoped>

/* PC */
@media screen and (min-width: 1026px) {
  header {
    padding-top: 0.5vh;
    background-color: #87c0bb;
    height:0.8vh;
    padding-bottom: 1vh;
    width: 100%;
  }

  p {
    text-align: right;
    padding-right: 20vh;
    letter-spacing: 2px;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  header {
    background-color: #87c0bb;
    height: calc(1.5vh + 1px);
    width: 100%;
  }

  p {
    text-align: right;
    padding-right: 10vh;
    letter-spacing: 2px;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  header {
    background-color: #87c0bb;
    height:1vh;
    width: 100%;
  }

  p {
    text-align: right;
    padding-right: 5vh;
    letter-spacing: 2px;
  }
}
</style>
