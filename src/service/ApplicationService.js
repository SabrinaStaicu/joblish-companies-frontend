import axios from "axios";
import AuthHeader from "./AuthHeader";

const APPLICATION_API_URL = "http://localhost:8080/applications"

class ApplicationService {
    getAllApplicationForCompany(companyId) {
        return axios.get(`${APPLICATION_API_URL}/applications-for-company/${companyId}`, {headers: AuthHeader()})
    }

    approveApplication(applicationId) {
        return axios.get(`${APPLICATION_API_URL}/approve-application/${applicationId}`, {headers: AuthHeader()});
    }

    rejectApplication(id) {
        return axios.get(`${APPLICATION_API_URL}/reject-application/${id}`, {headers: AuthHeader()})
    }

    getCompanyUniqueApplicants(id) {
        return axios.get(`${APPLICATION_API_URL}/company-unique-applications/${id}`, {headers: AuthHeader()});
    }

    changeApplicationStatus(id, status) {
        return axios.put(`${APPLICATION_API_URL}/update-status/${id}`, {
            status : status,
        }, {headers: AuthHeader()})
    }
}

export default new ApplicationService;