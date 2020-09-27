import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import mypic from '../mypic.jpg'
import NavBar from "../NavBar";
class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <NavBar></NavBar>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src= {mypic} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1> Full Stack Developer</h1>
              <h6>React JS ||  Angular || Node JS || Spring Boot ||  MongoDB </h6><br></br>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default LandingPage;
