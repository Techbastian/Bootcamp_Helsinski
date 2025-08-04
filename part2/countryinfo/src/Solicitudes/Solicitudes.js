import axios from 'axios';

const COUNTRYS_URL = 'https://studies.cs.helsinki.fi/restcountries/api/all';

const getAllInfo = () => {
    const promise = axios.get(COUNTRYS_URL);
    return promise.then(response => response.data).catch(error => {
        console.error('Error fetching country data:', error);
        throw error;
    });
}

export default getAllInfo;