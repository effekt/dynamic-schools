import axios from 'axios';
import config from '../config';

const SchoolsService = {
    getSchool: (school) => { return axios.get(`${config.api}/schools/${school}`); },
    getSchools: () => { return axios.get(`${config.api}/schools`); },
    addSchool: (formData) => { return axios.post(`${config.api}/schools`, formData); },
    editSchool: (formData) => { return axios.patch(`${config.api}/schools`, formData); },
    schoolsImageURI: config.images_url
}

export default SchoolsService;