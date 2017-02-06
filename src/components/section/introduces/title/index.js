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
      为你推荐精品网络建站
    </Row>
  </div>)
    }
}

export default title;