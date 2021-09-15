import axios from "axios";

const API_URL = "http://localhost:8080/auth";

class AuthService {
    login(data) {
        return axios
            .post(API_URL + "/sign-in/company", {
                email: data.email,
                password: data.password,
            })
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("company", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("company");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('company'));
    }

    register(data) {
        return axios.post(`${API_URL}/register-company`, {
            name: data.name,
            email: data.email,
            password: data.password,
            logo: data.logo,
            category: data.category,
            description: data.description
        })
    }

}

export default new AuthService;