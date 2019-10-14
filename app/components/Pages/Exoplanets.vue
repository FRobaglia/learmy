<template>
  <div class="page-container">  
    <Header> </Header>
    <main>
      <Introduction :introduction="introduction"> </Introduction>
    </main>
  </div>
</template>

<script>

import Header from '../Comps/Header'
import Introduction from '../Comps/Introduction';

export default {
  name: "Exoplanets",
  components: {
    Header, Introduction
  },
  data() {
    return {
      introduction: {
        title: "Beyond the Solar System",
        paragraphs: [
          "All of the planets in our solar system orbit around the Sun. Planets that orbit around other stars are called exoplanets. Exoplanets are very hard to see directly with telescopes. They are hidden by the bright glare of the stars they orbit.",
          "So, astronomers use other ways to detect and study these distant planets. They search for exoplanets by looking at the effects these planets have on the stars they orbit."
        ]
      },
    }
  }
}
</script>