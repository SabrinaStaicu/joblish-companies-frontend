
import SideBar from '../dashboard/SideBar'
import { useState } from 'react';
import Navbar from '../navigation/Navbar'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';

const Settings = (props) => {
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
    <Navbar />
    <div style={{display:"flex", flexDirection:"row"}}>
        <SideBar/>
        <div className="main-body">
            <div className="page-wrapper">
                <div className="flex-body"></div>
                    <form {...props}>
                        <Card>
                            <CardHeader
                            subheader="Update password"
                            title="Password"
                            />
                            <Divider />
                            <CardContent>
                            <TextField
                                fullWidth
                                label="Password"
                                margin="normal"
                                name="password"
                                onChange={handleChange}
                                type="password"
                                        value={values.password}
                                        variant="outlined"
                            />
                            <TextField
                                fullWidth
                                label="Confirm password"
                                margin="normal"
                                name="confirm"
                                onChange={handleChange}
                                type="password"
                                value={values.confirm}
                                variant="outlined"
                            />
                            </CardContent>
                            <Divider />
                            <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 2
                            }}
                            >
                            <Button
                                color="primary"
                                variant="contained"
                            >
                                Update
                            </Button>
                            </Box>
                        </Card>
                    </form>
                </div>
            </div>
        </div>
             </>

  );
};

export default Settings;
