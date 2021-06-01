import Axios from 'axios';

export const axios = Axios.create({
    baseURL: 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/',
    timeout: 3000
});
