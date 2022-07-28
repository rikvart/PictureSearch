import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {Authorization: 'Client-ID 1y35ZZLVazoD6Olk86FBl8FMgA6Bh2M8VeGmZEfXNj4'
            }
});

