import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as CONSTANTS from '../constants';
import * as LABELS from '../constants/Labels';
import BasicController from './BasicController';

class BusController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: 0,
      posY: 0,
      direction: CONSTANTS.DIR_NORTH,
    };
  }

  render() {
    const {
      onCreateNewBus,
      onTurnBus,
      onMoveBus,
     } = this.props;
    const { posX, posY, direction } = this.state;
    return (
    <div className={'panel-controller container-fluid'} >
      <div className="place-bus row">
        <div className="place-inputs col-8">
          <div className="input-group">
              <span className="input-group-text">{LABELS.BUS_POSITION_X}</span>
            <input
              type="number"
              className="form-control"
              defaultValue={0}
              onChange={(e) => { this.setState({ posX: parseInt(e.target.value, 10) }); }}
            />
            <div className="input-group-prepend">
              <span className="input-group-text">{LABELS.BUS_POSITION_Y}</span>
            </div>
            <input
              type="number"
              className="form-control"
              defaultValue={0}
              onChange={(e) => { this.setState({ posY: parseInt(e.target.value, 10) }); }}
            />
              <span className="input-group-text">{LABELS.BUS_DIRECTION}</span>
            <select
              id={'pos-dir'}
              onChange={(e) => { this.setState({ direction: e.target.value }); }}
            >
              {
                CONSTANTS.DIR_ALL.map((dir, i) => <option key={i} value={dir}>{dir}</option>)
              }
            </select>
          </div>
        </div>
        <div className={'create-btn col-4'}>
          <button className={'btn-lg btn-primary'} onClick={() => { onCreateNewBus({ posX, posY, direction }); }}>
            {LABELS.BUS_PLACE}
          </button>
        </div>
      </div>

        <div className={'control-btns col-4 container'}>
            <button className={'btn btn-primary'} onClick={() => { onMoveBus(true); }}>
              {LABELS.BUS_MOVE}
            </button>
            <button className={'btn btn-primary'} onClick={() => { onTurnBus(true); }}>
              {LABELS.BUS_TURN_LEFT}
            </button>
            <button className={'btn btn-primary'} onClick={() => { onTurnBus(false); }}>
              {LABELS.BUS_TURN_RIGHT}
            </button>
        </div>
    </div>);
  }
}

BusController.propTypes = {
  buses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    posX: PropTypes.number,
    posY: PropTypes.number,
    direction: PropTypes.string,
  })),
  onCreateNewBus: PropTypes.func,
  onTurnBus: PropTypes.func,
  onMoveBus: PropTypes.func,
};

const mapStateToProps = state => ({
  buses: state.buses,
  selectedBusId: state.selectedBusId,
});

export { BusController as BusControllerCom };
export default BasicController(BusController, mapStateToProps);
