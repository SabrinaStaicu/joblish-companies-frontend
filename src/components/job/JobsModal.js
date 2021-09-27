import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead, TablePagination,
    TableRow,
    Typography
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import getInitials from "../../util/GetInitials";
import moment from "moment";
import Modal from "react-modal";
import {useHistory} from "react-router-dom";

const JobsModal = ({modalIsOpen, closeModal, modalStyling, rest, jobs}) => {
    const history = useHistory();
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event) => {
        let newSelectedCustomerIds;

        if (event.target.checked) {
            newSelectedCustomerIds = jobs.map((job) => job.id);
        } else {
            newSelectedCustomerIds = [];
        }
        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const editJob = (job) => {
        history.push({
            pathname: `/edit-job`,
            state: {job: job}
        })
    }

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

    return (
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
                                {jobs.slice(limit*page, page == 0 ? limit : limit*(page+1)).map((job) => (
                                    <TableRow
                                        hover
                                        key={job.id}
                                        selected={selectedCustomerIds.indexOf(job.id) !== -1}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={selectedCustomerIds.indexOf(job.id) !== -1}
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
                                            <div className="col-auto">
                                                <label onClick={() =>{editJob(job)}} style={{cursor:"pointer"}} className="label theme-bg2 text-white f-14 f-w-400 float-right">Edit</label>
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
                    count={jobs.length}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Card>
        </Modal>
    );
};

export default JobsModal;