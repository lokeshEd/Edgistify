<template>
  <div class="our-presence-container">
    <div class="heading-container">
      <h2
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-easing="ease-in"
        data-aos-duration="800"
      >
        We are EveryWare
      </h2>
    </div>
    <div class="content-container">
      <div class="map-container">
        <v-img src="/Homepage/OurPresence/map.png" contain></v-img>
      </div>
      <div class="options-container">
        <div class="option">
          <span
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in"
            data-aos-duration="900"
            >All metros</span
          >
        </div>
        <div class="option">
          <span
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
            >300+ Dark Stores</span
          >
        </div>
        <div class="option">
          <span
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in"
            data-aos-duration="1100"
            >Tier 2 - Tier 3 Cities</span
          >
        </div>
        <div class="option">
          <span
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in"
            data-aos-duration="1200"
            >200+ Warehouse</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.our-presence-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 970px;
  background-color: #0c0c0c;
  padding: 0 94px;
  background-image: url("/Homepage/OurPresence/grid-top.png");
  background-position: top;
  background-size: contain;

  .heading-container {
    display: flex;
    width: 100%;
    height: 20%;
    align-items: center;

    h2 {
      font-size: 42px;
      font-family: "NotoSerif";
      line-height: 58px;
    }
  }
  .content-container {
    display: flex;
    width: 100%;
    height: 80%;
    align-items: center;

    .map-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 70%;
      padding: 80px;
    }
    .options-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      height: 70%;

      :last-child {
        border-bottom: 1px solid #8d8d8d;
      }

      .option {
        display: flex;
        align-items: center;
        // justify-content: center;
        width: 50%;
        height: 25%;
        border-top: 1px solid #8d8d8d;
        padding-left: 60px;

        :last-child {
          border-bottom: none;
        }

        span {
          color: #9c9c9c;
          font-size: 24px;
        }

        :hover {
          color: #fff;
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
