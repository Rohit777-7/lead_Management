const Lead = require("../models/Lead");

// Create Lead
const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Leads
const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({
      createdAt: -1,
    });

    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Search Leads
const searchLeads = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const leads = await Lead.find({
      $or: [
        {
          name: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          email: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          companyName: {
            $regex: keyword,
            $options: "i",
          },
        },
      ],
    });

    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Lead
const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(lead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Lead
const deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Lead Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createLead,
  getLeads,
  searchLeads,
  updateLead,
  deleteLead,
};