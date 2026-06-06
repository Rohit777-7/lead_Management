import React from "react";

const Dashboard = ({ leads }) => {
  const total = leads.length;
  const converted = leads.filter(
    (lead) => lead.leadStatus === "Converted"
  ).length;

  const qualified = leads.filter(
    (lead) => lead.leadStatus === "Qualified"
  ).length;

  const lost = leads.filter(
    (lead) => lead.leadStatus === "Lost"
  ).length;

  return (
    <div className="dashboard">
      <div className="card">📋 Total Leads: {total}</div>
      <div className="card">⭐ Qualified: {qualified}</div>
      <div className="card">✅ Converted: {converted}</div>
      <div className="card">❌ Lost: {lost}</div>
    </div>
  );
};

export default Dashboard;