<template>
  <div class="header-container">
    <div class="logo-container">Edgistify</div>
    <ul class="menu-container">
      <li class="menu-item">Home</li>
      <li class="menu-item">Why Us</li>
      <li class="menu-item">Solutions</li>
      <li class="menu-item">Media</li>
      <li class="menu-item">Team</li>
      <li class="menu-item">Join Us</li>
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

  .logo-container {
    display: flex;
    width: 30%;
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
      text-transform: uppercase;
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

        border-radius: 4px;
        background-color: #00a699;
      }
    }
  }
}
</style>
