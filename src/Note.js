import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Style.css";
import { withStyles } from "@material-ui/core/styles";
import imagea from "./Image/imagea.jpg";
import axios from 'axios';
import * as API from './Api';
import {browserHistory} from 'react-router';


const styles = (theme) => ({
  textField: {
    marginTop: "-1.5%",
    paddingBottom: "2%",

    color: "black",

    background: "White",

    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },

    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    "&& .MuiInput-root:hover::before": {
      borderColor: "white",
    },
    "&& .MuiInputLabel-root": {
      paddingLeft: "2%",
    },
  },
  button: {
    align: "center",
    backgroundColor: "#1b0f3b",
    color: "#FFFFFF",
    //  width:'25%',
    height: "6%",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#291659",
      borderColor: "#0062cc",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#004040",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "#291659",
    },
  },
});

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Caption: "",
      Text: "",
    };
  }

  handleChange1 = (event) => {
    this.setState({ Caption: event.target.value });
    console.log(this.state.Caption);
  };

  handleChange2 = (event) => {
    this.setState({ Text: event.target.value });
    console.log(this.state.Text);
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(note);
    // console.log(sender);
    axios.post(API.INSERT_WISH,JSON.stringify({
              "emailID":this.props.email,
              "sender":this.props.name,
              "caption":this.caption,
              "note":this.note,
              "imageId":this.props.image,
          }),{headers:{"Content-Type":"application/json"}})
          .then(res => {
            this.setShareId(res.data);
            console.log(res.data);
            // browserHistory.push("/ViewAllPost" )
            this.setNote('');
            this.setSender('');
            this.setCaption('');
         
          })
          
      };

  render() {
    const { classes } = this.props;
    return (
      <div style={{ paddingTop: "2%" }} className="Align-text">
        <div className="note">
          <form onSubmit={this.handleSubmit}>
            {/* <TextField 
              id="Caption"
              label="Write your caption"
              name="Caption"
              onChange={handleChange1}
              className={classes.textField}
              fullWidth = "true"/> */}
            <TextField
              onChange={this.handleChange1}
              name="Caption"
              type="Caption"
              label="Write your Caption"
              InputLabelProps={{ required: false }}
              value={this.state.Caption}
              fullWidth="true"
              className={classes.textField}
              required
            />

            <img
              src={this.props.Image}
              alt="tarento"
              style={{ width: "100%" }}
            />

            <TextField
              style={{ height: "150px" }}
              id="Text"
              label=" Write your message (Max 300 letters)"
              name="Text"
              value={this.state.Text}
              required
              align="justify"
              onChange={this.handleChange2}
              InputLabelProps={{ required: false }}
              inputProps={{ maxLength: 300 }}
              multiline="true"
              className={classes.textField}
              rowsMax={7}
              fullWidth="true"
            />

            <div className="Space">
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
                fullWidth="true"
                style={{ marginTop: "1%" }}
                onClick={() => browserHistory.push('/AllPost/')}
              >
                Post
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Note);
