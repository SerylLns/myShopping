import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../actions/articles.action';

const Cards = () => {
  const posts = useSelector((state) => state.articlesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles(10));
    if(posts) console.log(posts);
  },[posts])
  return (
    <div>
      <h1>cards</h1>
    </div>
  );
};

export default Cards;