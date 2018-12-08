import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Carpark = ({ containerClass, parkNum }) => {
  const parkingLots = [];
  for (let i = 0; i < parkNum * parkNum; i += 1) {
    parkingLots[i] = null;
  }
  return (<div className={classnames('carpark-container', containerClass)}>
    {
      parkingLots.map((parkingLot, i) => {
        let parkingLotClass = classnames('parking-lot', (i % parkNum === 0) ? 'boundary' : '');
        return <div key={i} className={parkingLotClass} />;
      })
    }
  </div>);
};

Carpark.propTypes = {
  containerClass: PropTypes.string,
  parkNum: PropTypes.number,
};

export default Carpark;
