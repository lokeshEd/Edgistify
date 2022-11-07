<template>
  <div class="homepage-container">
    <div class="hero-container">
      <div class="title">
        <div class="heading-container">
          <div class="heading">
            <h1>
              New Age Tech Driven<br />
              <b><span> 3PL</span> Service Provider</b>
            </h1>
          </div>
        </div>
        <div class="description-container">
          <div class="description">
            <p>
              Edgistify offers End to End supply chain and logistics solutions
              for <b>B2B</b> and <b>B2C</b> companies across different
              industries PAN India
            </p>
          </div>
        </div>
      </div>
      <div class="action">
        <v-btn class="button primary">Talk to an Expert</v-btn>
        <div class="slide-items">
          <div>
            <span>Hyperlocal Order Fulfilment</span>
            <span>Ecommerce Order Fulfillment</span>
            <span>B2B & B2C Warehousing Ops</span>
            <span>Dark Store Ops</span>
            <span>First, Middle & Last Mile</span>
            <span>WMS & OMS</span>
            <span>Fleet Managemant</span>
            <span>Supplychain Consultancy</span>
            <span>Warehousing Infra</span>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-container">
      <div class="heading-container">
        <div class="heading">
          <h2>1 lac<span>+</span></h2>
          <span>daily orders</span>
        </div>
        <div class="heading">
          <h2>75<span>+</span></h2>
          <span>marketplaces</span>
        </div>
        <div class="heading">
          <h2>150<span>+</span></h2>
          <span>cities</span>
        </div>
        <div class="heading">
          <h2>300<span>+</span></h2>
          <span>warehouses</span>
        </div>
        <div class="heading">
          <h2>50<span>+</span></h2>
          <span>customers</span>
        </div>
      </div>
      <div class="description-container">
        <v-img src="/Rectangle 84.png" contain> </v-img>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.homepage-container {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f5;

  h1 {
    font-size: 40px;
    font-weight: 700;
  }

  .hero-container {
    display: flex;
    width: 100%;
    height: calc(100vh - 98px);
    align-items: center;
    justify-content: center;
    background-color: #1e1e1e;
    padding: 0 2rem;
    flex-direction: column;
    padding-top: 90px;
    background-image: url("/Dots.png");
    background-size: cover;
    background-position: center;

    .title {
      display: flex;
      width: 100%;
      height: 75%;
      .heading-container {
        display: flex;
        width: 65%;
        height: 100%;
        align-items: center;
        justify-content: center;

        .heading {
          display: flex;
          width: 100%;
          height: 40;
          align-items: center;
          justify-content: center;
          border-right: 2px solid #8d8d8d;
          padding: 0 4rem;

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
        width: 35%;
        height: 100%;
        align-items: center;
        justify-content: center;

        .description {
          display: flex;
          width: 100%;
          align-items: flex-end;
          padding-bottom: 1rem;
          justify-content: center;
          padding: 0 6rem;
          margin-right: 2rem;
          height: 25%;
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
      // background: #00a699;

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

      .slide-items {
        display: flex;
        width: 120%;
        align-items: center;
        border-top: 2px solid gray;
        height: 40px;
        overflow: hidden;
        text-transform: uppercase;
        position: relative;

        div {
          display: inline-block;
          position: absolute;
          overflow: hidden;
          height: 20px;

          animation: marquee 20s linear infinite;

          span {
            padding: 0 1.5rem;
            font-size: 14px;
            float: left;
            overflow: hidden;
          }
        }
      }

      @keyframes marquee {
        0% {
          left: 100%;
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
    background-color: #ededed;

    .heading-container {
      display: flex;
      width: 100%;
      height: 25%;
      align-items: center;
      justify-content: center;
      background-color: #fff;

      .heading {
        display: flex;
        width: 20%;
        height: 70%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #1e1e1e;
        border-left: 1px solid #1e1e1e;

        &:first-child {
          border: none;
        }

        span {
          font-size: 16px;
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
    }
  }
}
</style>
<script></script>
