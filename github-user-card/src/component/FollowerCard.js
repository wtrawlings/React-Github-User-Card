import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function FollowerCard (props) {
    console.log(props)
    const data = props.followerDataSet;

    const followerLogins = data.map((foobar) => {
        return(
            <div key={foobar.id}>
                <p><a href={foobar.html_url}>{foobar.login} </a></p>
                <img src={foobar.avatar_url}/>
            </div>
        );
    })

     function MediaCard() {   

    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    );
    }
};

export default FollowerCard

/* This is the beginning of the old area of code
________________________________________________
function FollowerCard (props) {
    console.log(props)
    const data = props.followerDataSet;

    const followerLogins = data.map((foobar) => {
        return(
            <div key={foobar.id}>
                <p><a href={foobar.html_url}>{foobar.login} </a></p>
                <img src={foobar.avatar_url}/>
            </div>
        );
    })

    return(
        <div>
            <h3>{followerLogins} </h3>
        </div>
    );
};

export default FollowerCard
*/