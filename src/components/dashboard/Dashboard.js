import React from 'react'
import Navbar from '../navigation/Navbar'
import avatar from '../../images/avatar-1.jpg';
import SideBar from '../dashboard/SideBar'

const Dashboard = () => {
    return (
        <>
        <Navbar />
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
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ 249.95</h3>
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
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ 249.95</h3>
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
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ 249.95</h3>
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
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Dashboard