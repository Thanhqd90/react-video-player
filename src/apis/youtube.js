import axios from 'axios';

const KEY = 'AIzaSyBRdYX-U1aPU4JfMN6Ex1PLDc3S55fKq1M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
