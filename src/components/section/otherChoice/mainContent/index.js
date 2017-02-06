import React from 'react';
import { Row } from 'react-bootstrap';

var IntroFigure = React.createClass({
    render: function() {
        return (
            <li style={{'height':'260px'}}>
                    <h3 className="office-theme">{this.props.content.name}</h3>
                    <p>
                        <img src={this.props.content.img}/>
                    </p>
                    <ul className="office-title list-unstyled">

                        <li>{this.props.content.content_01}</li>

                        <li>{this.props.content.content_02}</li>
                    </ul>
                    
                    <div className="split-line first-line"></div>

                </li>
        )
    }
})
var mainContent = React.createClass ({
    data: [
        {id: 0, name: '微信建站', img: require('images/icon_01.jpg'), content_01: '多元化设计、流行UI', content_02: '品类丰富、高性价比'},
        {id: 0, name: '定制网站', img: require('images/icon_02.jpg'), content_01: '多元化设计、流行UI', content_02: '标准化服务，资深设计1对1服务'},
        {id: 0, name: '网络营销', img: require('images/icon_03.jpg'), content_01: '多元化设计、流行UI', content_02: '品类丰富、高性价比'},
        {id: 0, name: 'TOP云邮箱', img: require('images/icon_04.jpg'), content_01: '多元化设计、流行UI', content_02: '标准化服务，资深设计1对1服务'},
    ],
    render: function () {
        var introFigures = [];
        
        this.data.forEach(function (val,index) {
            introFigures.push(<IntroFigure content={val} key={index}/>)
        })
        return (
            <div className="mg-top-2" >
                <Row className="show-grid">
                    <ul className="list-unstyled advice-list" onMouseEnter={this.handleEnter}>
                        {introFigures}
                    </ul>
                </Row>
            </div>
        )
    }
})


export default mainContent;