<template>
  <div class="our-awards-container">
    <div class="heading-container">
      <h2>We are honored to be recognized for making an impact that matters</h2>
    </div>
    <div class="awards-container">
      <div class="award-container">
        <div class="award-thumbnail"></div>
        <div class="award-details">
          <h4>Award</h4>
          <span>2022</span>
        </div>
      </div>
      <div class="award-container">
        <div class="award-thumbnail"></div>
        <div class="award-details">
          <h4>Award</h4>
          <span>2022</span>
        </div>
      </div>
      <div class="award-container">
        <div class="award-thumbnail"></div>
        <div class="award-details">
          <h4>Award</h4>
          <span>2022</span>
        </div>
      </div>
      <div class="award-container">
        <div class="award-thumbnail"></div>
        <div class="award-details">
          <h4>Award</h4>
          <span>2022</span>
        </div>
      </div>
      <div class="award-container">
        <div class="award-thumbnail"></div>
        <div class="award-details">
          <h4>Award</h4>
          <span>2022</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.our-awards-container {
  display: flex;
  width: 100%;
  height: 445px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f5;
  color: #191919;

  .heading-container {
    display: flex;
    align-items: center;
    // justify-content: center;
    width: 100%;
    height: 30%;
    padding: 0 10rem;

    h2 {
      font-size: 32px;
      font-family: "NotoSerif";
    }
  }
  .awards-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 70%;

    .award-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 90%;

      .award-thumbnail {
        display: flex;
        width: 171px;
        height: 171px;
        background-color: #fff;
        border-radius: 50%;
      }
      .award-details {
        display: flex;
        width: 171px;
        height: 80px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
