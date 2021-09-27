import React from 'react';
import Navbar from "../navigation/Navbar";
import { useHistory } from 'react-router';
import AuthService from "../../service/AuthService";

const HomePage = () => {

    const history = useHistory();

    const goToLogin = () => {
        history.push("/login")
    }

    const goToRegister = () => {
        history.push("/register")
    }

    return (
        <div>
            <Navbar />
            <div class="container col-xxl-8 px-4" style={{cursor:"default", marginBottom:"0"}}>
                <div class="row flex-lg-row-reverse align-items-center g-5">
                <div class="col-10 col-sm-8 col-lg-6">
                <img src="https://media.discordapp.net/attachments/872865298330558514/887682116509388840/handMagnetNew2x.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div class="col-lg-6">
            <h2 class="seo__subtitle">Recruitment offer through Joblish</h2>
                <div class="display-5 fw-bold lh-1 mb-3" style={{marginTop:"20%"}}><h1 style={{fontSize:"80px",fontWeight:"900", color:"#8976fe"}}>ATTRACT.</h1><h1 style={{fontSize:"80px", fontWeight:"900",color:"#8976fe"}}>CONVINCE.</h1><h1 style={{fontSize:"80px",fontWeight:"900", color:"#8976fe"}}>RECRUIT.</h1></div>
                <p class="lead">Finding the right candidates is a difficult task. Together we will make it easier.</p>
                {
                    !AuthService.getCurrentUser() && (
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" onClick={goToLogin}
                                    className="btn btn-primary btn-lg px-4 me-md-2">Log in
                            </button>
                            <button type="button" onClick={goToRegister}
                                    className="btn btn-secondary btn-lg px-4">Register
                            </button>
                        </div>
                    )
                }

            </div>
            </div>
          </div>
        </div>
    );
};

export default HomePage;