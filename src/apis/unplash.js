import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID DF9-QhlEVrvUiXBKt7vVzgtW64FTODGXtkPp5cjUoTc'
    }
})


// accesskey DF9-QhlEVrvUiXBKt7vVzgtW64FTODGXtkPp5cjUoTc
// secretkey vDK5HN7GsRkHMwuDFJNAa-PLk2C3Nm8W9SO6kiNPtKA