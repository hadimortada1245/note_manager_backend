const notes = require("../models/notes");
const add = async (req, res) => {
  const {title ,content} = req.body;
  try {
      if (!title || !content )
      throw Error("All fields must be filled");
    const result = await notes.create({ title, content });
    if (!result) throw Error("An error occured during adding a note");
    res.status(200).json({ message: "A note added successfully", result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add a note", error: error.message });
  }
};
const getAll = async (req, res) => {
  try {
    const allNotes = await notes.find({});
    if (!allNotes) throw Error("An error occured while getting all notes");
    res.status(200).json({ message: "Getting all notes successfully", allNotes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to select all notes", error: error.message });
  }
};
const getNoteById = async (req, res) => {
  const { Id } = req.params;
  try {
    const note = await notes.findOne({ _id: Id });
    if (!note) throw Error("An error occured while getting a note");
    res.status(200).json({ message: "Getting a note successfully", note });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to select a note", error: error.message });
  }
};

const deleteNoteById = async (req, res) => {
  const { Id } = req.params;
  try {
    const deleteOne = await notes.findOneAndDelete({ _id: Id });
    if (!deleteOne) throw Error("An error occured while deleting a note");
    res.status(200).json({ message: "Deleting a note successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete a note", error: error.message });
  }
};
const updateNoteById = async (req, res) => {
  const { Id } = req.params;
  const { title, content} = req.body;
  try {
    if (!title || !content)
      throw Error("All fields must be filled");
    const updateOne = await notes.findOneAndUpdate(
      { _id: Id },
      { title, content}
    );
    if (!updateOne) throw Error("An error occured while updating a note");
    const note = await notes.findOne({ _id: Id });
    res.status(200).json({ message: "A note  updated successfully" ,updatedNote:note});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update a note", error: error.message });
  }
};
module.exports = {
  add,
  getAll,
  getNoteById,
  deleteNoteById,
  updateNoteById,
};
