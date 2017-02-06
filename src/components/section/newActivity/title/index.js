import React, {Component} from 'react';
import { Row } from 'react-bootstrap';

class title extends Component {
    render () {
        var styleObj = {
            height: '50px',
            lineHeight: '50px',
            paddingLeft: '30px',
            marginTop: '20px',
            fontSize: '16px'
        }
        return (<div>
    <Row className="show-grid" style={styleObj}>
      高贝尔云最新活动
    </Row>
  </div>)
    }
}

export default title;