<template>
  <div class="our-stories-container">
    <div class="heading-container">
      <h2>Featured Insights</h2>
    </div>
    <div class="content-container">
      <div class="content">
        <div class="source">Blog</div>
        <div class="image-container">
          <v-img
            src="/Homepage/OurInsightes/inventory.png"
            class="img"
            contain
          />
        </div>
        <div class="news">
          We streamline logistics through tech-driven solutions, a robust
          network & consultancy approach. We design.
        </div>
        <div class="action">Read more</div>
      </div>
      <div class="content">
        <div class="source">Media</div>
        <div class="image-container">
          <v-img
            src="/Homepage/OurInsightes/inventory.png"
            class="img"
            contain
          />
        </div>
        <div class="news">
          We streamline logistics through tech-driven solutions, a robust
          network & consultancy approach. We design.
        </div>
        <div class="action">Read more</div>
      </div>
      <div class="content">
        <div class="source">Case studies</div>
        <div class="image-container">
          <v-img
            src="/Homepage/OurInsightes/inventory.png"
            class="img"
            contain
          />
        </div>
        <div class="news">
          We streamline logistics through tech-driven solutions, a robust
          network & consultancy approach. We design.
        </div>
        <div class="action">Read more</div>
      </div>
      <div class="content">
        <div class="source">Videos</div>
        <div class="image-container">
          <v-img
            src="/Homepage/OurInsightes/inventory.png"
            class="img"
            contain
          />
        </div>
        <div class="news">
          We streamline logistics through tech-driven solutions, a robust
          network & consultancy approach. We design.
        </div>
        <div class="action">Read more</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.our-stories-container {
  display: flex;
  width: 100%;
  height: 700px;
  padding: 0 94px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  color: #1e1e1e;

  .heading-container {
    display: flex;
    width: 100%;
    height: 30%;
    align-items: center;

    h2 {
      font-size: 43px;
      font-family: "NotoSerif";
    }
  }
  .content-container {
    display: flex;
    width: 100%;
    height: 70%;

    :last-child {
      border-right: 1px solid #8d8d8d;
    }

    .content {
      display: flex;
      flex-direction: column;
      height: fit-content;
      color: #8d8d8d;
      padding: 0 35px;
      border-left: 1px solid #8d8d8d;

      :last-child {
        border: none;
      }
      .source {
        font-family: "NotoSerif";
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 20px;
      }

      .image-container {
        margin-bottom: 20px;
      }
      .news {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 20px;
        font-weight: 300;
      }
      .action {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 20px;
        font-weight: 300;
      }
    }
  }
}
</style>
