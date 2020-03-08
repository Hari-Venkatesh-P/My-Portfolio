import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
      return(
        <Grid>
          <Cell col={4}>
            <div className="objective"><h6>{this.props.intern}</h6></div>
          </Cell>
          <Cell col={8}>
            <div className="objective"><h6>{this.props.companyName}</h6>
            <h6>{this.props.startYear} - {this.props.endYear}</h6>
            <h6>{this.props.jobDescription}</h6></div>
          </Cell>
        </Grid>
      )
    }
  }
  
  export default Experience;