import React from 'react';
import './Components.scss';

const Contact = React.forwardRef((props, ref) => {
  return (
    <div className="component bg-white" ref={ref}>
      <div className="container py-5">
        <h1>聯絡資訊</h1>
      </div>
    </div>
  );
});

export default Contact;
