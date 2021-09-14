import axios from "axios";
import AuthHeader from "./AuthHeader";

const JOBS_API_URL = "http://localhost:8080/jobs";

class DashboardService {
 
    getAllByCompanyId(id) {
        return axios.get(`${JOBS_API_URL}/filter-by-company/${id}`, {headers: AuthHeader()})
}

    usersBy(companyId) {
    return axios.get(`http://localhost:8080/dashboard/applicants/${companyId}`, {headers: AuthHeader()})
}

}

export default new DashboardService();