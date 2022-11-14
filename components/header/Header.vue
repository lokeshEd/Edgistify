<template>
  <div class="header-container" :class="{ hidden: !showNavbar }">
    <div class="header">
      <div class="logo-container">
        <v-img src="/Edgistify.png" height="30px" class="logo" contain> </v-img>
      </div>
      <ul class="menu-container">
        <li
          class="menu-item"
          :class="{ selected: toggleTab === 'Solution' && showDropdown }"
          @click="() => onToggleDropdown('Solution')"
        >
          <div class="container">
            <div class="title">Solution</div>
            <div class="dropdown-icon">
              <v-img src="/Common/down-arrow.png" class="img" contain> </v-img>
            </div>
          </div>
        </li>
        <li
          class="menu-item"
          :class="{ selected: toggleTab === 'Company' && showDropdown }"
          @click="() => onToggleDropdown('Company')"
        >
          <div class="container">
            <div class="title">Company</div>
            <div class="dropdown-icon">
              <v-img src="/Common/down-arrow.png" class="img" contain> </v-img>
            </div>
          </div>
        </li>
        <li
          class="menu-item"
          :class="{ selected: toggleTab === 'Resources' && showDropdown }"
          @click="() => onToggleDropdown('Resources')"
        >
          <div class="container">
            <div class="title">Resources</div>
            <div class="dropdown-icon">
              <v-img src="/Common/down-arrow.png" class="img" contain> </v-img>
            </div>
          </div>
        </li>
        <li
          class="menu-item"
          :class="{ selected: toggleTab === 'Careers' && showDropdown }"
          @click="() => onToggleDropdown('Careers')"
        >
          <div class="container">
            <div class="title">Careers</div>
            <div class="dropdown-icon">
              <v-img src="/Common/down-arrow.png" class="img" contain> </v-img>
            </div>
          </div>
        </li>
        <li class="menu-item button secondry">
          <span>Try<b> WMS</b></span>
        </li>
        <li class="menu-item button primary"><b>Contact Us</b></li>
      </ul>
    </div>
    <div class="dropdown" :class="{ hidden: !showDropdown }">
      <div class="dropdown-container">
        <div v-if="toggleTab === 'Solution'" class="container Solution">
          <div class="section one">
            <div class="section-heading">
              <h4>Logistics</h4>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">First Mile</div>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">Middle Mile</div>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">Last Mile</div>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">Warehousing Ops</div>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">Darkstore Ops</div>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">Warehousing Infra</div>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">SupplyChain Consultancy</div>
            </div>
          </div>
          <div class="section two">
            <div class="section-heading">
              <h4>Technology</h4>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">WMS & OMS</div>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">Fleet Management</div>
            </div>
          </div>
          <div class="section three">
            <div class="section-heading">
              <h4>Fulfillment</h4>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">Hyperlocal Delivery</div>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">Same day E-commerce Delivery</div>
            </div>
            <div class="section-content">
              <div class="icon">
                <v-img src="/Common/right-arrow.png" class="img" contain>
                </v-img>
              </div>
              <div class="item">Retail Distribution</div>
            </div>
          </div>
        </div>
        <div v-if="toggleTab === 'Company'" class="container">
          <div class="menu-item">About Us</div>
          <div class="menu-item">History</div>
          <div class="menu-item">Vision</div>
          <div class="menu-item">Mentors</div>
          <div class="menu-item">Founders</div>
          <div class="menu-item">Team</div>
        </div>
        <div v-if="toggleTab === 'Resources'" class="container">
          <div class="menu-item">Blog</div>
          <div class="menu-item">Media</div>
          <div class="menu-item">Case studies</div>
          <div class="menu-item">Videos</div>
          <div class="menu-item">Design</div>
        </div>
        <div v-if="toggleTab === 'Careers'" class="container">
          <div class="menu-item">Why Join Us</div>
          <div class="menu-item">Open position</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  transition: 0.3s all ease-out;
  transform: translate3d(0, 0, 0);
  z-index: 1;

  .header {
    display: flex;
    align-items: center;
    height: 98px;
    padding: 0 94px;
    justify-content: space-between;
    background-color: #0c0c0c;

    .logo-container {
      display: flex;

      .logo {
        display: none;
      }
    }
  }
  .dropdown {
    display: flex;
    height: calc(100vh - 98px);
    justify-content: space-between;
    background: #00000099;
    z-index: 2;
    color: #8d8d8d;
    border-top: 2px solid gray;
    transition: all 0.5s ease;

    .dropdown-container {
      display: flex;
      width: 100%;
      height: fit-content;
      padding: 0 94px;
      background-color: #232323;
    }

    h4 {
      margin-bottom: 1rem;
      font-size: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
    }

    &.hidden {
      display: none;
    }

    .container {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 10%;
      padding-top: 52px;
      min-height: 120px;
      font-size: 14px;
      // border: 1px solid green;

      &.Solution {
        height: 250px;

        .section {
          display: flex;
          flex-direction: column;
          width: 300px;
          // border: 1px solid grey;

          &:hover {
            h4 {
              color: #00a699;
            }
            p {
              color: #fff;
            }
          }

          .section-heading {
            display: flex;
            width: 100%;
            height: 40px;
            align-items: center;
            color: #fff;
          }

          .section-content {
            display: flex;
            width: 100%;
            margin-left: -10%;

            .icon {
              display: flex;
              width: 10%;
              height: 100%;
              align-items: center;
              justify-content: center;
              // border: 1px solid grey;

              .img {
                display: none;
              }
            }
            .item {
              display: flex;
              width: 90%;
              height: 100%;
              align-items: center;
              // border: 1px solid grey;
            }

            &:hover {
              .icon {
                .img {
                  display: block;
                }
              }
              .item {
                color: #fff;
              }
            }
          }
        }

        .img {
          display: none;
        }
        .img {
          display: block;
          height: 12px;
          // margin-block: -2px;
        }
      }

      .menu-item {
        color: #fff;
        &:hover {
          color: #00a699;
        }
      }
    }
  }
  &.hidden {
    transform: translate3d(0, -100%, 0);
  }

  .logo-container {
    display: flex;
    width: 10%;
    align-items: center;
    justify-content: center;
  }
  .menu-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 70%;
    list-style-type: none;
    .menu-item {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      height: 100%;
      // text-transform: uppercase
      cursor: pointer;
      transition: all 0.3s ease;
      color: #8d8d8d;
      margin-left: 60px;
      position: relative;

      .container {
        display: flex;
        width: 100%;
        height: 100%;
        height: 50px;
        flex-direction: column;
        margin-top: 20px;

        .title {
          display: flex;
          width: 100%;
          height: 60%;
          align-items: center;
          justify-content: center;
          user-select: none;
        }
        .dropdown-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 40%;
        }
      }

      &:hover {
        color: #fff;
      }

      .img {
        display: none;
      }
      &.selected {
        color: #fff;

        .img {
          display: block;
          height: 6px;
          // margin-block: -2px;
        }
      }

      &.button {
        display: flex;
        height: 42px;
        align-items: center;
        justify-content: center;
        border: 1px solid #00a699;
        border-radius: 40px;
        color: #fff;
        padding: 10px 40px;
        font-family: "NotoSerif";

        &.primary {
          background-color: #00a699;
          margin-left: 22px;

          &:hover {
            background-color: #008b80;
          }
        }
        &.secondry {
          border: 1px solid #fff;
          background-color: transparent;
          margin-left: 72px;

          &:hover {
            border-color: #008b80;
          }

          b {
            font-family: "Outfit";
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      showDropdown: false,
      toggleTab: null,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop; // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      } // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition; // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
      if (!this.showNavbar) {
        this.showDropdown = false;
      }
    },

    onToggleDropdown(tab) {
      if (this.showDropdown) {
        if (this.toggleTab === tab) {
          this.showDropdown = false;
        } else {
          this.toggleTab = tab;
        }
      } else {
        this.showDropdown = true;
        this.toggleTab = tab;
      }
    },
  },
};
</script>
