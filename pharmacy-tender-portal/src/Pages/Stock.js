import React, { useState } from 'react';

const Stock = () => {
  // Initial stock data
  const [stock, setStock] = useState([
    { id: 1, name: 'Paracetamol', quantity: 200, unit: 'mg', expiry: '2025-03-01' },
    { id: 2, name: 'Ibuprofen', quantity: 150, unit: 'mg', expiry: '2025-05-15' },
    { id: 3, name: 'Aspirin', quantity: 300, unit: 'mg', expiry: '2025-07-30' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [newStock, setNewStock] = useState({ name: '', quantity: 0, unit: '', expiry: '' });

  // Handle search
  const filteredStock = stock.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle adding new stock
  const handleAddStock = () => {
    if (newStock.name && newStock.quantity && newStock.unit && newStock.expiry) {
      setStock([
        ...stock,
        { id: stock.length + 1, ...newStock },
      ]);
      setNewStock({ name: '', quantity: 0, unit: '', expiry: '' });
    } else {
      alert('Please fill in all fields to add stock.');
    }
  };

  // Handle deleting stock
  const handleDeleteStock = (id) => {
    setStock(stock.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Stock Management</h2>

      {/* Search Bar */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by drug name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '10px', width: '100%' }}
        />
      </div>

      {/* Stock Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Drug Name</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Quantity</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Unit</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Expiry Date</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStock.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.quantity}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.unit}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.expiry}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <button
                  onClick={() => handleDeleteStock(item.id)}
                  style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Stock Form */}
      <div style={{ marginTop: '20px' }}>
        <h3>Add New Stock</h3>
        <input
          type="text"
          placeholder="Drug Name"
          value={newStock.name}
          onChange={(e) => setNewStock({ ...newStock, name: e.target.value })}
          style={{ margin: '5px', padding: '10px', width: '100%' }}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newStock.quantity}
          onChange={(e) => setNewStock({ ...newStock, quantity: parseInt(e.target.value) })}
          style={{ margin: '5px', padding: '10px', width: '100%' }}
        />
        <input
          type="text"
          placeholder="Unit (e.g., mg, ml)"
          value={newStock.unit}
          onChange={(e) => setNewStock({ ...newStock, unit: e.target.value })}
          style={{ margin: '5px', padding: '10px', width: '100%' }}
        />
        <input
          type="date"
          placeholder="Expiry Date"
          value={newStock.expiry}
          onChange={(e) => setNewStock({ ...newStock, expiry: e.target.value })}
          style={{ margin: '5px', padding: '10px', width: '100%' }}
        />
        <button
          onClick={handleAddStock}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add Stock
        </button>
      </div>
    </div>
  );
};

export default Stock;
