import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID DF9-QhlEVrvUiXBKt7vVzgtW64FTODGXtkPp5cjUoTc' // process.env.REACT_APP_UNPLASH
    }
})


