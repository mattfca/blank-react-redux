import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    if(!this.props.isAuthenticated) this.context.router.push('/login')
      else this.context.router.push('/dashboard') 
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
  return { isAuthenticated: state.auth.isAuthenticated };
}

export default connect(mapStateToProps)(App);
