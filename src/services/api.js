import axios from 'axios'

/// BASE DA URL https://api.themoviedb.org/3/

/// URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=91c6d11116350d13b5576d4dffd86fc8&language=pt-BR 

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;