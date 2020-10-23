import React, { Component } from "react";

import "./Style.css";
import ImageGridList from "./Image";

import { browserHistory } from "react-router";
// import "./Style.css";
import { makeStyles } from "@material-ui/core/styles";
//import Button from '@material-ui/core/Button';
// import { UserContext } from "./Context";
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Note from "./Note";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: "$labelcolor"
        }
      }
    }
  }
})


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Image: "/static/media/image.87dcdccf.jpg"
    }
  }

  updateImage = (tile) => {
    this.setState({Image:tile.img});
    console.log(this.state.Image);
  };

  onUploadImage = (uploadedImage) => {
    this.setState({uploadedImage});
    console.log(uploadedImage);
  };

  
  render() {
    return (
      <div>
        <div className="split1 left1">
          <ImageGridList
            onPassImage={this.updateImage}
           onUploadImage={this.onUploadImage}
          />{" "}
        </div>

        <div className="split1 right1" style={{ backgroundColor: "#5233b0" }}>
        <MuiThemeProvider theme={theme}>
          <IconButton variant='cpntained' style={{position:'absolute', left:0, top:0,
          backgroundColor:'#5233b0', padding:10, marginLeft:5, marginTop:4, color:'white' }}
          onClick={() => browserHistory.push("/AllPost/")}>

          <ArrowBackIcon  />
          </IconButton>
          </MuiThemeProvider>
          <Note Image={this.state.Image}/>
        </div>
      </div>
    );
  }
}
