const express = require('express');
const router = express.Router();

const batchController = require("../controllers/batchController")
const developerController = require("../controllers/developerController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/c ", batchController.createBatch  )
router.post("/createdeveloper", developerController.createdeveloper)
// router.post("/createBook", bookController.createBook  )
 router.get("/scholarship-developers", developerController.scholardevelopers)
// router.put('/books', bookController.updateBooks)

module.exports = router;
module.exports = router;
