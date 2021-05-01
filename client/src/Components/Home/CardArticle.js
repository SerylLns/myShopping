import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Paper } from '@material-ui/core';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from 'react-router-dom';
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { rateAverage } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { addArticle } from '../../actions/cart.action';

const StyledRating = withStyles({
  iconFilled: {
    color: "#87a330",
  },
  iconHover: {
    color: "#87a330",
  },
})(Rating);

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
});


const CardArticle = ({article}) => {
  const { _id, title, pictureUrl, price, comments } = article;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addArticle(article));
  }
  return (
    <Paper className={classes.root} style={{ margin: "15px 15px" }}>
      <NavLink to={`/${_id}`}>
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
                  <Box component="fieldset" borderColor="transparent">
                    <StyledRating
                      name="rate"
                      value={rateAverage(comments)}
                      readOnly
                      precision={0.5}
                      icon={<FavoriteIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
                <p className="comment-card">{comments.length} avis</p>
              </div>
              <h2>{price} €</h2>
            </div>
          </CardContent>
        </CardActionArea>
      </NavLink>
      <div className="bottom-card">
        <NavLink to={`/${_id}`}>
          <Button size="small" color="primary">
            Voir plus
          </Button>
        </NavLink>
        <Button size="small" color="primary">
          <ShoppingCartIcon onClick={() => handleCart()} color="secondary" />
        </Button>
      </div>
    </Paper>
  );
};

export default CardArticle;