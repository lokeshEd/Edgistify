<template>
  <div class="our-network-container">
    <div class="heading">
      <h2
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-easing="ease-in"
        data-aos-duration="800"
      >
        Expand your business with a decentralized warehousing & fulfillment
        network
      </h2>
    </div>
    <div class="sections">
      <div
        class="section"
        :class="{ selected: selected === 'Sectors' }"
        @click="() => toggleSelection('Sectors')"
      >
        <span
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="800"
          >Sectors</span
        >
      </div>
      <div
        class="section"
        :class="{ selected: selected === 'Business Models' }"
        @click="() => toggleSelection('Business Models')"
      >
        <span
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="800"
          >Business Models</span
        >
      </div>
    </div>
    <div v-if="selected === 'Sectors'" class="sectors-cards">
      <div class="cards-container">
        <div
          class="card"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <div class="icon-container e-commerce"></div>
          <div class="title">E-commerce</div>
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <div class="icon-container fmcg"></div>
          <div class="title">FMCG</div>
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <div class="icon-container fruits-vegetables"></div>
          <div class="title">Fruits & Vegetable</div>
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <div class="icon-container clothing-apparels"></div>
          <div class="title">Clothing & Apparels</div>
        </div>
      </div>
      <div
        class="cards-container"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-easing="ease-in"
        data-aos-duration="800"
      >
        <div
          class="card"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <div class="icon-container beauty-lifestyle"></div>
          <div class="title">Beauty & Lifestyle</div>
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <div class="icon-container health-wellness"></div>
          <div class="title">Health & Wellness</div>
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <div class="icon-container home-furnishing"></div>
          <div class="title">Home Furnishing</div>
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <div class="icon-container automative"></div>
          <div class="title">Automative</div>
        </div>
      </div>
    </div>
    <div v-if="selected === 'Business Models'" class="business-models-cards">
      <div
        class="cards-container"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-easing="ease-in"
        data-aos-duration="800"
      >
        <div class="card-thumbnail"></div>
        <div class="card-details">
          Edgistify bridges the broken links in your supply chain. We provide
          operations, distribution, infrastructure & consultation solutions
          based on your requirements
        </div>
        <div class="card-action">
          <div class="btn"></div>
        </div>
      </div>
      <div
        class="cards-container"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-easing="ease-in"
        data-aos-duration="800"
      >
        <div class="card-thumbnail"></div>
        <div class="card-details">
          Edgistify bridges the broken links in your supply chain. We provide
          operations, distribution, infrastructure & consultation solutions
          based on your requirements
        </div>
        <div class="card-action">
          <div class="btn"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.our-network-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 860px;
  background-color: #fff;
  width: 100%;
  padding: 0 94px;

  .heading {
    display: flex;
    width: 100%;
    height: 14%;
    align-items: center;
    // justify-content: center;

    h2 {
      color: #1e1e1e;
      font-family: "NotoSerif";
      font-size: 32px;
      line-height: 44px;
    }
  }
  .sections {
    display: flex;
    width: 100%;
    height: 8%;
    align-items: center;
    justify-content: center;

    .section {
      display: flex;
      width: 50%;
      height: 100%;
      align-items: center;
      justify-content: center;
      border-bottom: 2px solid #4e4e4e;
      cursor: pointer;

      span {
        color: #4e4e4e;
        font-size: 20px;
      }

      &.selected {
        border-color: #00a699;
        border-width: 3px;

        span {
          color: #00a699;
        }
      }
    }
  }

  .sectors-cards {
    // border: 1px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 68%;
    padding-top: 80px;

    .cards-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 50%;

      .card {
        display: flex;
        width: 286px;
        height: 194px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f3f3f5;
        transition: all 0.5s ease-in-out;

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 50%;
          // padding-top: 10px;
          background-size: 80px;
          background-position: center;

          &.e-commerce {
            background-image: url("/Homepage/OurNetwork/e-commerce.png");
          }
          &.fmcg {
            background-image: url("/Homepage/OurNetwork/fmcg.png");
          }
          &.fruits-vegetables {
            background-image: url("/Homepage/OurNetwork/fruits-&-vegetables.png");
          }
          &.clothing-apparels {
            background-image: url("/Homepage/OurNetwork/clothing-&-apparels.png");
          }
          &.beauty-lifestyle {
            background-image: url("/Homepage/OurNetwork/beauty-&-lifestyle.png");
          }
          &.health-wellness {
            background-image: url("/Homepage/OurNetwork/health-&-wellness.png");
          }
          &.home-furnishing {
            background-image: url("/Homepage/OurNetwork/home-furnishing.png");
          }
          &.automative {
            background-image: url("/Homepage/OurNetwork/automative.png");
          }
        }

        .title {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 30%;
          font-weight: 500;
          font-size: 16px;
          color: #000000;
        }

        &:hover {
          background-color: #000;

          .icon-container {
            &.e-commerce {
              background-image: url("/Homepage/OurNetwork/e-commerce-dark.png");
            }
            &.fmcg {
              background-image: url("/Homepage/OurNetwork/fmcg-dark.png");
            }
            &.fruits-vegetables {
              background-image: url("/Homepage/OurNetwork/fruits-&-vegetables-dark.png");
            }
            &.clothing-apparels {
              background-image: url("/Homepage/OurNetwork/clothing-&-apparels-dark.png");
            }
            &.beauty-lifestyle {
              background-image: url("/Homepage/OurNetwork/beauty-&-lifestyle-dark.png");
            }
            &.health-wellness {
              background-image: url("/Homepage/OurNetwork/health-&-wellness-dark.png");
            }
            &.home-furnishing {
              background-image: url("/Homepage/OurNetwork/home-furnishing-dark.png");
            }
            &.automative {
              background-image: url("/Homepage/OurNetwork/automative-dark.png");
            }
          }

          .title {
            color: #00a699;
          }
        }
      }
    }
  }
  .business-models-cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 68%;
    padding-top: 80px;

    .cards-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      height: 100%;
      color: #000000;

      .card-thumbnail {
        display: flex;
        width: 620px;
        height: 280px;
        background-color: #d9d9d9;
      }
    }
  }
}
</style>

<script>
import aosMixin from "~/mixins/aos";
export default {
  data() {
    return {
      selected: "Sectors",
    };
  },
  mixins: [aosMixin],
  methods: {
    toggleSelection(section) {
      if (this.selected !== section) this.selected = section;
    },
  },
};
</script>
