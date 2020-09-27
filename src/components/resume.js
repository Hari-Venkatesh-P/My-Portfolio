import React ,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Objective from './objective'
import NavBar from "../NavBar";


class Resume extends Component
{
    render()
    {
    return(
      <div>
         <NavBar></NavBar>
        <Grid>
          <Cell className="resume-right-col" col={12}>
          <h2 className="resumeHeading">Career Objective &nbsp;<i class="fa fa-male" aria-hidden="true"></i></h2>
            <Objective obj="To be an integral part of a challenging environment that enables me to both work and improvise to the extent possible and also pave way for attaining my career objectives."/>
            <hr style={{borderTop: '3px solid #e22947'}} />
          <h2 className="resumeHeading">Education  &nbsp;<i class="fa fa-university" aria-hidden="true"></i></h2>
            <Education
            edu = "Bachelor of Engineering"
            startYear= "July,2016"
            endYear="May,2020"
            schoolName="Mepco Schlenk Engineering College,Sivakasi."
            schoolDescription="The Place where I groomed myself as a computer programming personality, with knowledge of developing software applications."
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
          <h2 className="resumeHeading">Experience &nbsp;<i class="fa fa-briefcase" aria-hidden="true"></i></h2>
          <Experience
              intern="Employee"
              companyName="Gofrugal Technologies , Chennai as a Member of Technical Staff."
              startYear= "July ,2019"
              endYear="Present"
              jobDescription="Working as Java Full Stack Developer writing  Backend Web Services in Spring Boot,  Developing Dlls and WPF applications , Web application which Integrates the both in Angular." />
            <Experience
              intern="Internship"
              companyName="Gofrugal Technologies , Chennai as a Member of Technical Staff."
              startYear= "December,2019"
              endYear="June,2020"
              jobDescription="Worked as Java Developer Integrating various Payment Gateways in Spring Boot." />
              <Experience
              intern="Part Time"
              companyName="Magilhub , Madurai as a Backend Developer."
              startYear= "June,2020"
              endYear="Present"
              jobDescription="Working as backend developer writing backend services for Mobile and Web Apps in Spring Boot." />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <Grid className="demo-grid-1">
                <Cell col={4}> <a style={{color:"white",textDecoration:"none"}} href={"https://github.com/Hari-Venkatesh-P"}><h2 className="resumeHeading" >Github &nbsp;<i className="fa fa-github" aria-hidden="true"></i></h2></a></Cell>
                <Cell col={4}><a style={{color:"white",textDecoration:"none"}} href={"https://www.linkedin.com/in/hari-venkatesh-98608b190/"}><h2 className="resumeHeading">Linked In &nbsp;<i className="fa fa-linkedin" aria-hidden="true"></i></h2></a></Cell>
                <Cell col={4}><a style={{color:"white",textDecoration:"none"}} href={"https://angel.co/u/hari-venkatesh-p-1"}><h2 className="resumeHeading">Angellist &nbsp;<i className="fa fa-angellist" aria-hidden="true"></i></h2></a></Cell>
              </Grid>
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2 className="resumeHeading">Skill Sets &nbsp;<i class="fa fa-laptop" aria-hidden="true"></i></h2>
                    <Skills skill="Love for Learning" progress={100}/>
                    <Skills skill="React JS" progress={70}/>
                    <Skills skill="Angular" progress={60}/>
                    <Skills skill="Node JS" progress={60}/>
                    <Skills skill="Spring Boot" progress={70}/>
                    <Skills skill="Mongo DB" progress={50}/>
                    <Skills skill="C#" progress={40}/>
                    <Skills skill="React Native" progress={20}/>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;