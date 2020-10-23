import React, { useState } from 'react';
import  { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { exportComponentAsJPEG } from "react-component-export-image";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GetAppIcon from '@material-ui/icons/GetApp';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
import {InlineShareButtons} from 'sharethis-reactjs';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    height: '100%',
    borderRadius: '0',
    textAlign: "left",
    padding: 10,
    paddingBottom: 0
  },
  media: {
    height: 320.67,
    // padding: '20px'
  },
  content: {
    height:'auto',
    // backgroundColor:'#e6f0ed',
    padding:'20px'
    
  },
  actions: {
    padding:0
  }
  
});





const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);




export default function AllPostCard(props) {
  const classes = useStyles();
  const cardRef = useRef();
  const [open, setOpen] = React.useState(false);
  const [liked,setLiked] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const copyPost = ()=>{
    console.log("copied");
    navigator.clipboard.writeText('http://localhost:3000/Tarento/Inspire/'+props.shareId);
    alert('Copied!');
  }

  return (
    <div>
    <Card className={classes.root} ref={cardRef}>
      <CardActionArea >
       <CardMedia
          className={classes.media}
          image={props.image}
          title="TeamWork"
        />
        <CardContent className={classes.content}>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Dog {props.no}
          </Typography> */}
          <Typography variant="body1"  component="p" style={{ fontColor: '#42474f' }} >
          {props.caption}
          
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
          {props.note}
          
          </Typography>
          <Typography variant="h6" color="textSecondary" style={{float:"right", font: " Italic 13px Roboto ", marginTop:'4%', marginBottom:'4%',marginRight:'7%', marginLeft:'-5%' }}>
                - {props.sender}
              </Typography>
        </CardContent>
        <CardActions disableSpacing='true' className={classes.actions}>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {liked ?(
          <IconButton className={"MyCustomButton"}style={{marginLeft:"0%",color:"grey",float:"center",align:"center"}}>
          <FavoriteIcon color="action" fontSize="small"  style={{marginLeft:"0%",color:"red",align:"center"}} 
          onClick={() => setLiked(false)} />
         </IconButton>
        ):(
          <IconButton className={"MyCustomButton"}style={{marginLeft:"0%",color:"grey",float:"center",align:"center"}}>
         <FavoriteBorderIcon color="action" fontSize="small"  style={{marginLeft:"0%",color:"grey",align:"center"}} 
         onClick={() => setLiked(true)} />
        </IconButton>
        )}
         
        <IconButton aria-label="share" >
          <ShareIcon style={{ fontSize: 18 }} onClick={handleClickOpen} />
        </IconButton>
        {/* <IconButton className={"MyCustomButton"}style={{marginLeft:"0%",color:"grey",float:"left",align:"left"}}>
        <FileCopyIcon color="action" fontSize="small" style={{marginLeft:"0%",color:"grey",align:"left"}}
                      onClick={copyPost} />
        </IconButton> */}
       
      </CardActions>
      </CardActionArea>
      
    </Card>
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Share
        </DialogTitle>
        <DialogContent dividers>
          
        <InlineShareButtons
        config={{
        alignment: 'center',  // alignment of buttons (left, center, right)
        color: 'social',      // set the color of buttons (social, white)
        enabled: true,        // show/hide buttons (true, false)
        font_size: 16,        // font size for the buttons
        labels: 'cta',        // button labels (cta, counts, null)
        language: 'en',       // which language to use (see LANGUAGES)
        networks: [           // which networks to include (see SHARING NETWORKS)
          'whatsapp',
          'facebook',
          'linkedin',
          'twitter'
          
        ],
        padding: 10,          // padding within buttons (INTEGER)
        radius: 4,            // the corner radius on each button (INTEGER)
        show_total: false,
        size: 30,             // the size of each button (INTEGER)

        // OPTIONAL PARAMETERS
        url: 'https://www.tarento.com', // (defaults to current url)
        image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
        description: 'custom text',       // (defaults to og:description or twitter:description)
        title: 'custom title',            // (defaults to og:title or twitter:title)
        message: 'custom email text',     // (only for email sharing)
        subject: 'custom email subject',  // (only for email sharing)
        username: 'custom twitter handle' // (only for twitter sharing)
      }}
    />
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
