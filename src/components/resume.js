import React ,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Objective from './objective'

class Resume extends Component
{
    render()
    {
    return(
      <div>
        <Grid>
          <Cell className="resume-right-col" col={12}>
          <h2 className="resumeHeading">Career Objective &nbsp;<i class="fa fa-male" aria-hidden="true"></i></h2>
            <Objective obj="To be an integral part of a challenging environment that enables me to both work and improvise to the extent possible and also pave way for attaining my career objectives."/>
            <hr style={{borderTop: '3px solid #e22947'}} />
          <h2 className="resumeHeading">Education  &nbsp;<i class="fa fa-university" aria-hidden="true"></i></h2>
            <Education
            edu = "Bachelor of Engineering"
            startYear= "July,2016"
            endYear="April,2020"
            schoolName="Mepco Schlenk Engineering College,Sivakasi."
            schoolDescription="The Place where I groomed myself as a computer programming personality, with knowledge of developing software applications."
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
          <h2 className="resumeHeading">Experience &nbsp;<i class="fa fa-briefcase" aria-hidden="true"></i></h2>
            <Experience
              intern="Internship"
              companyName="GoFrugal Technologies , Chennai as a MEMBER TECHNICAL STAFF."
              startYear= "December,2019"
            endYear="April,2020"
              jobDescription="GOFRUGAL is a digital-first company offering cloud and mobile ERP solutions to Retail, Restaurant and Distribution businesses. Established in 2004, They help businesses embrace agility and transform digitally to stay competitive in the dynamic market. We help businesses grow with minimal staff, least skills along with 100% accurate and reliable solutions." />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2 className="resumeHeading">Skill Sets &nbsp;<i class="fa fa-laptop" aria-hidden="true"></i></h2>
                    <Skills skill="Java" progress={65}/>
                    <Skills skill="Spring Boot" progress={60}/>
                    <Skills skill="Postgres" progress={50}/>
                    <Skills skill="MySql" progress={65}/>
                    <Skills skill="Angular" progress={30}/>
                    <Skills skill="C#" progress={50}/>
                    <Skills skill="Flutter" progress={15}/>
                    <Skills skill="React" progress={10}/>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;