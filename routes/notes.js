const express=require('express');
const router=express.Router();
const notesControllers=require('../controllers/notes');
router.get('/getAll',notesControllers.getAll);
router.get('/getNoteById/:Id',notesControllers.getNoteById);
router.post('/add',notesControllers.add);
router.put('/updateNoteById/:Id',notesControllers.updateNoteById);
router.delete('/deleteNoteById/:Id',notesControllers.deleteNoteById);
module.exports=router;
