import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carpark from '../components/Carpark';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const {parkNum} = this.props;
    return (
          <div className={'row'}>
            <Carpark parkNum={parkNum} containerClass={'offset-4'} />
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
  },
});

export { App as AppCom };
export default connect(mapStateToProps, mapDispatchToProps)(App);
