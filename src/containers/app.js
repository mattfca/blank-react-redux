import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {  };
}

export default connect(mapStateToProps)(App);
