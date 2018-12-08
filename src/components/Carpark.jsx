import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Bus from './Bus';

const Carpark = ({ containerClass, buses, parkNum }) => {
  const parkingLots = [];
  for (let i = 0; i < parkNum * parkNum; i += 1) {
    parkingLots[i] = null;
  }
  buses.forEach((bus) => {
    parkingLots[(bus.posX + ((parkNum - 1 - bus.posY) * parkNum))] = {
      id: bus.id,
      direction: bus.direction,
    };
  });
  return (<div className={classnames('carpark-container', containerClass)}>
    {
      parkingLots.map((parkingLot, i) => {
        let parkingLotClass = classnames('parking-lot', (i % parkNum === 0) ? 'boundary' : '');
        if (parkingLot) {
            parkingLotClass = classnames(parkingLotClass);

            return (<Bus
              key={i}
              id={parkingLot.id}
              direction={parkingLot.direction}
              className={parkingLotClass}
            />);
          }
        return <div key={i} className={parkingLotClass} />;
      })
    }
  </div>);
};

Carpark.propTypes = {
  containerClass: PropTypes.string,
  buses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    posX: PropTypes.number,
    posY: PropTypes.number,
    direction: PropTypes.string,
  })),
  parkNum: PropTypes.number,
};

export default Carpark;
