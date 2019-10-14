<template>
  <div class="page-container">  
    <Header> </Header>
    <main>
      <Picture v-for="date in dates" :date="date" :key="date"> </Picture>
    </main>
  </div>
</template>


<script>
import Header from '../Comps/Header';
import Pic from '../Comps/Pic';

export default {
  name: "PictureOfTheDay",
  components: {
    Header, Pic
  },
  data() {
    return {
      dates: [],
      oldestDate: null,
      readyToLoad: true
    };
  },
  mounted() {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    this.oldestDate = date;
    this.loadPictures();
    setTimeout(this.infiniteScroll, 1500);
  },

  methods: {

    loadPictures() {
      for (let i = 0; i <= 5; i++) {
        let date = this.oldestDate;
        date.setDate(date.getDate() - 1);
        date = this.formatDate(date);
        this.dates.push(date);
      }
    },

    infiniteScroll() {
      document.addEventListener('scroll', () => {
        let loadPoint = (document.documentElement.scrollTop + window.innerHeight) > document.documentElement.offsetHeight - 150;

        if (loadPoint && this.readyToLoad) {
          this.loadPictures();
          this.readyToLoad = false;
          setTimeout(() => {
            this.readyToLoad = true;
          }, 1000);
        }

      })
    },

    formatDate(date) {
      var month = '' + (date.getMonth() + 1),
          day = '' + date.getDate(),
          year = date.getFullYear();

      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;

      return [year, month, day].join('-');
    }

  }
};
</script>
