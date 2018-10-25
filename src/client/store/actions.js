
import {getTop, getTheater, searchMovie} from '@/api/index.js';

import topData from '@/data/top.json';
import theatersData from '@/data/theater.json';

export default {
  async FETCH_TOP_MOVIE (context) {
    let data = await getTop(0);
    if (!data) {
      data = topData
    }
    context.commit('ADD_TOP_MOVIE', data.subjects);
  },

  async FETCH_THEATER_MOVIE (context) {
    let data = await getTheater();
    if (!data) {
      data = theatersData;
    }
    context.commit('SET_THEATER_MOVIE', data.subjects);
  }
}