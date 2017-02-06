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
      10年专业品牌，高贝尔云为您提供稳定的互联网基础服务
    </Row>
  </div>)
    }
}

export default title;