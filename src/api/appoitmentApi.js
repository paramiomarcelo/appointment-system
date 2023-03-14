import axios from "axios";


const appointmentApi = axios.create( {
    baseURL: 'https://appointment-system-c6f43-default-rtdb.firebaseio.com/'
})

export default appointmentApi
