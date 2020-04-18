import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 'Client-ID 8ItWOaRSxhQ1cPS-SgTciHzeQ5GONqmeA2wvifi6-8w' 
    }
});