<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="logo-container">
        <h1>Edge Logistics Simplify.</h1>
      </div>
      <div class="content-container">
        <div class="links-container">
          <div class="page-link-container">
            <ul>
              <li>Home</li>
              <li>Mentors</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div class="refrence-link-container">
            <ul>
              <li>Newsroom</li>
              <li>Awards</li>
              <li>Design</li>
              <li>Media & Mentions</li>
            </ul>
          </div>
          <div class="social-media-link-container">
            <ul>
              <li>Social Media</li>
              <li>
                <font-awesome-icon :icon="['fab', 'linkedin']" />
                <font-awesome-icon :icon="['fab', 'square-instagram']" />
                <font-awesome-icon :icon="['fab', 'square-facebook']" />
              </li>
              <li>
                <font-awesome-icon :icon="['fab', 'youtube']" />
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </li>
            </ul>
          </div>
        </div>
        <div class="news-letter-signup-container">
          <div>
            <span>Sign up to our newsletter to stay updated about us.</span>
          </div>
          <div class="input-container">
            <v-text-field
              solo
              flat
              dense
              placeholder="Company/brand or your e-mail"
              style="max-width: 300px; height: 40px; border-radius: 3px 0 0 3px; font-size: 13px;"
              hide-spin-buttons
            />
            <v-btn
              dark
              width="80px"
              height="38px"
              depressed
              color="#00A699"
              style="border-radius: 0 3px 3px 0; margin-left: 1px; font-size: 13px; text-transform: capitalize;"
              >Submit</v-btn
            >
          </div>
        </div>
        <div class="help-container">
          <span>Privacy Policy</span>
          <span>Team & Conditions</span>
          <span>Sitemap</span>
        </div>
      </div>
    </div>
    <div class="footer-text">
      <span
        >© 2022 OptiSupply Chain Solution Pvt Ltd | All Rights Reserved</span
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 460px;
  align-items: center;
  justify-content: center;
  background-color: #131313;

  .footer-content {
    display: flex;
    width: 100%;
    height: 90%;
    align-items: flex-end;

    .logo-container {
      display: flex;
      width: 50%;
      height: 100%;
      align-items: center;
      padding: 0 4rem;

      h1 {
        margin-top: 4rem;
        width: 200px;
        font-size: 4rem;
        padding: 0 4rem;
      }
    }
    .content-container {
      display: flex;
      width: 40%;
      height: 70%;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0 4rem;
      font-size: 14px;
      margin-top: 2rem;

      ul {
        list-style-type: none;
        cursor: pointer;
        transition: all 0.3s ease;

        li {
          &:hover {
            color: #00a699;
          }
        }
      }

      .links-container {
        display: flex;
        width: 100%;
        height: 50%;
        justify-content: space-between;

        .social-media-link-container {
          ul {
            li {
              &:hover {
                color: white;
              }
              margin-top: 5px;
              svg {
                width: 18px;
                height: 18px;
                margin: 0 5px;
              }
            }
          }
        }
      }

      .news-letter-signup-container {
        display: flex;
        width: 100%;
        height: 30%;
        flex-direction: column;

        .input-container {
          margin-top: .5rem;
          display: flex;
        }
      }
      .help-container {
        display: flex;
        width: 100%;
        height: 20%;
        align-items: center;
        justify-content: space-between;
        transition: all 0.3s ease;

        span {
          cursor: pointer;

          &:hover {
            color: #00a699;
          }
        }
      }
    }
  }

  .footer-text {
    border-top: 2px solid grey;
    display: flex;
    width: 100%;
    height: 10%;
    padding: 0 4rem;

    span {
      margin-top: 1rem;
      padding: 0 4rem;
      font-size: 12px;
      color: #00a699;
    }
  }
}
</style>
