<template>
  <div class="header-container" :class="{ hidden: !showNavbar }">
    <div class="header">
      <div class="logo-container">
        <v-img src="/Edgistify.png" height="30px" contain> </v-img>
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
            <h4>Logistics</h4>
            <p>
              Edgistify bridges the broken links in your supply chain. We
              provide operations, distribution, infrastructure & consultation
              solutions based on your requirements.
            </p>
          </div>
          <div class="section two">
            <h4>Logistics</h4>
            <p>
              Edgistify bridges the broken links in your supply chain. We
              provide operations, distribution, infrastructure & consultation
              solutions based on your requirements.
            </p>
          </div>
          <div class="section three">
            <h4>Logistics</h4>
            <p>
              Edgistify bridges the broken links in your supply chain. We
              provide operations, distribution, infrastructure & consultation
              solutions based on your requirements.
            </p>
          </div>
        </div>
        <div v-if="toggleTab === 'Company'" class="container">
          <div>About Us</div>
          <div>History</div>
          <div>Vision</div>
          <div>Mentors</div>
          <div>Founders</div>
          <div>Team</div>
        </div>
        <div v-if="toggleTab === 'Resources'" class="container">
          <div>Blog</div>
          <div>Media</div>
          <div>Case studies</div>
          <div>Videos</div>
          <div>Design</div>
        </div>
        <div v-if="toggleTab === 'Careers'" class="container">
          <div>Why Join Us</div>
          <div>Perks</div>
          <div>Open position</div>
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
    padding: 0 5rem;
    justify-content: space-between;
    background-color: #0c0c0c;
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
      padding: 0 5rem;
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
      align-items: center;
      min-height: 120px;
      font-size: 14px;

      &.Solution {
        height: 250px;
        justify-content: space-between;

        .section {
          &:hover {
            h4 {
              color: #00a699;
            }
            p {
              color: #fff;
            }
          }
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
