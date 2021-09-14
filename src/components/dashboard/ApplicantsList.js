import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import SideBar from '../dashboard/SideBar'
import Navbar from '../navigation/Navbar'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
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
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import UserService from "../../service/UserService";

const ApplicantsList = ({ customers, ...rest }) => {
  // const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  // const [limit, setLimit] = useState(10);
  // const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getAllUsers().then(res => setUsers(res.data))
  }, [])

  // const handleSelectAll = (event) => {
  //   let newSelectedCustomerIds;
  //
  //   const customerMock = [{
  //       "id":"3"
  //   }]
  //
  //   if (event.target.checked) {
  //     newSelectedCustomerIds = customerMock.map((customer) => customer.id);
  //   } else {
  //     newSelectedCustomerIds = [];
  //   }
  //
  //   setSelectedCustomerIds(newSelectedCustomerIds);
  // };

//   const handleSelectOne = (event, id) => {
//     const selectedIndex = selectedCustomerIds.indexOf(id);
//     let newSelectedCustomerIds = [];

//     if (selectedIndex === -1) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
//     } else if (selectedIndex === 0) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
//     } else if (selectedIndex === selectedCustomerIds.length - 1) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds.slice(0, selectedIndex),
//         selectedCustomerIds.slice(selectedIndex + 1)
//       );
//     }

//     setSelectedCustomerIds(newSelectedCustomerIds);
//   };

//   const handleLimitChange = (event) => {
//     setLimit(event.target.value);
//   };

//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };

  return (
      <>
    <Navbar />
    <div style={{display:"flex", flexDirection:"row"}}>
        <SideBar/>
        <div className="main-body">
            <div className="page-wrapper">
                <div className="flex-body"></div>
                <Box sx={{ mt: 3 }}>
      <Card style={{marginBottom:"5%"}}>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchOutlinedIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search customer"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Looking for job
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                users.map(
                    user => (
                        <TableRow
                            hover
                            key={user.id}
                        >
                          <TableCell>
                            <Box
                                sx={{
                                  alignItems: 'center',
                                  display: 'flex'
                                }}
                            >
                              <Avatar
                                  src={user.picture}
                                  sx={{ mr: 2 }}
                              >
                                {getInitials(user.firstName + " " + user.lastName)}
                              </Avatar>
                              <Typography
                                  color="textPrimary"
                                  variant="body1"
                                  style={{marginLeft: "5px"}}
                              >
                                {user.firstName} {user.lastName}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            {user.email}
                          </TableCell>
                          <TableCell>
                            {user.city}
                          </TableCell>
                          <TableCell>
                            {user.phone}
                          </TableCell>
                          <TableCell>
                            {user.jobPreferences.openToWork ? "OPEN TO WORK" : "EMPLOYED"}
                          </TableCell>
                        </TableRow>
                    )
                )
              }
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      {/*<TablePagination*/}
      {/*  component="div"*/}
      {/*  count={10} //customers.length*/}
      {/*  // onPageChange={handlePageChange}*/}
      {/*  // onRowsPerPageChange={handleLimitChange}*/}
      {/*  page={page}*/}
      {/*  rowsPerPage={limit}*/}
      {/*  rowsPerPageOptions={[5, 10, 25]}*/}
      {/*/>*/}
    </Card>
                </div>
            </div>
        </div>
    </>
  );
};

export default ApplicantsList;
