import React from 'react';
import Navbar from '../navigation/Navbar';
import {useHistory, useLocation} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {useForm} from "react-hook-form";
import JobService from '../../service/JobService';
import {useStyles} from "../../util/FormStyling";
import {InputLabel, MenuItem, Select} from "@material-ui/core";

const AddJob = () => {
    useLocation();
    const classes = useStyles();
    const history = useHistory()

    const { register, handleSubmit, formState: {errors} } = useForm({});

    return (
        <>
        <Navbar />
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Add job
                    </Typography>
                    <form className={classes.form} onSubmit={
                        handleSubmit((data) => {
                            JobService.addJob(data)
                            history.push("/dashboard")
                        })
                    } noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    {...register("category", {required: true})}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="category"
                                    label="Category"
                                    autoFocus
                                />
                                {errors.firstName && <span style={{color:"red"}}>This field is required!</span>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    {...register("city", {required: true})}
                                    autoComplete="city"
                                />
                                {errors.lastName && <span style={{color:"red"}}>This field is required!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="country"
                                    label="Country"
                                    {...register("country", {required: true})}
                                    autoComplete="country"
                                />
                                {errors.email && <span style={{color:"red"}}>Please enter a valid email!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("date", {required: true, minLength: 2, maxLength: 30 })}
                                    label="Date"
                                    type="date"
                                    id="date"
                                    autoComplete="date"
                                />
                                {errors.password && <span style={{color:"red"}}>Please enter a valid city name!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("description", {required: true, minLength: 2})}
                                    label="Description"
                                    type="description"
                                    id="outlined-multiline-flexible"
                                    autoComplete="description"
                                    multiline
                                    maxRows={20}
                                />
                                {errors.description && <span style={{color:"red"}}>Too short!</span>}
                            </Grid>
                            <Grid item xs={12}>
                            <InputLabel id="demo-simple-select-label" style={{marginBottom: "10px"}}>Job Type</InputLabel>
                                <Select
                                    id="jobType"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="jobType"
                                    {...register("jobType", {required: true})}
                                    >
                                    <MenuItem selected>Job Type</MenuItem>
                                    <MenuItem value="PART_TIME">Part Time</MenuItem>
                                    <MenuItem value="FULL_TIME">Full Time</MenuItem>
                                </Select>
                                {errors.jobType && <span style={{color:"red"}}>Please enter a valid JobType</span>}
                            </Grid>
                            <Grid item xs={12}>
                            <InputLabel id="demo-simple-select-label" style={{marginBottom: "10px"}}>Job Type</InputLabel>
                                <Select
                                    id="experienceType"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="experienceType"
                                    {...register("experienceType", {required: true})}
                                    >
                                    <MenuItem selected>Experience Level</MenuItem>
                                    <MenuItem value="JUNIOR">Junior</MenuItem>
                                    <MenuItem value="MID">Mid</MenuItem>
                                    <MenuItem value="SENIOR">Senior</MenuItem>
                                </Select>
                                {errors.experienceType && <span style={{color:"red"}}>Please enter a valid experience level</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("salary", {required: true, minLength: 2, maxLength: 20, pattern: /^[0-9\b]+$/ })}
                                    label="Salary"
                                    type="salary"
                                    id="salary"
                                    autoComplete="salary"
                                />
                                {errors.salary && <span style={{color:"red"}}>Please enter a valid Salary!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("title", {required: true})}
                                    label="Title"
                                    type="title"
                                    id="title"
                                    autoComplete="title"
                                />
                                {errors.title && <span style={{color:"red"}}>Too short!</span>}
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add Job
                        </Button>
                    </form>
                </div>
            </Container>    
        </>
    )
}

export default AddJob
