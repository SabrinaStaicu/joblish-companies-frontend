import {useEffect, useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import SideBar from '../dashboard/SideBar'
import Navbar from '../navigation/Navbar'
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import getInitials from '../../util/GetInitials';
import UserService from "../../service/UserService";
import SearchEmployees from "../dashboard/SearchEmployees";

const Users = ({ customers, ...rest }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getAllUsers().then(res => setUsers(res.data))
  }, [])

  return (
      <>
    <Navbar />
    <div style={{display:"flex", flexDirection:"row"}}>
        <SideBar/>
        <div className="main-body" style={{height: "700px"}}>
            <div className="page-wrapper">
                <div className="flex-body"></div>
                <SearchEmployees setUsers={setUsers}/>
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
                  </Card>
                </div>
            </div>
        </div>
    </>
  );
};

export default Users;
