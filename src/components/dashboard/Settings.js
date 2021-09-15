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
import {useForm} from "react-hook-form";

const Settings = (props) => {

    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");

    // const [values, setValues] = useState({
  //   password: '',
  //   confirm: ''
  // });
  //
  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value
  //   });
  // };
    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <>
        <Navbar />
            {/*<div style={{display:"flex", flexDirection:"row"}}>*/}
            {/*<SideBar/>*/}
            {/*<div className="main-body">*/}
            {/*    <div className="page-wrapper">*/}
            {/*        <div className="flex-body"></div>*/}
            {/*            <form {...props}>*/}
            {/*                <Card>*/}
            {/*                    <CardHeader*/}
            {/*                    subheader="Update password"*/}
            {/*                    title="Password"*/}
            {/*                    />*/}
            {/*                    <Divider />*/}
            {/*                    <CardContent>*/}
            {/*                    <TextField*/}
            {/*                        fullWidth*/}
            {/*                        label="Password"*/}
            {/*                        margin="normal"*/}
            {/*                        name="firstPassword"*/}
            {/*                        onChange={e => setFirstPassword(e.target.value)}*/}
            {/*                        type="password"*/}
            {/*                                // value={values.password}*/}
            {/*                        variant="outlined"*/}
            {/*                        {...register("firstPassword", {*/}
            {/*                            required: true,*/}
            {/*                            minLength: 5,*/}
            {/*                            maxLength: 35,*/}
            {/*                            validate: {*/}
            {/*                                positive: firstPassword === secondPassword*/}
            {/*                            }*/}
            {/*                        })}*/}
            {/*                    />*/}
            {/*                        {errors.firstPassword && <span style={{color:"red"}}>Please enter a password between 5 and 35 characters long, password have to also match each other!</span>}*/}
            {/*                    <TextField*/}
            {/*                        fullWidth*/}
            {/*                        label="Confirm password"*/}
            {/*                        margin="normal"*/}
            {/*                        name="secondPassword"*/}
            {/*                        onChange={e => setSecondPassword(e.target.value)}*/}
            {/*                        type="password"*/}
            {/*                        // value={values.confirm}*/}
            {/*                        variant="outlined"*/}
            {/*                    />*/}
            {/*                        {...register("secondPassword", {*/}
            {/*                            required: true,*/}
            {/*                            minLength: 5,*/}
            {/*                            maxLength: 35,*/}
            {/*                            validate: {*/}
            {/*                                positive: firstPassword === secondPassword*/}
            {/*                            }*/}
            {/*                        })}*/}
            {/*                        />*/}
            {/*                        {errors.secondPassword && <span style={{color:"red"}}>Please enter a password between 5 and 35 characters long, password have to also match each other!</span>}*/}
            {/*                    </CardContent>*/}
            {/*                    <Divider />*/}
            {/*                    <Box*/}
            {/*                    sx={{*/}
            {/*                        display: 'flex',*/}
            {/*                        justifyContent: 'flex-end',*/}
            {/*                        p: 2*/}
            {/*                    }}*/}
            {/*                    >*/}
            {/*                    <Button*/}
            {/*                        color="primary"*/}
            {/*                        variant="contained"*/}
            {/*                        type="submit"*/}
            {/*                    >*/}
            {/*                        Update*/}
            {/*                    </Button>*/}
            {/*                    </Box>*/}
            {/*                </Card>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>

  );
};

export default Settings;
