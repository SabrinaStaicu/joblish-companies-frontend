import React, {useEffect, useState} from 'react';
import moment from "moment";
import ApplicationService from "../../service/ApplicationService";
import AuthService from "../../service/AuthService";

const CurrentApplications = () => {
    const [applications, setApplications] = useState([])

    useEffect(() => {
        ApplicationService.getAllApplicationForCompany(AuthService.getCurrentUser().id)
            .then(res => setApplications(res.data))
    }, [])

    const approveApplication = application => {
        ApplicationService.approveApplication(application.id).then(res => setApplications(applications.filter(app => app.job.title !== application.job.title)))
    }

    return (
        <div className="col-xl-8 col-md-6">
            <div className="card Recent-Users">
                <div className="card-header">
                    <h5>Recent Applications</h5>
                </div>
                <div className="card-block px-0 py-3">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <tbody>
                            {applications.length > 0 ? (
                                applications.map(application => <tr className="unread">
                                    <td><img className="rounded-circle" src={application.appUser.picture} alt="activity-user"/>
                                    </td>
                                    <td>
                                        <h6 className="mb-1">{application.appUser.firstName} {application.appUser.lastName}</h6>
                                        <p className="m-0">{application.notes?.length > 0 ? application.notes : "No notes."}</p>
                                    </td>
                                    <td>
                                        <h6 className="text-muted"><i
                                            className="fas fa-circle text-c-green f-10 m-r-15"></i>{moment(application.date).format('DD/MM/YYYY')}
                                        </h6>
                                    </td>
                                    <td>
                                        <h6 className="text-muted">{application.job.title}</h6>
                                    </td>
                                    <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!"
                                                                                                              className="label theme-bg text-white f-12" onClick={() => approveApplication(application)}>Approve</a>
                                    </td>
                                </tr>)
                            ) : (
                                <h3 style={{marginLeft: "15%"}}>No applicants found.</h3>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentApplications;