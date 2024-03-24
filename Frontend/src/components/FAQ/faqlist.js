import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FaqList = () => {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/faqs');
                setFaqs(response.data);
            } catch (err) {
                console.error('Error fetching FAQs:', err);
            }
        };

        fetchFaqs();
    }, []);

    return (
    <div>
        <h2>Frequently Asked Questions</h2>
        <ul>
            {faqs.map((faq) => (
                <li key={faq._id}>
                    <strong>{faq.question}</strong>
                    <p>{faq.answer}</p>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default FaqList;
