<template>
  <div class="our-reach-container">
    <div class="left-section-container">
      <div class="heading-container">
        <h2>Integrates with the e-commerce solutions you already work with</h2>
      </div>
      <div class="sub-heading-container">
        <span>
          We streamline logistics through tech-driven solutions, a robust
          network & consultancy approach. We design, fix & execute supply chain
          & logistics processes with a suite of flexible & scalable services.
        </span>
      </div>
      <div class="brands-container">
        <div class="brands">
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
        </div>
      </div>
    </div>
    <div class="right-section-container">
      <v-img src="/Homepage/OurReach/hand.png" height="460px" contain></v-img>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.our-reach-container {
  display: flex;
  width: 100%;
  height: 1440px;
//   align-items: center;
  background-color: #0c0c0c;
  padding-top: 4rem;

  .left-section-container {
    display: flex;
    width: 50%;
    height: 40%;
    padding-left: 6rem;
    flex-direction: column;
    justify-content: center;
    .heading-container {
      display: flex;
      width: 100%;
      height: 170px;

      h2 {
        font-size: 42px;
        font-weight: 500;
        color: #fff;
        font-family: "NotoSerif";
      }
    }
    .sub-heading-container {
      display: flex;
      width: 70%;
      height: 120px;

      span {
        font-size: 16px;
        font-weight: 300;
        color: #fff;
      }
    }
    .brands-container {
      display: flex;
      width: 70%;
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
    align-items: center;
    padding-left: 300px;
    padding-top: 200px;
  }
}
</style>
