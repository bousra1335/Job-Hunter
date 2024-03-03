import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='page notfound'>
        <div className="content">
            <img src="/not found.png" alt="not found" />
            <Link to={'/'}>RETURN TO HOME PAGE</Link>
        </div>
    </section>
    
  );

};

export default NotFound;