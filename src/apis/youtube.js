import axios from 'axios'

//const key = 'AIzaSyDLpKX25wGc_2sb7EypADjJvX0c4JQ5iwA'           
// "AIzaSyAJVXB8zwO89MHmXAcq5VLHfI5stL5pi_U"

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part:'snippet',
    maxResults: 10,
    key:''
  }
})