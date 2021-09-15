import axios from "axios";
import AuthHeader from "./AuthHeader";

const USERS_API_URL = "http://localhost:8080/users";

class UserService {
    getAllUsers() {
        return axios.get(`${USERS_API_URL}/all`, {headers: AuthHeader()})
    }

    searchUsersByName(searchInput, openToWork) {
        if (!searchInput) {
            searchInput = " ";
        }
        return axios.get(`${USERS_API_URL}/search-user/${searchInput}/${openToWork}`, {headers: AuthHeader()})
    }

    // usersByCompanyId(companyId) {
    //     return axios.get(`${USERS_API_URL}/applicants/${companyId}`, {headers: AuthHeader()})
    // }
}

export default new UserService;