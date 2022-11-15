<template>
  <div class="our-network-container">
    <div class="heading">
      <h2>
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
        <span>Sectors</span>
      </div>
      <div
        class="section"
        :class="{ selected: selected === 'Business Models' }"
        @click="() => toggleSelection('Business Models')"
      >
        <span>Business Models</span>
      </div>
    </div>
    <div v-if="selected === 'Sectors'" class="sectors-cards">
      <div class="cards-container">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
      <div class="cards-container">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </div>
    <div v-if="selected === 'Business Models'" class="business-models-cards">
      <div class="cards-container">
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
      <div class="cards-container">
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
  height: 858px;
  background-color: #f3f3f5;
  width: 100%;
  padding: 0 94px;

  .heading {
    
    display: flex;
    width: 100%;
    height: 20%;
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
    height: 10%;
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
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;
    padding-top: 80px;

    .cards-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 50%;

      .card {
        display: flex;
        width: 280px;
        height: 200px;
        align-items: center;
        justify-content: center;
        background-color: #fff;
      }
    }
  }
  .business-models-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 60%;
    padding-top: 80px;

    .cards-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      width: 40%;
      height: 100%;
      color: #000000;

      .card-thumbnail {
        display: flex;
        width: 600px;
        height: 280px;
        background-color: #d9d9d9;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      selected: "Sectors",
    };
  },
  methods: {
    toggleSelection(section) {
      if (this.selected !== section) this.selected = section;
    },
  },
};
</script>
