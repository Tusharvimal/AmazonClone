import axios from 'axios';

const instance = axios.create({
    // THE API (CLOUD FUNCTION) URL
    baseURL : 'https://us-central1-clone-26e1c.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-26e1c/us-central1/api' --> Local Host
})

export default instance;