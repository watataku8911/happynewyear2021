<template>
  <header>
    <p>
      <a href="https://github.com/watataku8911/HappyNewYear2021" target="_blank"
        >View Code</a
      >
    </p>
  </header>
</template>

<style scoped>
.top-enter-active,
.top-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.top-enter,
.top-leave-to {
  transform: translateY(-100vh) translateY(0px);
}

a {
  color: black;
}

a:hover {
  color: white;
  font-weight: bold;
}

/* PC */
@media screen and (min-width: 1026px) {
  header {
    background-color: #87c0bb;
    height: 1vw;
    width: 100%;
    padding-top: 1vh;
    padding-bottom: 1vh;
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
    height: 1vw;
    width: 100%;
    padding-top: 1vh;
    padding-bottom: calc(1vh + 1vw);
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
    height: 1vw;
    width: 100%;
    padding-top: 1vh;
    padding-bottom: calc(2.2vh + 3px);
  }

  p {
    text-align: right;
    padding-right: 5vh;
    letter-spacing: 2px;
  }
}
</style>
