import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Bus = ({className }) => {
    const busClass = classnames('bus', className);
    return (<div className={busClass}>
      <p>BUS</p>
    </div>);
  };
  
  Bus.propTypes = {
    id: PropTypes.string,
    direction: PropTypes.string,
    className: PropTypes.string,
  };
  
  
  export default Bus;
  

