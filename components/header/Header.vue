<template>
  <div class="header-container" :class="{ hidden: !showNavbar }">
    <div class="logo-container">
      <v-img
        src="/Edgistify.png"
        height="30px"
        contain
      >
      </v-img>
    </div>
    <ul class="menu-container">
      <li class="menu-item">Home</li>
      <li class="menu-item">Company</li>
      <li class="menu-item">Solution</li>
      <li class="menu-item">Resources</li>
      <li class="menu-item">Careers</li>
      <li class="menu-item">Try WMS</li>
      <li class="menu-item button">Contact Us</li> 
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  padding: 0 5rem;
  justify-content: space-between;
  background-color: #161616;
  //   border: 1px solid grey;
  position: fixed;
  transition: 0.3s all ease-out;
  transform: translate3d(0, 0, 0);

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
    justify-content: space-between;
    width: 70%;
    list-style-type: none;
    .menu-item {
      font-weight: 500;
      font-size: 12px;
      line-height: 15.12px;
      // text-transform: uppercase
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        font-size: 12.1px;
        color: #00a699;
      }

      &.button {
        display: flex;
        width: 120px;
        height: 30px;
        align-items: center;
        justify-content: center;

        border-radius: 40px;
        background-color: #00a699;

        &:hover {
          width: 120px;
          height: 32px;
          color: #000;
          font-size: 12.1px;
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
    },
  },
};
</script>
