import { useState } from 'react';
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

const ApplicantsList = ({ customers, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    const customerMock = [{
        "id":"3"
    }]

    if (event.target.checked) {
      newSelectedCustomerIds = customerMock.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

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
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {customerMock.slice(0, limit).map((customer) => ( */}
                <TableRow
                  hover
                  key={3}
                  selected={selectedCustomerIds.indexOf(0) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(0) !== -1} //customer.id
                    //   onChange={(event) => handleSelectOne(event, 3)}
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
                      <Avatar
                        src={"none"}
                        sx={{ mr: 2 }}
                      >
                        {getInitials("Andrei Penica")}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {"Andrei Penica"}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {"andrei.penica@yahoo.com"}
                  </TableCell>
                  <TableCell>
                    {`${"Bucharest"}, ${"Romania"}`}
                  </TableCell>
                  <TableCell>
                    {"0741444777"}
                  </TableCell>
                  <TableCell>
                    {moment("11/09/2021").format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
                <TableRow
                  hover
                  key={3}
                  selected={selectedCustomerIds.indexOf(0) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(0) !== -1} //customer.id
                    //   onChange={(event) => handleSelectOne(event, 3)}
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
                      <Avatar
                        src={"none"}
                        sx={{ mr: 2 }}
                      >
                        {getInitials("Andrei Penica")}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {"Andrei Penica"}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {"andrei.penica@yahoo.com"}
                  </TableCell>
                  <TableCell>
                    {`${"Bucharest"}, ${"Romania"}`}
                  </TableCell>
                  <TableCell>
                    {"0741444777"}
                  </TableCell>
                  <TableCell>
                    {moment("11/09/2021").format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
                <TableRow
                  hover
                  key={3}
                  selected={selectedCustomerIds.indexOf(0) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(0) !== -1} //customer.id
                    //   onChange={(event) => handleSelectOne(event, 3)}
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
                      <Avatar
                        src={"none"}
                        sx={{ mr: 2 }}
                      >
                        {getInitials("Andrei Penica")}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {"Andrei Penica"}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {"andrei.penica@yahoo.com"}
                  </TableCell>
                  <TableCell>
                    {`${"Bucharest"}, ${"Romania"}`}
                  </TableCell>
                  <TableCell>
                    {"0741444777"}
                  </TableCell>
                  <TableCell>
                    {moment("11/09/2021").format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
                <TableRow
                  hover
                  key={3}
                  selected={selectedCustomerIds.indexOf(0) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(0) !== -1} //customer.id
                    //   onChange={(event) => handleSelectOne(event, 3)}
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
                      <Avatar
                        src={"none"}
                        sx={{ mr: 2 }}
                      >
                        {getInitials("Andrei Penica")}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {"Andrei Penica"}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {"andrei.penica@yahoo.com"}
                  </TableCell>
                  <TableCell>
                    {`${"Bucharest"}, ${"Romania"}`}
                  </TableCell>
                  <TableCell>
                    {"0741444777"}
                  </TableCell>
                  <TableCell>
                    {moment("11/09/2021").format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={10} //customers.length
        // onPageChange={handlePageChange}
        // onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
                </div>
            </div>
        </div>
    </>
  );
};

export default ApplicantsList;
