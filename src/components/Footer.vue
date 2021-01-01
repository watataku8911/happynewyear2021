<template>
  <footer>
    <small>&copy;2021 Watataku.</small>
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
    margin-left: auto;
    background-color: #87c0bb;
  }

  small {
    font-size: 1vw;
    display: block;
    letter-spacing: 1px;
    text-align: right;
    padding-right: 3%;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  footer {
    width: 100%;
    height: 1vw;
    margin: auto;
    background-color: #87c0bb;
  }

  small {
    font-size: 0.5em;
    display: block;
    letter-spacing: 1px;
    text-align: right;
    padding-right: 3%;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  footer {
    width: 100%;
    padding-top: calc(2vh + 1vw);
    height: 5vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: #87c0bb;
  }
  small {
    font-size: 1em;
    display: block;
    letter-spacing: 1px;
    text-align: center;
  }
}


</style>
