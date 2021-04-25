import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Paper } from '@material-ui/core';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Star, StarOutline } from "@material-ui/icons";
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
});


const CardArticle = ({article}) => {
  const { title, pictureUrl, price, category, comments } = article;
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
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
        <Button size="small" color="primary">
          Ajouter
        </Button>
        <Button size="small" color="primary">
          <ShoppingCartIcon color="secondary" />
        </Button>
      </div>
    </Paper>
  );
};

export default CardArticle;