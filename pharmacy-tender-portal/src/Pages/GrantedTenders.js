import React, { useEffect, useState } from 'react';

const GrantedTenders = () => {
    const [tenders, setTenders] = useState([]);

    useEffect(() => {
        // Fetch granted tenders from an API or database
        fetch('/api/granted-tenders')
            .then(response => response.json())
            .then(data => setTenders(data))
            .catch(error => console.error('Error fetching tenders:', error));
    }, []);

    return (
        <div>
            <h1>Granted Tenders</h1>
            <ul>
                {tenders.map(tender => (
                    <li key={tender.id}>
                        <h2>{tender.title}</h2>
                        <p>{tender.description}</p>
                        <p><strong>Granted on:</strong> {new Date(tender.grantedDate).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GrantedTenders;