// ExampleComponent.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const ExampleComponent = () => {
  return (
    <div>
      <h1>Hello, Font Awesome!</h1>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
};

export default ExampleComponent;
