import React from 'react';
import { Row } from 'react-bootstrap';
//data数据
var data = [{id:0,name: '域名注册',on: 'on',href: "#"},{id:1,name: '主机服务',on:'',href:'#'},{id:2,name: '企业邮箱',on:"",href:"#"},{id:3,name: '网站建设',on:"",href:"#"}];
//子内容
var ServiceFigure = React.createClass({
    
    handleEnter: function() {
        var data = [{id:0,name: '域名注册',on: "", href: "#"},{id:1,name: '主机服务',on:"",href:"#"},{id:2,name: '企业邮箱',on:"",href:"#"},{id:3,name: '网站建设',on:"",href:"#"}];
        data.splice(this.props.text.id,1, {id:this.props.text.id, name:this.props.text.name,on:"on",href:"#"});//删除指定位置指定个数的元素
       // data.splice(this.props.text.id,0,{id:this.props.text.id, name:this.props.text.name,on:"on",href:"#"});  //插入元素
       console.log(this.props.on);
       this.props.changeState(data);
    },
   
    render: function () {
        return (<li className={this.props.on} onMouseEnter={this.handleEnter}>
                    <div className="item-inner domain clearfix">
                        <div className="main w-fl">
                            <a href="http://wanwang.aliyun.com/domain/" target="_blank">
                                <strong>{this.props.text.name}</strong>
                                <span className="descrip">国内市场NO.1</span>
                                <span className="btm">品类丰富，高性价比<br/>易用安全，解析稳定</span>
                            </a>
                        </div>
                        <div className="detail w-fl   three-item ">


                            <div className="sort">
                                <a href="http://wanwang.aliyun.com/domain/com/" target="_blank">
                                    <span className="tag">.com</span>
                                    <span className="price"><span className="wow">39</span>元/首年</span>
                                    <span className="descrip">新会员领券专享</span>
                                </a>
                            </div>

                            <div className="sort">
                                <a href="https://wanwang.aliyun.com/domain/cn/" target="_blank">
                                    <span className="tag">.cn</span>
                                    <span className="price"><span className="wow">12</span>元/首年起</span>
                                    <span className="descrip">单笔订单注册≥5个立享优惠</span>
                                </a>
                            </div>

                            <div className="sort">
                                <a href="http://wanwang.aliyun.com/domain/dns/" target="_blank">
                                    <span className="tag">云解析DNS</span>
                                    <span className="price"><span className="wow">18</span>元/年起</span>
                                    <span className="descrip">解析实时生效，国内解析量第一</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </li>)
    }
})

var mainContent = React.createClass ({

    getInitialState: function () {
        return {data: data}
    },
    handleEnter: function() {
        this.setState({data: data})
    },
    changeState: function (data) {
        this.setState({data: data})
    },
    render: function () {
        var serviceFigures = [];
        
        this.state.data.forEach(function (val,index) {
            serviceFigures.push(<ServiceFigure text={val} on={val.on} key={index} changeState={this.changeState}/>)
        }.bind(this))
        return (
            <div className="mg-top-2">
                <Row className="show-grid" className="service-details">
                    <ul className="list-unstyled" onMouseEnter={this.handleEnter}>
                        {serviceFigures}
                    </ul>
                </Row>
            </div>
        )
    }
})


export default mainContent;