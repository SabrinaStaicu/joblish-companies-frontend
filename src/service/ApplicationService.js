import axios from "axios";
import AuthHeader from "./AuthHeader";

const APPLICATION_API_URL = "http://localhost:8080/applications"

class ApplicationService {
    getAllApplicationForCompany(companyId) {
        return axios.get(`${APPLICATION_API_URL}/applications-for-company/${companyId}`, {headers: AuthHeader()})
    }
}

export default new ApplicationService;