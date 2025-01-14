import React from 'react';

const Employee = () => {
  // Sample employee data
  const employees = [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'Chief Pharmacist',
      qualifications: 'Pharm.D',
      experience: 10,
      licenseNo: 'PH12345',
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'Pharmacy Technician',
      qualifications: 'Diploma in Pharmacy',
      experience: 5,
      licenseNo: 'TECH56789',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      role: 'Inventory Manager',
      qualifications: 'B.Sc in Business Administration',
      experience: 8,
      licenseNo: 'N/A',
    },
  ];

  return (
    <div>
      <h2>Employee Management</h2>
      <p>Manage Employee details</p>

      {/* Display employee details in a table */}
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Qualifications</th>
            <th>Experience (Years)</th>
            <th>License Number</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.qualifications}</td>
              <td>{employee.experience}</td>
              <td>{employee.licenseNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
