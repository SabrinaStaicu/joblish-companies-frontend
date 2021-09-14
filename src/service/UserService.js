import axios from "axios";
import AuthHeader from "./AuthHeader";

const USERS_API_URL = "http://localhost:8080/users";

class UserService {
    getAllUsers() {
        return axios.get(`${USERS_API_URL}/all`, {headers: AuthHeader()})
    }
}

export default new UserService;