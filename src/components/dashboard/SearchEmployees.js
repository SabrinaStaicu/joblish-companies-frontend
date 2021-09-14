import React, {useState} from 'react';
import {Box, Card, CardContent, InputAdornment, SvgIcon, TextField} from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Button from "@material-ui/core/Button";
import UserService from "../../service/UserService";

const SearchEmployees = ({users, setUsers}) => {
    const [searchInput, setSearchInput] = useState("");

    const search = () => {
        UserService.searchUsersByName(searchInput).then(res => setUsers(res.data))
    }

    return (
            <Box sx={{ mt: 3 }}>
                <Card style={{marginBottom:"5%"}}>
                    <CardContent>
                        <Box sx={{ maxWidth: 500 }} style={{display:"flex"}}>
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
                                placeholder="Search for employees"
                                variant="outlined"
                                onChange={e => setSearchInput(e.target.value)}
                            />
                            <Button variant="contained" color="primary" style={{marginLeft: "10px"}} onClick={search}>SEARCH</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
    );
};

export default SearchEmployees;