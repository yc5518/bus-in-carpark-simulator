import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { placeBus } from '../actions';
import * as Utils from '../utils';

const BasicController = (WrappedComponent, mapStateToProps) => {
  class BusController extends Component {
    constructor(props) {
      super(props);
      this.onCreateNewBus = this.onCreateNewBus.bind(this);
      this.onTurnBus = this.onTurnBus.bind(this);
      this.onMoveBus = this.onMoveBus.bind(this);
    }

    onCreateNewBus({ posX, posY, direction }) {
      const { changeBusPos } = this.props;
      return changeBusPos({ posX, posY, direction });
    }

    onTurnBus(isClockwise) {
        const { buses, changeBusPos } = this.props;
        const selectedBus = buses.find(bus => bus.id === "1");
        if(selectedBus){
          return changeBusPos({
            posX: selectedBus.posX,
            posY: selectedBus.posY,
            direction: Utils.turnBus(selectedBus.direction, isClockwise),
          }, "1");
        }
      }
  
      onMoveBus(isForward) {
        const { buses, changeBusPos } = this.props;
        const selectedBus = buses[0];
        return changeBusPos(Utils.moveBus(selectedBus, isForward), "1");
      }

    render() {
      return (<WrappedComponent
        {...this.props}
        onCreateNewBus={this.onCreateNewBus}
        onTurnBus={this.onTurnBus}
        onMoveBus={this.onMoveBus}
        onReportPos={this.onReportPos}
      />);
    }
  }

  BusController.propTypes = {
    buses: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      posX: PropTypes.number,
      posY: PropTypes.number,
      direction: PropTypes.string,
    })),
    changeBusPos: PropTypes.func,
  };

  const defaultMapStateToProps = state => ({
    ...mapStateToProps(state),
    buses: state.buses,
  });

  const mapDispatchToProps = dispatch => ({
    changeBusPos(position, busId) {
      return dispatch(placeBus(position, busId));
    },
  });
  return connect(defaultMapStateToProps, mapDispatchToProps)(BusController);
};

export default BasicController;
