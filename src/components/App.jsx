import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carpark from '../components/Carpark';
import BusController from '../controllers/BusController';
import { clearAllBuses } from '../actions';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      };
    }
  
    render() {
      const { buses, parkNum, reset} = this.props;
      return (
        <div>
          <div className={'row'}>
            <Carpark buses={buses} parkNum={parkNum} containerClass={'offset-3'} />
          </div>
          <div className={'reset offset-3'} style={{ padding: 4 }}>
            <button className={'btn btn-primary'} onClick={() => { reset(); }}>
              Reset
                </button>
          </div>
          <BusController />
        </div>
      );
    }
  }
  
  App.propTypes = {
    buses: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      posX: PropTypes.number,
      posY: PropTypes.number,
      direction: PropTypes.string,
    })),
    parkNum: PropTypes.number,
  };
  
  const mapStateToProps = state => ({
    buses: state.buses,
    parkNum: state.parkNum,
  });
  
  const mapDispatchToProps = dispatch => ({
    reset() {
      dispatch(clearAllBuses());
    },
  });
  
  
  export { App as AppCom };
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  