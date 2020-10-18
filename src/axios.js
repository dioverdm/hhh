import axios from 'axios'

const instance = axios.create({

    baseURL: "hpp://localhost:9000/",

});

export default instance;