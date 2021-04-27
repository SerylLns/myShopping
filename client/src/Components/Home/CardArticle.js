import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Paper } from '@material-ui/core';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Star, StarOutline } from "@material-ui/icons";
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
});


const CardArticle = ({article}) => {
  const { _id, title, pictureUrl, price, comments } = article;
  const classes = useStyles();
  return (
    <Paper className={classes.root} style={{margin: "15px 15px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={pictureUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {title}
          </Typography>
          <div className="content-card">
            <div className="rating-card">
              <div className="rate-card">
                <Star color="secondary" />
                <Star color="secondary" />
                <StarOutline color="secondary" />
                <StarOutline color="secondary" />
                <StarOutline color="secondary" />
              </div>
              <p className="comment-card">{comments.length} avis</p>
            </div>
            <h2>{price} €</h2>
          </div>
        </CardContent>
      </CardActionArea>
      <div className="bottom-card">
        <NavLink to={`/${_id}`} >
          <Button size="small" color="primary">
            Voir plus
          </Button>
        </NavLink>
        <Button size="small" color="primary">
          <ShoppingCartIcon color="secondary" />
        </Button>
      </div>
    </Paper>
  );
};

export default CardArticle;