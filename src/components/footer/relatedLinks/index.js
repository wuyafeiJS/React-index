import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
//相关链接
const LinkFigure = React.createClass({
    render: function () {
        var links = [];
        this.props.content.links.map(function(val,index) {
            links.push(<li key={index}><a style={{color:'#666'}} href={val.href}>{val.name}</a></li>)
        })
        return (
            <Col xs={3}>
                <ul className="list-unstyled">
                    <li className="mg-bot-15"><h4>{this.props.content.title}</h4></li>
                    {links}
                </ul>
            </Col>
        )
    }
})
//主菜单
class relatedLinks extends Component {
    constructor(props) {
        super(props)
        this.state = {data: [
            {title: '帮助中心', links: [{name: '新手指南专区', href: '#'},{name: '业务资料下载', href: '#'},{name: '网站备案入门', href: '#'},{name: '免费域名解析', href: '#'}]},
            {title: '产品与服务', links: [{name: '新手指南专区', href: '#'},{name: '业务资料下载', href: '#'},{name: '网站备案入门', href: '#'},{name: '免费域名解析', href: '#'}]},
            {title: '支付方式', links: [{name: '新手指南专区', href: '#'},{name: '业务资料下载', href: '#'},{name: '网站备案入门', href: '#'},{name: '免费域名解析', href: '#'}]},
            {title: '客户服务', links: [{name: '新手指南专区', href: '#'},{name: '业务资料下载', href: '#'},{name: '网站备案入门', href: '#'},{name: '免费域名解析', href: '#'}]}
        ]}
    }

    render () {
        var linkFigures = [];
        this.state.data.map(function (val,index) {
            linkFigures.push(<LinkFigure content={val} key={index}/>)
        })
        return (
            <Grid className="mg-top-15">
    <Row className="show-grid">
      <Col xs={10}>
        <Row className="show-grid">
            {linkFigures}
        </Row>
        
      </Col>
      <Col xs={2}>
        <dl>
        <dt><img src={require("images/QRcode.jpg")} alt=""/></dt>
                <dd>扫上方二维码</dd>
                <dd>关注高贝尔官方微信号</dd>
            </dl>
      </Col>
    </Row>
  </Grid>
        )
    }
}

export default relatedLinks