import React from 'react';
import Rating from "@material-ui/lab/Rating";
import { Box, Typography, withStyles } from '@material-ui/core';
import FavoriteIcon from "@material-ui/icons/Favorite";

const StyledRating = withStyles({
  iconFilled: {
    color: "#87a330",
  },
  iconHover: {
    color: "#87a330",
  },
})(Rating);

const ArticleComment = ({ comment }) => {
  console.log(comment);
  return (
    <div className="comment-container">
      <h4>{comment.text}</h4>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <StyledRating
          name="customized-color"
          defaultValue={comment.rate}
          // getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          readOnly
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box>
      <p>{comment.commenterPseudo}</p>
      <hr />
    </div>
  );
};

export default ArticleComment;