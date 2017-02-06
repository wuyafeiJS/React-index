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
      如您对网站/应用有更高的性能要求，还可选择：
    </Row>
  </div>)
    }
}

export default title;