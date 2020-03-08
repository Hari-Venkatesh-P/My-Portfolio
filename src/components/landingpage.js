import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import mypic from '../mypic.jpg'

class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src= {mypic} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1> Java Developer</h1>
              <h6>Core Java || Spring Boot || J2EE ||  Angular || Postgres || MYSQL || DLLs || Flutter</h6><br></br>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default LandingPage;
