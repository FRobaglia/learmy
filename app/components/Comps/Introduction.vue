<template>
  <section class="introduction">
    <h1> {{ introduction.title }} </h1>
    <div class="paragraphs">
      <p v-for="paragraph in introduction.paragraphs" :key="paragraph"> {{ paragraph }} </p>
    <div>
  </section>
</template>

<script>
export default {
  name: "Introduction",
  props: ['introduction'],
  data() {
    return {
    }
  }
}
</script>