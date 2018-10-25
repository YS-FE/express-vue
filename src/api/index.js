import axios from 'axios';
import {baseURL} from './config';


/**
 * 获取top250电影
 * @param {Number} start 
 */
export const getTop = (start = 0) => {
  return axios.get(`http://api.douban.com/v2/movie/top250`, {
    params: {
      start: start
    }
  });
}


/**
 * 最新热映电影
 */
export const getTheater = () => {
  return axios.get(`${baseURL}/in_theaters`);
}


/**
 * 搜索电影
 * @param {String} title 
 */
export const searchMovie = (title) => {
  return axios.get(`${baseURL}/search`, {
    params: {
      q: title
    }
  });
}