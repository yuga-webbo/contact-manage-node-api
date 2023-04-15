const express = require("express");
const router = express.Router();
const {getContact,createContact,getAllContact,updateContact,deleteContact}=require("../controllers/contactController");

router.route("/").get(getAllContact).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports=router;