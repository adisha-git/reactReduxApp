import React from 'react';
import {connect} from "react-redux"; 
import './CreatePersonalInformation.scss';
import TextInputCmp from '../../components/TextInputCmp';
import GenderCmp from './components/GenderCmp';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {savePersonalInfo, clearPersonalInfo} from "../../actions/personalInfo";
import {isEmpty} from "../../utils/utils";

const initialState = {
    gender:'female',
    edited:false,
    fName:'',
    lName:'',
    email:'',
    phoneNum:'',
    formError:false
};
class CreatePersonalInformation extends React.Component {
    constructor(props) {
        console.log("props", props);
        super(props);
        this.state = initialState
    }
    componentDidMount(){
        this.setEditedValues();
    }
     setEditedValues(){
        if(this.props.location.state && !isEmpty(this.props.personalInfo)){
            this.setState(this.props.personalInfo);
            this.props.clearPersonalInfo();
        }       
    }
    setInputValues(e){
        const {name, value} = e.target;
        this.setState({[name]:value, formError:false});
        console.log(this.state);
        
    }
    async submitData(){
        console.log("fName", this.state.fName);
        if(this.state.fName==="" || this.state.lName==="" || this.state.email==="" || this.state.phoneNum===""){
            await this.setState({formError:true});
        }
        
        if(!this.state.formError){
            this.setState({formError:false})
            console.log("formError", this.state.formError)
            this.props.savePersonalInfo(this.state);
        this.props.history.push("/data");
        }
    }

    clearBtnClick(){
        this.setState(initialState);
    }
    render() {
        return (
            <div className="mainWrapper">
                <div className="card">
                    <div className="contentWrapper">
                        <p className="textCenter personalInfoHeading">Please Enter Your Personal Information</p>
                        <div className="inputFieldsWrapper">
                            <div className="inputFieldDiv">
                                <TextInputCmp name={"fName"}  value={this.state.fName} onChange={(e)=>this.setInputValues(e)} label={"First Name"} />
                            </div>
                            <div className="inputFieldDiv">
                                <TextInputCmp name={"lName"} value={this.state.lName} onChange={(e)=>this.setInputValues(e)} label={"Last Name"} />
                            </div>
                            <div className="inputFieldDiv">
                                <TextInputCmp name={"email"} value={this.state.email}  onChange={(e)=>this.setInputValues(e)} label={"Email Address"} />
                            </div>
                            <div className="inputFieldDiv">
                                <TextInputCmp name={"phoneNum"} value={this.state.phoneNum} onChange={(e)=>this.setInputValues(e)} label={"Phone Number"} />
                            </div>
                            <div className="inputFieldDiv">
                                <GenderCmp name={"gender"} value={this.state.gender} handleChange={(e)=>this.setInputValues(e)}/>
                            </div>
                            <div>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} className="textCenter">
                                        <Button onClick={()=>this.submitData()} variant="contained" color="primary" >
                                            Submit
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={6} className="textCenter">
                                        <Button onClick={()=>this.clearBtnClick()}  variant="contained" color="secondary" >
                                            Clear
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                            {this.state.formError && <p className="errorText">Please fill all fields.</p>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({personalInfo}) => {
    return {
        personalInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        savePersonalInfo: (personalInfo) => dispatch(savePersonalInfo(personalInfo)),
        clearPersonalInfo: () => dispatch(clearPersonalInfo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePersonalInformation);