import React from 'react';
import Rating from "@material-ui/lab/Rating";
import { Box, withStyles } from '@material-ui/core';
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useSelector } from 'react-redux';

const StyledRating = withStyles({
  iconFilled: {
    color: "#87a330",
  },
  iconHover: {
    color: "#87a330",
  },
})(Rating);

const ArticleComment = ({comment}) => {

  return (
    <div className="comment-container">
      <h4>{comment.commenterPseudo}: </h4>
      <p>{comment.text}</p>
      <Box className="rating-stars" component="fieldset" borderColor="transparent">
        <StyledRating
          name="customized-color"
          defaultValue={comment.rate}
          precision={0.5}
          readOnly
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box>
    </div>
  );
};

export default ArticleComment;