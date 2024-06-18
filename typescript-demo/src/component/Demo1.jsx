import React, { useState } from 'react';

function Demo1() {
    const [sample, setSample] = useState([]);

    const api = () => {
        fetch("https://dummyjson.com/products?limit=100")
            .then(res => res.json())
            .then(data => setSample(data.products))
            .catch(error => console.error('Error fetching data:', error));
    }

    // Remove duplicate categories
    const uniqueCategories = Array.from(new Set(sample.map((val) => val.rating<=4)));

    return (
        <div>
            <button onClick={api}>Call API</button>
            {uniqueCategories.length > 0 && (
                <ul>
                    {uniqueCategories.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Demo1;
