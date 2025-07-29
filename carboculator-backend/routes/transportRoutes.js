const express = require('express');
const router = express.Router();
const {
  saveTransportData,
  getTransportData,
  deleteTransportData,
} = require('../controllers/TransportController');

router.post('/', saveTransportData);
router.get('/', getTransportData);
router.delete('/:id', deleteTransportData);

module.exports = router;
