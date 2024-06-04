import React, { useState } from 'react';
import './ResponseDisplay.css';

const ResponseDisplay = ({ response }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="response-display">
      <p onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? response : `${response.substring(0, 100)}...`}
      </p>
    </div>
  );
};

export default ResponseDisplay;
