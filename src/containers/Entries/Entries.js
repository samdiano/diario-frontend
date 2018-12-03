/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEntries } from '../../requests/EntriesRequests';

class Entries extends Component {
  componentDidMount() {
    this.props.fetchEntries();
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
        <div className="wrapper">
            <form action="create-entry" method="get">
                <h2>Recent Entries</h2>
                <button className="btn pull-right" id="myBtn">Create new entry</button>
            </form>
        </div>
        <div id="notify" className="notify"></div>
        <section id="entries">
            {this.props.entries.map((entry, i) => <div className="cards text-left"
            key={i}>
            <span>
            <h3>{entry.title}</h3>
          </span>
          <span className="pull-right">
            <form className="entryForm" action={`/entries/${entry.id}`}>
              <button className="btn">View&nbsp;
                  <i className="far fa-eye"></i>
              </button>
            </form>
            <form className="entryForm" action={`/entries/${entry.id}/edit`}>
              <button className="btn" id="myBtn2">Edit &nbsp;
                  <i className="far fa-edit"></i>
              </button>
            </form>
            <form className="entryForm" action={`/entries/${entry.id}/update`}>
              <button className="btn">Delete&nbsp;
                  <i className="far fa-trash-alt"></i>
              </button>
            </form>
          </span>
          <i>Date Created:{Date(entry.created_at)}</i>

            </div>)}

        </section>
    </div>

    </div>
    );
  }
}

Entries.propTypes = {
  fetchEntries: PropTypes.func,
  entries: PropTypes.array
};

const mapStateToProps = state => ({
  loading: state.user.loading,
  entries: state.entries.entries
});

export default connect(mapStateToProps, {
  fetchEntries
})(Entries);
