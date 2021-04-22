const router = require("express").Router();
const articleController = require('../controllers/articles.controller');
// const multer = require("multer");
// const upload = multer();


// router.get('/' )
router.get('/', articleController.getArticles);
router.post('/', articleController.createArticle);
router.get('/:id', articleController.showArticle);



module.exports = router;