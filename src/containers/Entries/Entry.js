/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEntry } from '../../requests/EntriesRequests';

class Entry extends Component {
  constructor() {
    super();
    this.state = {
      success: false, loading: false, failure: false, entry: {}
    };
  }

  componentDidMount() {
    this.props.fetchEntry(this.props.match.params.id);
  }

  static getDerivedStateFromProps(props, state) {
    return props;
  }

  render() {
    return (
      <div>
        <div className="topnav" id="myTopnav">
        <span className="app-name" >
            <i className="fas fa-book-open"></i>&nbsp;Diario</span>
        <span className="pull-right">
            <a href="dashboard">
                <i className="fas fa-tachometer-alt"></i>&nbsp;Dashboard</a>
            <a href="profile">
                <i className="fas fa-user-circle"></i>&nbsp;Profile</a>
            <a href="/" onClick={() => localStorage.removeItem('token')}>
                <i className="fas fa-power-off"></i>&nbsp;Logout</a>
        </span>

        <a href="javascript:void(0);" className="icon">
            <i className="fa fa-bars"></i>
        </a>
    </div>
    <div className="body">
        {this.state.entry && <p> this.state.entry.title </p>}
    </div>
    </div>
    );
  }
}

Entry.propTypes = {
  fetchEntries: PropTypes.func,
  fetchEntry: PropTypes.func,
  entry: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  loading: state.user.loading,
  entry: state.entries.entry[0]
});

export default connect(mapStateToProps, {
  fetchEntry
})(Entry);
