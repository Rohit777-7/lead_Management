import React from "react";

const LeadTable = ({ leads, deleteLead, setEditingLead }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {leads.map((lead) => (
          <tr key={lead._id}>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.phoneNumber}</td>
            <td>{lead.companyName}</td>
            <td>{lead.leadStatus}</td>

            <td>
              <button onClick={() => setEditingLead(lead)}>
                Edit
              </button>

              <button
                onClick={() => deleteLead(lead._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;