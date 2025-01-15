import React from 'react';

const Vendor = () => {
  // Sample feedback data for vendors
  const feedbacks = [
    {
      id: 1,
      vendorName: 'XYZ Pharmacy',
      strengths: 'Complete documentation, qualified staff, timely delivery.',
      improvements: 'Pricing could be more competitive, consider offering discounts.',
      overallRating: 4.5,
    },
    {
      id: 2,
      vendorName: 'ABC Pharmaceuticals',
      strengths: 'High-quality products, excellent communication.',
      improvements: 'Improve delivery timelines and reduce logistical delays.',
      overallRating: 4.0,
    },
  ];

  return (
    <div>
      <h2>Vendor Feedback</h2>
      <p>Here is the feedback for vendors who participated in the tender process:</p>
      
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vendor Name</th>
            <th>Strengths</th>
            <th>Improvements</th>
            <th>Overall Rating</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.id}>
              <td>{feedback.id}</td>
              <td>{feedback.vendorName}</td>
              <td>{feedback.strengths}</td>
              <td>{feedback.improvements}</td>
              <td>{feedback.overallRating} / 5</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vendor;

