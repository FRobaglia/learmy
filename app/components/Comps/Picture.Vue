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
      <p v-if="picture.explanation"> {{ picture.explanation }} </p>
    </div>
    
  </article>
</template>

<script>
export default {
  data() {
    return {
      picture: null,
    }
  },
  mounted() {
    this.axios.get(`https://api.nasa.gov/planetary/apod?date=${this.date}&api_key=Z142oJKTepCVmk0rgIvEDP1f64RDNDNL5PL7ExDh`).then((response) => {
      this.picture = response.data
    });
  },
  props: ['date']
}
</script>