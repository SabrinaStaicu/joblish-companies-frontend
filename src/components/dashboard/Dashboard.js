import React from 'react'
import Navbar from '../navigation/Navbar'
import SideBar from '../dashboard/SideBar'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import JobService from "../../service/JobService";
import AuthService from "../../service/AuthService";
import CurrentApplications from "../applications/CurrentApplications";
import JobsModal from "../job/JobsModal";
import ApplicationService from "../../service/ApplicationService";

Modal.setAppElement('#root');
const Dashboard = (...rest) => {
    const [companyApplicants, setCompanyApplicants] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        JobService.getAllByCompanyId(AuthService.getCurrentUser().id).then(res => setJobs(res.data))
        ApplicationService.getCompanyUniqueApplicants(AuthService.getCurrentUser().id).then(res => setCompanyApplicants(res.data))
    }, [])

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const modalStyling = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    return (
        <>
        <Navbar  />
        <JobsModal modalIsOpen={modalIsOpen} closeModal={closeModal} modalStyling={modalStyling} rest={rest} jobs={jobs}/>
        <div style={{display:"flex", flexDirection:"row"}}>
        <SideBar/>
        <div className="main-body">
            <div className="page-wrapper">
                <div className="flex-body">

                    <div className="col-md-6 col-xl-4">
                        <div className="card">
                            <div className="card-block">
                                <h6 className="mb-4">Title</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i>IDK</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">67%</p>
                                    </div>
                                    <div className="progress m-t-30" style={{height: "7px"}}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: "50%", ariaValuenow:"50", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6 col-xl-4">
                        <div className="card">
                            <div className="card-block">
                                <h6 className="mb-4">Title</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i>IDK</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">67%</p>
                                    </div>
                                    <div className="progress m-t-30" style={{height: "7px"}}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: "50%", ariaValuenow:"50", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6 col-xl-4">
                        <div className="card">
                        <div class="card-block">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col">
                                                    <h5 class="m-0">Jobs</h5>
                                                </div>
                                                <div onClick={openModal} class="col-auto">
                                                    <label style={{cursor:"pointer"}} class="label theme-bg2 text-white f-14 f-w-400 float-right">See jobs</label>
                                                </div>
                                            </div>
                                            {/* <h2 class="mt-3 f-w-300">45<sub class="text-muted f-14">EditJob listed</sub></h2> */}
                                            <h6 class="text-muted mt-4 mb-0">List all the company jobs. </h6>
                                            <i class="fab fa-angellist text-c-purple f-50"></i>
                                        </div>
                        </div>
                    </div>

                    <CurrentApplications />

                    <div class="col-xl-4 col-md-6">
                                    <div class="card card-event">
                                        <div class="card-block">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col">
                                                    <h5 class="m-0">List new job</h5>
                                                </div>
                                                <div class="col-auto" >
                                                    <label onClick={addJob} style={{cursor:"pointer"}} class="label theme-bg2 text-white f-14 f-w-400 float-right">List</label>
                                                </div>
                                            </div>
                                            <h2 class="mt-3 f-w-300"><sub class="text-muted f-14">{jobs.length} Jobs listed</sub></h2>
                                            <h6 class="text-muted mt-4 mb-0">Fill out the form to list a new job! </h6>
                                            <i class="fab fa-angellist text-c-purple f-50"></i>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-block border-bottom">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-auto">
                                                    <i class="feather icon-zap f-30 text-c-green"></i>
                                                </div>
                                                <div class="col">
                                                    <h3 class="f-w-300">{companyApplicants.length}</h3>
                                                    <span class="d-block text-uppercase">TOTAL APPLICANTS</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-block">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-auto">
                                                    <i><LocationOnOutlinedIcon fontSize="large"/></i>
                                                </div>
                                                <div class="col">
                                                    <h3 class="f-w-300">26</h3>
                                                    <span class="d-block text-uppercase">TOTAL LOCATIONS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Dashboard