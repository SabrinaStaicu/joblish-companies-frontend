import axios from "axios";
import AuthHeader from "./AuthHeader";

const COMPANIES_API_URL = "http://localhost:8080/companies";

class CompanyService {
    changePassword(companyId, data) {
        return axios.get(`${COMPANIES_API_URL}/change-password/${companyId}/${data.firstPassword}`, {headers: AuthHeader()})
    }

    getById(id) {
        return axios.get(`${COMPANIES_API_URL}/${id}`, {headers: AuthHeader()})
    }
}

export default new CompanyService;