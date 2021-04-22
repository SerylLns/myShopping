const router = require("express").Router();
const articleController = require('../controllers/articles.controller');
// const multer = require("multer");
// const upload = multer();


// ARTICLES
router.get('/', articleController.getArticles);
router.post('/', articleController.createArticle);
router.get('/:id', articleController.showArticle);

// COMMENTS & RATING
router.patch("/comment-article/:id", articleController.commentArticle);
router.patch("/delete-comment-article/:id", articleController.deleteCommentArticle);

module.exports = router;
