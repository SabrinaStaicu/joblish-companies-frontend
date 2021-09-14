import React from 'react'
import Navbar from '../navigation/Navbar'
import avatar from '../../images/avatar-1.jpg';
import SideBar from '../dashboard/SideBar'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const Dashboard = () => {
    return (
        <>
        <Navbar />
        {/* <div className="jobsTop">
                    <h1 style={{color:"white"}}>User profile</h1>
                </div> */}
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
                                                    <h5 class="m-0">Edit jobs</h5>
                                                </div>
                                                <div class="col-auto">
                                                    <label class="label theme-bg2 text-white f-14 f-w-400 float-right">See jobs</label>
                                                </div>
                                            </div>
                                            {/* <h2 class="mt-3 f-w-300">45<sub class="text-muted f-14">Jobs listed</sub></h2> */}
                                            <h6 class="text-muted mt-4 mb-0">List all the company jobs. </h6>
                                            <i class="fab fa-angellist text-c-purple f-50"></i>
                                        </div>
                        </div>
                    </div>

                    <div class="col-xl-8 col-md-6">
                        <div className="card Recent-Users">
                            <div className="card-header">
                                <h5>Recent Users</h5>
                            </div>
                            <div className="card-block px-0 py-3">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr className="unread">
                                                <td><img className="rounded-circle" src={avatar} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Isabella Christensen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>11 MAY 12:56</h6>
                                                </td>
                                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                            </tr>
                                            <tr className="unread">
                                                <td><img className="rounded-circle" src={avatar} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Mathilde Andersen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply text of…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>11 MAY 10:35</h6>
                                                </td>
                                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                            </tr>
                                            <tr className="unread">
                                                <td><img className="rounded-circle" src={avatar} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Karla Sorensen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>9 MAY 17:38</h6>
                                                </td>
                                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                            </tr>
                                            <tr className="unread">
                                                <td><img className="rounded-circle" src={avatar} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Ida Jorgensen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply text of…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted f-w-300"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>19 MAY 12:56</h6>
                                                </td>
                                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                            </tr>
                                            <tr className="unread">
                                                <td><img className="rounded-circle" src={avatar} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Albert Andersen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>21 July 12:56</h6>
                                                </td>
                                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6">
                                    <div class="card card-event">
                                        <div class="card-block">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col">
                                                    <h5 class="m-0">List new job</h5>
                                                </div>
                                                <div class="col-auto">
                                                    <label class="label theme-bg2 text-white f-14 f-w-400 float-right">List</label>
                                                </div>
                                            </div>
                                            <h2 class="mt-3 f-w-300">45<sub class="text-muted f-14">Jobs listed</sub></h2>
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
                                                    <h3 class="f-w-300">235</h3>
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