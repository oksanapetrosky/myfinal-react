<<<<<<< HEAD
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); 
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus('Please enter a valid email address');
      return;
    }
    setStatus('');
    setEmail(''); 
  };

  return (
    <div className='background'>
       <h5>Subscribe to our Newsletter</h5>
     <div className="newsletter">
     
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required/>
        <button type="submit">Subscribe</button>
    
      </form>
      {status && <p>{status}</p>} 
    </div>
    </div>
   
  );
};

export default Newsletter;
=======
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); 
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus('Please enter a valid email address');
      return;
    }
    setStatus('');
    setEmail(''); 
  };

  return (
    <div className='background'>
       <h5>Subscribe to our Newsletter</h5>
     <div className="newsletter">
     
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required/>
        <button type="submit">Subscribe</button>
    
      </form>
      {status && <p>{status}</p>} 
    </div>
    </div>
   
  );
};

export default Newsletter;
>>>>>>> 6472cc9d466721c57722d42b555b9f2812be8d47
