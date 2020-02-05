<template>
  <header>
    <div class="wrapper">
      <router-link :to="{ name: 'PictureOfTheDay' }" class="logo">
        <dt>learmy</dt>
        <dd>astronomy made simple.</dd>
      </router-link>
      <nav>
        <ul>
          <li> <img @click="switchMode" class="light-dark-mode" :src="icons[darkMode]" alt="Switch Light/Dark Mode"> </li>
          <li> <router-link :to="{ name: 'Exoplanets' }"> EXOPLANETS </router-link> </li>
          <li> <router-link class="soon" to=""> ASTEROIDS </router-link> </li>
          <li> <router-link class="soon" to=""> BLACK HOLES </router-link> </li>
          <li> <router-link class="soon" to=""> THE SOLAR SYSTEM </router-link> </li>
          <li> <router-link class="soon" to=""> DISTANCES IN SPACE </router-link> </li>
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
