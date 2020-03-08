import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
        <div className="objective"><h6>{this.props.edu}</h6></div>
        </Cell>
        <Cell col={8}>
          <div className="objective"><h6 className="objective">{this.props.obj}</h6>
          <h6>{this.props.schoolName}</h6>
          <h6>{this.props.startYear} - {this.props.endYear}</h6>
          <h6>{this.props.schoolDescription}</h6></div>
        </Cell>
      </Grid>
    )
  }
}
export default Education;