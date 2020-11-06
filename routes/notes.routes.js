const {Router} = require('express');
const router = Router();
const {generate, getNotes, getNotesById, removeNote, updateNote} = require('../controller/notes.controller');

//api/notes
router.get('', getNotes);
router.post('', generate);
router.get('/:id', getNotesById);
router.delete('/:id', removeNote);
router.put('/:id', updateNote);

module.exports = router;