import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{height: '176px', background: 'url(https://www.capitani.com.br/wp-content/uploads/2017/07/java-logo.jpg) center / cover'}} ></CardTitle>
              <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
                <font size="3" color="black">
                Hospital Management Application built on JSP, with Inpatient's bed optimization techniques.</font>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/Hari-Venkatesh-P/Hospital-Management-Application">GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'black'}}>
              </CardMenu>
            </Card>
  
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.capitani.com.br/wp-content/uploads/2017/07/java-logo.jpg) center / cover'}} ></CardTitle>
              <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
              <font size="3" color="black">
               Mini Office server built using Java Swings.</font>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/Hari-Venkatesh-P/Mini-Office-server">GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'black'}}>
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.capitani.com.br/wp-content/uploads/2017/07/java-logo.jpg) center / cover'}} ></CardTitle>
              <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
              <font size="3" color="black">
              Student Mark and Attendance Dashboard using Java Servlets and JSP.</font>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/Hari-Venkatesh-P/Student-Mark-and-Attendance-Dashboard">GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'black'}}>
              </CardMenu>
            </Card>
          </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/spring-3.svg) center / cover'}} ></CardTitle>
        <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
        <font size="3" color="black">
        Backend Services for Simple Student Application using Hibernate and JPA concepts.</font>
        </CardText>
        <CardActions border>
          <Button colored href="https://github.com/Hari-Venkatesh-P/Student-Application-Spring-Backend">GitHub</Button>
        </CardActions>
        <CardMenu style={{color: 'black'}}>
        </CardMenu>
      </Card>
      </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png) center / cover'}} ></CardTitle>
        <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
        <font size="3" color="black">
        A Car Sales Application , with services from NodeJS and data from MongoDB.</font>
        </CardText>
        <CardActions border>
          <Button colored href="https://github.com/Hari-Venkatesh-P/Car-Sales-Application">GitHub</Button>
        </CardActions>
        <CardMenu style={{color: 'black'}}>
        </CardMenu>
      </Card>
      </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
            <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
              <font size="3" color="black"><b>
              Live Weather App which uses third party API to fetch current weather details.</b></font>
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/Hari-Venkatesh-P/Weather-Application">GitHub</Button>
              <Button colored href="https://hari-forecast.herokuapp.com/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: 'black'}}>
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
            <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
            <font size="3" color="black"><b>
             Personal Portfolio, a website to showcase my technical skills.</b></font>
            </CardText>
            <CardActions border>
            <Button colored href="https://github.com/Hari-Venkatesh-P/My-Portfolio">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: 'black'}}>
            </CardMenu>
          </Card>
        </div>
      )
    }
    else if(this.state.activeTab === 4) {
        return (
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/flutter-logo.svg) center / cover'}} ></CardTitle>
              <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
                <font size="3" color="black"><b>
                 Simple Interest Calculator using basic widgets in Flutter.</b></font>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/Hari-Venkatesh-P/Bank-Easy">GitHub</Button>
                <Button colored>Get APK</Button>
              </CardActions>
              <CardMenu style={{color: 'black'}}>
              </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/flutter-logo.svg) center / cover'}} ></CardTitle>
              <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
              <font size="3" color="black"><b>
              Normal Todo Application which uses SQlite Database to save the tasks.</b></font>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/Hari-Venkatesh-P/Notes-Keeper">GitHub</Button>
                <Button colored>Get APK</Button>
              </CardActions>
              <CardMenu style={{color: 'black'}}>
              </CardMenu>
            </Card>
          </div>
        )
      }
      else if(this.state.activeTab === 5) {
        return (
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}} ></CardTitle>
              <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
                <font size="3" color="black">
                Live Object Detector which uses Open CV and Pandas data frame to process frames in a video.</font>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/Hari-Venkatesh-P/Live-Object-Detector">GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'black'}}>
              </CardMenu>
            </Card>
  
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}} ></CardTitle>
              <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
              <font size="3" color="black">
               Face Detector Application which uses Cascade classifiers to differentiate Human Face from others.</font>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/Hari-Venkatesh-P/Face-Detector-Application">GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'black'}}>
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}} ></CardTitle>
              <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
              <font size="3" color="black">
              Simple Voice to Text Converter which uses google API to convert human voice to text.</font>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/Hari-Venkatesh-P/Voice-to-Text-Converter">GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'black'}}>
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}} ></CardTitle>
              <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
              <font size="3" color="black">
              Bank Accounts Maintenance App, To save the bank details which uses Tkinter as UI and MySql DB.</font>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/Hari-Venkatesh-P/Bank-Accounts-Maintainance-Application">GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'black'}}>
              </CardMenu>
            </Card>
          </div>
        )
      }
      else if(this.state.activeTab === 6) {
        return (
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1024/1*RD_2xHRhY4rTaW4VzHnWDw.png) center / cover'}} ></CardTitle>
            <CardText className="cardtext" style={{color: 'black',  font: '40px' }}>
            <font size="3" color="black">
            A Taxi booking application with some booking and availability  features.</font>
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/Hari-Venkatesh-P/Taxi-Application">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: 'black'}}>
            </CardMenu>
          </Card>
          </div>
        )
      }

  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab><div className="projectTabs">Java</div></Tab>
          <Tab><div className="projectTabs">Spring Boot</div></Tab>
          <Tab><div className="projectTabs">Angular</div></Tab>
          <Tab><div className="projectTabs">React</div></Tab>
          <Tab><div className="projectTabs">Flutter</div></Tab>
          <Tab><div className="projectTabs">Python</div></Tab>
          <Tab><div className="projectTabs">C</div></Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;