import axios from "axios";
import AuthHeader from "./AuthHeader";
import AuthService from "./AuthService";

const JOBS_API_URL = "http://localhost:8080/jobs";

class JobService {
 
    getAllByCompanyId(id) {
        return axios.get(`${JOBS_API_URL}/filter-by-company/${id}`, {headers: AuthHeader()})
    }

    updateJobDetails(category, city, country, date, description, jobType, experienceType, salary, title, id) {
        return axios.put(`${JOBS_API_URL}/update-job/${id}`, {
            category : category,
            city : city,
            country : country,
            date : date,
            description : description,
            jobType : jobType,
            experienceType : experienceType,
            salary : salary,
            title : title,
        }, {headers: AuthHeader()})
    }

    addJob(data) {
        return axios.post(`${JOBS_API_URL}/add-job/${AuthService.getCurrentUser().id}`, {
            category : data.category,
            city : data.city,
            country : data.country,
            date : data.date,
            description : data.description,
            jobType : data.jobType,
            experienceType : data.experienceType,
            salary : data.salary,
            title : data.title,
        }, {headers: AuthHeader()})
    }
}

export default new JobService();