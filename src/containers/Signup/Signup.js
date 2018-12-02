/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../../requests/SignupRequests';


class Signup extends Component {
  constructor() {
    super();

    this.initialState = {
      email: '',
      password: '',
      full_name: ''
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

    this.props.signup(this.state)
      .then((res) => {
        this.setState({ ...this.initialState });
      });
  }

  render() {
    const { email, password, full_name } = this.state;
    return (
      <div>
        <div className="topnav" id="myTopnav">
        <span className="app-name">
            <i className="fas fa-book-open"></i>&nbsp;Diario</span>
    </div>
    <form className="body" id="signup" method="" onSubmit={this.submit}>
        <div className="container">
            <h1>Sign Up</h1>
            <div className="notify" id="notify"></div>

            <hr />
            <label htmlFor="email">
                <b>Full Name</b>
            </label>
            <input type="text" placeholder="Enter Full Name" name="full_name" id="full_name" value={full_name} onChange={this.change} required />

            <label htmlFor="email">
                <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Email" name="email" id="email" value={email} onChange={this.change} required />

            <label htmlFor="psw">
                <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="password" id="password" value={password} onChange={this.change} required />

            <hr />
            <button type="submit" id="submit" className="registerbtn">Sign Up</button>
        </div>

        <div className="signin">
            <p>Already have an account?
                <a href="login">Login</a>
            </p>
        </div>
    </form>
      </div>
    );
  }
}
Signup.propTypes = {
  signup: PropTypes.func
};

const mapStateToProps = state => ({
  loading: state.user.loading
});

export default connect(mapStateToProps, {
  signup
})(Signup);
