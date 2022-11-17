<template>
  <div class="our-reach-container">
    <div class="left-section-container">
      <div class="heading-container">
        <h2>Integrations that gets you ahead</h2>
      </div>
      <div class="sub-heading-container">
        <span>
          Our WMS offers multichannel one-click integrations with leading
          marketplaces, courier services & ERPs. We integrate with 75+
          marketplaces and 20+ courier companies to help you manage & ship
          orders efficiently.
        </span>
      </div>
      <div class="brands-container">
        <div class="brands">
          <div class="brand"></div>
          <div class="brand"></div>
          <div class="brand"></div>
          <div class="brand"></div>
          <div class="brand"></div>
          <div class="brand"></div>
        </div>
        <div class="brands">
          <div class="brand"></div>
          <div class="brand"></div>
          <div class="brand"></div>
          <div class="brand"></div>
          <div class="brand"></div>
          <div class="brand"></div>
        </div>
      </div>
    </div>
    <div class="right-section-container">
      <v-img src="/Homepage/OurReach/hand.png" height="500px" contain></v-img>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.our-reach-container {
  display: flex;
  width: 100%;
  height: 800px;
  //   align-items: center;
  background-color: #0c0c0c;
  padding-top: 4rem;
  background-image: url("/Common/background-grid.png");
  background-position: bottom;
  background-size: contain;

  .left-section-container {
    display: flex;
    width: 50%;
    height: 100%;
    padding-left: 6rem;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid grey;
    .heading-container {
      display: flex;
      width: 100%;
      height: 160px;

      h2 {
        font-size: 42px;
        font-weight: 500;
        color: #fff;
        font-family: "NotoSerif";
      }
    }
    .sub-heading-container {
      display: flex;
      width: 100%;
      height: 140px;

      span {
        font-size: 16px;
        font-weight: 300;
        color: #fff;
      }
    }
    .brands-container {
      display: flex;
      width: 100%;
      height: 200px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .brands {
        display: flex;
        height: 40%;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        .brand {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 85px;
          width: 85px;
          background-color: #d9d9d9;
          border-radius: 4px;
        }
      }
    }
  }
  .right-section-container {
    display: flex;
    width: 50%;
    height: 40%;
    // align-items: center;
    // padding-left: 300px;
    padding-top: 238px;
  }
}
</style>
