import axios from "axios";
import AuthHeader from "./AuthHeader";

const JOBS_API_URL = "http://localhost:8080/jobs";

class JobService {
 
    getAllByCompanyId(id) {
        return axios.get(`${JOBS_API_URL}/filter-by-company/${id}`, {headers: AuthHeader()})
    }

    updateJobDetails(category, city, country, date, description, jobType, salary, title, id) {
        return axios.put(`${JOBS_API_URL}/update-job/${id}`, {
            category : category,
            city : city,
            country : country,
            date : date,
            description : description,
            jobType : jobType,
            salary : salary,
            title : title,
        }, {headers: AuthHeader()})
    }
}

export default new JobService();