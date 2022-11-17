<template>
  <div class="our-stories-container">
    <div class="heading-container">
      <h2>We are honored to be recognized for making an impact that matters</h2>
    </div>
    <div class="content-container">
      <div class="content">
        <div class="source">Silicon India</div>
        <div class="news">
          Edgistify’s SaaS based platform is holding the clean data for the
          industry in a scientific manner which brings speed & efficiency for
          all the stakeholders...
        </div>
        <div class="action">Read more</div>
      </div>
      <div class="content">
        <div class="source">ITL News</div>
        <div class="news">
          Edgistify got selected as one of the top 11 startups from 600+
          applications to make it to cohort 2020, a scale-up program for
          growth-stage startups in India...
        </div>
        <div class="action">Read more</div>
      </div>
      <div class="content">
        <div class="source">ClickPost</div>
        <div class="news">
          Clickposts lists Edgistify as one of the best 10 logistics startups in
          India for e-commerce companies that provides niche goods and
          services...
        </div>
        <div class="action">Read more</div>
      </div>
      <div class="content">
        <div class="source">Logistic Insider</div>
        <div class="news">
          Logistics insider identifies Edgistify as one of the top 10 promising
          logistics companies in 2021. It highlights intent to become India’s
          leading logistics..
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
  height: 560px;
  padding: 0 94px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  color: #1E1E1E;

  .heading-container {
    display: flex;
    width: 100%;
    height: 45%;
    align-items: center;

    h2 {
      font-size: 43px;
      font-family: "NotoSerif";
    }
  }
  .content-container {
    display: flex;
    width: 100%;
    height: 55%;

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
