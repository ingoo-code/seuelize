const express = require('express');
const router = express.Router();
const controller = require('./board.controller');

router.use('/list',controller.list);
router.use('/view',controller.view);
router.use('/write',controller.write);
router.use('/modify',controller.modify);

module.exports = router;


//'/board/view'