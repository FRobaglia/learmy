<template>
  <header>
    <div class="wrapper">
      <a href="#" class="logo">
        <strong>learmy</strong>
        <p>astronomy made simple.</p>
      </a>
      <nav>
        <ul>
          <li> <img ref="mode" @click="switchMode" class="light-dark-mode" :src="icons[darkMode]" alt="Switch Light/Dark Mode"> </li>
          <li> <a href=""> EXOPLANETS </a> </li>
          <li> <a href=""> ASTEROIDS </a> </li>
          <li> <a href=""> BLACK HOLES </a> </li>
          <li> <a href=""> THE SOLAR SYSTEM </a> </li>
          <li> <a href=""> DISTANCES IN SPACE </a> </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script>

import lightMode from '../../assets/images/light.svg';
import darkMode from '../../assets/images/dark.svg';


export default {
  name: "Header",
  data() {
    return {
      icons: [darkMode, lightMode],
      darkMode: localStorage.getItem('darkMode') === '1' ? 1 : 0
    };
  },
  mounted() {
    let root = document.documentElement
      if (this.darkMode) {
        root.style.setProperty('--white', "#111");
        root.style.setProperty('--black', "whitesmoke");
      } else {
        root.style.setProperty('--white', "whitesmoke");
        root.style.setProperty('--black', "#111");
      }
  },
  methods: {
    switchMode() {
      const root = document.documentElement
      if (!this.darkMode) {
        this.darkMode = 1;
        root.style.setProperty('--white', "#111");
        root.style.setProperty('--black', "whitesmoke");
      } else {
        this.darkMode = 0;
        root.style.setProperty('--white', "whitesmoke");
        root.style.setProperty('--black', "#111");
      }
      localStorage.setItem('darkMode', this.darkMode)
    },
  }
};
</script>
