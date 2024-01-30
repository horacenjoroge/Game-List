import axios from "axios";

const key ='ae7c7bd2f9fb49848bd79c2c45179eca';

const axiosCreate=axios.create({
    baseURL: 'http://api.rawg.io/api'
})

const getGenreList = () => axiosCreate.get('/genres', { params: { key } });


export default{
    getGenreList
}