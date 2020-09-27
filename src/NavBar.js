import React from 'react';
import { Layout, Header, Navigation,Drawer,Content} from 'react-mdl';
//import Main from './components/main';
function NavBar() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="myHeader" title="Hari Here.!" scroll>
            <Navigation>
            <a href="/home"><div className="navBar">HOME</div></a>
                <a href="/resume"><div className="navBar">ABOUT ME</div></a>
                {/* <a href="/projects"><div className="navBar">PROJECTS</div></a> */}
                <a href="/contacts"><div className="navBar">CONTACT</div></a>
            </Navigation>
        </Header>
        <Drawer className="navCollapse" title="Portfolio">
            <Navigation>
                <a href="/home"><div className="navCollapse">Home</div></a>
                <a href="/resume"><div className="navCollapse">About Me</div></a>
                {/* <a href="/projects"><div className="navCollapse">Projects Done</div></a> */}
                <a href="/contacts"><div className="navCollapse">Contact</div></a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            {/* <Main /> */}
        </Content>
    </Layout>
</div>
  );
}

export default NavBar;
