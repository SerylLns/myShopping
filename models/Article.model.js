const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      maxlength: 200
    },
    category: {
      type: String,
      required: true
    }
    ,
    description: {
      type: String,
      trim: true,
      maxlength: 800,
    },
    pictureUrl: {
      type: String,
      require: true,
    },
    comments: {
      type: [
        {
          commenterId: String,
          commenterPseudo: String,
          text: String,
          rate: Number,
          timestamp: Number,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("article", ArticleSchema);
