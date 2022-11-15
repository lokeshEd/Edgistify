<template>
  <div class="our-services-container">
    <div class="section-container">
      <div
        class="section"
        :class="{ selected: selected === 'Logistics' }"
        @click="() => toggleSelection('Logistics')"
      >
        <span>Logistics</span>
      </div>
      <div
        class="section"
        :class="{ selected: selected === 'Technology' }"
        @click="() => toggleSelection('Technology')"
      >
        <span>Technology</span>
      </div>
      <div
        class="section"
        :class="{ selected: selected === 'Fulfillment' }"
        @click="() => toggleSelection('Fulfillment')"
      >
        <span>Fulfillment</span>
      </div>
    </div>
    <div v-if="selected === 'Logistics'" class="content-container">
      <div class="content-text">
        <div class="heading">
          <h2>Full suite of logistics services</h2>
        </div>
        <div class="content">
          <p>
            Edgistify bridges the broken links in your supply chain. We provide
            operations, distribution, infrastructure & consultation solutions
            based on your requirements.
          </p>
        </div>
        <div class="stat-container logistic-cost">
          <span>15 %</span>
        </div>
        <p>Reduction in logistics cost</p>
      </div>
      <div class="content-image">
        <div class="image-container">
          <v-img
            src="/Homepage/OurServices/our-services-thumbnail-01.png"
            width="400px"
            contain
          />
        </div>
      </div>
    </div>
    <div v-if="selected === 'Technology'" class="content-container">
      <div class="content-text">
        <div class="heading">
          <h2>Technology-driven logistics solutions</h2>
        </div>
        <div class="content">
          <p>
            Edgistify leverages advanced technology to manage your logistics.
            Automate & Integrate your marketplaces, carriers & ERP with EdgeOS
          </p>
        </div>
        <div class="stat-container">
          <span>30 %</span>
        </div>
        <p>Improvement in warehouse operations</p>
      </div>
      <div class="content-image">
        <div class="image-container">
          <v-img
            src="/Homepage/OurServices/our-services-thumbnail-02.png"
            width="400px"
            contain
          />
        </div>
      </div>
    </div>
    <div v-if="selected === 'Fulfillment'" class="content-container">
      <div class="content-text">
        <div class="heading">
          <h2>Deliver customer satisfaction with speedy fulfillment</h2>
        </div>
        <div class="content">
          <p>
            Edgistify enables hyperlocal, same day & next day delivery with the
            help of robust warehousing & dark store network across all metro &
            tier 2-3 cities.
          </p>
        </div>
        <div class="stat-container">
          <span>99 %</span>
        </div>
        <p>TAT Accuracy</p>
      </div>
      <div class="content-image">
        <div class="image-container">
          <v-img
            src="/Homepage/OurServices/our-services-thumbnail-03.png"
            width="400px"
            contain
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.our-services-container {
  display: flex;
  width: 100%;
  height: 631px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0c0c0c;
  padding: 0 94px;
  background-image: url("/Common/background-grid.png");
  background-position: bottom;
  background-size: contain;

  .section-container {
    display: flex;
    width: 100%;
    height: 10%;
    align-items: center;
    justify-content: center;

    .section {
      display: flex;
      width: 33.3%;
      height: 100%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #4e4e4e;

      border-bottom: 2px solid #4e4e4e;

      &:hover {
        color: #fff;
        // border-color: #fff;
      }
      &.selected {
        border-color: #00a699;
        border-width: 3px;
        color: #00a699;
      }
    }
  }
  .content-container {
    display: flex;
    width: 100%;
    height: 80%;
    align-items: center;
    justify-content: center;

    .content-text {
      display: flex;
      width: 40%;
      height: 90%;
      flex-direction: column;
      // align-items: center;
      // justify-content: space-evenly;

      .heading {
        display: flex;
        min-height: 150px;

        h2 {
          font-size: 51px;
          font-family: "Notoserif";
          line-height: 70px;
        }
      }
      .content {
        display: flex;
        margin: 35px 0;
      }
      p {
        font-size: 16px;
        font-weight: 300;
        font-family: "Outfit";
        padding-right: 5rem;
      }

      .stat-container {
        display: flex;
        width: 100%;
        height: 50px;
        align-self: flex-end;
        align-items: center;
        padding-left: 12px;
        border-left: 4px solid #00a699;
        margin: 5px 0;

        span {
          font-size: 52px;
          line-height: 70px;
          font-family: 'NotoSerif';
        }

        &.logistic-cost {
          margin-top: 65px;
        }
      }
    }
    .content-image {
      display: flex;
      width: 60%;
      height: 80%;
      align-items: center;
      justify-content: center;

      .image-container {
        padding-left: 10px;
        display: flex;
        width: 100%;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      selected: "Logistics",
    };
  },
  methods: {
    toggleSelection(section) {
      if (this.selected !== section) this.selected = section;
    },
  },
};
</script>
