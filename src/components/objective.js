import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Objective extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div className="objective"><h6>{this.props.obj}</h6></div>
        </Cell>
      </Grid>
    )
  }
}
export default Objective;