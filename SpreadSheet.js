import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';

class SpreadSheet extends Component {
  constructor(props) {
    super(props);
  }

  getData(){
      this.props.fetchData();
  }

  render() {
    return (
        <div>
            <br/>
            <button onClick={this.getData.bind(this)}>Fetch Data</button>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SpreadSheet);
