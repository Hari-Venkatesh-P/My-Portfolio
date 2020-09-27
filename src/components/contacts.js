import React ,{Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import NavBar from "../NavBar";

class Contacts extends Component
{
    render() {

        return(
        <div>
          <NavBar></NavBar>
             <div className="contact-body">
                  <Grid className="contact-grid">
                    <Cell col={8}>
                      <h2><u>Contact Me</u></h2>
                      <div className="contact-list">
                        <List>
                          <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                              <i className="fa fa-phone-square" aria-hidden="true"/>
                              8608568462
                            </ListItemContent>
                          </ListItem>
          
                          <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                              <i className="fa fa-whatsapp w3-large" aria-hidden="true"/>
                              8608568462
                            </ListItemContent>
                          </ListItem>
          
                          <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                              <i className="fa fa-envelope" aria-hidden="true"/>
                              harivenkat1110@gmail.com
                            </ListItemContent>
                          </ListItem>
                          
      
                          <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                              <i className="fa fa-instagram" aria-hidden="true"/>
                              @purple._.heartt
                            </ListItemContent>
                          </ListItem>
                          <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                              <i className="fa fa-map-marker" aria-hidden="true"/>
                              Madurai,TamilNadu.
                            </ListItemContent>
                          </ListItem>
                        </List>
                      </div>
                    </Cell>
                  </Grid>
                </div>
        </div>
         
        )
      }
}

export default Contacts;