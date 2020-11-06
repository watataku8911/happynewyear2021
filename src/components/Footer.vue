<template>
  <footer>
    <small>&copy;2021 Watataku</small>
  </footer>
</template>

<style scoped>
/* PC */
@media screen and (min-width: 1026px) {
  footer {
    width: 100%;
    padding-top: 1vh;
    padding-bottom: 1vh;
    height: 1vw;
    margin: auto;
    background-color: #87c0bb;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  footer {
    width: 100%;
    padding-top: calc(1vh + 1vw);
    padding-bottom: calc(1vh + 2vw);
    height: 1vw;
    margin: auto;
    background-color: #87c0bb;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  footer {
    width: 100%;
    padding-top: calc(2vh + 1vw);
    padding-bottom: calc(4vh + 1vw);
    height: 1vw;
    margin: auto;
    background-color: #87c0bb;
  }
}

small {
  display: block;
  letter-spacing: 1px;
  text-align: center;
}
</style>
