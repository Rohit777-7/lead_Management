import React, { useEffect, useState } from "react";
import API from "./services/api";
import LeadForm from "./components/LeadForm";
import LeadTable from "./components/LeadTable";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [leads, setLeads] = useState([]);
  const [allLeads, setAllLeads] = useState([]);
  const [editingLead, setEditingLead] = useState(null);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    try {
      const res = await API.get("/");

      setLeads(res.data);
      setAllLeads(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const addLead = async (lead) => {
    try {
      await API.post("/", lead);

      fetchLeads();
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Failed to add lead"
      );
    }
  };

  const updateLead = async (id, lead) => {
    try {
      await API.put(`/${id}`, lead);

      setEditingLead(null);

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLead = async (id) => {
    try {
      await API.delete(`/${id}`);

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  const searchLead = (value) => {
    setSearch(value);

    if (value.trim() === "") {
      setLeads(allLeads);
      return;
    }

    const filtered = allLeads.filter(
      (lead) =>
        lead.name
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        lead.email
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        lead.companyName
          .toLowerCase()
          .includes(value.toLowerCase())
    );

    setLeads(filtered);
  };

  return (
    <div className="container">
      <h1>🚀 Lead Management CRM</h1>

      <Dashboard leads={leads} />

      <input
        type="text"
        className="search"
        placeholder="Search by Name, Email or Company"
        value={search}
        onChange={(e) =>
          searchLead(e.target.value)
        }
      />

      <LeadForm
        addLead={addLead}
        editingLead={editingLead}
        updateLead={updateLead}
      />

      <LeadTable
        leads={leads}
        deleteLead={deleteLead}
        setEditingLead={setEditingLead}
      />
    </div>
  );
}

export default App;