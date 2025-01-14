import React, { useState } from 'react';

const CreateTenderByDate = () => {
    const [tenderDate, setTenderDate] = useState('');
    const [tenderDetails, setTenderDetails] = useState('');

    const handleDateChange = (e) => {
        setTenderDate(e.target.value);
    };

    const handleDetailsChange = (e) => {
        setTenderDetails(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle tender creation
        console.log('Tender Date:', tenderDate);
        console.log('Tender Details:', tenderDetails);
    };

    return (
        <div>
            <h1>Create Pharmacy Tender by Date</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="tenderDate">Tender Date:</label>
                    <input
                        type="date"
                        id="tenderDate"
                        value={tenderDate}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tenderDetails">Tender Details:</label>
                    <textarea
                        id="tenderDetails"
                        value={tenderDetails}
                        onChange={handleDetailsChange}
                        required
                    />
                </div>
                <button type="submit">Create Tender</button>
            </form>
        </div>
    );
};

export default CreateTenderByDate;