import Vue from 'vue'

export default {
  ADD_TOP_MOVIE (state, movies) {
    state.topMovies = movies;
  },

  SET_THEATER_MOVIE (state, movies) {
    state.theaterMovies = movies;
  }
}
