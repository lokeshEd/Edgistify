<template>
  <div class="our-experties-container">
    <div class="content-container">
      <div class="left-section-container">
        <div class="heading">
          <h2>
            Adopt a digital perspective and take control of your supply chain
          </h2>
        </div>
        <div class="sub-heading">
          <span
            >We streamline logistics through tech-driven solutions, a robust
            network & consultancy approach. We design, fix & execute supply
            chain & logistics processes with a suite of flexible & scalable
            services.
          </span>
        </div>
        <div class="image-container">
          <v-img src="/Homepage/OurExperties/hand.png" height="180px" contain>
          </v-img>
        </div>
      </div>
      <div class="right-section-container">
        <div class="item-container">
          <v-img
            src="/Homepage/OurExperties/wh-network.png"
            height="50px"
            contain
          >
          </v-img>
          <div>
            <h3>Warehouse Network</h3>
            <span
              >Presence across 21 cities with Extensive Network of 350+
              warehouses & dark stores
            </span>
          </div>
        </div>
        <div class="item-container">
          <v-img
            src="/Homepage/OurExperties/tech-platform.png"
            height="50px"
            contain
          >
          </v-img>
          <div>
            <h3>Tech Platform</h3>
            <span
              >EdgeOS-Warehouse/Order Management System with Marketplace &
              Carrier Integration
            </span>
          </div>
        </div>
        <div class="item-container">
          <v-img
            src="/Homepage/OurExperties/sc-experties.png"
            height="50px"
            contain
          >
          </v-img>
          <div>
            <h3>Supply Chain Expertise</h3>
            <span
              >Industry based expertise with over 100+ years of cumulative
              experience
            </span>
          </div>
        </div>
        <v-btn class="button primary">Talk to an Expert</v-btn>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.our-experties-container {
  display: flex;
  width: 100%;
  height: 750px;
  align-items: center;
  justify-content: center;
  background-color: #0c0c0c;

  .content-container {
    display: flex;
    width: 87%;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    .left-section-container {
      display: flex;
      width: 50%;
      height: 90%;
      flex-direction: column;
      justify-content: center;
      padding-right: 4rem;
      //   border: 1px solid gray;

      .heading {
        display: flex;
        width: 100%;
        height: 20%;
        align-items: center;

        h2 {
          font-size: 42px;
          font-weight: 500;
          font-family: "NotoSerif";
        }
      }
      .sub-heading {
        display: flex;
        width: 100%;
        height: 20%;
        align-items: center;

        span {
          font-size: 16px;
          font-weight: 300;
        }
      }
      .image-container {
        display: flex;
        width: 100%;
        height: 40%;
        align-items: center;
      }
    }

    .right-section-container {
      display: flex;
      width: 50%;
      height: 90%;
      flex-direction: column;
      justify-content: center;

      .item-container {
        display: flex;
        width: 100%;
        height: 25%;
        gap: 50px;
        align-items: center;
        justify-content: center;
      }
    }

    .button {
      display: flex;
      height: 42px;
      align-items: center;
      justify-content: center;
      border: 1px solid #00a699;
      border-radius: 40px;
      color: #fff;
      padding: 10px 40px;
      font-family: "NotoSerif";
      text-transform: capitalize;
      font-size: 16px;

      &.primary {
        background-color: #00a699;

        &:hover {
          background-color: #008b80;
        }
      }
      &.secondry {
        border: 1px solid #fff;
        background-color: transparent;

        &:hover {
          border-color: #008b80;
        }
      }
    }
  }
}
</style>
