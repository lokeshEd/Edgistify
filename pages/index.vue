<template>
  <div class="homepage-container">
    <div class="hero-container">
      <div class="heading-container">
        <div class="heading">
          <h1>
            New Age Tech Driven
            <b><span> 3PL</span> Service Provider</b>
          </h1>
        </div>
      </div>
      <div class="description-container">
        <div class="description">
          <p>
            Edgistify offers End to End supply chain and logistics solutions for
            B2B and B2C companies across different industries PAN India
          </p>
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
      <div class="description-container"></div>
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
    height: calc(100vh - 70px);
    align-items: center;
    justify-content: center;
    background-color: #1e1e1e;
    padding: 0 2rem;

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
        border-right: 2px solid #ffffff;
        padding: 0 4rem;

        h1 {
          font-size: calc(3rem + 2.5vw);
          font-weight: 300;

          b {
            font-weight: 700;
            font-size: calc(3rem + 2.5vw);

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
        height: 40;
        align-items: center;
        justify-content: center;
        padding: 0 4rem;
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
