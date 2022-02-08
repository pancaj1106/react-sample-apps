import Axios from 'axios';
const KEY = '<API Key>';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 50,
        key: KEY
    }
})