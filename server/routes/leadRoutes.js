const express = require("express");

const {
  createLead,
  getLeads,
  searchLeads,
  updateLead,
  deleteLead,
} = require("../controllers/leadController");

const router = express.Router();

router.post("/", createLead);

// IMPORTANT
router.get("/search", searchLeads);

router.get("/", getLeads);

router.put("/:id", updateLead);

router.delete("/:id", deleteLead);

module.exports = router;