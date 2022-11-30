<template>
  <div class="homepage-container">
    <particles-bg type="cobweb" :bg="true" color="#ffffff"/>
    <div class="hero-container">
      <div class="title">
        <div class="heading-container">
          <div class="heading">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-in"
              data-aos-duration="800"
            >
              New Age Tech Driven<br />
              <b><span> 3PL</span> Service Provider</b>
            </h1>
          </div>
        </div>
        <div class="description-container">
          <div class="description">
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-in"
              data-aos-duration="900"
            >
              Edgistify offers End to End supply chain and logistics solutions
              for <b>B2B</b> and <b>B2C</b> companies across different
              industries PAN India
            </p>
          </div>
        </div>
      </div>
      <div class="action">
        <v-btn
          class="button primary"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
          >Talk to an Expert</v-btn
        >
        <div class="slide-items">
          <div>
            <span> Hyperlocal Order Fulfilment</span>
            <span class="dot">&#9679;</span>
            <span> Ecommerce Order Fulfillment</span>
            <span class="dot">&#9679;</span>
            <span> B2B & B2C Warehousing Ops</span>
            <span class="dot">&#9679;</span>
            <span> Dark Store Ops</span>
            <span class="dot">&#9679;</span>
            <span> First, Middle & Last Mile</span>
            <span class="dot">&#9679;</span>
            <span> WMS & OMS</span>
            <span class="dot">&#9679;</span>
            <span> Fleet Managemant</span>
            <span class="dot">&#9679;</span>
            <span> Supplychain Consultancy</span>
            <span class="dot">&#9679;</span>
            <span> Warehousing Infra</span>
            <span class="dot">&#9679;</span>
            <span> Hyperlocal Order Fulfilment</span>
            <span class="dot">&#9679;</span>
            <span> Ecommerce Order Fulfillment</span>
            <span class="dot">&#9679;</span>
            <span> B2B & B2C Warehousing Ops</span>
            <span class="dot">&#9679;</span>
            <span> Dark Store Ops</span>
            <span class="dot">&#9679;</span>
            <span> First, Middle & Last Mile</span>
            <span class="dot">&#9679;</span>
            <span> WMS & OMS</span>
            <span class="dot">&#9679;</span>
            <span> Fleet Managemant</span>
            <span class="dot">&#9679;</span>
            <span> Supplychain Consultancy</span>
            <span class="dot">&#9679;</span>
            <span> Warehousing Infra</span>
            <span class="dot">&#9679;</span>
            <span> Hyperlocal Order Fulfilment</span>
            <span class="dot">&#9679;</span>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-container">
      <div class="heading-container">
        <div class="heading">
          <h2>1 lac<span>+</span></h2>
          <span
            data-aos="zoom-out"
            data-aos-once="true"
            data-aos-easing="ease-in"
            data-aos-duration="600"
            >daily orders</span
          >
        </div>
        <div class="heading">
          <h2>75<span>+</span></h2>
          <span
            data-aos="zoom-out"
            data-aos-once="true"
            data-aos-easing="ease-in"
            data-aos-duration="700"
            >marketplaces</span
          >
        </div>
        <div class="heading">
          <h2>150<span>+</span></h2>
          <span
            data-aos="zoom-out"
            data-aos-once="true"
            data-aos-easing="ease-in"
            data-aos-duration="800"
            >cities</span
          >
        </div>
        <div class="heading">
          <h2>300<span>+</span></h2>
          <span
            data-aos="zoom-outt"
            data-aos-once="true"
            data-aos-easing="ease-in"
            data-aos-duration="900"
            >warehouses</span
          >
        </div>
        <div class="heading">
          <h2>50<span>+</span></h2>
          <span
            data-aos="zoom-out"
            data-aos-once="true"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
            >customers</span
          >
        </div>
      </div>
      <div class="description-container">
        <video autoplay muted loop>
          <source src="/Homepage/Videos/video2.mp4" type="video/mp4" />
        </video>
        <div class="floating-text">
          <span id="ft"
            >Tech-driven integrated warehousing & logistics solutions</span
          >
        </div>
        <v-btn
          class="button primary"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
          >Book your Space</v-btn
        >
      </div>
    </div>
    <TrustedBrands />
    <OurServices />
    <OurNetworks />
    <OurExperties />
    <!-- <OurAwards /> -->
    <OurReach />
    <OurStories />
    <OurPresence />
    <Testimonials />
    <OurInsights />
    <OurMessage />
  </div>
</template>

<style lang="scss" scoped>
.homepage-container {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f5;
  // overflow: hidden;

  .canvas {
    z-index: 0 !important;
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
  }

  .hero-container {
    display: flex;
    width: 100%;
    height: calc(100vh - 115px);
    min-height: 600px;
    align-items: center;
    justify-content: center;
    background-color: #0c0c0c;
    flex-direction: column;
    padding-top: 90px;
    background-image: url("/Homepage/background.png");
    background-size: cover;
    background-position-x: center;

    .title {
      display: flex;
      width: 100%;
      height: 75%;
      .heading-container {
        display: flex;
        // border: 1px solid grey;
        width: 70%;
        height: 100%;
        align-items: center;

        .heading {
          display: flex;
          width: 100%;
          height: 40%;
          align-items: center;
          border-right: 2px solid #8d8d8d;
          padding: 0 94px;

          h1 {
            font-size: 82px;
            font-weight: 300;
            font-family: "NotoSerif";
            line-height: 112px;

            b {
              font-weight: 600;
              font-size: 82px;
              font-family: "Outfit";

              span {
                color: #00a699;
              }
            }
          }
        }
      }

      .description-container {
        display: flex;
        width: 30%;
        height: 100%;
        align-items: center;
        justify-content: center;

        .description {
          display: flex;
          width: 100%;
          align-items: flex-end;
          justify-content: center;
          padding: 20px 70px;
          margin-right: 2rem;
          height: 40%;
          color: #8d8d8d;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }

    .action {
      display: flex;
      width: 100%;
      height: 25%;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .slide-items {
        display: flex;
        width: 120%;
        align-items: center;
        border-top: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
        height: 40px;
        overflow: hidden;
        text-transform: uppercase;
        position: relative;
        transition: all 0.5s ease;
        background-color: black;
        z-index: 1;

        div {
          display: inline-block;
          position: absolute;
          overflow: hidden;
          height: 20px;

          animation: marquee 20s linear infinite;

          span {
            padding: 0 1rem;
            font-size: 14px;
            float: left;
            overflow: hidden;
            color: #fff;
            font-weight: 300;
          }

          .dot {
            color: #00a699;
          }
        }
      }

      @keyframes marquee {
        0% {
          left: 10%;
        }
        100% {
          left: -100%;
        }
      }
    }
  }

  .contact-container {
    display: flex;
    width: 100%;
    height: calc(100vh - 70px);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #0c0c0c;

    .heading-container {
      display: flex;
      width: 100%;
      height: 25%;
      align-items: center;
      justify-content: center;
      background-color: #0c0c0c;
      z-index: 1;

      .heading {
        display: flex;
        width: 20%;
        height: 70%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-left: 1px solid #8d8d8d;

        &:first-child {
          border: none;
        }

        span {
          font-family: "NotoSerif";
          font-size: 16px;
          font-weight: 400;
        }
        h2 {
          font-size: 60px;
          font-weight: 500;
          span {
            font-size: 60px;
            color: #00a699;
          }
        }
      }
    }
    .description-container {
      display: flex;
      width: 100%;
      height: 75%;
      align-items: center;
      justify-content: center;
      background-position: center;
      background-size: contain;
      overflow: hidden;

      .button {
        margin-top: 20%;
      }

      .floating-text {
        position: absolute;
        display: flex;
        width: 200%;
        align-items: center;
        justify-content: center;

        span {
          transition: all 5s ease;
          position: relative;
          font-size: 82px;
          font-weight: 500;
          font-family: "NotoSerif";
          color: #ffffff;
          left: 90vw;
        }
      }

      position: relative;
      overflow: hidden;

      video {
        position: absolute;
        align-content: center;

        width: 100%;
        height: auto;
      }
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
    font-weight: 800;

    // .v-btn__content {
    //   font-weight: bold;
    //   font-family: "NotoSerif";
    // }

    span {
      font-weight: 500 !important;
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
</style>
<script>
import TrustedBrands from "../components/HomePage/TrustedBrands/TrustedBrands.vue";
import OurServices from "../components/HomePage/OurServices/OurServices.vue";
import OurNetworks from "../components/HomePage/OurNetwork/OurNetworks.vue";
import OurExperties from "../components/HomePage/OurExperties/OurExperties.vue";
import OurAwards from "../components/HomePage/OurAwards/OurAwards.vue";
import OurReach from "../components/HomePage/OurReach/OurReach.vue";
import OurStories from "../components/HomePage/OurStories/OurStories.vue";
import OurInsights from "../components/HomePage/OurInsights/OurInsights.vue";
import OurMessage from "../components/HomePage/OurMessage/OurMessage.vue";
import OurPresence from "../components/HomePage/OurPresence/OurPresence.vue";
import Testimonials from "../components/HomePage/Testimonials/Testimonials.vue";

import aosMixin from "~/mixins/aos";

export default {
  components: {
    TrustedBrands,
    OurServices,
    OurNetworks,
    OurExperties,
    OurAwards,
    OurReach,
    OurStories,
    OurPresence,
    Testimonials,
    OurInsights,
    OurMessage,
  },
  mixins: [aosMixin],
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      if (window.top.scrollY < 400) {
        document.querySelector("#ft").style.left = "125vw";
      }

      if (window.top.scrollY > 400 && window.top.scrollY < 800) {
        document.querySelector("#ft").style.left = "0vw";
      }

      if (window.top.scrollY > 800) {
        document.querySelector("#ft").style.left = "-125vw";
      }
    },
  },
};
</script>
