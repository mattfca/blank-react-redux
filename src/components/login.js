import React, {Component, PropTypes } from 'react';
import { loginUser, LOGIN_FAILURE } from '../actions/index.js';
import { reduxForm } from 'redux-form';

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props)

    this.state = {
      errorMessage: null
    };
  }


  componentWillMount(){
    if(this.props.isAuthenticated) this.context.router.push('/');
  }

  onSubmit(props){
    let self = this;
    let login = this.props.loginUser(props).then(function(resp){
      if(resp){
        if(resp.type == LOGIN_FAILURE){
          self.setState({errorMessage: resp.message});
        }
      }else{
        this.context.router.push('/');
      }
    })
  }

  render(){
    const { fields: { email, password }, handleSubmit, isAuthenticated, errorMessage } = this.props;

    return (
        <form className="form-signin" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <div className="text-help has-danger">
            {this.state.errorMessage}
          </div>
          <div className={`form-group ${email.touched && email.invalid && 'has-danger'}`}>
            <label>Email</label>
            <input type="email" className="form-control" {...email} />
            <div className="text-help">
              {email.touched && email.error}
            </div>
          </div>

          <div className={`form-group ${password.touched && password.invalid && 'has-danger'}`}>
            <label>Password</label>
            <input type="password" className="form-control" {...password} />
            <div className="text-help">
              {password.touched && password.error}
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email){
    errors.email = 'Enter an email';
  }

  if (!values.password){
    errors.password = 'Enter a password';
  }

  return errors;
}

function mapStateToProps(state){
  return { isAuthenticated: state.auth.isAuthenticated };
}

export default reduxForm({
  form: 'LoginForm',
  fields: ['email','password'],
  validate
}, mapStateToProps, { loginUser })(Login);
