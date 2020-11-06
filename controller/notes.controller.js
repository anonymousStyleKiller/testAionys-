const Notes = require('../models/Notes');
const errorHandler = require('../utils/errorHandler')


module.exports.generate = async (req, res) => {
    try {
        const {payload} = req.body;
        const note = new Notes({
            note: payload
        })
        await note.save();
        res.status(200).json({
            resp: note
        })
    } catch (e) {
        errorHandler(res, e);
    }
}

module.exports.getNotes = async (req, res) => {
    try {
        const notes = await Notes.find();
        res.json(notes);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.getNotesById = async (req, res) => {
    try {
        const notes = await Notes.findById(req.params.id);
        res.json(notes);
    } catch (e) {
        errorHandler(res, e);
    }
}

module.exports.removeNote = async (req, res) => {
    try {
        const notes = await Notes.findByIdAndDelete({_id: req.params.id});
        res.json(notes);
    } catch (e) {
        errorHandler(res, e);
    }
}

module.exports.updateNote = async (req, res) => {
    try {
        const notes = await Notes.findOneAndUpdate({_id: req.params.id}, {
            note: req.body.note
        }, {new: true});
        res.json(notes);
    } catch (e) {
        errorHandler(res, e);
    }
}

