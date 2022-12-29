const dataModel = require("../models/schema");

module.exports.getList = async (req, res) => {
  const find = await dataModel.find();
  res.json(find);
};
module.exports.saveList = async (req, res) => {
  const { text } = req.body;

  const save1 = await new dataModel({ text })
  await save1.save();
  res.json(save1);
  
      
};
module.exports.deleteList = async (req, res) => {
 
  const del = await dataModel.findByIdAndDelete(req.body.id);
  res.json(del);
};
module.exports.updateList = async (req, res) => {
  const ListItem = await dataModel.findById(req.body.id);
  ListItem.text = req.body.text;
  ListItem.save();
  res.json(ListItem);
};
