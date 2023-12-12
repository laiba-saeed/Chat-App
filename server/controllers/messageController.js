const messageModel = require("../models/messageModel");

exports.createMessage = async (req, res) => {
  const { userId, chatId, senderId, text } = req.body;
  const message = new messageModel({ userId, chatId, senderId, text });
  try {
    const response = await message.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const messages = await messageModel.find({ chatId });
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
