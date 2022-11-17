<template>
  <div class="our-message-container">
    <div class="top image-container">
      <v-img src="/Homepage/OurMessage/top.svg" class="img" contain />
    </div>
    <div class="content-container">
      <h1>Simplify</h1>
      <span>Simplify</span>
    </div>
    <div class="bottom image-container">
      <v-img src="/Homepage/OurMessage/bottom.svg" class="img" contain />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.our-message-container {
  display: flex;
  width: 100%;
  height: 421px;
  background-color: #00a699;
  align-items: center;
  justify-content: center;

  .image-container {
    display: flex;
    width: 30%;
    height: 100%;
    &.top {
      align-items: flex-start;

      .img {
        margin-left: -125px;
        height: 233px;
      }
    }
    &.bottom {
      align-items: flex-end;
      justify-content: flex-end;

      .img {
        margin-right: -130px;
        height: 215px;
      }
    }
  }
  .content-container {
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    h1 {
      font-size: 144px;
      line-height: 257px;
      font-family: "NotoSerif";
    }
    span {
      font-size: 32px;
      line-height: 57px;
    }
  }
}
</style>
