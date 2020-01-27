import React from 'react';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './ViewDetails.scss'


class ViewDetails extends React.Component {
    constructor(props) {
        console.log("props rec", props);
        super(props);
        this.state = {

        }
    }
    editBtnclick(){
        this.props.history.push({
            pathname: '/',
        state:true})
    }
    render() {
        
        return (
            <div className="mainWrapper">
                <div className="card">
                    <div className="contentWrapper">
                        <p className="textCenter personalInfoHeading">Personal Details</p>
                    </div>
                    <div className="personlDetailWrapperIn">
                        <Grid container spacing={2}>
                        <Grid item sm={6} className="">
                            <p className="psnlDetailP">First Name</p>
                        </Grid>
                        <Grid item sm={6} className="">
                        <p className="psnlDetailP">{this.props.personalInfo.fName}</p>
                        </Grid>
                        <Grid item sm={6} className="">
                            <p className="psnlDetailP">LastName Name</p>
                        </Grid>
                        <Grid item sm={6} className="">
                            <p className="psnlDetailP">{this.props.personalInfo.lName}</p>
                        </Grid>
                        <Grid item sm={6} className="">
                            <p className="psnlDetailP">Email Address</p>
                        </Grid>
                        <Grid item sm={6} className="">
                            <p className="psnlDetailP">{this.props.personalInfo.email}</p>
                        </Grid>
                        <Grid item sm={6} className="">
                            <p className="psnlDetailP">Phone Number</p>
                        </Grid>
                        <Grid item sm={6} className="">
                            <p className="psnlDetailP">{this.props.personalInfo.phoneNum}</p>
                        </Grid>
                        <Grid item sm={6} className="">
                            <p className="psnlDetailP">Gender</p>
                        </Grid>
                        <Grid item sm={6} className="">
                            <p className="psnlDetailP">{this.props.personalInfo.gender}</p>
                        </Grid>
                        </Grid>
                        <div className="editBtnWrapper textCenter">
                        <Button onClick={()=>this.editBtnclick()} variant="contained" color="primary" >
                                            Edit
                                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({personalInfo}) => {
    return {
        personalInfo
    };
};
export default connect(mapStateToProps)(ViewDetails);