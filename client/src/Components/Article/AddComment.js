import { Box, TextField, withStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react';
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../actions/articles.action';

const StyledRating = withStyles({
  iconFilled: {
    color: "#87a330",
  },
  iconHover: {
    color: "#87a330",
  },
})(Rating);

const AddComment = ({ article, getArticle}) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(2.5);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();


  const handleComment = (e) => {
    e.preventDefault();
    if (userData) {
      dispatch(addComment(article._id, userData._id, text, userData.pseudo, rating));
      setText("");
      setRating(0);
      getArticle(article._id)
    }
  };

  return (
    <div className="add-comment">
      <form onSubmit={(e) => handleComment(e)}>
        <TextField
          id="filled-basic"
          color="primary"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: "80%" }}
          label="Donnez nous votre avis "
          name="text"
          variant="outlined"
        />
        <button type="submit">Envoyer</button>
        <Box component="fieldset" borderColor="transparent">
          <StyledRating
            name="rate"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
          />
        </Box>
      </form>
    </div>
  );
};

export default AddComment;