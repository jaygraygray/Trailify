import React, { Component } from 'react';
import { getTrailData } from '../../ducks/trail';
import { connect } from 'react-redux';

// export const history = createHashHistory();

class TrailDetails extends Component {

  constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    trail: {}
  }
}


  componentDidMount() {
    const arr = this.props.info;
    const trailArr = [];
    const {id} = this.props.match.params;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].unique_id == id) {
        trailArr.push(arr[i]);
      }
    }
    this.setState({trail: trailArr[0]})
  }

    render() {
        return (
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>{this.state.trail ?
                    this.state.trail.name
                    : 'nope'
              }</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      info: state.trailReducer.trailData,
      loading: state.trailReducer.loading
    }
  }

export default connect(mapStateToProps, {getTrailData})(TrailDetails);
