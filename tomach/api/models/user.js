const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  datingPreferences: [
    {
      type: String,
    },
  ],
  imageUrls: [
    {
      type: String,
    },
  ],
  prompts: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  likeProfiles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  receivedLike: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
      },
      image: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
      },
    },
  ],
  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  blockedUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const User = mongoose.model('User',userSchema);

module.exports = User;
