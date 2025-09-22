// emissionRoutes.js
const express = require('express');
const protect = require('../middleware/protect');
const router = express.Router();

router.get('/', protect ,async (req, res) => {
  try {
    const userId = req.user.id; // From JWT middleware (auth)
    
    const emissionData = await Emission.findOne({
      where: { userId }
    });

    if (!emissionData) {
      return res.status(404).json({ message: 'Emission data not found for this user' });
    }

    res.json(emissionData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
