<template>
  <div class="our-message-container">
    <v-img src="/Common/background-grid.png" class="backgroung-img" contain />
    <div class="top image-container">
      <v-img src="/Homepage/OurMessage/top.svg" class="img" contain />
    </div>
    <div class="content-container">
      <div class="content-head">
        <h1>Simplify</h1>
        <h1>Strategize</h1>
        <h1>Streamline</h1>
        <h1>Simplify</h1>
      </div>
      <span>your supply chain</span>
      <div class="overlap-cintainer">
        <div class="text">
          <div class="head">
            <h2>Get a quote now.</h2>
          </div>
          <div class="sub-head">
            <span
              >Optimise your warehousing and fulfilment smartly, call our
              experts now.</span
            >
          </div>
        </div>
        <div class="action">
          <span class="">Contact Us</span>
        </div>
      </div>
    </div>
    <div class="bottom image-container">
      <v-img src="/Homepage/OurMessage/bottom.svg" class="img" contain />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.our-message-container {
  display: flex;
  width: 100%;
  height: 421px;
  background-color: #00a699;
  align-items: center;
  justify-content: center;
  background-image: url("/Homepage/OurMessage/Vector.png");
  background-position: center;
  background-size: cover;

  .backgroung-img {
    position: absolute;
    width: 100%;
    height: 420px;
    display: block;
    left: -85px;
  }

  .image-container {
    display: flex;
    width: 22.5%;
    height: 100%;
    &.top {
      align-items: flex-start;

      .img {
        margin-left: -15px;
        height: 233px;
      }
    }
    &.bottom {
      align-items: flex-end;
      justify-content: flex-end;

      .img {
        margin-right: -20px;
        height: 215px;
      }
    }
  }
  .content-container {
    display: flex;
    width: 55%;
    flex-direction: column;
    align-items: center;
    height: 100%;
    position: relative;

    .content-head {
      display: flex;
      margin-top: 60px;
      align-items: center;
      // justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 200px;
      overflow: hidden;
      // border: 1px solid black;

      h1 {
        font-size: 144px;
        font-family: "NotoSerif";
        animation: infinite slide-top 10s linear;

        @keyframes slide-top {
          0% {
            transform: translateY(0%);
          }
          20% {
            transform: translateY(0%);
          }
          30% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(-100%);
          }
          60% {
            transform: translateY(-200%);
          }
          80% {
            transform: translateY(-200%);
          }
          90% {
            transform: translateY(-300%);
          }
          100% {
            transform: translateY(-300%);
          }
        }
      }
    }

    span {
      font-size: 32px;
      line-height: 57px;
      font-weight: 300;
    }

    .overlap-cintainer {
      position: absolute;
      z-index: 2;
      display: flex;
      width: 857px;
      height: 116px;
      background-color: #fff;
      margin-top: 360px;
      color: #00a699;

      .text {
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 100%;
        padding: 0 30px;

        .head {
          display: flex;
          width: 100%;
          height: 65%;
          align-items: flex-end;
          h2 {
            font-weight: 600;
            font-size: 48px;
            line-height: 60px;
          }
        }
        .sub-head {
          display: flex;
          width: 100%;
          height: 35%;
          margin-top: -15px;
          span {
            font-size: 12px;
          }
        }
      }

      .action {
        display: flex;
        width: 30%;
        height: 100%;
        align-items: center;
        justify-content: center;

        span {
          display: flex;
          width: 167px;
          height: 42px;
          align-items: center;
          justify-content: center;

          background: #00a699;
          border: 1px solid #00a699;
          border-radius: 50px;
          color: #fff;

          font-family: "Noto Serif";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
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
