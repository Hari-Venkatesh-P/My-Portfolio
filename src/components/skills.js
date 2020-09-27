import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <div className="objective">{this.props.skill}</div>
        </Cell>
        <Cell col={8}>
            <ProgressBar style={{width: '100%', height: "10px"}} progress={this.props.progress} />
        </Cell>
      </Grid>
    )
  }
}
export default Skills;