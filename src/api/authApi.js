import axios from "axios";


const authApi = axios.create( {
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key: 'AIzaSyBB623QQwX1Bql-WM2wVnXHTl4RP9Vlzo4'
    }
})

export default authApi
