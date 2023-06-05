const express = require('express');
const personaController = require('../controllers/personaController');

const router = express.Router();

router.post('/personas', personaController.create);
router.get('/personas', personaController.getAll);
router.get('/persona/:id', personaController.getOne);
router.put('/personas/:id', personaController.update);
router.post('/personas/:id/delete', personaController.delete);

module.exports = router;
