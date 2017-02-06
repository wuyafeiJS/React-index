import React, {Component} from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Topnav extends Component {
    render () {
        return (<div className="topNav">
            <div className="container">
                <p className="pull-left" style={{color: '#fff'}}>欢迎来到高贝尔云，开始您的互联之旅！</p>
                <p className="pull-right">
                <a href="#">控制台</a>
                <a href="#">备案</a>
                <a href="#">登录</a>
                <a href="#">免费注册</a>
                </p>
            </div>
        </div>)
    }
}

export default Topnav;