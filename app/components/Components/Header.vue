<template>
  <header>
    <div class="wrapper">
      <a href="#" class="logo">
        <strong>learmy</strong>
        <p>astronomy made simple.</p>
      </a>
      <img @click="switchMode" class="light-dark-mode" :src="icon" alt="Switch Light/Dark Mode">
      <nav>
        <ul>
          <li> <a href=""> EXOPLANETS </a> </li>
          <li> <a href=""> BLACK HOLES </a> </li>
          <li> <a href=""> THE SOLAR SYSTEM </a> </li>
          <li> <a href=""> ASTEROIDS </a> </li>
          <li> <a href=""> DISTANCES IN SPACE </a> </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script>

import lightModeIcon from '../../assets/images/light.svg';
import darkModeIcon from '../../assets/images/dark.svg';


export default {
  data() {
    return {
      icon: lightModeIcon
    };
  },
  mounted() {

  },
  methods: {
    switchMode() {
      this.icon === lightModeIcon ? this.icon = darkModeIcon : this.icon = lightModeIcon
    }
  }
};
</script>
