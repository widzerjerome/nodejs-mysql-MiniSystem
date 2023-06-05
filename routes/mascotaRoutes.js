
const express = require('express');
const mascotaController = require('../controllers/mascotaController');

const router = express.Router();

router.post('/personas/:dueñoId/mascotas', mascotaController.create);
router.get('/personas/:dueñoId/mascotas', mascotaController.getAllByDueño);

module.exports = router;
