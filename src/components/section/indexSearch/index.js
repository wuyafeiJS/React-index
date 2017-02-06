import React, { Component } from 'react';
import { Grid, Row, Col  } from 'react-bootstrap';
//域名后缀列表项
const LiItem = React.createClass({
  handleClick: function() {
    this.props.changeState(this.props.data)
    //console.log(this)
  },
  render: function () {
     return <li onClick={this.handleClick}>{this.props.data}</li>
  }
})
//搜索框
const SearchBox = React.createClass({

  getInitialState: function() {
    return {currentName: ".com", isShow: false}
  },
  handleChange: function (data) {
    this.setState({currentName: data})
  },
  handleHover: function () {
    this.setState({isShow: true})
  },
  handleLeave: function () {
    this.setState({isShow: false})
  },
  list: ['.com', '.cn', '.xin', '.net', '.win', '.club'],
  render: function() {
    const sufListFigure = [];

      this.list.forEach(function(val,index) {
        sufListFigure.push(<LiItem key={index} changeState={this.handleChange} data={val}/>) 
      }.bind(this))

   
    return (<div className="sch-frm">
                        <div className="sch-bar w-fl">
              
                            <input className="ipt-domain " placeholder="注域名先查询，请输入域名，如wanwang"/>
                            <ins className="suffix "  onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave} >
                                <span type="zh,en" className="name">{this.state.currentName}</span>
                                <span className="glyphicon glyphicon-chevron-down"></span>
                                <div className="suf-list" style={{display: this.state.isShow?'block':'none'}}>
                                    <ul className="list-unstyled">
                                        {sufListFigure}
                                    </ul>
                                </div></ins>
                            <button id="checkBtn" className="btn-go-sch"><span className="glyphicon glyphicon-search"></span>&nbsp;查询</button>
                        </div>
                    </div>)
  }
})
//常用链接
var UsualLinks = React.createClass({
  links: [
    {name: "域名优惠", href: "#"},
    {name: "价格总揽", href: "#"},
    {name: "域名信息查询", href: "#"},
    {name: "网站备案", href: "#"},
    {name: "域名解析", href: "#"},
    {name: "续费", href: "#"}
  ],
  render: function () {
    var linksFigures = [];
    this.links.forEach(function (val,index) {
      linksFigures.push(<li key={index}><a href={val.href}>{val.name}</a></li>)
    })
    return (<ul className="list-unstyled usual-links">
      <li className="online">常用链接:</li>
      {linksFigures}
      <li className="online"><a>更多 ></a></li>
    </ul>)
  }
})


class indexSearch extends Component {
    render () {
        const styleObj = {'color': '#EF4359',
          'fontWeight':'bold',
          'fontSize':'15px'}
        return (<div className="index-search">
                <div className="container">
                {/*栅格*/}
                  <Grid className="mg-top-15">
                    <Row className="show-grid">
                      <Col xs={2}>
                        <p className="text-center mg-top-15">建立网上业务</p>
                        <p className="text-center" style={styleObj}>从注册域名开始</p>
                      </Col>
                      <Col xs={10}>
                        <Row className="show-grid">
                          <SearchBox/>
                        </Row>
                        <Row className="show-grid mg-top-15">
                          <UsualLinks/>
                        </Row>
                      </Col>
            
                    </Row>
                  </Grid>
                </div>
            </div>)
    }
}

export default indexSearch;


