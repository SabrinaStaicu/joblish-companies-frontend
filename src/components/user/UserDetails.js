import React, {useState} from 'react'
import { Card } from 'react-bootstrap';
import UserPageContent from './UserPageContent';
import Button from "@material-ui/core/Button";
import Modal from 'react-modal';
import {useHistory} from "react-router-dom";


export default function UserDetails({user}) {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [updatedUser, setUser] = useState({});
    const openToWork1 = user.jobPreferences?.openToWork
    const history = useHistory()

    const userModalStyling = {
        content: {
            borderRadius:"14px",
            width:"40%",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setEdit(false);
    }


    console.log(user.picture)

    return (
        <>
            <Card className="user-card">
                <img className="user-profile-picture" src={user.picture ? user.picture : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"} alt="user's personal avatar" />
                <br/>
                <Card.Body>
                    <Card.Text style={{ textAlign: 'center' }}>
                        <h5>{user.firstName} {user.lastName}</h5>
                        {user.country} {user.city} <br />
                        <div style={{width:"24%", maxWidth:"none", minWidth:"auto", marginLeft:"38%", marginTop:"2%", position:"relative"}}>
                            <div style={{margin:"0 .8rem", height:"8vh"}}>
                                <section style={{borderRadius:"14px", backgroundColor:"#e9e5df", height:"100%", display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
                                    {openToWork1 ? (<a style={{color:"#3a3a3a", margin:"8px", cursor:"pointer"}} onClick={openModal}>
                                        <h3 style={{padding:"0", margin:"0", fontSize:"20px", display:"inline-block"}}>Open to work</h3>
                                        <p style={{padding:"0", margin:"0" , width:"100%", textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap"}}>Junior Developer · Marketing Specialist · System Administrator </p>
                                        <p style={{color:"#0a66c2"}}>see all details</p>
                                    </a>):(<a onClick={openModal} style={{margin:"7px", cursor:"pointer"}}><h3 style={{padding:"0", margin:"0", fontSize:"20px", display:"inline-block"}}>Not open to work!</h3></a>)}
                                </section>
                            </div>
                        </div>
                        {/* <h5 style={{margin: "10px"}}>{user.lookingForJob ? "OPEN TO WORK" : "NOT LOOKING FOR A JOB"}</h5> */}
                    </Card.Text>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={userModalStyling}
                    >
                        <div style={{display:"flex", flexDirection:"column", position:"relative"}}>
                            <div style={{display:"flex", justifyContent:"space-between",  borderBottom:"1px solid lightgrey", paddingBottom:"20px"}}>
                                <h3>Job preferences</h3>
                                <div style={{textAlign: "right"}}>
                                <Button color="primary" onClick={closeModal}>X</Button>
                                </div>
                            </div>
                            <div >
                                <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", marginTop:"20px"}}>
                                    <div style={{width:"20%"}}>
                                    <a><img className="profile-picture-modal" src={user.picture ? user.picture : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"} /></a>
                                    </div>
                                    <div>
                                    <h3 style={{marginTop:"10%"}}>
                                        <strong style={{fontSize:"24px", color:"grey"}}>{user.firstName} {user.lastName}</strong>
                                        {openToWork1 ? (<p>is open to work</p>) : (<p>is not open to work</p>)}
                                    </h3>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <ul style={{listStyle:"none", marginTop:"30px"}}>
                                    <li style={{paddingBottom:"5px", marginBottom:"10px"}}>
                                        <h3 style={{ fontSize:"14px", fontWeight:"800", color:"#3a3a3a"}}>Job titles</h3>
                                        {/* <p>Junior Developer · Marketing Specialist · System Administrator</p> */}
                                        <ul className="nav">
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Junior Developer</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Marketing Specialist</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">System Administrator</i>
                                                    </button>
                                                </li>
                                        </ul>
                                    </li>
                                    <li style={{paddingBottom:"5px", marginBottom:"10px"}}>
                                        <h3 style={{fontSize:"14px", fontWeight:"800", color:"#3a3a3a"}}>Job locations</h3>
                                        {/* <p>Bucharest, Bucharest, Romania</p> */}
                                        <ul className="nav">
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Bucharest</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Bucharest</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Romania</i>
                                                    </button>
                                                </li>
                                        </ul>
                                    </li>
                                    <li style={{paddingBottom:"5px", marginBottom:"10px"}}>
                                        <h3 style={{fontSize:"14px", fontWeight:"800", color:"#3a3a3a"}}>Start date</h3>
                                        <p>Immediately, I’m actively applying</p>
                                    </li>
                                    <li style={{paddingBottom:"5px", marginBottom:"10px"}}>
                                        <h3 style={{fontSize:"14px", fontWeight:"800", color:"#3a3a3a"}}>Job types</h3>
                                        {/* <p>Full-time · Remote · Part-time</p> */}
                                        <ul className="nav">
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Full-time</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Remote</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Part-time</i>
                                                    </button>
                                                </li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </Modal>
                    <UserPageContent />
                </Card.Body>
            </Card>
        </>
    )
}