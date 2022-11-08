<template>
  <div class="trusted-brands-container">
    <div class="heading-container">
      <h2>Trusted by over more than 50<span>+</span> Brands</h2>
    </div>
    <div class="icons-container">
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
    </div>
    <div class="icons-container">
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
      <div class="icons"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trusted-brands-container {
  display: flex;
  width: 100%;
  height: 410px;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 0 7rem;

  h2 {
    font-family: "NotoSerif";
    font-weight: 400;
    font-size: 32px;
    color: #0c0c0c;

    span {
      color: #00a699;
    }
  }

  .heading-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30%;
  }

  .icons-container {
    display: flex;
    width: 100%;
    height: 30%;
    align-items: center;
    justify-content: space-between;
    .icons {
      display: flex;
      width: 80px;
      height: 80px;
      border: 1px solid gray;
      border-radius: 4px;
    }
  }
}
</style>
