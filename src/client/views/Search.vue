<template>
  <div class="search">

    <div class="search-inner">
      <input type="text" placeholder="请输入电影名称" v-model="keywords">
      <button @click="startSearchMovie">搜索</button>
    </div>

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

import {searchMovie} from '../../api/index.js';

export default {
  data(){
    return {
      keywords: '',
      movies: []
    }
  },
  methods: {
    startSearchMovie() {
      let str = this.keywords.trim();
      searchMovie(str).then(res => {
        this.movies = res.subjects;
      }).catch(err => {
        this.movies = [];
      });
    }
  }
}
</script>

<style lang="stylus">

.search
  .search-inner
    padding 30px 0
    height 30px
    > input 
      float left
      border none
      outline none
      width 500px
      height 30px
      padding 0
      padding-left 10px
    > button
      float left
      border none
      outline none
      width: 80px;
      height 30px
      background: #f60
      color: #fff
      font-size: 16px
      cursor pointer

  
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
