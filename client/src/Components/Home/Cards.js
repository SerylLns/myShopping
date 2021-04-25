import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../actions/articles.action';
import { isEmpty } from '../../utils/utils';
import CardArticle from './CardArticle';

const Cards = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesReducer);
  useEffect(() => {
    dispatch(getArticles(10));
  },[dispatch])
  return (
    <>
      <Grid container direction="row" style={{marginTop: "20px"}}  wrap="wrap" justify="space-around" >
        {!isEmpty(articles[0]) && articles.map((article) => {
          return (
              < CardArticle key={article._id} article={article}/>
          );
        })}
      </Grid>
    </>
  );
};

export default Cards;