import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import levi from './levi.png';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    height: '50vh',
    borderRadius: '0',
    textAlign: "center",
    
  },
  media: {
    // height: 311.5,
    height: 260,

  },
  content: {
    height:100,
    backgroundColor:'#edf5fc',
    padding:'20px'
    
  }
});

export default function CardLogin(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea >
       
        <CardContent className={classes.content}>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Dog {props.no}
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
          Teamwork is the collaborative effort of a group to achieve a common goal 
          or to complete a task in the most effective and efficient way.
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="TeamWork"
        />
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
