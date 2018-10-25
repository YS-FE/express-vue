<template>
  <div class="theater">
    <div class="content">
      <div v-for="(item, index) in movies" :key="index" class="movie">
        <div class="movie-inner">
          <img :src="item.images.medium" alt="封面">
          <p class="movie-inner-title">评分: <span>{{item.rating.average}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({store, route}) {
    return store.dispatch('FETCH_THEATER_MOVIE');
  },

  created(){
    this.movies = this.$store.state.theaterMovies;
  },

  data() {
    return {
      movies: []
    }
  },

  methods: {

  }
}
</script>

<style lang="stylus">

.theater
  .content 
    padding 30px 0
    display flex
    flex-wrap  wrap

    .movie
      padding 0 10px
      margin-bottom 20px
      cursor pointer
      .movie-inner
        position relative
        width 220px
        height 300px
        border 1px solid lightgray
        border-radius 4px
        transition all 0.2s linear
        > img 
          width 220px
          height 300px
          border-radius 4px
        .movie-inner-title
          position absolute
          right 0
          bottom 0
          padding-right 20px
          color #fff
          margin 0px
          font-size 18px
          padding 6px
      &:hover
        .movie-inner
          transform scale(1.1, 1.1)


</style>
