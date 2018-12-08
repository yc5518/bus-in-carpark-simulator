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
        const { parkNum } = this.props;
        return (
            <div>
                <div className={'row'}>
                    <Carpark parkNum={parkNum} containerClass={'offset-4'} />
                </div>
                <div className={'reset offset-4'} style={{ padding: 4 }}>
                    <button className={'btn btn-primary'} >
                        Reset
                    </button>
                </div>
                <BusController />
            </div>
        );
    }
}

App.propTypes = {
    parkNum: PropTypes.number,
};

const mapStateToProps = state => ({
    parkNum: state.parkNum,
});

const mapDispatchToProps = dispatch => ({
    restore() {
      dispatch(clearAllBuses());
    },
  });
  
  
  export { App as AppCom };
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  
