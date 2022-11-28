<template>
  <div class="trusted-brands-container">
    <div class="heading-container">
      <h2
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-easing="ease-in"
        data-aos-duration="800"
      >
        Trusted by over more than 50<span>+</span> Brands
      </h2>
    </div>
    <div
      class="icons-container"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-easing="ease-in"
      data-aos-duration="900"
    >
      <div class="icons">
        <v-img src="/Brands/jio.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/pidilite.png" class="img" contain />
      </div>

      <div class="icons">
        <v-img src="/Brands/flipkart.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/shiprocket.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/zepto.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/waaree.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/pickrr.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/kult.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/apnamart.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/marico.png" class="img" contain />
      </div>
    </div>
    <div
      class="icons-container"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
    >
      <div class="icons">
        <v-img src="/Brands/kisanserv.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/pitstop.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/uddan.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/pureplay.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/shopkirana.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/anveshan.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/super.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/blinkit.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/flo.png" class="img" contain />
      </div>
      <div class="icons">
        <v-img src="/Brands/enrich.png" class="img" contain />
      </div>
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
  padding: 0 94px;

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
    height: 29%;
    align-items: center;
    justify-content: space-between;
    .icons {
      display: flex;
      width: 88px;
      height: 77px;

      .img {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        transition: 0.2s all ease-in-out;
      }

      &:hover {
        .img {
          -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
          filter: grayscale(0%);
        }
      }
    }
  }
}
</style>
<script>
import aosMixin from "~/mixins/aos";

export default {
  mixins: [aosMixin],
};
</script>
