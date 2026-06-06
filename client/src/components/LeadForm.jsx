import React, { useState, useEffect } from "react";

const LeadForm = ({ addLead, editingLead, updateLead }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    leadStatus: "New",
    notes: "",
  });

  useEffect(() => {
    if (editingLead) {
      setFormData(editingLead);
    }
  }, [editingLead]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingLead) {
      updateLead(editingLead._id, formData);
    } else {
      addLead(formData);
    }

    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      leadStatus: "New",
      notes: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />

      <input
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        required
      />

      <select
        name="leadStatus"
        value={formData.leadStatus}
        onChange={handleChange}
      >
        <option>New</option>
        <option>Contacted</option>
        <option>Qualified</option>
        <option>Converted</option>
        <option>Lost</option>
      </select>

      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <button type="submit">
        {editingLead ? "Update Lead" : "Add Lead"}
      </button>
    </form>
  );
};

export default LeadForm;