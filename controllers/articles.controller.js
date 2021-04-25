const UserModel = require("../models/User.model");
const ArticleModel = require("../models/Article.model");
const ObjectID = require("mongoose").Types.ObjectId;
const { cloudinary } = require("../utils/cloudinary");
// const fs = require("fs");

module.exports.getArticles = (req, res) => {
  ArticleModel.find((err, data) => {
    if (!err) {
      res.status(200).json(data);
    } else {
      res.status(400).send(err);
    }
  }).sort({ createdAt: -1 });
};

module.exports.showArticle = (req, res) => {
  ArticleModel.findById(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json(data);
    } else {
      res.status(400).send(err);
    }
  });
};

module.exports.createArticle = async (req, res) => {
  try {
    const file = req.body.file;
    const uploadResponse = await cloudinary.uploader.upload(file, {
      upload_preset: "e-commerce",
    });
    const pictureUrl = uploadResponse.url;
    const newArticle = new ArticleModel({
      pictureUrl: pictureUrl,
      price: req.body.price,
      posterId: req.body.posterId,
      category: req.body.category,
      title: req.body.title,
      description: req.body.description,
      comments: [],
    });
    const article = await newArticle.save();
    return res.status(200).json(article);
  } catch (error) {
    console.log(error);
    res.status(400).json({ err: error });
  }
};

module.exports.commentArticle = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }
  try {
    return ArticleModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.pseudo,
            text: req.body.text,
            rate: req.body.rate,
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true },
      (err, data) => {
        if (!err) {
          return res.send(data);
        } else {
          return res.status(400).send(err);
        }
      }
    );
  } catch (error) {
    res.status(400).json({ err: error });
  }
};

module.exports.deleteCommentArticle = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }
  try {
    return ArticleModel.findByIdAndUpdate(req.params.id,
      {
        $pull: {
          comments: {
            _id: req.body.commentId,
          },
        },
      },
      { new: true },
      (err, data) => {
        if (!err) {
          return res.send(data);
        } else {
          return res.status(400).send(err);
        }
      }
    )
  } catch (error) {
    res.status(400).json({ err: error });
  }
};
