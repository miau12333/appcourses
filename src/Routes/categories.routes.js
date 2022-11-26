const { Router } = require("express");
const { createCat, deleteCategories  } = require("../Controllers");
const router = Router();

router.post("/newCat", createCat);
router.post("/deletecategories/:id", deleteCategories);


module.exports = router;