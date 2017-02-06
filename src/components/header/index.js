import React, {Component} from 'react';
import Topnav from './topnav';
import Topnavbar from './topnavbar';
class Header extends Component {
    render () {
        return (
            <div>
                <Topnav/>
                <Topnavbar/>
            </div>
        )
    }
}

export default Header;