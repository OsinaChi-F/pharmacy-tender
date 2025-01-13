import React, { useState } from "react";

const CreateTender = () => {
  const [supplier, setSupplier] = useState("");
  const [date, setDate] = useState("");
  const [tenderType, setTenderType] = useState("");
  const [drugs, setDrugs] = useState([{ name: "", quantity: "", unit: "" }]);

  const handleDrugChange = (index, field, value) => {
    const updatedDrugs = [...drugs];
    updatedDrugs[index][field] = value;
    setDrugs(updatedDrugs);
  };

  const handleAddDrug = () => {
    setDrugs([...drugs, { name: "", quantity: "", unit: "" }]);
  };

  const handleSubmit = () => {
    console.log({ supplier, date, tenderType, drugs });
    alert("Tender created successfully!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Create Tender</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: "10px" }}>
          <label>Choose Supplier:</label>
          <select
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            required
          >
            <option value="">Select Supplier</option>
            <option value="Supplier A">Supplier A</option>
            <option value="Supplier B">Supplier B</option>
            <option value="Supplier C">Supplier C</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Select Tender:</label>
          <select
            value={tenderType}
            onChange={(e) => setTenderType(e.target.value)}
            required
          >
            <option value="">Select Tender Type</option>
            <option value="Open Tender">Open Tender</option>
            <option value="Limited Tender">Limited Tender</option>
            <option value="Single Tender">Single Tender</option>
          </select>
        </div>

        {drugs.map((drug, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <select
              value={drug.name || ""}
              onChange={(e) => handleDrugChange(index, "name", e.target.value)}
              required
            >
              <option value="">Select Drug</option>
              
              <optgroup label="Analgesics">Analgesics</optgroup>
              <option value="Drug i">Paracetamol</option>
              <option value="Drug ii">Ibuprofen</option>
              <option value="Drug iii">Aspirin</option>
              <option value="Drug iv">Naproxen</option>
              <option value="Drug v">Diclofenac</option>

              <optgroup label="Antibiotics">Antibiotics</optgroup>
              <option value="Drug i">Penicillins</option>
              <option value="Drug ii">Cephalosporins</option>
              <option value="Drug iii">Macrolides</option>
              <option value="Drug iv">Quinolones</option>
              <option value="Drug v">Tetracyclines</option>
              <option value="Drug vi">Sulfonamides</option>

              <optgroup label="Anticoagulants">Anticoagulants</optgroup>
              <option value="Drug i">Warfarin</option>
              <optgroup label="Antidepressants">Antidepressant</optgroup>
              <option value="Drug i">SSRIS</option>
              <optgroup label="Antidiabetics">Antidiabetics</optgroup>
              <option value="Drug i">Biguanides</option>
              <optgroup label="Antipsychotics">Antipsychotics</optgroup>
              <option value="Drug i">Atypical</option>
              <optgroup label="Antiviral">Antiviral</optgroup>
              <optgroup label="Bronchodilators">Bronchodilators</optgroup>
              <optgroup label="Diuretics">Diuretics</optgroup>
              <optgroup label="Laxatives">Laxatives</optgroup>
              <optgroup label="Sedatives">Sedatives</optgroup>
            </select>
            <input
              type="number"
              placeholder="Quantity"
              value={drug.quantity}
              onChange={(e) => handleDrugChange(index, "quantity", e.target.value)}
              required />
            <input
              type="text"
              placeholder="Unit (e.g., mg, ml)"
              value={drug.unit}
              onChange={(e) => handleDrugChange(index, "unit", e.target.value)}
              required />
          </div>
        ))}
        <button type="button" onClick={handleAddDrug}>
          Add Another Drug
        </button>

        <div style={{ marginTop: "20px" }}>
          <button type="button" onClick={handleSubmit}>
            Create Tender
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTender;
