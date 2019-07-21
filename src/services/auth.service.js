import axios from 'axios';
import config from '../config';

const AuthService = {
    login: (user) => { return axios.post(`${config.api}/auth`, user) },
}

export default AuthService;