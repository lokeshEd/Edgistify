<template>
  <div class="testimonials-container">
    <div class="heading-container">
      <h2>Testimonials</h2>
    </div>
    <div class="content-container">
      <div class="card">
        <div class="image-container">
          <v-img
            src="/Homepage/Testimonials/Harvinder.png"
            class="img"
            contain
          ></v-img>
        </div>
        <div class="content">
          <div class="title">The Spectacular Service You Provide</div>
          <div class="note">
            I just wanted to take a moment of your time to thank you for the
            spectacular service you provide. I am a Traffic Manager for the
            Corporate office at (an IL- based industrial manufacturer). I get to
            deal with lots of 3PLs every day, and of course, both of you
            (Kristen and Kristin), the company you…
          </div>
          <div class="name">
            <h3>Harvinder Singh</h3>
            <p>Edgistify</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image-container">
          <v-img
            src="/Homepage/Testimonials/Harvinder.png"
            class="img"
            contain
          ></v-img>
        </div>
        <div class="content">
          <div class="title">The Spectacular Service You Provide</div>
          <div class="note">
            I just wanted to take a moment of your time to thank you for the
            spectacular service you provide. I am a Traffic Manager for the
            Corporate office at (an IL- based industrial manufacturer). I get to
            deal with lots of 3PLs every day, and of course, both of you
            (Kristen and Kristin), the company you…
          </div>
          <div class="name">
            <h3>Harvinder Singh</h3>
            <p>Edgistify</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.testimonials-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 560px;
  padding: 0 94px;
  background-color: #0c0c0c;

  .heading-container {
    display: flex;
    width: 100%;
    height: 20%;
    align-items: center;

    h2 {
      font-size: 42px;
      font-family: "NotoSerif";
      line-height: 58px;
    }
  }

  .content-container {
    display: flex;
    width: 100%;
    height: 80%;
    align-items: center;
    justify-content: space-between;

    .card {
      display: flex;
      width: 600px;
      height: 340px;
      background-color: #fff;
      background-image: url("/Homepage/Testimonials/HARVINDER SINGH.png");

      .image-container {
        display: flex;
        width: 35%;
        height: 100%;
        align-items: center;
        padding-top: 20px;

        .img {
          width: 100px;
          height: 300px;
          top: 10px;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        width: 65%;
        height: 100%;
        justify-content: space-evenly;
        color: #0c0c0c;
        padding: 20px 40px;
        padding-left: 0;

        .title {
          font-size: 28px;
          font-family: "NotoSerif";
        }
        .note {
          font-size: 14px;
          color: #8d8d8d;
          font-weight: 300;
        }

        .name {
          h3 {
            font-size: 16px;
            font-weight: 500;
          }
          p {
            font-size: 14px;
            color: #8d8d8d;
            font-weight: 300;
          }
        }
      }
    }
  }
}
</style>
