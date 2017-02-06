import React from 'react';
import { Row } from 'react-bootstrap';

var IntroFigure = React.createClass({
    render: function() {
        return (
            <li>
                    <h3 className="office-theme">{this.props.content.name}</h3>
                    <p>
                        <img src={this.props.content.img}/>
                    </p>
                    <ul className="office-title list-unstyled">

                        <li>{this.props.content.content_01}</li>

                        <li>{this.props.content.content_02}</li>

                        <li>{this.props.content.content_03}</li>

                    </ul>
                    <p>
                        <a href="" target="_blank" className="link-btn-with-border">查看详情</a>

                    </p>
                    <div className="split-line first-line"></div>

                </li>
        )
    }
})
var mainContent = React.createClass ({
    data: [
        {id: 0, name: '企业官网定制', img: require('images/img_01.jpg'), content_01: '应用云计算，速度快，标准价格', content_02: '标准化服务，资深设计1对1服务', content_03: '微信全程管理维护，10万用户的选择'},
        {id: 0, name: '定制企业网站', img: require('images/img_02.jpg'), content_01: '应用云计算，速度快，标准价格', content_02: '标准化服务，资深设计1对1服务', content_03: '微信全程管理维护，10万用户的选择'},
        {id: 0, name: '尊贵云，定制多用户商城', img: require('images/img_03.jpg'), content_01: '应用云计算，速度快，标准价格', content_02: '标准化服务，资深设计1对1服务', content_03: '微信全程管理维护，10万用户的选择'},
        {id: 0, name: '云商城3代', img: require('images/img_04.jpg'), content_01: '应用云计算，速度快，标准价格', content_02: '标准化服务，资深设计1对1服务', content_03: '微信全程管理维护，10万用户的选择'},
    ],
    render: function () {
        var introFigures = [];
        
        this.data.forEach(function (val,index) {
            introFigures.push(<IntroFigure content={val} key={index}/>)
        })
        return (
            <div className="mg-top-2">
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