import React from 'react';
import { string, func } from 'prop-types';

function Button({ className, children, onClick }) {
  return (
    <div
      className={className}
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyPress={onClick}
    >
      {children}
    </div>
  );
}

Button.propTypes = {
  className: string,
  onClick: func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
