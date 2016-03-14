import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {

        if (!this.props.isAuthenticated) {
            let redirectAfterLogin = this.props.location.pathname;
            this.context.router.push('/login');
        }

    }

    render() {
      return (
          <div>
              { this.props.isAuthenticated === true ? <Component {...this.props}/> : null }
              <Component {...this.props}/>
          </div>
      )

    }
  }

  const mapStateToProps = (state) => ({
      isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);

}
