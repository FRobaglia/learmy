<template>
  <article v-if="picture" class="picture">

    <div class="header">
      <div class="date"> <span> {{ picture.date }} </span> </div>
      <h2> {{ picture.title }} </h2>
    </div>

    <div class="content">
      <img :style="picture.explanation ? '' : 'width: 100%'" v-if="picture.media_type === 'image'" :src="picture.url" :alt="picture.title">

      <iframe v-if="picture.media_type === 'video'" :src="picture.url">
      </iframe>

      <p v-html="picture.explanation"> </p>
    </div>
    
  </article>
</template>

<script>
export default {
  data() {
    return {
      picture: null,
      definitions: [
        {
          word: "Earth",
          url: "https://en.wikipedia.org/wiki/Earth"
        },
        {
          word: "Solar System",
          url: "https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/"
        }
      ]
    }
  },
  mounted() {
    let url = `https://api.nasa.gov/planetary/apod?date=${this.date}&api_key=Z142oJKTepCVmk0rgIvEDP1f64RDNDNL5PL7ExDh`;
    this.axios.get(url).then((response) => {
      let picture = response.data

      this.definitions.forEach(def => {
        picture.explanation = picture.explanation.replace(def.word, `<a title="Read more about ${def.word}" target="_blank" href="${def.url}">${def.word}</a>`)
      });

      const today = new Date();
      if (this.$parent.formatDate(today) === picture.date) {
        picture.date = "Today's picture"
      }

      this.picture = picture;
    });
  },
  props: ['date']
}
</script>