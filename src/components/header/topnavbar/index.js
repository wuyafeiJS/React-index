import React, {Component} from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Topnavbar extends Component {
    render () {
        
        return (<Navbar id="navbar-head" collapseOnSelect>
    <Navbar.Header>
      {/*logo组件*/}
      <Navbar.Brand>
        <a href="#" style={{padding:"0"}}><img src={require("images/logo.jpg")} alt=""/></a>
      </Navbar.Brand>
      {/*响应式切换按钮*/}
      <Navbar.Toggle />
    </Navbar.Header>
    {/*导航主体*/}
    <Navbar.Collapse>
      <Nav pullRight className="mainNav">
        <NavItem eventKey={1} className="active" href="#">首页</NavItem>
        <NavItem eventKey={2} href="#">云建站</NavItem>
        <NavItem eventKey={3} href="#">云域名</NavItem>
        <NavItem eventKey={4} href="#">云主机</NavItem>
        <NavItem eventKey={5} href="#">云邮箱</NavItem>
        <NavItem eventKey={6} href="#">云推广</NavItem>
        <NavItem eventKey={7} href="#">云广告</NavItem>
        <NavItem eventKey={8} href="#">云应用</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
    }
}

export default Topnavbar;