// import React from 'react';
// import './App.css';
import LoginGrid from './LoginGrid';
import AllPostScroll from './AllPostScroll'
import LazyLoad from './LazyLoad';
import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
// import {InlineShareButtons} from 'sharethis-reactjs';


// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

// export default function App() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open Dialog
//       </Button>
//       <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//           Share
//         </DialogTitle>
//         <DialogContent dividers>
//         <InlineShareButtons
//         config={{
//         alignment: 'center',  // alignment of buttons (left, center, right)
//         color: 'social',      // set the color of buttons (social, white)
//         enabled: true,        // show/hide buttons (true, false)
//         font_size: 16,        // font size for the buttons
//         labels: 'cta',        // button labels (cta, counts, null)
//         language: 'en',       // which language to use (see LANGUAGES)
//         networks: [           // which networks to include (see SHARING NETWORKS)
//           'whatsapp',
//           'facebook',
//           'linkedin',
//           'twitter'
          
//         ],
//         padding: 10,          // padding within buttons (INTEGER)
//         radius: 4,            // the corner radius on each button (INTEGER)
//         show_total: false,
//         size: 30,             // the size of each button (INTEGER)

//         // OPTIONAL PARAMETERS
//         url: 'https://www.tarento.com', // (defaults to current url)
//         image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
//         description: 'custom text',       // (defaults to og:description or twitter:description)
//         title: 'custom title',            // (defaults to og:title or twitter:title)
//         message: 'custom email text',     // (only for email sharing)
//         subject: 'custom email subject',  // (only for email sharing)
//         username: 'custom twitter handle' // (only for twitter sharing)
//       }}
//     />
//         </DialogContent>
//         {/* <DialogActions>
//           <Button autoFocus onClick={handleClose} color="primary">
//             Save changes
//           </Button>
//         </DialogActions> */}
//       </Dialog>
//     </div>
//   );
// }



function App() {
  return (
    <div id = 'login'>
      {/* <Router history={browserHistory}>   
            <Redirect from="/" to="/Login" />
            <Route></Route> */}
             {/* <LoginGrid /> */}
             <AllPostScroll />
             {/* <LazyLoad /> */}
             
    </div>
  );
}

export default App;
