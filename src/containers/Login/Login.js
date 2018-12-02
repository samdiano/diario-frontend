import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../requests/LoginRequests';

class Login extends Component {
  constructor() {
    super();

    this.initialState = {
      email: '',
      password: ''
    };

    this.state = {
      ...this.initialState
    };

    this.change = this.change.bind(this);
    // this.signUp = this.signUp.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit(e) {
    e.preventDefault();

    // if (!this.isValidData(this.state)) {
    //   return;
    // }

    this.props.login(this.state)
      .then((res) => {
        this.setState({ ...this.initialState });
      });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
         <div className="topnav" id="myTopnav">
        <span className="app-name">
            <i className="fas fa-book-open"></i>&nbsp;Diario</span>
    </div>


    <form className="body" id="signin" onSubmit={this.submit}>
        <div className="container">

            <h1>Sign In</h1>
            <div className="notify" id="notify"></div>

            <hr />
            <label htmlFor="email">
                <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Email" name="email" id="email" value={email} required onChange={this.change} />

            <label htmlFor="psw">
                <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="password" id="password" value={password} required onChange={this.change} />

            <hr />
            <button id="submit" className="registerbtn">Sign in</button>
        </div>
        <div className="signin">
            <p> Don't have an account with us?
                <a href="signup">Register</a>
            </p>
        </div>
    </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func
};

const mapStateToProps = state => ({
  loading: state.user.loading
});

export default connect(mapStateToProps, {
  login
})(Login);
