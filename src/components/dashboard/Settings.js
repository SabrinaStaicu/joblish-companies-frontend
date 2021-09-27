import SideBar from '../dashboard/SideBar'
import Navbar from '../navigation/Navbar'
import {Box, Button, Card, CardContent, CardHeader, Divider, TextField} from '@material-ui/core';
import {useForm} from "react-hook-form";
import CompanyService from "../../service/CompanyService";
import AuthService from "../../service/AuthService";
import {useHistory} from "react-router-dom";

const Settings = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <>
        <Navbar />
            <div style={{display:"flex", flexDirection:"row"}}>
            <SideBar/>
            <div className="main-body" style={{height: "700px"}}>
                <div className="page-wrapper">
                    <div className="flex-body"></div>
                        <form onSubmit={
                            handleSubmit((data) => {
                                CompanyService.changePassword(AuthService.getCurrentUser().id, data)
                                    .then(res => history.push("/dashboard"))
                            })
                        }>
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
                                                name="firstPassword"
                                                type="password"
                                                variant="outlined"
                                                {...register("firstPassword", {required: true, minLength: 5, maxLength: 35})}
                                            />
                                                {errors.firstPassword && <span style={{color:"red"}}>Please enter a password between 5 and 35 characters long, password have to also match each other!</span>}
                                            <TextField
                                                fullWidth
                                                label="Confirm password"
                                                margin="normal"
                                                name="secondPassword"
                                                type="password"
                                                variant="outlined"
                                                {...register("secondPassword", {required: true, minLength: 5, maxLength: 35})}
                                            />
                                                {errors.secondPassword && <span style={{color:"red"}}>Please enter a password between 5 and 35 characters long, password have to also match each other!</span>}
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
                                    type="submit"
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
