<template>
  <div class="our-message-container">
    <div class="top image-container">
      <v-img src="/Homepage/OurMessage/top.svg" class="img" contain />
    </div>
    <div class="content-container">
      <h1>Simplify</h1>
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

  .image-container {
    display: flex;
    width: 30%;
    height: 100%;
    &.top {
      align-items: flex-start;

      .img {
        margin-left: -125px;
        height: 233px;
      }
    }
    &.bottom {
      align-items: flex-end;
      justify-content: flex-end;

      .img {
        margin-right: -130px;
        height: 215px;
      }
    }
  }
  .content-container {
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: center;
    height: 100%;
    position: relative;

    h1 {
      font-size: 144px;
      line-height: 257px;
      font-family: "NotoSerif";
    }
    span {
      font-size: 32px;
      line-height: 57px;
      font-weight: 300;
    }

    .overlap-cintainer {
      position: absolute;
      display: flex;
      width: 857px;
      height: 116px;
      background-color: #fff;
      margin-top: 350px;
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
