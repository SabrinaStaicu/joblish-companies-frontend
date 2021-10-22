import React, {useEffect, useState} from 'react';
import moment from "moment";
import ApplicationService from "../../service/ApplicationService";
import AuthService from "../../service/AuthService";
import { useHistory } from 'react-router';

const CurrentApplications = () => {
    const [applications, setApplications] = useState([])
    const history = useHistory();

    useEffect(() => {
        ApplicationService.getAllApplicationForCompany(AuthService.getCurrentUser().id)
            .then(res => setApplications(res.data))
    }, [])

    const approveApplication = application => {
        ApplicationService.approveApplication(application.id).then(res => setApplications(applications.filter(app => app.job.title !== application.job.title)))
    }

    const rejectApplication = id => {
        ApplicationService.rejectApplication(id).then(res => setApplications(applications.filter(app => app.id !== id)));
    }

    const seeApplication = (id) => {
        ApplicationService.changeApplicationStatus(id, "Seen");
    }

    const viewProfile = (application) => {
        history.push({
            pathname: `/user`,
            state: {userId: application.appUser.id}
        })
    }

    return (
        <div className="col-xl-8 col-md-6">
            <div className="card Recent-Users">
                <div className="card-header">
                    <h5>Current applications</h5>
                </div>
                <div className="card-block px-0 py-3">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <tbody>
                            {applications.length > 0 ? (
                                applications.map(application => <tr className="unread" style={{cursor:"pointer"}} >
                                    <td onClick={() => {
                                    viewProfile(application)
                                    seeApplication(application.id)
                                }}><img className="rounded-circle" src={application.appUser.picture} alt="activity-user"/>
                                    </td>
                                    <td onClick={() => {
                                    viewProfile(application)
                                    seeApplication(application.id)
                                }}>
                                        <h6 className="mb-1">{application.appUser.firstName} {application.appUser.lastName}</h6>
                                        <p className="m-0">{application.notes?.length > 0 ? application.notes : "No notes."}</p>
                                    </td>
                                    <td onClick={() => {
                                    viewProfile(application)
                                    seeApplication(application.id)
                                }}>
                                        <h6 className="text-muted">{moment(application.date).format('DD/MM/YYYY')}
                                        </h6>
                                    </td>
                                    <td onClick={() => {
                                    viewProfile(application)
                                    seeApplication(application.id)
                                }}>
                                        <h6 className="text-muted">{application.job.title}</h6>
                                    </td>
                                    <td onClick={() => {
                                    viewProfile(application)
                                    seeApplication(application.id)
                                }}>
                                        <h6 className="text-muted">{application.status.replace("_", " ")}</h6>
                                    </td>
                                    <td><a href="#!" onClick={() => rejectApplication(application.id)} className="label theme-bg2 text-white f-12">Reject</a><a href="#!"
                                                                                                              className="label theme-bg text-white f-12" onClick={() => approveApplication(application)}>Approve</a>
                                    </td>
                                </tr>)
                            ) : (
                                <h3 style={{marginLeft: "15%"}}>There are no applications at the moment.</h3>
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