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
          <v-img src="/Homepage/OurExperties/hand.png" height="190px" contain>
          </v-img>
        </div>
      </div>
      <div class="right-section-container">
        <div class="item-container">
          <div class="icon-container">
            <v-img
              src="/Homepage/OurExperties/wh-network.png"
              class="img"
              height="65px"
              contain
            >
            </v-img>
          </div>
          <div class="content-container">
            <div class="title">
              <h3>Warehouse Network</h3>
            </div>
            <div class="description">
              <span
                >Presence across 21 cities with Extensive Network of 350+
                warehouses & dark stores
              </span>
            </div>
          </div>
        </div>
        <div class="item-container">
          <div class="icon-container">
            <v-img
              src="/Homepage/OurExperties/tech-platform.png"
              class="img"
              height="65px"
              contain
            >
            </v-img>
          </div>
          <div class="content-container">
            <div class="title">
              <h3>Tech Platform</h3>
            </div>
            <div class="description">
              <span
                >EdgeOS-Warehouse/Order Management System with Marketplace &
                Carrier Integration
              </span>
            </div>
          </div>
        </div>
        <div class="item-container">
          <div class="icon-container sc">
            <v-img
              src="/Homepage/OurExperties/sc.png"
              class="img"
              height="68px"
              contain
            >
            </v-img>
          </div>
          <div class="content-container">
            <div class="title">
              <h3>Supply Chain Expertise</h3>
            </div>
            <div class="description">
              <span
                >Industry based expertise with over 100+ years of cumulative
                experience
              </span>
            </div>
          </div>
        </div>
        <div class="action-container">
          <v-btn class="button primary">Talk to an Expert</v-btn>
        </div>
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
  background-image: url("/Common/background-grid-top.png");
  background-position: top;
  background-size: contain;

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

      .heading {
        display: flex;
        width: 100%;
        height: 20%;
        align-items: center;
        margin-bottom: 35px;
        margin-top: 87px;

        h2 {
          font-size: 42px;
          font-weight: 500;
          font-family: "NotoSerif";
        }
      }
      .sub-heading {
        display: flex;
        width: 90%;
        height: 20%;
        align-items: center;
        margin-bottom: 35px;

        span {
          font-size: 16px;
          font-weight: 300;
        }
      }
      .image-container {
        display: flex;
        width: 80%;
        height: 40%;
        // align-items: center;
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
        align-items: center;
        justify-content: center;

        .icon-container {
          display: flex;
          width: 20%;
          height: 100%;
          align-items: center;
          justify-content: center;
          // border: 1px solid gray;
          overflow: hidden;

          // background-image: url();

          .img {
            transition: all 10s ease;
            &:hover {
              transform: rotate(720deg);
            }
          }

          &.sc {
            background-image: url("/Homepage/OurExperties/person.png");
            background-position: center;
            background-size: 20px;
          }
        }
        .content-container {
          display: flex;
          width: 80%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          // border: 1px solid gray;

          .title {
            display: flex;
            width: 100%;
            margin-bottom: 5px;

            h3 {
              font-size: 36px;
              font-weight: 500;
            }
          }
          .description {
            display: flex;
            width: 100%;

            span {
              color: #9c9c9c;
              font-size: 16px;
            }
          }
        }
      }

      .action-container {
        display: flex;
        align-items: center;
        width: 60%;
        height: 100px;
        padding-left: 40px;
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

      .v-btn__content {
        font-weight: bold;
        font-family: "NotoSerif";
      }

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
