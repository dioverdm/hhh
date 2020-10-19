// changer baseURL pour pousser sur Heroku
// https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app

import axios from 'axios';

const instance = axios.create({

    baseURL: "http://localhost:9000/",

});

export default instance;