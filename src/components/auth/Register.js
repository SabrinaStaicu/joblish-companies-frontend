import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';
import {useStyles} from "../../util/LoginFormStyling";
import AuthService from "../../service/AuthService";
import Navbar from "../navigation/Navbar";
import {InputLabel, MenuItem, Select} from "@material-ui/core";

const Register = () => {
    const classes = useStyles();
    const history = useHistory()

    const eventHandler = () => {
        history.push("/login")
    }

    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <div>
            <Navbar />
            <Container component="main" maxWidth="xs" style={{height: "800px"}}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} onSubmit={
                        handleSubmit((data) => {
                            AuthService.register(data).then(res => history.push("/login"))
                        })
                    } noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="name"
                                    {...register("name", {required: true})}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                />
                                {errors.firstName && <span style={{color:"red"}}>This field is required!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    {...register("email", {required: true,  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                                    autoComplete="email"
                                />
                                {errors.email && <span style={{color:"red"}}>Please enter a valid email!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("password", {required: true, minLength: 6, maxLength: 15 })}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                {errors.password && <span style={{color:"red"}}>Password must be between 6-12 characters</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("logo", {required: true })}
                                    label="Logo"
                                    id="logo"
                                    autoComplete="logo"
                                />
                                {errors.password && <span style={{color:"red"}}>Please upload the logo of your company!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("description", {required: true, minLength: 5 })}
                                    label="Short description"
                                    id="description"
                                    autoComplete="description"
                                />
                                {errors.description && <span style={{color:"red"}}>Please upload a description for the company!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label" style={{marginBottom: "10px"}}>Category</InputLabel>
                                <Select
                                    id="category"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register("category", {required: true})}
                                >
                                    <MenuItem selected>Category</MenuItem>
                                    <MenuItem value="Arts">Arts</MenuItem>
                                    <MenuItem value="Education">Education</MenuItem>
                                    <MenuItem value="Marketing">Marketing</MenuItem>
                                    <MenuItem value="Sales">Sales</MenuItem>
                                    <MenuItem value="IT">IT</MenuItem>
                                    <MenuItem value="Finance">Finance</MenuItem>
                                    <MenuItem value="Healthcare">Healthcare</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2" onClick={eventHandler}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}

export default Register;