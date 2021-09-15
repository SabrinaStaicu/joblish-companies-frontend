import React from 'react'
import Navbar from '../navigation/Navbar'
import avatar from '../../images/avatar-1.jpg';
import SideBar from '../dashboard/SideBar'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Modal from 'react-modal';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";


import moment from 'moment';
import { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import DashboardService from '../../service/JobService';
import EditJob from './EditJob';
import UserService from "../../service/UserService";

Modal.setAppElement('#root');
const Dashboard = (...rest) => {

    

    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    DashboardService.getAllByCompanyId(1).then((res) => {
        setJobs(res.data)
    })

    UserService.usersBy(1).then((res) => {
        setApplicants(res.data)

    })
  },[])

  console.log(applicants)
  console.log(jobs)

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = jobs.map((job) => job.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const history = useHistory();

  const editJob = (job) => {
    history.push({
        pathname: `/edit-job`,
        state: {job: job}
    })
  }



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
        {/* <div className="jobsTop">
                    <h1 style={{color:"white"}}>User profile</h1>
                </div> */}
        <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyling}
            >
                <div style={{textAlign: "right"}}>
                    <Button variant="contained" color="secondary" onClick={closeModal}>X</Button>
                </div>
                <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === 1}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < 2
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Title
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Category
                </TableCell>
                <TableCell>
                  Salary
                </TableCell>
                <TableCell>
                  Listed date
                </TableCell>
                <TableCell>
                  Edit
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.slice(0, limit).map((job) => (
                <TableRow
                  hover
                  key={job.id}
                  selected={selectedCustomerIds.indexOf(job.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(job.id) !== -1} //customer.id
                      onChange={(event) => handleSelectOne(event, job.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar style={{marginRight:"5%"}}
                        src={"none"}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(job.title)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {job.title}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                  {`${job.city}, ${job.country}`}
                  </TableCell>
                  <TableCell>
                  {job.category}
                  </TableCell>
                  <TableCell>
                    {job.salary}
                  </TableCell>
                  <TableCell>
                    {moment("11/09/2021").format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <div class="col-auto">
                        <label onClick={() =>{editJob(job)}} style={{cursor:"pointer"}} class="label theme-bg2 text-white f-14 f-w-400 float-right">Edit</label>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={jobs.length} //customers.length
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
            </Modal>
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
                                                <div onClick={openModal} class="col-auto">
                                                    <label style={{cursor:"pointer"}} class="label theme-bg2 text-white f-14 f-w-400 float-right">See jobs</label>
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
                                <h5>Recent Applications</h5>
                            </div>
                            <div className="card-block px-0 py-3">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                        { applicants.length > 0 ? (
                                                applicants.map(applicant =>  <tr className="unread">
                                                <td><img className="rounded-circle" src={applicant.picture} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">{`${applicant.firstName} ${applicant.lastName}`}</h6>
                                                    <p className="m-0">{applicant.notes?.length > 0 ? applicant.notes : "No notes."}</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>{moment(applicant.date).format('DD/MM/YYYY')}</h6>
                                                </td>
                                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                            </tr> )
                                            ) : (
                                                <h3 style={{marginLeft:"15%"}}>No applicants found.</h3>
                                            )}
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
                                                <div class="col-auto" >
                                                    <label style={{cursor:"pointer"}} class="label theme-bg2 text-white f-14 f-w-400 float-right">List</label>
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